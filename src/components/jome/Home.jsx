import "../../global.css";
import { FaPager, FaGithub, FaYoutube } from "react-icons/fa";
export default function Home() {
  return (
    <section className="home">
      <div className="container flex">
        <div className="left">
          <div className="heading">
            <div className="heading_top flex">
              <div className="line"></div>
              <div className="line line2"></div>
              <i className="fas fa-circle"></i>
              <h3>Electrónica</h3>
            </div>
            <div className="heading_bottom">
              <h1>
                <span>Orozco</span> Tech
              </h1>
            </div>
          </div>

          {/* <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          <div className="button">
            {/* <button className="btn1">BIOGRAPHY</button>
              <button className="btn2">Hire Me</button> */}
          </div>
        </div>

        <div className="right">
          <div className="dots">
            <a href="#">
              {" "}
              <i className="fas fa-circle"></i>
            </a>
            <i className="fas fa-circle"></i>
            <i className="fas fa-circle"></i>
          </div>

          <img src="assets/image/home.png" alt="" />

          <div className="icon flex">
            <a href="http://electrodev.cf/" target="_blank">
              {" "}
              <i className="fab fa-facebook-f">
                <FaPager />
              </i>
            </a>
            <a href="https://github.com/corozco6489"  target="_blank">
              {" "}
              <i className="fab fa-twitter">
                <FaGithub />
              </i>
            </a>
            <a href="https://www.youtube.com/channel/UCgR2CZLCClCdTeo_l5W53eQ"  target="_blank">
              {" "}
              <i className="fab fa-instagram">
                <FaYoutube />
              </i>
            </a>
         
          </div>
        </div>
      </div>
    </section>
  );
}
