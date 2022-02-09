import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    try {
      setData(resData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, [url]);

  return [loading, data];
};
