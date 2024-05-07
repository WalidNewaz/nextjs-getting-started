import Image from 'next/image';
import Link from 'next/link';

/** Data */
import posts from '../../data/posts.json';

const Blog = () => {
  return (
    <>
      <div className='z-10 w-full max-w-5xl flex-col font-mono text-sm lg:flex'>
        {/* Breadcrumb */}
        <nav className='flex gap-2 py-4 lg:p-0'>
          <Link href='/'>Home</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>

        <p className='m-0 py-6 max-w-[30ch] text-sm opacity-50'>
          Welcome to my blog!
        </p>
        <ul className='grid gap-4 mt-8 lg:grid-cols-3'>
          {posts.map((post) => (
            <li key={post.slug} className='p-4 bg-gray-100 rounded-md hover:bg-gray-300 ease-in duration-300'>
              <Link href={`/blog/${post.slug}`}>
                <h2 className='mt-2 text-lg font-semibold'>{post.title}</h2>
                <p className='mt-2 text-sm'>{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Blog;
