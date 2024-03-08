import React from "react";
import { useNavigate } from "react-router-dom";

const CoinCarousel = ({ coin }) => {
  const navigate = useNavigate();
  return (
    <div
      className="coinCarousel"
      onClick={() => navigate(`/cryptocoin/${coin.item.id}`)}
      key={coin.item.id}
    >
      <div className="headg">
        <img src={coin.item.small} alt="" />
        <span className="coinName">{coin.item.name}</span>
        <span
          className={`styling ${
            coin.item.data.price_change_percentage_24h.usd > 0
              ? "greencl"
              : "redcl"
          }`}
        >
          {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}
        </span>
      </div>
      <div className="priceg">{coin.item.data.price}</div>
    </div>
  );
};

export default CoinCarousel;
