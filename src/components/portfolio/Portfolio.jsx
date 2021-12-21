import "../../global.css";
import "./portfolio.css";
import PortfolioList from "./PortfolioList";
import { useState } from "react";
import { useEffect } from "react";
import { FaGithub, FaLink } from "react-icons/fa";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "logo",
      title: "IoT",
    },
    {
      id: "branding",
      title: "Arduino",
    },
    {
      id: "apps",
      title: "Matlab",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "logo":
        setData(mobilePortfolio);
        break;
      case "branding":
        setData(designPortfolio);
        break;
      case "apps":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <section class="portfolio mtop" id="blog">
      <div class="container">
        <div class="content flex1">
          <div class="heading">
            <div class="heading_top flex">
              <div class="line"></div>
              <div class="line line2"></div>
              <i class="fas fa-circle"></i>
              <h3> Portfolio</h3>
            </div>
            <div class="heading_bottom">
              <h2>
                <span>My Work </span>
              </h2>
            </div>
          </div>

          {/* <ul class="filter-menu">
            <li data-target="all">All</li>
            <li data-target="web">WEB DESIGN</li>
            <li data-target="logo">LOGO DESIGN</li>
            <li data-target="branding">BRANDING</li>
            <li data-target="apps">APPS DESIGN</li>
          </ul> */}
        </div>

        <div class="box-container">
          <div className="box">
            <div class="gumroad-product-embed" data-outbound-embed="true">
              <a href="https://corozco6489.gumroad.com/l/lupmj">Cargando...</a>
            </div>
          </div>
          <div className="box">
          <div class="gumroad-product-embed" data-outbound-embed="true"><a href="https://corozco6489.gumroad.com/l/asjon">Cargando...</a></div>
          </div>
          <div className="box">
          <div class="gumroad-product-embed" data-outbound-embed="true"><a href="https://corozco6489.gumroad.com/l/ytewl">Cargando...</a></div>
          </div>
          <div className="box">
          <div class="gumroad-product-embed" data-outbound-embed="true"><a href="https://corozco6489.gumroad.com/l/veqbu">Cargando...</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
