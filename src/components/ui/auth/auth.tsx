import { useSession, signIn, signOut } from "next-auth/react"
import ButtonLogin from "./button-login"

export default function Auth() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>

                <ButtonLogin rootClassName="rootClassName2" button={"Sign Out"} onClick={() => signOut({ callbackUrl: "/" })}></ButtonLogin>
                {/* <button >Sign out</button> */}
            </>
        )
    }
    return (
        <>
            <ButtonLogin rootClassName="rootClassName2" button={"Sign in"} onClick={() => signIn()}></ButtonLogin>
            {/* <button onClick={() => signIn()}>Sign in</button> */}
        </>
    )
}