function getShippingCost(country) {
  const message = `Shipping to ${country} will cost `;
  switch (country) {
    case "China":
      return message + "100 credits";
    case "Chile":
      return message + "250 credits";
    case "Australia":
      return message + "170 credits";
    case "Jamaica":
      return message + "120 credits";
    default:
      return "Sorry, there is no delivery to your country";
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
