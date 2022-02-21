import NextAuth from 'next-auth'
import CognitoProvider from "next-auth/providers/cognito";

const THIRTY_DAYS = 30 * 24 * 60 * 60
const THIRTY_MINUTES = 30 * 60

export default NextAuth({
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: THIRTY_DAYS,
    updateAge: THIRTY_MINUTES
  },
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    })
  ],
  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === '/user') {
        return Promise.resolve('/')
      }
      return Promise.resolve('/projects')
    }
  },
    pages: {
    signOut: '/dashboard',
  },
});