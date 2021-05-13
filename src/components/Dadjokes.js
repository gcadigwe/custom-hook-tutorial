import React from "react";
import useFetch from "../useFetch";

const Dadjokes = () => {
  const { data, loading, error } = useFetch("https://icanhazdadjoke.com");
  return (
    <div>
      {loading && <h1>loading...</h1>}
      {data && <h1>{data}</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Dadjokes;
