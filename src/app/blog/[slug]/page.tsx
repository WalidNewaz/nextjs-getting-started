import Link from 'next/link';

const DynamicBlog = ({ params }: { params: { slug: string } }) => {

  return (
    <>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        {/* Breadcrumb */}
        <nav className='flex gap-2 py-4 lg:p-0'>
          <Link href='/'>Home</Link>
          <span>/</span>
          <Link href='/blog'>Blog</Link>
          <span>/</span>
          <span>{params.slug}</span>
        </nav>

        <p className='m-0 max-w-[30ch] text-sm opacity-50'>
          You are viewing blog post with ID: {params.slug}
        </p>
      </div>
    </>
  );
};

export default DynamicBlog;
