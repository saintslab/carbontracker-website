import { Text, Grid, GridItem, Heading, VStack, Icon } from "@chakra-ui/react";
import { FaFaceSmileBeam } from "react-icons/fa6";

type AuthorProps = {
  name: string
  role: string
}
const Author = (props: AuthorProps) => {
  return (
      <GridItem>
        <Icon w='full' h={20} my={8} as={FaFaceSmileBeam} />
        <Heading size='sm'>{props.name}</Heading>
        <Text>{props.role}</Text>
        <Text>[insert contact info here]</Text>
      </GridItem>
  )
}
export default function MaintainedBy() {
  return <VStack>
    <Heading mb={4}>Built and maintained by</Heading>
    <Grid w='full' templateColumns='repeat(4, 1fr)' gap={6}>
      <Author name='Lasse F. Wolff Anthony' role='Original author'/>
      <Author name='Benjamin Kanding' role='Original author'/>
      <Author name='Pedram Bakhtiarifard' role='Maintainer'/>
      <Author name='Rasmus Hag Løvstad' role='Maintainer'/>
    </Grid>
  </VStack>
}
