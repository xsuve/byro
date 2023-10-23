import { Nav, Section } from '@/components';
import { Heading, Text } from '@/components/ui';
import Link from 'next/link';

export default async function ContactPage() {
  return (
    <main>
      <Nav />
      <Section>
        <Heading type='page-title' tag='h1'>
          Contact
        </Heading>
        <div className='flex flex-col gap-y-2'>
          <Link href='mailto:contact@byro.ro'>
            <Text type='primary-bold'>contact@byro.ro</Text>
          </Link>
          <Text type='primary-bold'>Cluj-Napoca, Romania</Text>
        </div>
      </Section>
    </main>
  );
}
