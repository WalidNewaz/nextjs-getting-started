import Link from 'next/link';

/** Data */
import posts from '../../../data/posts.json';

const DynamicBlog = ({ params }: { params: { slug: string } }) => {
  const post = posts.find((post) => post.slug === params.slug);

  return (
    <>
      <div className='z-10 w-full max-w-5xl flex-col font-mono text-sm lg:flex'>
        {/* Breadcrumb */}
        <nav className='flex gap-2 py-4 lg:p-0'>
          <Link href='/'>Home</Link>
          <span>/</span>
          <Link href='/blog'>Blog</Link>
          <span>/</span>
          <span className='truncate'>{post?.title}</span>
        </nav>

        <h2 className='text-xl m-0 py-6 max-w-[30ch] opacity-50'>
          {post?.title}
        </h2>
        <div className='flex justify-between'>
          <p className='text-base m-0 opacity-75'>{post?.author}</p>
          <p className='text-base m-0 opacity-75'>{post?.date}</p>
        </div>
        <p className='text-base m-0 py-6 opacity-75'>{post?.content}</p>
        {/* Tags */}
        <div className='flex gap-2'>
          {post?.tags.map((tag: string) => (
            <span
              key={tag}
              className='text-xs px-2 py-1 bg-gray-200 rounded-md'
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Comments */}
        <div className='flex flex-col gap-2'>
          <p className='text-base m-0 py-6 opacity-75 text-lg'>Comments:</p>
          <ul className='grid gap-4'>
            {post?.comments.map((comment: any, index: number) => (
              <li key={index} className='p-4 bg-gray-100 rounded-md'>
                <div className='flex justify-between'>
                  <p className='text-base m-0 py-4 opacity-75'>
                    <strong>{comment?.author}</strong>
                  </p>
                  <p className='text-base m-0 py-4 opacity-75'>
                    {comment.date}
                  </p>
                </div>
                <p className='text-base m-0 py-2 opacity-75'>
                  {comment.content}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Related Posts */}
        <div className='flex flex-col gap-2'>
          <p className='text-base m-0 py-6 opacity-75 text-lg'>
            Related Posts:
          </p>
          <ul className='grid gap-4 md:grid-cols-3'>
            {post?.relatedPosts.map((related: any) => {
              const post = posts.find((post) => post.slug === related.slug);
              return (
                <li
                  key={post?.slug}
                  className='p-4 bg-gray-100 rounded-md hover:bg-gray-300 ease-in duration-300'
                >
                  <Link href={`/blog/${post?.slug}`}>
                    <h2 className='mt-2 text-lg font-semibold'>
                      {post?.title}
                    </h2>
                    <p className='mt-2 text-sm'>{post?.excerpt}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

// /**
//  * This function is called during the build (build time) and not during runtime.
//  * @param params
//  * @returns
//  */
// DynamicBlog.getInitialProps = async ({
//   query,
// }: {
//   query: { slug: string };
// }) => {
//   const post = posts.find((post) => post.slug === query.slug);
//   return { post };
// };

export default DynamicBlog;
