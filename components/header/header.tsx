import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <div className="navbar justify-between bg-base-300">
      <Link href="/" className='btn btn-ghost text-lg'>
      SONE onlineshop
      </Link>
      <ul className="flex">
        <li>
          <Link className='btn btn-ghost rounded-btn' href="/cart">Cart</Link>
        </li>
        <li>
          <Link className='btn btn-ghost rounded-btn' href="/signin">Sign in</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header ;