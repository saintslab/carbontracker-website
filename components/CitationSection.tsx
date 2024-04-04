import {
  Text,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  VStack,
  Link,
  Tag,
  TagLeftIcon,
  TagLabel,
  Flex,
  Divider,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";

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
  const authorList = authors.split(", ");
  const [showAllAuthors, setShowAllAuthors] = useState(authorList.length <= 3);
  return (
    <Card minW="16rem" mx={2}>
      <CardBody>
        <Flex flexDirection={"column"} height="full">
          <Link href={link}>
            <Heading size="sm">{title}</Heading>
          </Link>
          <Divider my={2} />
          <Flex flexDirection={"column"}>
            <HStack mt={1} wrap="wrap">
              <Tag size="sm" variant={"outline"} title={origin}>
                <TagLabel>{origin}</TagLabel>
              </Tag>
              <Tag
                size="sm"
                variant={"outline"}
                title={date.toLocaleDateString()}
              >
                <TagLabel>{date.getFullYear()}</TagLabel>
              </Tag>
            </HStack>
            <Flex gap={2} wrap={"wrap"} mt={4}>
              {authorList
                .slice(0, showAllAuthors ? authorList.length : 3)
                .map((author, index) => {
                  return (
                    <Tag size="sm" key={index} whiteSpace={"nowrap"}>
                      {author}
                    </Tag>
                  );
                })}
              {!showAllAuthors && (
                <Tag
                  size="sm"
                  onClick={() => setShowAllAuthors(true)}
                  cursor={"pointer"}
                  opacity={0.8}
                >
                  +{authorList.length - 3} authors
                </Tag>
              )}
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
      <CardFooter>
        <Link target="_blank" href={link}>
          <Button size="sm" leftIcon={<FaUpRightFromSquare />}>
            Link
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const citations = [
  {
    title:
      "An introduction to Deep Learning in Natural Language Processing: Models, techniques, and tools",
    authors: "Ivano Lauriola, A. Lavelli, F. Aiolli",
    origin: "Neurocomputing",
    date: new Date("2021-01-06"),
    link: "https://www.sciencedirect.com/science/article/pii/S0925231221010997?via%3Dihub",
  },
  {
    title:
      "The AI gambit: leveraging artificial intelligence to combat climate change—opportunities, challenges, and recommendations",
    authors:
      "Josh Cowls, Andreas Tsamados, Mariarosaria Taddeo, Luciano Floridi",
    origin: "AI & SOCIETY",
    date: new Date("2021-10-18"),
    link: "https://link.springer.com/article/10.1007/s00146-021-01294-x#citeas",
  },
  {
    title: "Sustainable AI: AI for sustainability and the sustainability of AI",
    authors: "A. van Wynsberghe",
    origin: "AI and Ethics",
    date: new Date("2021-02-26"),
    link: "https://link.springer.com/article/10.1007/s43681-021-00043-6",
  },
  {
    title: "Training Spiking Neural Networks Using Lessons From Deep Learning",
    authors:
      "J. Eshraghian, Max Ward, Emre Neftci, Xinxin Wang, Gregor Lenz, Girish Dwivedi, Bennamoun, Doo Seok Jeong, Wei Lu",
    origin: "Proceedings of the IEEE",
    date: new Date("2021-09-27"),
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp: &arnumber: 10242251&tag: 1",
  },
  {
    title: "U-Sleep: resilient high-frequency sleep staging",
    authors:
      "Mathias Perslev, S. Darkner, Lykke Kempfner, M. Nikolic, P. Jennum, C. Igel",
    origin: "npj Digital Medicine",
    date: new Date("2021-04-15"),
    link: "https://www.nature.com/articles/s41746-021-00440-5",
  },
  {
    title: "Measuring the Carbon Intensity of AI in Cloud Instances",
    authors:
      "Jesse Dodge, Taylor Prewitt, Rémi Tachet des Combes, Erika Odmark, Roy Schwartz, Emma Strubell, A. Luccioni, Noah A. Smith, Nicole DeCario, Will Buchanan ",
    origin: "Conference on Fairness, Accountability and Transparency",
    date: new Date("2022-06-10"),
    link: "https://dl.acm.org/doi/10.1145/3531146.3533234",
  },
  {
    title: "Aligning artificial intelligence with climate change mitigation",
    authors:
      "L. Kaack, P. Donti, Emma Strubell, George Kamiya, F. Creutzig, D. Rolnick",
    origin: "Nature Climate Change",
    date: new Date("2022-06-09"),
    link: "https://www.nature.com/articles/s41558-022-01377-7",
  },
  {
    title:
      "Estimating the Carbon Footprint of BLOOM, a 176B Parameter Language Model",
    authors: "A. Luccioni, S. Viguier, Anne-Laure Ligozat",
    origin: "Journal of machine learning research",
    date: new Date("2022-11-03"),
    link: "https://arxiv.org/pdf/2211.02001.pdf",
  },
  {
    title: "Art and the science of generative AI",
    authors:
      "Ziv Epstein, Aaron Hertzmann, L. Herman, Robert Mahari, M. Frank, Matthew Groh, Hope Schroeder, Amy Smith, Memo Akten, Jessica Fjeld, H. Farid, Neil Leach, A. Pentland, Olga Russakovsky",
    origin: "Science",
    date: new Date("2023-06-07"),
    link: "https://arxiv.org/pdf/2306.04141.pdf",
  },
  {
    title: "Compute and Energy Consumption Trends in Deep Learning Inference",
    authors:
      "Radosvet Desislavov, Fernando Mart'inez-Plumed, Jos'e Hern'andez-Orallo",
    origin: "Sustainable Computing: Informatics and Systems",
    date: new Date("2021-09-02"),
    link: "https://arxiv.org/pdf/2109.05472.pdf",
  },
  {
    title:
      "Lung Segmentation from Chest X-rays using Variational Data Imputation",
    authors:
      "Raghavendra Selvan, E. Dam, Sofus Rischel, Kaining Sheng, M. Nielsen, A. Pai ",
    origin: "arXiv.org",
    date: new Date("2020-05-20"),
    link: "https://arxiv.org/pdf/2005.10052.pdf",
  },
];

// Knuth shuffle
function shuffle(a: Array<CitationProps>) {
  let array = [...a]; // copy a
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export default function CitationSection() {
  const [citationList, setCitationList] = useState<typeof citations>([]);

  // On page load, shuffle citations
  useEffect(() => {
    setCitationList(shuffle(citations));
  }, []);

  return (
    <VStack justify="center">
      <Heading mb={8}>Cited by over 300 publications</Heading>
      <HStack
        mb={8}
        overflowX="scroll"
        maxW={["100vw", "200%"]}
        align="stretch"
      >
        {citationList.map((citation, index) => {
          return (
            <Citation
              key={index}
              title={citation.title}
              authors={citation.authors}
              origin={citation.origin}
              link={citation.link}
              date={citation.date}
            />
          );
        })}
      </HStack>
      <HStack>
        <Link href="https://scholar.google.dk/scholar?cites=1575501828776281081&as_sdt=2005&sciodt=0,5">
          <Button variant="outline">Google Scholar</Button>
        </Link>
        <Link href="https://www.semanticscholar.org/paper/Carbontracker%3A-Tracking-and-Predicting-the-Carbon-Anthony-Kanding/de5157a3d62ab114813379a6568f716b483feece">
          <Button variant="outline">Semantic Scholar</Button>
        </Link>
      </HStack>
    </VStack>
  );
}
