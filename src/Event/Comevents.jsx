import { Box, HStack, Stack } from "@chakra-ui/react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRupeeSign, FaTrophy } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import {
  Image,
  Text,
  Divider,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

export default function Comevents() {
  return (
    <Box>
      <Box width="100%" textAlign="right">
        <Text fontWeight="semibold">You have already Completed</Text>
      </Box>
      <Box display={{ md: "flex" }}>
        <Box width={{ base: "100%", md: "97%" }}>
          <Box display="flex">
            <Image
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/CHANEL_THUMB_34302915-446e-4eb6-8eb1-ab1634e38378_1080x.jpg?auto=format&q=60&fit=max&w=930"
              alt="VMWare Logo"
              boxSize={{ base: "100px", md: "120px" }}
            ></Image>
            <Box textAlign="left">
              <Text
                fontSize={{ base: "md", sm: "lg", md: "3xl" }}
                fontWeight="bold"
              >
                Java Backend Developer
              </Text>
              <Box fontWeight="semibold">
                <HStack>
                  <HiOutlineBuildingOffice2 />
                  <Text>VMWare</Text>
                </HStack>
                <HStack>
                  <HiOutlineLocationMarker />
                  <Text>Mumbai</Text>

                  <Text>|</Text>

                  <BiWorld />
                </HStack>

                <HStack>
                  <FaRupeeSign />
                  <Text>5000</Text>
                </HStack>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex" boxSize={{ md: "120px" }} width={{ md: "50%" }}>
          <Box
            display="flex"
            width={{ base: "100%", md: "50%" }}
            alignItems={{ base: "right", md: "center" }}
            justifyContent={{ base: "right", md: "center" }}
          >
            <HStack>
              <FaTrophy color="#D4AD00" />

              <Text
                fontWeight={{ base: "bold", md: "semibold" }}
                fontSize={{ base: "xl", sm: "md" }}
              >
                INR 6000
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box textAlign="left">
        <Text fontSize="lg" fontWeight="bold">
          About the Internship
        </Text>
        <Text fontSize="lg" fontWeight="bold" mt="1">
          Black and Veatch is hiring for the position of Trainee process
          Engineer
        </Text>
        <Text mt="1%">
          VMWare is very employee centric. The team - honestly the best group of
          people I've had the pleasure of working with.Virtualizing Windows
          servers and connecting them to networks and clouds. Designing and
          implementing virtual desktop infrastructure (VDI) and enabling
          template management. Installing operating systems and service packs,
          as well as security patches and bug fixes. Troubleshooting and
          resolving VMware environment issues.
        </Text>
        <Text>
          {" "}
          VMWare is very employee centric. The team - honestly the best group of
          people I've had the pleasure of working with stays close to the work
          on the ground.Virtualizing Windows servers and connecting them to
          networks and clouds. Designing and implementing virtual desktop
          infrastructure (VDI) and enabling template management. Installing
          operating systems and service packs, as well as security patches and
          bug fixes. Troubleshooting and resolving VMware environment issues.
        </Text>
        <Box direction="row">
          <Text fontSize="lg" mt="1%" fontWeight="bold">
            Responsibilities of Candidate
          </Text>
          <Text fontSize="lg" fontWeight="bold" ml="2" mt="1">
            Engineering Standards
          </Text>
        </Box>
        <Box>
          <UnorderedList>
            <ListItem>
              To work as an engineer, you typically need to become a VMWare
              Certified Professional (VCP) in the specialized area in which you
              work
            </ListItem>
            <ListItem>
              To work as an engineer, you typically need to become a VMWare
              Certified Professional (VCP) in the specialized area in which you
              work
            </ListItem>
            <ListItem>
              To work as an engineer, you typically need to become a VMWare
              Certified Professional (VCP) in the specialized area in which you
              work
            </ListItem>
            <ListItem>
              To work as an engineer, you typically need to become a VMWare
              Certified Professional (VCP) in the specialized area in which you
              work
            </ListItem>
          </UnorderedList>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        borderWidth="3px"
        borderColor={"black"}
      />
      <Box textAlign="left">
        <Text fontSize="lg" fontWeight="bold" mt="1%">
          Job Activity
        </Text>
        <Box mt="1">
          <UnorderedList>
            <ListItem>Application Submitted</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
}