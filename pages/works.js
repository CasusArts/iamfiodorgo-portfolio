import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section';
import todovueImg from '../public/images/works/vue-simple-todo.png';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mt={2} mb={4}>
        Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="todo-vue" title="Simple ToDo Vue" thumbnail={todovueImg}>
            Simple To-Do app built with VueJS and Intline UI/UX Library
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
