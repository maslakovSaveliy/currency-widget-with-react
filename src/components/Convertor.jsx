import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
const Convertor = () => {
  const [currency, setCurrency] = useState({
    name: "",
    price: "",
  });
  const fetchCurrency = async () => {
    const response = await axios.get(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );
    setCurrency({
      name: response.data.Valute.USD.CharCode,
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
          <h2>1 {currency.name}</h2>
          <h2>=</h2>
          <h2>{Math.floor(currency.price * 100) / 100} RUB</h2>
        </span>
      </div>
    </div>
  );
};
export default Convertor;
