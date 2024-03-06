import { Image, Text, Grid, GridItem, VStack, Link, Heading, Button, Icon } from "@chakra-ui/react";
import { FaRightLong } from "react-icons/fa6";

export default function PlotSection() {
  return <Grid templateColumns='1fr 1fr' gap={4}>
    <GridItem>
      <Heading size='md'>Carbontracker: Tracking and Predicting the Carbon Footprint of Training Deep Learning Models</Heading>
        <Text fontSize='xs'>Abstract from <Link href='https://arxiv.org/abs/2007.03051'>Anthony et al. (2020)</Link></Text>
      <Text mt={2} mb={8}>
        The popularity of solving problems using deep learning (DL) has rapidly increased and with it the need for ever more powerful models. 
        These models achieve impressive results across a wide variety of tasks such as gameplay, where AlphaStar reached the highest rank in the strategy game Starcraft II (Vinyals et al., 2019) and Agent57 surpassed human performance in all 57 Atari 2600 games (Badia et al., 2020). 
        This comes at the cost of training the model for thousands of hours on specialized hardware accelerators such as graphics processing units (GPUs). 
        From 2012 to 2018 the compute needed for DL grew 300000-fold (Amodei & Hernandez, 2018). 
        This immense growth in required compute has a high energy demand, which in turn increases the demand for energy production. 
        In 2010 energy production was responsible for approximately 35% of total anthropogenic greenhouse gas (GHG) emissions (Bruckner et al., 2014). 
        Should this exponential trend in DL compute continue then machine learning (ML) may become a significant contributor to climate change.</Text>
      <Link href='https://arxiv.org/abs/2007.03051'>
        <Button rightIcon={<Icon as={FaRightLong} />}>Read full paper</Button>
      </Link>
    </GridItem>
    <GridItem>
      <VStack justify='center'>
        <Image src='testplot.png' alt='Energy consumption of different models'/>
        <Text fontSize='xs'>Energy consumption of a variety of modern deep learning algorithms. Source: <Link href='https://arxiv.org/abs/2210.06015'>Bakhtiarifard et al. (2024)</Link></Text>
      </VStack>
    </GridItem>

  </Grid>
}
