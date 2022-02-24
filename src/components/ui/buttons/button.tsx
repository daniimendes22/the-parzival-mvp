import { Button } from "@chakra-ui/react"

const button = ({ text }) => {
    return (
        <Button variant="ghost">
            {text}
        </Button>
    )
}
export default button