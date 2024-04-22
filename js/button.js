function changeText(button) {
  button.classList.toggle("active");
  button.classList.toggle("inactive");
  if (button.innerHTML === "Active") {
    button.innerHTML = "Inactive";
  } else {
    button.innerHTML = "Active";
  }
}