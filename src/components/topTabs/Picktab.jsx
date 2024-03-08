import React from "react";
import Overview from "./Overview";
import Fundamentals from "./Fundamentals";
import NewsInsights from "./NewsInsights";
import Sentiments from "./Sentiments";
import Team from "./Team";
import Technicals from "./Technicals";
import Tokenomics from "./Tokenomics";

const Picktab = ({ viewLink, coin }) => {
  return (
    <div>
      {viewLink === "Overview" ? (
        <Overview coin={coin} />
      ) : viewLink === "Fundamental" ? (
        <Fundamentals coin={coin} />
      ) : viewLink === "News Insights" ? (
        <NewsInsights coin={coin} />
      ) : viewLink === "Sentiments" ? (
        <Sentiments coin={coin} />
      ) : viewLink === "Team" ? (
        <Team coin={coin} />
      ) : viewLink === "Technicals" ? (
        <Technicals coin={coin} />
      ) : (
        <Tokenomics coin={coin} />
      )}
    </div>
  );
};

export default Picktab;
