import {
  Heading,
  VStack,
  Text,
  Wrap,
  Box,
  Icon,
  Grid,
  GridItem,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  FaArrowTrendUp,
  FaBoltLightning,
  FaComputer,
  FaGlobe,
  FaPlug,
  FaPython,
  FaServer,
  FaSitemap,
} from "react-icons/fa6";

type FeatureProps = {
  children: ReactNode;
  title: string;
  icon: IconType;
};
const Feature = (props: FeatureProps) => {
  const { colorMode } = useColorMode();
  return (
    <GridItem
      borderWidth="2px"
      borderColor={colorMode == "dark" ? "#4A6668" : "gray.300"}
      background={colorMode == "dark" ? "gray.700" : "gray.100"}
      w="100%"
      h="100%"
      rounded="lg"
      transition="box-shadow 100ms"
      _hover={{ boxShadow: "0px 0px 10px 0px #186646" }}
    >
      <Center px={10} pt="25px" pb="5px">
        <Icon w={["30px", "50px"]} h={["30px", "50px"]} as={props.icon} />
      </Center>
      <Box p={[3, 5]}>
        <Text display="block" fontWeight="700" fontSize={["sm", "md"]}>
          {props.title}
        </Text>
        <Text fontSize={["xs", "sm"]}>{props.children}</Text>
      </Box>
    </GridItem>
  );
};

export default function FeatureSection() {
  return (
    <VStack>
      <Heading textAlign="center" size="md" fontWeight="400">
        <strong>Carbontracker</strong> tracks hardware power consumption and
        local energy carbon intensity during training to provide accurate
        measurements and predictions of the operational carbon footprint.
      </Heading>
      <Grid
        templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        mt={10}
      >
        <Feature title="Multi-platform" icon={FaComputer}>
          Supports Intel CPUs, NVIDIA GPUs and Apple silicon.
        </Feature>
        <Feature title="Localized" icon={FaGlobe}>
          Fetches carbon intensity estimates based on geographic position.
        </Feature>
        <Feature title="Plug-and-play" icon={FaPython}>
          Available as both CLI and Python bindings for easy integration into
          existing solutions.
        </Feature>
        <Feature title="Provides intelligent predictions" icon={FaArrowTrendUp}>
          Estimates total emissions after first epoch.
        </Feature>
        <Feature title="Live updates" icon={FaBoltLightning}>
          Power consumption and carbon intensity are not static - neither should
          the estimates be.
        </Feature>
        <Feature title="Minimal overhead" icon={FaSitemap}>
          Runs in separate threads and only adds a minor computation cost.
        </Feature>
        <Feature title="Easily integrated" icon={FaPlug}>
          Contains extensive tooling for parsing log files for easy integration
          with other tools.
        </Feature>
        <Feature title="(Upcoming) HPC Ready" icon={FaServer}>
          Deploy on SLURM to track carbon emissions across the entire cluster.
        </Feature>
      </Grid>
    </VStack>
  );
}
