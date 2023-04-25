import { Box, Flex, Text } from "@chakra-ui/react";

function MyComponent() {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent="space-between"
      p={{ base: "4", md: "8" }}
    >
      <Box flex={{ base: "1", md: "2" }}>
        <Text fontSize={{ base: "lg", md: "xl" }}>Title</Text>
        <Text mt={{ base: "2", md: "4" }}>Content</Text>
      </Box>
      <Box flex={{ base: "1", md: "1" }}>
        <Text fontSize={{ base: "lg", md: "xl" }}>Image</Text>
      </Box>
    </Flex>
  );
}
export default MyComponent;