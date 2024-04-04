import { Link } from "@chakra-ui/next-js";
import { Container, Text } from "@chakra-ui/react";
export default function Footer() {
  return (
    <footer>
      <Container maxW="2xl" pb={16} pt={4}>
        <Text>
          <em>
            Maintenance of Carbontracker is partly funded by University of
            Copenhagen, and European Union’s Horizon Europe Research and
            Innovation programme under grant agreements No. 101070284 and No.
            101070408
          </em>
        </Text>
        <Text pt={4}>
          <Link href="https://github.com/lfwa/carbontracker/blob/master/LICENSE">
            Carbontracker is under MIT-license.
          </Link>
        </Text>
      </Container>
    </footer>
  );
}
