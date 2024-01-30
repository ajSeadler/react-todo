// we'll have to input various bootstrap components as we build this out, but this is just a placeholder.
// I'm thinking, in our data file, we could have sections for like drinks, apps, etc.  Then we just fetch and map out each section into individual cards and such

import { drinksArray, appsArray, rollsArray } from "./MenuArray";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  return (
    <>
    {/* Stole most of this from the specials on the home page cause it's pretty clea and utilitarian.   But I'll need to work on the max height for the images so they're uniform */}
    <h1 className="display-4 text-center">Our Menu!</h1>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 menu">
        <h2>Drinks</h2>
        <div className="row">
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
      <div className="row">
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
      <h2>Sushi Rolls</h2>
      <div className="row">
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
      </div>
    </>
  )
}