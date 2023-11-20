import { CopyIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Img,
  Text,
  useClipboard,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function TextArea() {
  const items = useSelector((state) => state.paragraphs.items);
  const html = useSelector((state) => state.paragraphs.html);
  const [copyText, setCopyText] = useState("Copy");

  const copyCode = () => {
    navigator.clipboard.writeText(items);
    setCopyText("Copied!");
    setTimeout(function () {
      setCopyText("Copy");
    }, 1000);
  };

  return (
    <Box
      mt={"20px"}
      bgColor={"gray.700"}
      borderRadius={"3xl"}
      p={{ base: "14px", sm: "24px", md: "30px" }}
      h={"100%"}
      position={"relative"}
    >
      <Button
        borderColor={"white"}
        variant={"outline"}
        w={"min-content"}
        h={"40px"}
        position={"absolute"}
        _hover={{bg:"gray.600"}}
        p={"5px"}
        // m={"10px"}

        onClick={copyCode}
        top={0}
        right={0}
        borderTopRightRadius={"3xl"}
      >
        <Text fontSize={"s"} color={"whiteAlpha.700"} pr={"2"}>
          {copyText}
        </Text>
        <CopyIcon color={"white"} />
      </Button>
      <Box value={items} mt={{ base: "30px", md: "20px" }}>
        {items.map((item, index) => (
          <Box key={index} textIndent={html === "text" ? "30px" : 0}>
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TextArea;
