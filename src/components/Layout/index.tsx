import Nav from "../Nav";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        <Box>
            <Nav />
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
