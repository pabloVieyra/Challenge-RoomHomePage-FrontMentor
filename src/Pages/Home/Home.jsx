import React,{useState} from "react";
import Navbar from "../../Components/Navbar";
import imageInicio1 from "../../assets/images/desktop-image-hero-1.jpg"
import image2 from "../../assets/images/image-about-dark.jpg"
import image3 from "../../assets/images/image-about-light.jpg"
import "./home.css"
import icon from "../../assets/images/icon-arrow.svg"
import icon2 from "../../assets/images/icon-angle-left.svg"
import icon3 from "../../assets/images/icon-angle-right.svg"


const Home = () => {
 /*  const [current, setCurrent] = useState(0);
  const length = photos.length;
  

  const OnclickLeft = () =>{
          setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const OnclickRigth = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  } */
 

  return (
    <div>
      <section className="container-colum-colum" style={{height: '80%'}}>
        <div >
          <Navbar></Navbar>

          <img style={{width: '100%',height: '100%'}}src={imageInicio1}></img>
          
    {/*   {photos.map((slide, index) => {
          return (
            <div >
              {index === current && (
                <>
                 
                  <img
                  style={{width: '100%',height: '100%'}}
                    src={slide.image}
                    
                  ></img>
                </>
              )}
            </div>
          );
        })} */}

       </div>
       <div className="texto" style={{position: 'relative'}}  > 
        <h1 style={{fontWeight: '700'}}> Discover innovative ways to decorate</h1>
          <h5 className="text-secondary">We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing y
            our vision to life. Create a room in your own style with our collection
             and make your property a reflection of you and what you love.</h5>
             <button style={{fontWeight: '400' ,letterSpacing: '0.5em',fontSize: 'smaller',cursor: 'pointer' ,background: 'none',border:'none'}}>
          SHOP NOW <img src={icon} style={{width:'60px'}}/>
        </button>
        <section style={{display:'flex',position: 'absolute',bottom: '0%',left:'0%'}} >
            <button style={{cursor: 'pointer' ,background: 'black',border:'0.1em solid black',padding:'50%',color: '#ffffff' }}  >
                    <img src={icon2} style={{width:'30px'}}/>
            </button>
            <button style={{cursor: 'pointer' ,background: 'black',border:'0.1em solid black',padding:'50%',color: '#ffffff'}}  >
                <img src={icon3} style={{width:'30px'}}/>
            </button>
   </section>
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
