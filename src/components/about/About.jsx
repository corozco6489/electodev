import "../../global.css"
export default function About() {
    return (
        <section class="about mtop background2" id="about">
        <div class="container flex">
          <div class="left">
            <div class="dots">
              <i class="fas fa-circle"></i>
              <i class="fas fa-circle"></i>
              <i class="fas fa-circle"></i>
            </div>
    
            <div class="content mtop">
              <div class="items flex mtop">
                <div class="box">
                  <div class="number">
                    <h5>90+</h5>
                  </div>
                  <div class="text">
                    <h3>Happy Clients</h3>
                  </div>
                </div>
                <div class="box">
                  <div class="number">
                    <h5>100+</h5>
                  </div>
                  <div class="text">
                    <h3>Projects Done</h3>
                  </div>
                </div>
              </div>
              <div class="items flex mtop">
                <div class="box">
                  <div class="number">
                    <h5>15+</h5>
                  </div>
                  <div class="text">
                    <h3>Projects Progresss</h3>
                  </div>
                </div>
                <div class="box">
                  <div class="number">
                    <h5>500+</h5>
                  </div>
                  <div class="text">
                    <h3>Working Hours</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div class="right">
            <div class="heading">
              <div class="heading_top flex">
                <div class="line"></div>
                <div class="line line2"></div>
                <i class="fas fa-circle"></i>
                <h3> About Me </h3>
              </div>
              <div class="heading_bottom">
                <h2><span>Unleash Your Creativity</span></h2>
              </div>
              <h4>A Lead UX & UI Designer based in Canada, with 8+ Years of Experience</h4>
            </div>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button class="btn2 btn3">Download CV</button>
          </div>
        </div>
      </section>
    )
}
