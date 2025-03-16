function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  return totalPrice;
  if (totalPrice > customerCredits) {
    const result = "Insufficient funds!";
  } else {
    const result = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
  return result;
}
const transaction1 = makeTransaction(5, 3000, 23000);
const transaction2 = makeTransaction(3, 1000, 15000);
const transaction3 = makeTransaction(10, 5000, 8000);
const transaction4 = makeTransaction(8, 2000, 10000);
const transaction5 = makeTransaction(10, 500, 5000);
console.log(transaction1);
console.log(transaction2);
console.log(transaction3);
console.log(transaction4);
console.log(transaction5);
