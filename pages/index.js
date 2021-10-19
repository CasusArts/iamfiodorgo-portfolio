import { ChevronRightIcon } from '@chakra-ui/icons'
import { Image, Box, Container, Heading, Link, Button, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} mt={2} align="center">
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
        <Box
          flexShrink={0}
          mt={{ base: 4, mt: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            src="/images/fiodor.jpg"
            alt="Profile Image"
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            maxWidth="100px"
            display="inline-block"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Fiodor is a Web Developer with passion on both sides of creation: Front- and Backend.{' '}
          <NextLink href="https://github.com/CasusArts">
            <Link>GitHub</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1985</BioYear>
          Born in Tiraspol, Moldova
        </BioSection>
        <BioSection>
          <BioYear>2001</BioYear>
          Moved with family to Augsburg, Germany.
        </BioSection>
        <BioSection>
          <BioYear>2008</BioYear>
          Moved to D&uuml;sseldorf.
        </BioSection>
        <BioSection>
          <BioYear>2012</BioYear>
          Became a physiotherapy diploma at &quot;PRÄHA Bildungsinstitute Düsseldorf&quot;.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Moved back to Augsburg and started to go deeper in Web Development.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Became Software Developer diploma at &quot;DEKRA Akademie Augsburg&quot;
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤
        </Heading>

        <Paragraph>
          Art, Music, {' '}
          <Link href="https://open.spotify.com/artist/4uehL3QgrtONp3MqTlsnQm">
            Playing Bass Guitar
          </Link>
          , also {' '}
          <Link href="https://hearthis.at/felis/">
            spinning vinyl
          </Link>
          , and a little bit of {' '}
          <Link href="https://www.instagram.com/casusarts/">
            Photography
          </Link>

        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
