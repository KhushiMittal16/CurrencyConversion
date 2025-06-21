import { useState, useEffect } from "react";

function useCurrencyInfo(currency, date = "2025.5.25") {
  const [data, setData] = useState({});
  console.log(date);

  // let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.6.6/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`
      // `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.6.20/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // console.log("respnse: ", res);
    console.log(data);
  }, [currency, date]);
  return data;
}

export default useCurrencyInfo;
