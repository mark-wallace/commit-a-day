import React, { useState, useEffect } from "react";
import Link from "./Link";
// import "../styles/Index.css";

function ProductList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`/api/items`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flexbox-container">
        {items.map((item) => (
          <div key={item.id}>
            <Link className="" href={item.links.product.href}>
              <h1 className="flexbox-h1">{item.name}</h1>
              <div className="flexbox-item"></div>
              <p>${item.price}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default ProductList;
