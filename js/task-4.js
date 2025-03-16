function getShippingCost(country) {
  const message = "Shipping to ${country} will cost ${price} credits";
  switch (country) {
    case "China":
      let price = 100;
      console.log(message);
      break;
    case "Chile":
      let price = 250;
      console.log(message);
      break;
    case "Australia":
      let price = 170;
      console.log(message);
      break;
    case "Jamaica":
      let price = 120;
      console.log(message);
      break;
    default:
      console.log("Sorry, there is no delivery to your country");
  }
}
getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");
