import React from "react";
import { useEffect, useState } from "react";


const ProductPage = () => {

    const getProducts = async (callback) => {
        let result = await fetch('https://dummyjson.com/products');
        result = await result.json();
        callback(result.products);
      };

    const [products, setProducts] = useState({});

    useEffect(() => {
    getProducts((cb) => {
      setProducts(cb);
    });
  }, []);


    return (
       
                    
          <div className="container">
            <h1 className=" text-center">List Products</h1>
            <hr />
            <table className="table table-bordered">
              <thead className="text-bg-success p-3">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const { id, title, brand,description, category, price, rating, stock } = product;
                  return (
                    <tr>
                      <th key={id} scope="row">
                        {id}
                      </th>
                      <td>{title}</td>
                      <td>{brand}</td>
                      <td>{description}</td>
                      <td>{category}</td>
                      <td>{price}</td>
                      <td>{rating}</td>
                      <td>{stock}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>    
       
      );
};

export default ProductPage;
