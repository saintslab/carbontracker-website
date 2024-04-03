import {
  Text,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  VStack,
  Link,
} from "@chakra-ui/react";

type CitationProps = {
  title: string;
  authors: string;
  link: string;
  origin: string;
  date: Date;
};
const Citation: React.FC<CitationProps> = ({
  title,
  authors,
  link,
  origin,
  date,
}) => {
  return (
    <Link href={link}>
      <Card minW="16rem">
        <CardBody>
          <Heading size="sm">{title}</Heading>
          <Text>{authors}</Text>
          <Text>{origin}</Text>
          <Text>{date.toDateString()}</Text>
        </CardBody>
      </Card>
    </Link>
  );
};

export default function CitationSection() {
  return (
    <VStack justify="center">
      <Heading>Cited by over 300 publications</Heading>
      <HStack overflowX="scroll" maxW="200%">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <Citation
            key={index}
            title="Aligning artificial intelligence with climate change mitigation"
            authors="Kaack, Lynn H and Donti, Priya L and Strubell, Emma and Kamiya, George and Creutzig, Felix and Rolnick, David"
            origin="nature.com"
            date={new Date("2022-06-09")}
            link="https://www.nature.com/articles/s41558-022-01377-7"
          />
        ))}
      </HStack>
    </VStack>
  );
}
