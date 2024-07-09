import { useEffect, useState } from "react";

const fetchDelay = import.meta.env.VITE_FETCH_DELAY;

function useFetch(url, datatype = []) {
  const [data, setData] = useState(datatype);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Could not fetch data");

        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, fetchDelay);
  }, [url]);
  return { data, isLoading };
}

export default useFetch;
