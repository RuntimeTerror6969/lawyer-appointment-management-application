import { Box, Container } from "@mui/material";
import Header from "./Header";

const Layout = ({ children }) => (
  <Box>
    <Header />
    <Container component="main" sx={{ mt: 4 }}>
      {children}
    </Container>
  </Box>
);

export default Layout;
