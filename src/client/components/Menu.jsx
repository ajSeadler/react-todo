// we'll have to input various bootstrap components as we build this out, but this is just a placeholder.
// I'm thinking, in our data file, we could have sections for like drinks, apps, etc.  Then we just fetch and map out each section into individual cards and such

import { drinksArray, appsArray } from "./MenuArray";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Menu() {
  return (
    <>
    <h1>Our Menu!</h1>
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
    <h2>Drinks</h2>
    {/* mapping over the drinks array, we'll do so again with the other sections */}
    {drinksArray.map((item) => (
      <>
       <div className="col-md-6 col-lg-5 mb-4">
         <div className="card p-3">
           <img
             src={item.image}
             className="card-img-top"
             alt="A delicious beverage"
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
       </>
      ))}
      <h2>Appetizers</h2>
      {appsArray.map((item, index) => (
       <>
       <div className="col-md-6 col-lg-5 mb-4">
         <div className="card p-3">
           <img
             src={item.image}
             className="card-img-top"
             alt="A delicious beverage"
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
       </>
      ))}
      </div>
    </>
  )
}