import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/assets/logo.png" alt="Apple logo" />

        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/assets/search.png" alt="Search icon" />
          </button>
          <button>
            <img src="/assets/cart.png" alt="Cart icon" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar