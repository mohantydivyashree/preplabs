import logo from './logo.svg';
import  './App.css';
// import Cards from './Event/Cards';

import {Box} from "@chakra-ui/react"
import { Card, CardHeader, CardBody,
  Text,Heading,Flex,
  Image,CardFooter,Button,SimpleGrid, }from "@chakra-ui/react"
import Completed from './Event/Completed';
import Saved from "./Event/Saved"
import Cards from './Event/Cards';



function App ()
{
  return(
    
      // <Cards/>
    //  <Completed/> 
    <Saved/>
  
  );
    
    
  
}


export default App;
