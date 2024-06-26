import * as React from 'react';

const StepsLayout: React.FC = () => {
  return (
    <div className='grid grid-cols-3'>
      <aside className='col-span-1'>//</aside>
      <main className='col-span-2'>//</main>
    </div>
  );
};
StepsLayout.displayName = 'StepsLayout';

export { StepsLayout };
