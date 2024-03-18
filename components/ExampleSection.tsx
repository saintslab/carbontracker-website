import { Text, Box, Heading, VStack } from "@chakra-ui/react";
import CodeBlock from "./Code";

export default function ExampleSection() {
  return <VStack>
    <Heading mb={4}>Example usage</Heading>
    <Box maxW='100%'>
      <Text mb={4}>Use the CLI:</Text>
      <CodeBlock isPython={false} content={`$ carbontracker python script.py`} />
      <Text my={4}>...or embed directly into your Python program</Text>
      <CodeBlock isPython={true} content={`from carbontracker.tracker import CarbonTracker

tracker = CarbonTracker(epochs=max_epochs)
# Training loop.
for epoch in range(max_epochs):
    tracker.epoch_start()
    # Your model training.
    tracker.epoch_end()

# Optional: Add a stop in case of early termination before all monitor_epochs has
# been monitored to ensure that actual consumption is reported.
tracker.stop()`} />

      <Text my={4}>Example output:</Text>
      <CodeBlock isPython={false} content={`CarbonTracker: 
Actual consumption for 1 epoch(s):
        Time:   0:00:10
        Energy: 0.000038 kWh
        CO2eq:  0.003130 g
        This is equivalent to:
        0.000026 km travelled by car
CarbonTracker: 
Predicted consumption for 1000 epoch(s):
        Time:   2:52:22
        Energy: 0.038168 kWh
        CO2eq:  4.096665 g
        This is equivalent to:
        0.034025 km travelled by car
CarbonTracker: Finished monitoring.`}/>
    </Box>
  </VStack>
}
