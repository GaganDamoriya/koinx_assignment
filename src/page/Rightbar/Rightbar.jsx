import React, { useEffect, useState } from "react";
import "./style.css";
import { FaArrowRight } from "react-icons/fa";
import sideimg from "../../assets/character.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Rightbar = () => {
  const baseUrl = "https://api.coingecko.com/api/v3/";

  axios.defaults.headers.common["x-cg-demo-api-key"] =
    "CG-rPe4phqDSSW8R6BxAJFzSbae";
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(baseUrl + `search/trending`);
      setCoins(res.data.coins);
    };
    getData();
  }, [baseUrl]);

  return (
    <div className="rightbar">
      <div className="get-started-div">
        <div className="inner-div">
          <h3> Get started with Koinx free</h3>
          <span>
            With our range of features that you can equip for free koinx allows
            you to be more educated and aware of your tax reposrts.{" "}
          </span>
          <img src={sideimg} alt="" />
          <button>
            GET Started for FREE <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="trending-coin">
        <h2>Trending coins</h2>
        <div className="coin-list">
          {coins.length > 0
            ? coins.map((coin, id) => (
                <div
                  className="token"
                  key={id}
                  onClick={() => navigate(`/cryptocoin/${coin.item.id}`)}
                >
                  <span className="tk">
                    <img src={coin.item.small} alt="" />
                    {coin.item.name}
                    {`(${coin.item.symbol})`}
                  </span>
                  <span
                    style={{ color: "green" }}
                  >{`${coin.item.data.price}`}</span>
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
