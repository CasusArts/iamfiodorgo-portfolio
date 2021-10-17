import { Box, Container, Heading } from "@chakra-ui/layout"

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="tomato" p={3} mb={6} align="center">
        Hello, I&apos;m Web developer based in Germany!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fiodor Gorobet
          </Heading>
          <p>
            Web developer with passion to clean UI
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
