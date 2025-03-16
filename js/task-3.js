function checkForSpam(message) {
  const newMessage = message.toLowerCase();
  const hasSpam = newMessage.includes("spam");
  const hasSale = newMessage.includes("sale");
  const banWords = hasSale || hasSpam;
  if (banWords) {
    return true;
    console.log(true);
  } else {
    return false;
    console.log(false);
  }
}
checkForSpam("Latest technology news");
checkForSpam("JavaScript weekly newsletter");
checkForSpam("Get best sale offers now!");
checkForSpam("Amazing SalE, only tonight!");
checkForSpam("Trust me, this is not a spam message");
checkForSpam("Get rid of sPaM emails. Our book in on sale!");
checkForSpam("[SPAM] How to earn fast money?");
