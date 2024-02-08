// we'll have to input various bootstrap components as we build this out, but this is just a placeholder.
// I'm thinking, in our data file, we could have sections for like drinks, apps, etc.  Then we just fetch and map out each section into individual cards and such

import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { drinksArray, appsArray, soupSaladArray, rollsArray, nigiriArray, calzoneArray, pizzaArray } from "./MenuArray";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Function to filter menu items
    const filterMenuItems = () => {
      // Your filtering logic here based on searchTerm
      // For example, you can filter drinksArray, appsArray, etc.
      // and combine them into a single array
      const filteredDrinks = drinksArray.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const filteredApps = appsArray.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const filteredSoupSalad = soupSaladArray.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const filteredRolls = rollsArray.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const filteredNigiri = nigiriArray.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const filteredPizza = pizzaArray.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      // Combine all filtered arrays into one
      const allFilteredItems = [...filteredDrinks, ...filteredApps, ...filteredSoupSalad, ...filteredRolls, ...filteredNigiri, ...filteredPizza];
      return allFilteredItems;
    };

    // Update filteredItems state
    setFilteredItems(filterMenuItems());
  }, [searchTerm]);

  // Function to handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // useEffect to monitor scroll position and determine whether or not to show the arrow button
  useEffect(() => {
    const handleScroll = () => {
      // scrolling past 300px will trigger arrow up icon
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    // remove the event listener when the component unmounts (so it doesnt run forever)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    {/* Stole most of this from the specials on the home page cause it's pretty clea and utilitarian.   But I'll need to work on the max height for the images so they're uniform */}
    <Form inline style={{ marginTop: "20px" }}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: "30%", margin: "0 auto", marginTop: "5px" }}
        />
      </Form>
      {/* Render filtered items in a grid with four items across */}
      {searchTerm.trim() !== "" && (
        <div className="filtered-items-grid">
          {filteredItems.map((item, index) => (
            <div key={index} className="item">
                <a key={index} href={`#${item.item}`} className="item">
              <span><img
          src={item.image}
          className="card-img-top menu-img"
          alt="Your search terms yielded this"
        /></span>
              <span>{item.title}</span>
            </a>
            </div>
          ))}
        </div>
      )}
    <Navbar expand="lg" style={{ width: "80%", margin: "0 auto" }}>
          {/* about us will obvoulsy be its own component. we can use it inside the home component though if we wanted to */}
          {/* about us will obvoulsy be its own component. we can use it inside the home component though if we wanted to */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "#ff00c1", border: "2px 2px solid white", margin: "0 auto"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ alignItems: "center", margin: "0 auto" }}>
            <Nav.Link href="#drinks" className="menu-nav-link">Drinks</Nav.Link>
            <Nav.Link href="#apps" className="menu-nav-link">Appetizers</Nav.Link>
            <Nav.Link href="#soupSalad" className="menu-nav-link">Soup/Salad</Nav.Link>
            <Nav.Link href="#rolls" className="menu-nav-link">Sushi Rolls</Nav.Link>
            <Nav.Link href="#nigiri" className="menu-nav-link">Nigiri</Nav.Link>
            <Nav.Link href="#calzones" className="menu-nav-link">Calzones</Nav.Link>
            <Nav.Link href="#pizza" className="menu-nav-link">Pizza</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container-fluid d-flex flex-column min-vh-100 menu">
      <h2 className="h2-menu" id="drinks">Drinks</h2>
<div className="row justify-content-end">
  {drinksArray.map((item, index) => (
    <div key={index} id={item.item} className="col-md-3 mb-4">
      <div className="card p-3 d-flex flex-column justify-content-between">
        <img
          src={item.image}
          className="card-img-top menu-img"
          alt="Enjoy a tasty beverage"
        />
        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
        </div>
        <div className="card-text mt-auto">
        {/* using conditional rendering here so that if the price is an array, due to there being options, it displays the array.  If not, it just displays the regular price. */}
                {Array.isArray(item.price) ? (
                  <select>
                    {item.price.map((price, priceIndex) => (
                      <option key={priceIndex}>{price}</option>
                    ))}
                  </select>
                ) : (
                  `Price: $${item.price}`
                )}
              </div>
      </div>
    </div>
  ))}
</div>
        <h2 className="h2-menu" id="apps">Appetizers</h2>
<div className="row justify-content-end">
  {appsArray.map((item, index) => (
    <div key={index} id={item.item} className="col-md-3 mb-4">
      <div className="card p-3 d-flex flex-column justify-content-between">
        <img
          src={item.image}
          className="card-img-top menu-img"
          alt="You deserve an appetizer\"
        />
        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
        </div>
        <div className="card-text mt-auto">
        {/* using conditional rendering here so that if the price is an array, due to there being options, it displays the array.  If not, it just displays the regular price. */}
                {Array.isArray(item.price) ? (
                  <select>
                    {item.price.map((price, priceIndex) => (
                      <option key={priceIndex}>{price}</option>
                    ))}
                  </select>
                ) : (
                  `Price: $${item.price}`
                )}
              </div>
      </div>
    </div>
  ))}
</div>

      <h2 className="h2-menu" id="soupSalad">Soup/Salad</h2>
      <div className="row justify-content-start">
      {soupSaladArray.map((item, index) => (
        <div key={index} id={item.item} className="col-md-3 mb-4">
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
      <h2 className="h2-menu" id="rolls">Sushi Rolls</h2>
      <div className="row justify-content-end">
      {rollsArray.map((item, index) => (
        <div key={index} id={item.item} className="col-md-4 mb-4">
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
      <h2 className="h2-menu" id="nigiri">Nigiri (ala carte)</h2>
      <div className="row justify-content-start">
      {nigiriArray.map((item, index) => (
      <div key={index} id={item.item} className="col-md-3 mb-4">
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
      <h2 className="h2-menu" id="calzones">Calzones</h2>
      <div className="row justify-content-center">
      {calzoneArray.map((item, index) => (
      <div key={index} item={item.item} className="col-md-3 mb-4">
        <div className="card p-3 d-flex flex-column justify-content-between">
           <img
             src={item.image}
             className="card-img-top menu-img"
             alt="It's like a sandwich but for italians and also they already have sandwiches and they're better than calzones."
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
      <h2 className="h2-menu" id="pizza">Pizza</h2>
      <div className="row justify-content-end">
      {pizzaArray.map((item, index) => (
      <div key={index} id={item.item} className="col-md-3 mb-4">
        <div className="card p-3 d-flex flex-column justify-content-between">
           <img
             src={item.image}
             className="card-img-top menu-img"
             alt="Yeah, I'm into fitness.  Fitness whole pizza in my mouth."
           />
           <div className="card-body">
             <h3 className="card-title">{item.title}</h3>
             <p className="card-text">
               {item.description}
             </p>
             </div>
             <p className="card-text mt-auto">Price:   <select>
              {item.price.map((price, priceIndex) => (
                <option key={priceIndex}>{price}</option>
              ))}
            </select></p>
           </div>
         </div>
      ))}
      </div>
      </div>
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop} style={{ position: "fixed", bottom: "20px", right: "20px", cursor: "pointer", backgroundColor: "yellow", padding: "20px", borderRadius: "50%" }}>
        <FaArrowUp style={{ color: "black", fontSize:'1.5rem' }} />
      </div>
      )}
    </>
  )
}