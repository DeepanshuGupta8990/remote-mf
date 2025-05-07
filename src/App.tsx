import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.css';

// Page1 Component
const Page1 = () => {
  return <div className='text-lg text-gray-700'>This is Page 1 (Remote)</div>;
};

// Page2 Component
const Page2 = () => {
  return <div className='text-lg text-gray-700'>This is Page 2 (Remote)</div>;
};

// Layout Component (used for nesting routes)
const Layout = ({ baseName = '/page1' }) => {
  return (
    <div className='p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg'>
      <h1 className='text-3xl font-bold text-center text-blue-700 mb-6'>Remote App 1</h1>

      <p className='text-sm text-gray-600 text-center mb-4'>
        <strong>Note:</strong> If using this app with a host (Module Federation), be sure to pass
        <code className='bg-gray-100 px-1 mx-1 rounded'>baseName</code> prop. <br />
        When running standalone, no additional configuration is needed.
      </p>

      <nav className='flex justify-center space-x-6 mb-4'>
        <Link to={`${baseName}`} className='text-blue-600 hover:underline'>
          Page 1
        </Link>
        <Link to='page2' className='text-blue-600 hover:underline'>
          Page 2
        </Link>
      </nav>

      <div className='border-t pt-4'>
        <h2 className='text-xl underline text-red-500 mb-2'>Layout: Nested Routes</h2>
        <Outlet />
      </div>
    </div>
  );
};

const App = ({ baseName = '/page1' }) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout baseName={baseName} />}>
          <Route index path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
