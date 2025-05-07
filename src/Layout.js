// pages/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <h2>Remote App - MFE2</h2>
    <nav>
      <Link to=''>Page 1</Link> | <Link to='page2'>Page 2</Link>
    </nav>
    <hr />
    <Outlet /> {/* This is where nested pages will render */}
  </div>
);

export default Layout;
