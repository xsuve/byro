import { Process, Document } from '@/types';

import db from '../public/db.json';

export async function getProcesses(): Promise<Process[]> {
  const processes = db.processes;

  if (!processes) {
    throw new Error('Failed to find processes.');
  }

  return processes;
}

export async function getProcess(slug: string): Promise<Process> {
  const process = db.processes.find(
    (process: Process) => process.slug === slug
  );

  if (!process) {
    throw new Error('Failed to find process.');
  }

  return process;
}

export async function getDocuments(): Promise<Document[]> {
  const processes = db.documents;

  if (!processes) {
    throw new Error('Failed to find processes.');
  }

  return processes;
}
