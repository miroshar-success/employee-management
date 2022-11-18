import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string, options = null) => {
  console.log("url", url);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios(url);
        const json = await res.data;
        console.log("json", json);
        setResponse(json);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { response, error, isLoading };
};

export default useFetch;
