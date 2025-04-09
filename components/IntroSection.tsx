import {
  Button,
  HStack,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import CodeBlock from "./Code";
import BuildStatus from "./BuildStatus";
import { FaGithub, FaBook } from "react-icons/fa";

export default function IntroSection() {
  return (
    <VStack align="center" w="full">
      <Heading textAlign="center" size={["lg", "2xl"]}>
        🌱 Carbontracker
      </Heading>
      <Heading my={4} textAlign="center" fontWeight="400" size={["md", "lg"]}>
        Seamlessly measure the carbon footprint of your machine learning models.
      </Heading>
      <BuildStatus />
      <VStack mt={8}>
        <Text>
          Install now using{" "}
          <Link href="https://pypi.org/project/pip/" color="green.500">
            pip
          </Link>
        </Text>
        <CodeBlock isPython={false} content={`pip install carbontracker`} />
      </VStack>
      <Stack direction={["column", "row"]} mt={4} spacing={[4, 8]}>
        <Link href="https://github.com/lfwa/carbontracker">
          <Button leftIcon={<FaGithub />} variant="solid">
            GitHub
          </Button>
        </Link>
        <Link href="https://docs.carbontracker.info/">
          <Button leftIcon={<FaBook />} variant="outline">
            Documentation
          </Button>
        </Link>
        <Link href="https://arxiv.org/abs/2007.03051">
          <Button variant="ghost">Paper (Anthony et al., 2020)</Button>
        </Link>
      </Stack>
    </VStack>
  );
}
