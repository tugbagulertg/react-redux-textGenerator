import { Box, Container, Flex } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Box pb={"30px"} textColor={"whiteAlpha.900"}  minHeight={"100vh"} bg={"gray.800"}>
        <Container maxW={"1100px"} pt={"25px"} >
          <Box
            borderRadius={"3xl"}
            bgColor={"gray.700"}
            p={{ base: "14px", sm: "24px", md: "30px" }}
          >
            <Navbar />
          </Box>

          <TextArea />
        </Container>
      </Box>
    </>
  );
}

export default App;
