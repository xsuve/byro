import { Process } from '@/types';

import db from '../public/db.json';

export async function getProcess(slug: string): Promise<Process> {
  const process = db.processes.find(
    (process: Process) => process.slug === slug
  );

  if (!process) {
    throw new Error('Failed to find process.');
  }

  return process;
}
