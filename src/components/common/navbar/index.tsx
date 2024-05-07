import Link from 'next/link';

const NavBar = () => {
  return (
    <ul className='navbar flex gap-8'>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/blog'>Blog</Link>
      </li>
      <li>
        <Link href='/help'>Help</Link>
      </li>
    </ul>
  );
};

export default NavBar;
