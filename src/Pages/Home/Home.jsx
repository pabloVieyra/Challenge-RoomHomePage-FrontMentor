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
          <Navbar></Navbar>
       <img src={image1} style={{width: '100%',height: '100%'}} /> 
       </div>
       <div className="texto"> 
        <h1 style={{fontWeight: '700'}}> Discover innovative ways to decorate</h1>
          <h5 className="text-secondary">We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing y
            our vision to life. Create a room in your own style with our collection
             and make your property a reflection of you and what you love.</h5>
        <button style={{fontWeight: '400' ,letterSpacing: '0.5em',fontSize: 'smaller',cursor: 'pointer' ,background: 'none',border:'none'}}>SHOP NOW</button>
       </div>
      </section>
      <section className="container-img-text-img">
        <div>
          <img src={image2} style={{width: '100%',height: '85%'}}></img>
        </div>

        <div className="texto">
          <h3 style={{fontWeight: '700' ,letterSpacing: '0.2em',fontSize: 'smaller'}}>ABOUT OUR FURNITURE</h3>
          <h5 className="text-secondary">Our multifunctional collection blends design and function to suit your individual taste. 
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
