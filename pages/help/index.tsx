import Layout from '../layout';
import Link from 'next/link';
import Head from 'next/head';

const Help = () => {
  return (
    <Layout>
      <Head>
        <title>Help Center</title>
      </Head>
      <div className='z-10 w-full max-w-5xl flex-col font-mono text-sm lg:flex'>
        {/* Breadcrumb */}
        <nav className='flex gap-2 py-4 lg:p-0'>
          <Link href='/'>Home</Link>
          <span>/</span>
          <span>Help Center</span>
        </nav>
        <p className='m-0 py-6 max-w-[60ch] text-sm opacity-50'>
          Need help? Contact us at:{' '}
          <a href='mailto:test@example.com' className='text-blue-500'>
            test@example.com
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default Help;
