import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(delay: number) {
  new Promise((resolve) => setTimeout(resolve, delay));
}

export function downloadFile(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.download = 'byro.pdf';
  a.rel = 'noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
