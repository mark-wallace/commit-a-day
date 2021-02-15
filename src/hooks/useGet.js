import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);

  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      );
  }, [url]);
  return ([items, error]);
};

export default useFetch;
