import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <h1 className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Blog
        </h1>
        {/* Breadcrumb */}
        <nav className='flex gap-2 p-8 lg:p-0'>
        <Link href='/'>Home</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>

        <p className='m-0 max-w-[30ch] text-sm opacity-50'>
          Welcome to my blog!
        </p>
        <ul className='grid gap-4 mt-8 lg:grid-cols-3'>
            <li>
                <Link href='/blog/hello-world'>Hello, World!</Link>
            </li>
            <li>
                <Link href='/blog/another-post'>Another Post</Link>
            </li>
            <li>
                <Link href='/blog/one-more-post'>One More Post</Link>
            </li>
        </ul>
      </div>
      <nav className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none'>
        <a
          className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          By{' '}
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            className='dark:invert'
            width={100}
            height={24}
            priority
          />
        </a>
      </nav>
    </main>
  );
};

export default Blog;
