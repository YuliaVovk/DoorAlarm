const button = document.querySelector("button");
const output = document.querySelector(".output");
button.addEventListener("click", () => {
  const isOpen = document.querySelector("#isOpen");
  const isAlarmOn = document.querySelector("#isAlarmOn");
  console.log(isOpen.checked, isAlarmOn.checked);

  if (isOpen.checked === false && isAlarmOn.checked === false) {
    output.innerText = "Forgot to turn on alarm";
  } else if (isOpen.checked === true && isAlarmOn.checked === false) {
    output.innerText = "Homeowner is at home";
  } else if (isOpen.checked === false && isAlarmOn.checked === true) {
    output.innerText = "Everything is under protection";
  } else {
    output.innerText = "Calling the police!!!";
  }
});
