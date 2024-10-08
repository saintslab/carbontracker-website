import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
  Text,
  Link,
  HStack,
  StatGroup,
  CardBody,
  Card,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

export default function StatSection() {
  return (
    <VStack my="8rem" w="full">
      <Card w="full">
        <CardHeader>
          <Heading size="md">Statistics</Heading>
          <Text opacity={0.6}>as of August 2024</Text>
        </CardHeader>
        <CardBody>
          <StatGroup>
            <Stat>
              <StatLabel>Citations</StatLabel>
              <StatNumber>420</StatNumber>
              <StatHelpText>
                <Link href="https://scholar.google.com/scholar?cites=1575501828776281081&as_sdt=2005&sciodt=0,5&hl=da">
                  Google Scholar
                </Link>
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Stars</StatLabel>
              <StatNumber>370</StatNumber>
              <StatHelpText>
                <Link href="https://github.com/lfwa/carbontracker/stargazers">
                  GitHub
                </Link>
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>Downloads</StatLabel>
              <StatNumber>100k</StatNumber>
              <StatHelpText>
                <Link href="https://console.cloud.google.com/bigquery?sq=534652964095:a047a64cdffd41f9b0326d9224ddc1cf">
                  PyPI
                </Link>
              </StatHelpText>
            </Stat>
          </StatGroup>
        </CardBody>
      </Card>
    </VStack>
  );
}
