import { Box, VStack } from "@chakra-ui/react";

import Comevents from "./Comevents";

import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
 
} from "@chakra-ui/react";

export default function Completed() {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab width="50%" fontSize="xl" fontWeight="bold">
            Registered
          </Tab>
          <Tab width="50%" fontSize="xl" fontWeight="bold">
            Completed
          </Tab>
        </TabList>

        <TabPanels>
        <TabPanel ml="5" mr="5">
            <VStack spacing={10}>
              <Comevents />
              <Comevents />
              <Comevents />
              <Comevents />
            </VStack>
          </TabPanel>
          <TabPanel ml='5' mr='5'>
          <VStack spacing={10}>
              <Comevents />
              <Comevents />
              <Comevents />
              <Comevents />
            </VStack>
            
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}