import { Button } from "@chakra-ui/react"

const buttonHref = ({ text }) => {
    return (
        <Button
            className="btn btn-primary"
            onClick={event => window.location.href='https://www.w3docs.com'}
        >
            {text}
        </Button>
    )
}
export default buttonHref