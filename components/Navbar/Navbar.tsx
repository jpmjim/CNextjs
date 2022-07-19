import React from 'react';
import  Link  from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <menu>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </menu>
    </nav>
  )
}

export default Navbar