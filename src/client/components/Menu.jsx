// we'll have to input various bootstrap components as we build this out, but this is just a placeholder.
// I'm thinking, in our data file, we could have sections for like drinks, apps, etc.  Then we just fetch and map out each section into individual cards and such

import { drinksArray, appsArray, soupSaladArray, rollsArray, nigiriArray } from "./MenuArray";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterMenuItems = (menuArray) =>
  menuArray.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

const filteredDrinks = filterMenuItems(drinksArray);
const filteredApps = filterMenuItems(appsArray);
const filteredSoupSalad = filterMenuItems(soupSaladArray);
const filteredRolls = filterMenuItems(rollsArray);
const filteredNigiri = filterMenuItems(nigiriArray);

  return (
    <>
    {/* Stole most of this from the specials on the home page cause it's pretty clea and utilitarian.   But I'll need to work on the max height for the images so they're uniform */}
    <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{width: "30%", margin: "0 auto", marginTop: "5px"}}
          />
        </Form>
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
        <div className="row justify-content-start" id="drinks">
          {/* Mapping over the drinks array */}
          {filteredDrinks.map((item, index) => (
  <div key={index} className="col-md-3 mb-4">
    <div className="card p-3 d-flex flex-column justify-content-between">
      <img
        src={item.image}
        className="card-img-top menu-img"
        alt="A delicious beverage"
      />
      <div className="card-body">
        <h3 className="card-title menu-title">{item.title}</h3>
        <p className="card-text">{item.description}</p>
      </div>
      <p className="card-text mt-auto">Price: ${item.price}</p>
    </div>
  </div>
))}
        </div>
        <h2>Appetizers</h2>
<div className="row justify-content-end" id="apps">
  {filteredApps.map((item, index) => (
    <div key={index} className="col-md-3 mb-4">
      <div className="card p-3 d-flex flex-column justify-content-between">
        <img
          src={item.image}
          className="card-img-top menu-img"
          alt="You deserve an appetizer"
        />
        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
        </div>
        <p className="card-text mt-auto">Price: ${item.price}</p>
      </div>
    </div>
  ))}
</div>

      <h2>Soup/Salad</h2>
      <div className="row justify-content-start" id="soupSalad">
      {filteredSoupSalad.map((item, index) => (
        <div key={index} className="col-md-3 mb-4">
         <div className="card p-3 d-flex flex-column justify-content-between">
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
             </div>
             <p className="card-text mt-auto">Price: ${item.price}</p>
         </div>
       </div>
      ))}
      </div>
      <h2>Sushi Rolls</h2>
      <div className="row justify-content-end" id="rolls">
      {filteredRolls.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
         <div className="card p-3 d-flex flex-column justify-content-between">
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
             </div>
             <p className="card-text mt-auto">Price: ${item.price}</p>
           </div>
         </div>
      ))}
      </div>
      <h2>Nigiri (ala carte)</h2>
      <div className="row justify-content-start" id="nigiri">
      {filteredNigiri.map((item, index) => (
      <div key={index} className="col-md-3 mb-4">
        <div className="card p-3 d-flex flex-column justify-content-between">
           <img
             src={item.image}
             className="card-img-top menu-img"
             alt="Enjoy some nigiri why not treat yourself"
           />
           <div className="card-body">
             <h3 className="card-title">{item.title}</h3>
             <p className="card-text">
               {item.description}
             </p>
             </div>
             <p className="card-text mt-auto">Price: ${item.price}</p>
           </div>
         </div>
      ))}
      </div>
      </div>
    </>
  )
}