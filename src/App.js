import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Page1 Component
const Page1 = () => {
  return <div>This is Page 1 (Remote)</div>;
};

// Page2 Component
const Page2 = () => {
  return <div>This is Page 2 (Remote)</div>;
};

// Layout Component (used for nesting routes)
const Layout = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Page 1</Link> | <Link to='page2'>Page 2</Link>
      </nav>
      <div style={{ marginTop: '20px' }}>
        <h2>Layout: Nested Routes</h2>
        <Outlet /> {/* Renders the nested route content */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
