//===========please feel free to update any wording. make it goofy, more realistic, whatever! I just threw down some BS to fill the page up with content.=====================

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap - npm install bootstrap@latest if you're having probs

function Home() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
      <header className="text-center mb-5">
        <h1 className="display-4">
          Collin and Tony's House of Sushi and Pizza
        </h1>
        <p className="lead">Delightful Fusion of Sushi and Pizza</p>
      </header>
      <main>
        <section className="specials row justify-content-around mb-5">
          {/* specials will be its own component thay way it's easier to update( in a real world setting) */}
          <h1>Today's Specials</h1>
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card p-3">
              <img
                src="/sushi.png"
                className="card-img-top"
                alt="Sushi Special"
              />
              <div className="card-body">
                <h3 className="card-title">Sushi Combo</h3>
                <p className="card-text">
                  Enjoy a delightful combination of fresh sushi rolls. Perfect
                  for sushi lovers!
                </p>
                <p className="card-text">Price: $19.99</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card p-3">
              <img
                src="/pizza.png"
                className="card-img-top"
                alt="Pizza Special"
              />
              <div className="card-body">
                <h3 className="card-title">Classic Pizza</h3>
                <p className="card-text">
                  Our classic pizza with a thin crust, rich tomato sauce, and a
                  variety of toppings.
                </p>
                <p className="card-text">Price: $15.99</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us mb-5">
          {/* about us will obvoulsy be its own component. we can use it inside the home component though if we wanted to */}
          <h2>About Us</h2>
          <p>
            We at Collin and Tony's House of Sushi and Pizza take pride in
            offering a unique culinary experience with a fusion of Japanese and
            Italian flavors.
          </p>
          <p>
            Our dedicated chefs use only the finest ingredients to create
            mouthwatering sushi and pizza that will leave a lasting impression
            on your taste buds. Better ingredients, better pizza and sushi,
            better Collin and Tony.
          </p>
        </section>
        {/* =====================at somepoint we will make a menu component and link a route to it, but i just did this for now.================== */}
        <section className="menu mb-5">
          <h2>Our Menu</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>Sushi Selection</h3>
              <ul>
                <li>Sashimi Platter</li>
                <li>Dragon Roll</li>
                <li>Spicy Tuna Roll</li>
                <li>Vegetarian Maki</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h3>Pizza Varieties</h3>
              <ul>
                <li>Margherita Pizza</li>
                <li>Pepperoni Delight</li>
                <li>Vegetarian Supreme</li>
                <li>Hawaiian Bliss</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact mb-5">
          <h2>Contact Us</h2>
          <p>
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
