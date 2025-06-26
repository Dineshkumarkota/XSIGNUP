const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const subscribeBtn = document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default behavior if inside a form

  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    emailError.style.display = "block";
    emailInput.classList.add("error");
    return;
  }

  emailError.style.display = "none";
  emailInput.classList.remove("error");

  // Save email to localStorage
  localStorage.setItem("subscribedEmail", email);

  // Redirect to success page
  window.location.href = "success.html";
});
