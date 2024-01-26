// making one array for the whole menu, and then multiple inner arrays for the different sections of the menu.  I'll start with just drinks, appetizers, soup/salad, mains, and desserts.  I'll give each item some key/value pairs of title, image, price, and description.  Oh, I'll also add an item so we can use that as an index

const menuArray = [
  [
    {"item": "1", "title": "Asahi Super Dry Beer", "image": "https://www.asahisuperdry.com/media/images/OurBeer-lg.original.jpg", "price": "4.99", "description": "A refreshing Japanese brew ith a light, crisp taste.  4.7 ABV"}
  ]
]

const drinksArray = menuArray[0];

export { menuArray, drinksArray };