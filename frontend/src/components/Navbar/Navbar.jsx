import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navItems } from '../../utils/content';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-shell">
      <nav className="navbar container">
        <a className="brand" href="#home">
          <span className="brand-mark">2</span>
          <span>
            <strong>2CARVN</strong>
            <small>Academy</small>
          </span>
        </a>

        <button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen((prev) => !prev)}>
          {open ? <FiX /> : <FiMenu />}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#admissions">Join Now</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
