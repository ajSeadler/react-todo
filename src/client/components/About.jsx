import React from 'react';
import { FaUtensils, FaPizzaSlice, FaStar } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container mt-5" style={{ WebkitTextStroke: '1px black',
    MozTextStroke: '1px black',
    OTextStroke: '1px black',
    textStroke: '1px black', marginBottom: "10px"  }}>
      <section>
        <h2 className="text-center mb-4" style={{color: "#ff00c1"}}>About Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center">Welcome to Colin and Tony's House of Sushi and Pizza, where culinary creativity meets exceptional taste.</p>
            <p className="text-center">Our story began in the heart of the Amazon rainforest, where we met while on separate culinary adventures. Bonding over our mutual love for sushi and pizza, we embarked on a journey to bring our unique fusion cuisine to the world.</p>
            <p className="text-center">At Colin and Tony's, we pride ourselves on using only the freshest ingredients sourced from sustainable farms and fisheries. Whether you're craving the delicate flavors of sushi or the comforting taste of pizza, we promise an unforgettable dining experience.</p>
          </div>
        </div>

        <div className="row mt-5">
        <h3 className="text-center mb-4" style={{color: "#ff00c1"}}>Our Specialties</h3>
          <div className="col-md-6">
           
            <div className="d-flex justify-content-center mb-3">
              <FaUtensils className="me-2" size={32} />
              <h4 className="mb-0">Sushi</h4>
            </div>
            <p className="text-center">Come try our handcrafted sushi rolls made with the freshest of the fresh fish (they ship 1,000 miles across the US.) and crisp vegetables, expertly prepared by our skilled sushi chef Christopher.</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center mb-3">
              <FaPizzaSlice className="me-2" size={32} />
              <h4 className="mb-0">Pizza</h4>
            </div>
            <p className="text-center">Savor the perfect blend of flavors with our artisanal pizzas, crafted with premium ingredients and baked to perfection in our wood-fired oven.</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-8 offset-md-2">
            <h3 className="text-center mb-4" style={{color: "#ff00c1"}}>Customer Reviews</h3>
            <div className="text-center">
              <div className="mb-3">
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
              <p className="mb-0">"The best sushi and pizza I've ever had! The flavors are out of this world, and the service is top-notch. Highly recommend!"</p>
              <p className="fw-bold">- John Smith</p>
            </div>
            <div className="text-center">
              <div className="mb-3">
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
              <p className="mb-0">"Colin and Tony's never disappoints! Every dish is a masterpiece, and the atmosphere is always welcoming. Can't wait to come back!"</p>
              <p className="fw-bold">- Emily Johnson</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
