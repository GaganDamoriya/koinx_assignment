import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import TradingViewWidgets from "./TradingViewWidgets";

const CurrencyChart = ({ coin }) => {
  return (
    <div className="coin-chart">
      <div className="inner-coin-div">
        <div className="heading">
          <img src={coin.image?.small} alt="" />
          <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
            {coin.name}
          </span>
          <span className="symbol">{coin.symbol}</span>
          <span className="rank">{`Rank #${coin?.market_cap_rank}`}</span>
        </div>
        <div className="price-div">
          <div className="price1">
            <span style={{ fontSize: "1.4rem", fontWeight: "700" }}>
              ${coin.market_data?.current_price?.usd}
            </span>
            <span
              style={{
                fontSize: ".8rem",
                fontWeight: "500",
                backgroundColor: "rgb(136 225 135)",
              }}
            >
              %
              {(coin?.market_data?.market_cap_change_percentage_24h).toFixed(1)}
            </span>
            <span style={{ fontSize: ".8rem", fontWeight: "500" }}>
              "(24H)"
            </span>
          </div>
          <div style={{ fontSize: "1rem", fontWeight: "500" }}>
            ₹ {coin.market_data.current_price.inr}
          </div>
        </div>
        <div style={{ height: "100%" }}>
          <div className="pcView">
            <TradingViewWidget />
          </div>
          <div className="mobileView">
            <TradingViewWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyChart;
