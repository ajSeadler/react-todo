// we'll have to input various bootstrap components as we build this out, but this is just a placeholder.
// I'm thinking, in our data file, we could have sections for like drinks, apps, etc.  Then we just fetch and map out each section into individual cards and such

import { drinksArray, appsArray } from "./MenuArray"

export default function Menu() {
  return (
    <>
    <h1>Our Menu!</h1>
    <h2>Drinks</h2>
    {/* mapping over the drinks array, we'll do so again with the other sections */}
    {drinksArray.map((item, index) => (
        <div key={index}>
          {/* once we get into styling, we'll have the image and maybe the title on the front of the card and then when the user clicks on said card it will flip over to display the price and description. */}
          {/* Image is super large on the page, we'll style it within the card */}
          <img className="card-img-top" src={item.image} alt="A delicious beverage" />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
      <h2>Appetizers</h2>
      {appsArray.map((item, index) => (
        <div key={index}>
          <img className="card-img-top" src={item.image} alt="A delicious beverage" />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}