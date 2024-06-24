import { Navigate, useParams } from 'react-router-dom';

export default function Process() {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to='/' replace />;
  }

  return <div className='p-12'>Process {slug}</div>;
}
