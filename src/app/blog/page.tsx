import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        {/* Breadcrumb */}
        <nav className='flex gap-2 py-4 lg:p-0'>
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
    </>
  );
};

export default Blog;
