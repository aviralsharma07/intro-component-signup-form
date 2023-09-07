const signUpButton = document.querySelector(".btn");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

signUpButton.addEventListener("click", () => {
  const allInputs = document.querySelectorAll(".form input");

  allInputs.forEach((input) => {
    const errorMessage = document.querySelector(`.${input.id}`);
    errorMessage.style.display = "none";

    if (input.id === "email" && !emailPattern.test(input.value) && input.value !== "") {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Please provide a valid email address";
    }
    if (input.id === "password" && input.value.length < 6) {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Password must be at least 6 characters";
    }
    if (input.value === "") {
      errorMessage.style.display = "block";
      errorMessage.textContent = `${input.placeholder} cannot be empty`;
    }
  });
});

document.addEventListener("click", (event) => {
  const form = document.querySelector(".form");
  if (!form.contains(event.target)) {
    const allErrorMessages = document.querySelectorAll(".error");
    allErrorMessages.forEach((errorMessage) => {
      errorMessage.style.display = "none";
    });
  }
});
