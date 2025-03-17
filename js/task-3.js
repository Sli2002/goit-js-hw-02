function checkForSpam(message) {
  const newMessage = message.toLowerCase();
  const hasSpam = newMessage.includes("spam");
  const hasSale = newMessage.includes("sale");
  const banWords = hasSale || hasSpam;
  if (banWords) {
    console.log(true);
  } else {
    console.log(false);
  }
}
const res1 = checkForSpam("Latest technology news");
console.log(res1);
const res2 = checkForSpam("JavaScript weekly newsletter");
console.log(res2);
const res3 = checkForSpam("Get best sale offers now!");
console.log(res3);
const res4 = checkForSpam("Amazing SalE, only tonight!");
console.log(res4);
const res5 = checkForSpam("Trust me, this is not a spam message");
console.log(res5);
const res6 = checkForSpam("Get rid of sPaM emails. Our book in on sale!");
console.log(res6);
const res7 = checkForSpam("[SPAM] How to earn fast money?");
console.log(res7);
