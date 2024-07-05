import dynamic from 'next/dynamic';

const Main1 = dynamic(() => import('./components/Main1'), { ssr: false });

const Home: React.FC = () => {

  return (
    <main className='h-screen w-screen'>
      <Main1 />
    </main>
  );
};

export default Home;
