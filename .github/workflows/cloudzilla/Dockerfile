FROM node:22

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# enable corepack for pnpm and newer yarn versions
RUN corepack enable

# install app dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN yarn install

# add app to container and attempt build
COPY . ./
RUN yarn build

# the start command needs to be triple curly braces to avoid escaping special characters
CMD ["yarn", "start"]
