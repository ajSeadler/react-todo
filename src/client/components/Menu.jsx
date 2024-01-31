// we'll have to input various bootstrap components as we build this out, but this is just a placeholder.
// I'm thinking, in our data file, we could have sections for like drinks, apps, etc.  Then we just fetch and map out each section into individual cards and such

import { drinksArray, appsArray, soupSaladArray, rollsArray, nigiriArray } from "./MenuArray";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  return (
    <>
    {/* Stole most of this from the specials on the home page cause it's pretty clea and utilitarian.   But I'll need to work on the max height for the images so they're uniform */}
    <Navbar expand="lg" style={{ width: "80%", margin: "0 auto" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ alignItems: "center", margin: "0 auto" }}>
            <Nav.Link href="#drinks">Drinks</Nav.Link>
            <Nav.Link href="#apps">Appetizers</Nav.Link>
            <Nav.Link href="#soupSalad">Soup/Salad</Nav.Link>
            <Nav.Link href="#rolls">Sushi Rolls</Nav.Link>
            <Nav.Link href="#nigiri">Nigiri (Ala Carte)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 menu">
        <h2>Drinks</h2>
        <div className="row" id="drinks">
          {/* Mapping over the drinks array */}
          {drinksArray.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-6 mb-4">
              <div className="card p-3">
                <img
                  src={item.image}
                  className="card-img-top menu-img"
                  alt="A delicious beverage"
                />
                <div className="card-body">
                  <h3 className="card-title menu-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      <h2>Appetizers</h2>
      <div className="row" id="apps">
      {appsArray.map((item, index) => (
        <div key={index} className="col-md-6 col-lg-6 mb-4">
         <div className="card p-3">
           <img
             src={item.image}
             className="card-img-top menu-img"
             alt="You deserve an appetizer"
           />
           <div className="card-body">
             <h3 className="card-title">{item.title}</h3>
             <p className="card-text">
               {item.description}
             </p>
             <p className="card-text">Price: ${item.price}</p>
           </div>
         </div>
       </div>
      ))}
      </div>
      <h2>Soup/Salad</h2>
      <div className="row" id="soupSalad">
      {soupSaladArray.map((item, index) => (
        <div key={index} className="col-md-6 col-lg-6 mb-4">
         <div className="card p-3">
           <img
             src={item.image}
             className="card-img-top menu-img"
             alt="All of these items are healthy as long as you don't look into it"
           />
           <div className="card-body">
             <h3 className="card-title">{item.title}</h3>
             <p className="card-text">
               {item.description}
             </p>
             <p className="card-text">Price: ${item.price}</p>
           </div>
         </div>
       </div>
      ))}
      </div>
      <h2>Sushi Rolls</h2>
      <div className="row" id="rolls">
      {rollsArray.map((item, index) => (
        <div key={index} className="col-md-6 col-lg-6 mb-4">
         <div className="card p-3">
           <img
             src={item.image}
             className="card-img-top menu-img"
             alt="Enjoy a lovely sushi roll"
           />
           <div className="card-body">
             <h3 className="card-title">{item.title}</h3>
             <p className="card-text">
               {item.description}
             </p>
             <p className="card-text">Price: ${item.price}</p>
           </div>
         </div>
       </div>
      ))}
      </div>
      <h2>Nigiri (ala carte)</h2>
      <div className="row" id="nigiri">
      {nigiriArray.map((item, index) => (
        <div key={index} className="col-md-6 col-lg-6 mb-4">
         <div className="card p-3">
           <img
             src={item.image}
             className="card-img-top menu-img"
             alt="Enjoy a lovely sushi roll"
           />
           <div className="card-body">
             <h3 className="card-title">{item.title}</h3>
             <p className="card-text">
               {item.description}
             </p>
             <p className="card-text">Price: ${item.price}</p>
           </div>
         </div>
       </div>
      ))}
      </div>
      </div>
    </>
  )
}