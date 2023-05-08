import {useEffect, useState} from "react";

export const useFetch = (url) => {
  const [apiData, setApiData] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    async function getData() {
      let data = await fetch(url).then((res) => res.json());
      setApiData({data: data, isLoading: false, hasError: null});
    }

    getData();

    return () => {};
  }, [url]);

  return {
    data: apiData.data,
    isLoading: apiData.isLoading,
    hasError: apiData.hasError,
  };
};
