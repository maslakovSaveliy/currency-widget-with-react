import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
const Convertor = () => {
  const [currency, setCurrency] = useState({
    name: "",
    nominal: "",
    price: "",
  });
  const fetchCurrency = async () => {
    const response = await axios.get(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    setCurrency({
      name: response.data.Valute.USD.CharCode,
      nominal: response.data.Valute.USD.Nominal,
      price: response.data.Valute.USD.Value,
    });
  };
  useEffect(() => {
    fetchCurrency();
  });
  return (
    <div className="box">
      <div className="content">
        <h1>{currency.name}</h1>
        <span className="currency">
          <h2>
            {currency.nominal} {currency.name}
          </h2>
          <h2>=</h2>
          <h2>
            {currency.price.toLocaleString("ru", {
              style: "currency",
              currency: "RUB",
            })}
          </h2>
        </span>
      </div>
    </div>
  );
};
export default Convertor;
