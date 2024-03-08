import React from "react";
import "./style.css";
const Overview = ({ coin }) => {
  return (
    <div className="overview-div">
      <h1>Performance</h1>
      <div>
        <div> </div>
        <div>52 low</div>
      </div>
      <h2>Fundamentals</h2>
      <div className="fundamental-details">
        <div>
          <span className="detail-tab">
            {coin.name} Price{" "}
            <span className="jk">${coin.market_data.current_price.usd}</span>
          </span>
          <span className="detail-tab">
            24h Low/ 24 High{" "}
            <span className="jk">
              {coin.market_data.high_24h.usd}/{coin.market_data.low_24h.usd}
            </span>
          </span>
          <span className="detail-tab">
            7d Low/7d High{" "}
            <span className="jk">
              {coin.market_data.high_24h.usd}/{coin.market_data.low_24h.usd}
            </span>{" "}
          </span>
          <span className="detail-tab">
            Trading Volume{" "}
            <span className="jk">{coin.market_data.total_volume.usd}</span>
          </span>
          <span className="detail-tab">
            Market Cap Rank <span className="jk">{coin.market_cap_rank}</span>
          </span>
        </div>
        <div>
          <span className="detail-tab">
            Market Cap{" "}
            <span className="jk">${coin.market_data.market_cap.usd}</span>
          </span>
          <span className="detail-tab">
            Market Cap Dominance{" "}
            <span className="jk">
              {coin.market_data.market_cap_fdv_ratio}%{" "}
            </span>
          </span>
          <span className="detail-tab">
            Volume/Market Cap{" "}
            <span className="jk">
              {(
                coin.market_data.total_volume.usd /
                coin.market_data.market_cap.usd
              ).toFixed(3)}{" "}
              %
            </span>
          </span>
          <span className="detail-tab">
            All-Time-High{" "}
            <span className="jk">${coin.market_data.ath.usd}</span>
          </span>
          <span className="detail-tab">
            All-Time Low <span className="jk">${coin.market_data.atl.usd}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
