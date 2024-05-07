import Header from '../src/components/common/header';
import Footer from '../src/components/common/footer';

import '../src/app/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='flex min-h-screen flex-col items-center justify-between px-8 py-4'>
        {children}
      </main>
      <Footer />
    </>
  );
}
