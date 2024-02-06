//===========please feel free to update any wording. make it goofy, more realistic, whatever! I just threw down some BS to fill the page up with content.=====================

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap - npm install bootstrap@latest if you're having probs
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { drinksArray, appsArray, soupSaladArray, rollsArray, nigiriArray, calzoneArray, pizzaArray } from "./MenuArray";

function Home() {

  const [randomRoll, setRandomRoll] = useState("");
  const [randomPizza, setRandomPizza] = useState("");
  

  // Function to generate a random roll and a random pizza for today's special.
  const generateRandomRoll = () => {
    const randomIndex = Math.floor(Math.random() * rollsArray.length);
    const randomRoll = rollsArray[randomIndex];
    setRandomRoll(randomRoll);
  };

  const generateRandomPizza = () => {
    const randomIndex = Math.floor(Math.random() * pizzaArray.length);
    const randomPizza = pizzaArray[randomIndex];
    setRandomPizza(randomPizza);
  };


  // Call the generateRandomRoll function on component mount
  useEffect(() => {
    generateRandomRoll(); // Initial call

    const interval = setInterval(() => {
      generateRandomRoll(); // Call every 24 hours
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    generateRandomPizza(); // Initial call

    const interval = setInterval(() => {
      generateRandomRoll(); // Call every 24 hours
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
      <header className="text-center mb-5">
        <h1 className="display-4 neonText" style={{fontFamily: "Onick", marginTop: "20px",  WebkitTextStroke: '1px black',
        MozTextStroke: '1px black',
        OTextStroke: '1px black',
        textStroke: '1px black'}}>
          Collin and Tony's House of Sushi and Pizza
        </h1>
        <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 2, delay: 0.2 }}
  >
        <p className="lead" style={{fontFamily: "Onick", WebkitTextStroke: '1px black',
        MozTextStroke: '1px black',
        OTextStroke: '1px black',
        textStroke: '1px black' }}>The best combination of Japanese and Italian since World War 2</p>
        </motion.div>
      </header>
      <main>
        <section className="specials row justify-content-around mb-5">
          {/* specials will be its own component thay way it's easier to update( in a real world setting) */}
          <h1 style={{margin: "0 auto", textAlign: "center", fontFamily: "Onick"}}>Today's Specials</h1>
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card p-3">
            <img
        src={randomRoll.image}
        className="card-img-top menu-img"
        alt="Today's Sushi special"
      />
        <h3 className="card-title menu-title">{randomRoll.title}</h3>
        <p className="card-text" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>{randomRoll.description}</p>
      <div className="card-text mt-auto">
        {/* using conditional rendering here so that if the price is an array, due to there being options, it displays the array.  If not, it just displays the regular price. */}
                {Array.isArray(randomRoll.price) ? (
                  <select>
                    {randomRoll.price.map((price, priceIndex) => (
                      <option key={priceIndex}>{price}</option>
                    ))}
                  </select>
                ) : (
                  `Price: $${randomRoll.price}`
                )}
              </div>
              </div>
              </div>
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card p-3">
            <img
        src={randomPizza.image}
        className="card-img-top menu-img"
        alt="Today's Pizza special"
      />
        <h3 className="card-title menu-title">{randomPizza.title}</h3>
        <p className="card-text" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>{randomPizza.description}</p>
      <div className="card-text mt-auto">
        {/* using conditional rendering here so that if the price is an array, due to there being options, it displays the array.  If not, it just displays the regular price. */}
                {Array.isArray(randomPizza.price) ? (
                  <select>
                    {randomPizza.price.map((price, priceIndex) => (
                      <option key={priceIndex}>{price}</option>
                    ))}
                  </select>
                ) : (
                  `Price: $${randomPizza.price}`
                )}
              </div>
              </div>
              </div>
        </section>

        <section className="about-us mb-5" style={{backgroundColor: "#ff00c1"}}>
          {/* about us will obvoulsy be its own component. we can use it inside the home component though if we wanted to */}
          <h2 className="justify-content-center" style={{margin: "0 auto", textAlign: "center", fontFamily: "Onick", color: "whitesmoke", WebkitTextStroke: '1px black',
        MozTextStroke: '1px black',
        OTextStroke: '1px black',
        textStroke: '1px black' }}>About Us</h2>
          <p style={{fontFamily: "Arial"}}>
            We at Collin and Tony's House of Sushi and Pizza take pride in
            offering a unique culinary experience with a fusion of Japanese and
            Italian flavors.
          </p>
          <p style={{fontFamily: "Arial"}}>
            Our dedicated chefs use only the finest ingredients to create
            mouthwatering sushi and pizza that will leave a lasting impression
            on your taste buds. Better ingredients, better pizza and sushi,
            better Collin and Tony.
          </p>
        </section>

        <section className="contact mb-5" style={{backgroundColor: "#ff00c1"}}>
        <h2 className="justify-content-center" style={{margin: "0 auto", textAlign: "center", fontFamily: "Onick", color: "whitesmoke", WebkitTextStroke: '1px black',
        MozTextStroke: '1px black',
        OTextStroke: '1px black',
        textStroke: '1px black' }}>Contact Us</h2>
          <p style={{fontFamily: "Arial"}}>
            Address: 123 Baker Street, Kewlsville, NE, 40220
            <br />
            Phone: (555) 123-4567
            <br />
            Email: contact@cntpns.com
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
