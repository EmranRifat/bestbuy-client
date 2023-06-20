import React, { useEffect } from 'react';

const About = () => {
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
       },[])
  
       return (
       
        <div>
          <h2>about section</h2>  
        </div>
    );
};

export default About;