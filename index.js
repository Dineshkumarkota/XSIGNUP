
const emailInput = document.getElementById("email");
const userEmailSpan = document.getElementById("userEmail");
const subscribeBtn = document.getElementById("subscribeBtn");
const successMessage = document.getElementById("successMessage");
const formSection = document.getElementById("formSection");
const imageSection = document.getElementById("imageSection");
const dismissBtn = document.getElementById("dismissBtn");
const atrritbution = document.getElementById("attribution");
const emailError = document.getElementById("emailError");

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    emailError.style.display = "block";
    emailInput.classList.add("error");
    return; // Prevent submit
  }

  emailError.style.display = "none";
  emailInput.classList.remove("error");
  formSection.style.display = "none";
  imageSection.style.display = "none";
  successMessage.style.display = "block";
  document.querySelector(".main").style.display = "none";
  atrritbution.style.display = "none";
  userEmailSpan.textContent = email;
});

dismissBtn.addEventListener("click", () => {
  formSection.style.display = "block";
  imageSection.style.display = "flex"; // restore flex layout
  successMessage.style.display = "none";
  document.querySelector(".container").style.display = "flex";
});