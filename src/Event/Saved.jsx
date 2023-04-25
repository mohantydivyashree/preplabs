import { extendTheme } from '@chakra-ui/react'
import {Tabs,TabList,Tab,TabPanels,TabPanel,p,Box,Heading,Text,centre,Flex,} from "@chakra-ui/react";

  
function Saved()
{ 
 return(
<Tabs isFitted variant='enclosed'>
  <TabList>
    <Tab>Saved</Tab>
    <Tab>Completed</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Box pb={{base:"5%",md:"0%"}}  width={{md:'80%',base:"100%"}} bgColor={"grey"} borderRadius={20}>
       
        <Flex direction={{base:"column",md:"row"}} justifyContent={"space-between"}>
            <Box w={{md:"30%",base:"100%"}} pt='2%'  m='6' color='red' >
                <Heading ml='4%'  size='sm' color='white' > RRB EXAMINATION 2022</Heading>
                <Text ml='4%' color='white' size='sm'>
                    Rrb exam for group D employee 2022
                </Text>
           
            </Box>
        
            <Box display="flex" justifyContent={"space-between"} w={{md:"70%",base:"100%"}}>
                <Box w="100%"   mt='5%' color='green'>
                    <Heading  ml={{md:'30%',base:"5%"}} size='sm' color='white' > STATUS:PENDING</Heading>
                </Box>

                <Box w="100%"  mt='5%' color='violet'>
                    <Heading ml={{md:'30%',base:"5%"}}  size='sm' color='white' >DURATION: 2:00hrs</Heading>
           
                </Box>
            </Box>
        </Flex>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box p="4"  width={{md:'80%',base:"100%"}} bgColor={"grey"} borderRadius={20}>

        <Flex w="100%" direction={{base:"column",md:"row"}} justifyContent={"space-between"}>

            <Box w={{base:"100%",md:"70%"}} p='2'   >
                <Heading ml='4'  size='sm' color='white' > RRB EXAMINATION 2022</Heading>
                <Text ml='4' color='white' size='sm'>Rrb exam for group D employee 2022</Text>
            </Box>

            <Box w={{base:"100%",md:"30%"}} display="flex" flexDirection={{md:"column",base:"row"}} alignItems="flex-start" ml={{base:"2",md:"12"}}  p='2'>
                <Box  >
                    <Heading size='sm' color='white' > STATUS:COMPLETED</Heading>
                </Box>

                <Box  ml={{base:"4",md:"0"}}>
                    <Text color='white' size='sm'>SCORE:4/5</Text>
                </Box>
            </Box>
        </Flex>
   </Box>

    </TabPanel>
  </TabPanels>
</Tabs>
 );
}
export default Saved;