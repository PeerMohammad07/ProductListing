import React, { useEffect, useState } from "react";
import { fetchData } from "../Api/fetchData";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory] = useState(["jewelery","men's clothing","electronics"])

  useEffect(() => {
    // Fetching the listing products
    const fetch = async () => {
      const fetchProducts = await fetchData();
      if (fetchProducts) {
        setProducts(fetchProducts.data);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    if (search) {
      const searchResult = products.filter((product) => {
        if (product.title.startsWith(search)) {
          return product;
        }
      });
      setFilterProducts(searchResult);
    } else {
      setFilterProducts([]);
    }
  }, [search]);
 

  let listingProducts = filterProducts.length > 0 ? filterProducts : products;


  // const changeCategory = (val)=>{
  //   const categoryValue = listingProducts.filter((product)=> product.category == val)
  //   sete
    
  // }



  return (
    <>
      <div>
        <h1 className="text-lg">Search Bar</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <h1>Filtering</h1>
        <label>Choose a categoryy</label>

        <select onChange={(e)=> changeCategory(e.target.value)}>
          <option value="jewelery">jewelery</option>
          <option value="jewelery">jewelery</option>
          <option value="jewelery">jewelery</option>
          <option value="jewelery">jewelery</option>
        </select>
      </div>
      <div className="w-50">
        {listingProducts.map((product) => (
          <>
            <div className="flex">
              <div key={product.id}>
                <img src={product.image} className="w-30 h-20" alt="" />
                <h3>${product.price}</h3>
                <h3>${product.category}</h3>
                <h1>{product.title}</h1>
                <h2></h2>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
