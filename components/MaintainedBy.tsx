import {
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  VStack,
  Icon,
  Avatar,
  Center,
  Link,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FaFaceSmileBeam } from "react-icons/fa6";
import Raghav from "../public/raghav.png";
import Rasmus from "../public/rasmus.jpg";
import Pedram from "../public/pedram.jpg";
import { StaticImageData } from "next/image";

type AuthorProps = {
  name: string;
  email?: string;
  portrait?: StaticImageData;
};
const Author = (props: AuthorProps) => {
  return (
    <Box>
      {/* <Icon w="full" h={20} my={8} as={FaFaceSmileBeam} /> */}
      <Center my={["1rem", "2rem"]}>
        <Avatar
          name={props.name}
          size={["xl", "2xl"]}
          src={props.portrait?.src}
        />
      </Center>
      <Heading size="sm">{props.name}</Heading>
      {props.email && (
        <Link href={`mailto:${props.email}`}>
          <Text>{props.email}</Text>
        </Link>
      )}
    </Box>
  );
};
export default function MaintainedBy() {
  return (
    <VStack>
      <Heading mb={4}>Built and maintained by</Heading>
      <Text>Originally developed by</Text>
      <Flex w="full" flexWrap="wrap" justify="center" gap={8} mb={16}>
        <Author 
          name="Lasse F. Wolff Anthony"
          email="lfwa@pm.me"
          />
        <Author name="Benjamin Kanding" />
        <Author
          name="Raghavendra Selvan"
          portrait={Raghav}
          email="raghav@di.ku.dk"
        />
      </Flex>
      <Text>Current maintainers</Text>
      <Flex w="full" flexWrap="wrap" gap={8} justify="center">
        <Author
          name="Pedram Bakhtiarifard"
          email="pba@di.ku.dk"
          portrait={Pedram}
        />
        <Author
          name="Rasmus Hag Løvstad"
          email="rhl@di.ku.dk"
          portrait={Rasmus}
        />
      </Flex>
    </VStack>
  );
}
