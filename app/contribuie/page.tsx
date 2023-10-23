import { Nav, Section } from '@/components';
import { Heading, Text } from '@/components/ui';

export default async function ContribuiePage() {
  return (
    <main>
      <Nav />
      <Section>
        <Heading type='page-title' tag='h1'>
          Contribuie
        </Heading>
        <Text type='primary-bold'>În curând.</Text>
      </Section>
    </main>
  );
}
