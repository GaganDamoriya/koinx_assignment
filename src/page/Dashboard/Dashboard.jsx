import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import CurrencyChart from "../../components/CurrencyChart";
import { toplinks } from "../../components/constant";
import Picktab from "../../components/topTabs/Picktab";
import CoinCarousel from "../../components/CoinCarousel";

const Dashboard = () => {
  const baseUrl = "https://api.coingecko.com/api/v3/";
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [viewLink, setViewLink] = useState("Overview");
  const [coinslist, setCoinslist] = useState([]);

  axios.defaults.headers.common["x-cg-demo-api-key"] =
    "CG-rPe4phqDSSW8R6BxAJFzSbae";

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(baseUrl + `coins/${id}`);
      setCoin(res.data);
    };
    const getlistofCoin = async () => {
      const res = await axios.get(baseUrl + "search/trending");
      setCoinslist(res.data.coins);
    };
    getData();
    getlistofCoin();
  }, [id]);

  return (
    <div className="dashboard-page">
      <div className="currencyname">
        CryptoCurreny{">>"} {id}
      </div>
      {coin ? (
        <div className="coinDisplay">
          <CurrencyChart coin={coin} />
        </div>
      ) : (
        "Loading"
      )}
      <div className="toplinks-bar">
        {toplinks.map((ind, id) => (
          <span
            key={id}
            className={viewLink == ind.name ? "activeclass " : ""}
            onClick={() => setViewLink(ind.name)}
          >
            {ind.name}
          </span>
        ))}
      </div>
      <div>
        {coin ? <Picktab viewLink={viewLink} coin={coin} /> : "loading.."}
      </div>
      <h2>You May also Like</h2>
      <div className="listcoin">
        {coinslist.length > 0
          ? coinslist.map((coin, id) => <CoinCarousel coin={coin} />)
          : "loading..."}
      </div>
      <h2>Trending</h2>
      <div className="listcoin">
        {coinslist.length > 0
          ? coinslist.map((coin, id) => <CoinCarousel coin={coin} />)
          : "loading..."}
      </div>
    </div>
  );
};

export default Dashboard;
