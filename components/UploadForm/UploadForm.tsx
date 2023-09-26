'use client';

import { useState } from 'react';

export function UploadForm() {
  const [data, setData] = useState('');
  const [file, setFile] = useState<File>();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      const formData = new FormData();
      formData.set('document', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      console.log(response);
      setData('');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='mb-24'>
        <input
          type='file'
          name='document'
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <input type='submit' value='Submit' />
      </form>
      <pre>{data}</pre>
    </div>
  );
}
