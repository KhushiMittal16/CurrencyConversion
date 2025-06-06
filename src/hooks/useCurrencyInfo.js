import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.6.6/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.6.6/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // console.log("respnse: ", res);
    console.log(data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
