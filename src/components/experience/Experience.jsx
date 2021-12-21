import "../../global.css"
import { FaIdCardAlt } from "react-icons/fa";
export default function Experience() {
    return (
    <section class="experience background2">
        <div class="container">
             <div class="heading center">
        <div class="heading_top flex">
          <div class="line"></div>
          <div class="line line2"></div>
          <i class="fas fa-circle"></i>
        <h3> Employment  Education</h3> 
        </div>
        <div class="heading_bottom">
          <h2><span>My Experience Journey </span></h2>
        </div>
      </div>


      <div class="content flex">
        <div class="left">
          <img src="assets/image/e.jpg" alt=""/>
        </div>
        <div class="right">
   
          <div class="timeline">
            <div class="line">
            </div>
            <div class="content content-1">
              <section>
                <i class="icon fas fa-briefcase"><FaIdCardAlt/></i>
                <div class="details">
                  <span> Present - 2020</span>
                  <h3>Product Manager / Google</h3>
                </div>
                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </section>
            </div>

            <div class="content content-1">
              <section>
                <i class="icon fas fa-graduation-cap"><FaIdCardAlt/></i>
                <div class="details">
                  <span> 2016 - 2018</span>
                  <h3>MS Degree / University of Manchester</h3>
                </div>
                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </section>
            </div>

            <div class="content content-1">
              <section>
                <i class="icon fas fa-book-open"><FaIdCardAlt/></i>
                <div class="details">
                  <span> 2013 - 2016</span>
                  <h3>Lead UI Designer / Apple Inc.</h3>
                </div>
                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </section>
            </div>

            <div class="content content-1">
              <section>
                <i class="icon fab fa-acquisitions-incorporated"><FaIdCardAlt/></i>
                <div class="details">
                  <span> 2009 - 2013</span>
                  <h3>BA Degree / London School of Arts</h3>
                </div>
                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </section>
            </div>
          </div>
     
        </div>
      </div>
      </div>
  </section>
    )
}
