import React from "react"; 
import { Box, Center } from '@chakra-ui/react';
import { Card, CardHeader, CardBody,
   Text,Heading,Flex,
   Image,CardFooter,Button,SimpleGrid,Spacer,HStack,AbsoluteCenter ,Stack} from "@chakra-ui/react"

function Cards()
{
    return(
    
      <HStack spacing={10}  width={"100vw"} height={"100vh"} aligncontent={'centre'}
      justifycontent={'centre'}>
       
          <Card maxW='sm'>
         <CardHeader >
          <Center>
          <Heading fontSize={'lg'}> Living Room Sofa</Heading>
          </Center>
        </CardHeader>
        <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'/>
          <Stack mt='6' spacing='3'></Stack>
    
          <Text> This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.</Text>
        <Text color='blue.600' fontSize='2xl'>
        $450
        </Text>
  
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
        </Card>
       
        
           
        
        <Card maxW='sm'>
        <CardHeader>
          <Center>
          <Heading size='md'> Brown Wooden Bed</Heading>
          </Center>
        </CardHeader>
        <CardBody>
        <Image
          src='https://images.furnituredealer.net/img/products/lifestyle/color/c8321a_c8321aq-bmauoiyraq0wsx7ftnwne7w.jpg'
          alt='white wooden bed'
          borderRadius='lg'/>
          <Stack mt='6' spacing='3'></Stack>
    
          <Text> This Bed is absolutely durable ,sturdy and long-lasting.They can also add classic or rustic look to a bedroom.And enhances the beauty of home  .</Text>
        <Text color='blue.600' fontSize='2xl'>
        $660
        </Text>
  
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
        </Card>
        
       
        <Card maxW='sm'>
        <CardHeader>
          <Center>
          <Heading size='md'> Wooden Almirah</Heading>
          </Center>
        </CardHeader>
        <CardBody>
        <Image
          src='https://i.pinimg.com/originals/a7/ce/13/a7ce13ca1f9a7d6171be721c5f637035.jpg'
          alt='wooden Wardrobe'
          borderRadius='lg'/>
          <Stack mt='6' spacing='3'></Stack>
    
          <Text> This wardrobe is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.</Text>
        <Text color='blue.600' fontSize='2xl'>
        $380
        </Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
       </Card>

      
    </HStack>
     
    
      
  );
} 
export default Cards;