import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ProductList from '../ProductList';

export default function MainPage() {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    console.log('MainPage rendered. Current category:', category);
  }, [category]);
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-2">
            <Sidebar onCategorySelect={setCategory} />
          </div>
          <div className="col-md-10">
            <ProductList category={category} />
          </div>
        </div>
      </div>
    </>
  );
} 