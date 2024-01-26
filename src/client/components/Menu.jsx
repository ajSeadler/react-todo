// we'll have to input various bootstrap components as we build this out, but this is just a placeholder.
// I'm thinking, in our data file, we could have sections for like drinks, apps, etc.  Then we just fetch and map out each section into individual cards and such

import { drinksArray } from "./MenuArray"

export default function Menu() {
  return (
    <>
    <h1>Our Menu!</h1>
    <h2>Drinks</h2>
    {drinksArray.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt="Asahi Super Dry" />
          <p>{item.title}</p>
          <p>Price: {item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}