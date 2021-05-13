import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url, {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data.joke);
          setLoading(false);
          setError(null);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    }, 1000);
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
