import { useState, useEffect } from "react";
import axios from "axios";

const usePost = (url: string, body: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.post(url, body);
        const json = await res.data;

        setResponse(json);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, body]);

  return { response, error, isLoading };
};

export default usePost;
