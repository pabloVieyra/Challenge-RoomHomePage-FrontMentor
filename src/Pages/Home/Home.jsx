import React from "react";
import Navbar from "../../Components/Navbar";
import image1 from "../../assets/images/desktop-image-hero-1.jpg"
import image2 from "../../assets/images/image-about-dark.jpg"
import image3 from "../../assets/images/image-about-light.jpg"
import "./home.css"

const Home = () => {
  return (
    <div>
      <section className="container-colum-colum" style={{height: '80%'}}>
        <div >
       <img src={image1} style={{width: '100%',height: '100%'}} /> 
       </div>
       <div className="texto"> 
        <h1 > Discover innovative ways to decorate</h1>
          <h5>We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing y
            our vision to life. Create a room in your own style with our collection
             and make your property a reflection of you and what you love.</h5>
        <h3>Shop now</h3>
       </div>
      </section>
      <section className="container-img-text-img">
        <div>
          <img src={image2} style={{width: '100%',height: '85%'}}></img>
        </div>

        <div className="texto">
          <h3>About our furniture</h3>
          <h5>Our multifunctional collection blends design and function to suit your individual taste. 
            Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
            Find the furniture pieces you need, from traditional to contemporary styles or 
            anything in between. Product specialists are available to help you create your dream space.</h5>
        </div>

        <div>
          <img src={image3} style={{width: '100%',height: '85%'}}></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
