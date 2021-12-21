import "../../global.css"
export default function Contact() {
    return (
        
  <section class="contact top">
  <div class="container flex">
    <div class="left">
      <img src="assets/image/logo.png" alt=""/>
      <div class="heading">
        <div class="heading_bottom">
          <h2><span>UI/UX </span>Designer</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. </p>
        <h5>Copyright (c) 2021 Copyright Holder All Rights Reserved.</h5>
      </div>
    </div>

    <div class="right">
      <div class="heading">
        <div class="heading_top flex">
          <div class="line"></div>
          <div class="line line2"></div>
          <i class="fas fa-circle"></i>
          <h3>Any Question? </h3>
        </div>
        <div class="heading_bottom">
          <h2><span>Drop Me A Line </span></h2>
        </div>
       </div>


      <form class="mtop">
        <div class="input grid">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Subject"/>
          <input type="text" placeholder="Phone"/>
        </div>
        <textarea name="name" rows="5" cols="80"> Message</textarea>
        <button class="btn2 btn3">Send Message</button>
        
      </form>
    </div>
    </div>
</section>
    )
}
