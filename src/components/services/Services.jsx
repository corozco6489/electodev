import "../../global.css"
export default function Services() {
    return (
        <section className="services mtop" id="services">
    <div className="container">
      <div className="heading heading2">
        <div className="heading_top flex">
          <div className="line"></div>
          <div className="line line2"></div>
          <i className="fas fa-circle"></i>
          <h3> My Services</h3>
        </div>
        <div className="heading_bottom">
          <h2><span>What Can I Do Best ?</span></h2>
        </div>
      </div>


      <div className="content grid top">
        <div className="box">
          <div className="img">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/web.png" />
          </div>
          <div className="text">
            <h3>Website Design</h3>
            <hr/>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="https://img.icons8.com/ios/50/ffffff/venn-diagram.png" />
          </div>
          <div className="text">
            <h3>Brand Identity </h3>
            <hr/>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/design.png" />
          </div>
          <div className="text">
            <h3>Logo Design</h3>
            <hr/>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="https://img.icons8.com/dotty/80/ffffff/broken-phone.png" />
          </div>
          <div className="text">
            <h3>Mobile App Design </h3>
            <hr/>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
