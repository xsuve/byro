import '../globals.css';
import type { Metadata } from 'next';
import { Nav, Section } from '@/components';

export const metadata: Metadata = {
  title: 'Byro - Procese',
  description: 'Documente necesare proceselor birocratice',
};

export default function ProcessesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Nav />
      <Section title='Procese'>{children}</Section>
    </main>
  );
}
