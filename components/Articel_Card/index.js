import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function Articel_Card({ thumbnail, post, index }) {
  return (
    <Center py={6}>
      <NextLink href={"/blog/" + post.slug} passHref key={index}>
        <Link
          _hover={{ text_decoration: "none" }}
          _focus={{ outlineColor: "yellow" }}
        >
          <Box
            role={"group"}
            maxW={"445px"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              
              pos={"relative"}
              overflow={"hidden"}
            >
              <Image
                transform="scale(1.0)"
                zIndex={-1}
                h={"full"}
                w={"full"}
                src={thumbnail}
                objectFit={"cover"}
                _groupHover={{
                  transform: "scale(1.1)",
                }}
                transition="0.3s ease-in-out"
              />
            </Box>
            <Stack px={6}>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Blog
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                Boost your conversion rate
              </Heading>
              <Text color={"gray.500"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </Stack>
            <Stack p={6} direction={"row"} spacing={0} align={"center"} position="relative">
              <Avatar
                mr={4}
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Achim Rolle</Text>
                <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
              </Stack>
              <Center transition="0.3s ease-in-out"  position="absolute" left={0} height={"100%"} width={"100%"} background="#FDCA4090" transform="translate(0, 100px)" _groupHover={{transform:"translate(0, 0)"}}>
                <Heading>READ</Heading>
              </Center>
            </Stack>
          </Box>
        </Link>
      </NextLink>
    </Center>
  );
}
