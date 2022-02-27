import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Links = ["Dashboard", "Projects", "Team"];

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const BurgerButton = ({ isOpen, onClick }) => {
  const MotionButton = motion(Button);

  return (
    <motion.button
      className="menu-button"
      onClick={onClick}
      animate={isOpen ? "open" : "closed"}
      initial={false}
      display={{ base: "none" }}
    >
      <svg
        width="23"
        height="23"
        style={{ margin: "4px 0 0 2px" }}
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const MotionCenter = motion(Center);

export default function Navbar() {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const [isOpen, setIsOpen] = useState(false);

  const MotionBox = motion(Box);

  const slideVerticalAnimation = {
    open: {

      y: 0,
      opacity: 1,
      transition: {
        default: {duration: .5, type:"spring"},
        opacity: {duration: 1},
        mass: 1.3,
        type: "spring",
      },
      display: "block",
    },
    close: {

      y: -320,
      opacity: 0,
      transition: {
        default: {duration: .3,},
        opacity: {duration: .2},
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  

  return (
    <>
      <Box width={"100%"} position={"absolute"} top={"90px"}>
        <MotionCenter
          initial="close"
          animate={isOpen ? "open" : "close"}
          variants={slideVerticalAnimation}
          mx={"6rem"}
          border={"5px solid black"}
          bg={"white"}
        >
          <VStack>
            <Box>asd</Box>
            <Box>asd</Box>
            <Box>asd</Box>
          </VStack>
        </MotionCenter>
      </Box>
      <Box px={{ base: "5", md: "40" }}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <svg
                height="40"
                viewBox="0 0 122 122"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60.4993 47.7395L85.6896 22.5394H98.4596V32.8693H89.9696L60.4993 62.3396L32.859 34.6993V98.4604H22.5389V22.5405H35.3089L60.4993 47.7395Z"
                  fill="#263238"
                />
                <path
                  d="M88.4302 41.6696L79.67 50.4298V56.5697H88.14V98.4585H98.46V41.6669L88.4302 41.6696Z"
                  fill="#F7D147"
                />
                <path
                  d="M117.178 3.83282H3.83289V117.178H117.178V3.83282Z"
                  stroke="#263238"
                  stroke-width="3.99197"
                  stroke-linecap="round"
                />
              </svg>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
