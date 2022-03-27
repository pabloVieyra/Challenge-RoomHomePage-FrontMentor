import React from "react";

const Navbar = () => {
  return (
    <div style={{display:'table-row',position: 'absolute',padding:'4%',width:'80%'}}>
      <button style={{cursor: 'pointer' ,background: 'none',border:'none',color:'white',letterSpacing: '0.02em',fontSize: 'xxx-large'}}>room</button>
      <button style={{cursor: 'pointer' ,background: 'none',border:'none',color:'white',marginLeft:'3%',fontSize: 'x-large'}}>home</button>
      <button style={{cursor: 'pointer' ,background: 'none',border:'none',color:'white',marginLeft:'3%',fontSize: 'x-large'}}>shop</button>
      <button style={{cursor: 'pointer' ,background: 'none',border:'none',color:'white',marginLeft:'3%',fontSize: 'x-large'}}>about</button>
      <button style={{cursor: 'pointer' ,background: 'none',border:'none',color:'white',marginLeft:'3%',fontSize: 'x-large'}}>contact</button>
      
      
    
    </div>
  );
};

export default Navbar;
