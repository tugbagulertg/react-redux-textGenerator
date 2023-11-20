import {
  Box,
  Divider,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchParagraphs,
  isHtml,
  paragraphsCount,
} from "../../redux/paragraphsSlice";

function Navbar() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.paragraphs.count);
  const html = useSelector((state) => state.paragraphs.html);

  const handleCount = (value) => {
    dispatch(paragraphsCount(value));
  };

  useEffect(() => {
    dispatch(fetchParagraphs({ count, html }));
    console.log(count);
    console.log(html);
  }, [dispatch, count, html]);

  return (
    <Box mt={"1"}>
      <Text fontSize="3xl" textAlign={"center"} mb={"5"}>
        React Sample Text Generator
      </Text>
      <Divider
        borderColor={"white"}
        borderBottomWidth={"2px"}
        mb={{ base: "15px", sm: "35px" }}
      />
      <Flex justify={"space-between"}>
        <Flex
          justify={"start"}
          align={"center"}
          textAlign={"start"}
          mb={"15px"}
        >
          <Box px={2}>
            <Text mb={2}>Paragraphs</Text>
            <NumberInput
              defaultValue={count}
              min={0}
              w={"104px"}
              value={count}
              onChange={handleCount}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box px={2}>
            <Text mb={2}>Include HTML</Text>
            <Select
              value={html}
              w={"104px"}
              onChange={(e) => dispatch(isHtml(e.target.value))}
            >
              <option value="text">No</option>
              <option value="html">Yes</option>
            </Select>
          </Box>
        </Flex>
        <Box alignSelf={"end"} mb={"15px"}></Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
