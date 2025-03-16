function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message, maxLength;
    console.log(message, maxLength);
  } else {
    const newMessage = message.slice(0, maxLength);
    const spanMessage = (newMessage += "...");
    return spanMessage, maxLength;
    console.log(spanMessage, maxLength);
  }
}

const form1 = formatMessage("Curabitur ligula sapien", 16);
const form2 = formatMessage("Curabitur ligula sapien", 23);
const form3 = formatMessage("Vestibulum facilisis purus nec", 20);
const form4 = formatMessage("Vestibulum facilisis purus nec", 30);
const form5 = formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
const form6 = formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
console.log(form1);
console.log(form2);
console.log(form3);
console.log(form4);
console.log(form5);
console.log(form6);
