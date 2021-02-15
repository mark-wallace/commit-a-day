import React, { useState, useEffect } from "react";
import useGet from "../hooks/useGet";
import Link from "./Link";

function ProductList() {
  const url = `/api/items`;
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, error] = useGet(url);

  useEffect(() => {
    if (items && !error) {
      setIsLoaded(true);
    }
  }, [items, error]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flexbox-container">
        {items.map((item) => (
          <div key={item.id}>
            <Link className="" href={item.links.product.href} item={item}>
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
