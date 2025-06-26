const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const form = document.getElementById("subscribeForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    emailError.style.display = "block";
    emailInput.classList.add("error");
    return;
  }

  emailError.style.display = "none";
  emailInput.classList.remove("error");

  localStorage.setItem("subscribedEmail", email);
  window.location.href = "success.html";
});
