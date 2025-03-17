function getShippingCost(country) {
  const message = `Shipping to ${country} will cost `;
  switch (country) {
    case "China":
      const creditChina = "100 credits";
      console.log(message + creditChina);
      break;
    case "Chile":
      const creditChile = "250 credits";
      console.log(message + creditChile);
      break;
    case "Australia":
      const creditAustralia = "170 credits";
      console.log(message + creditAustralia);
      break;
    case "Jamaica":
      const creditJamaica = "120 credits";
      console.log(message + creditJamaica);
      break;
    default:
      console.log("Sorry, there is no delivery to your country");
  }
}
const getCost = getShippingCost("Australia");
console.log(getCost);
const getCost1 = getShippingCost("Germany");
console.log(getCost1);
const getCost2 = getShippingCost("China");
console.log(getCost2);
const getCost3 = getShippingCost("Chile");
console.log(getCost3);
const getCost4 = getShippingCost("Jamaica");
console.log(getCost4);
const getCost5 = getShippingCost("Sweden");
console.log(getCost5);
