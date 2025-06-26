const emailInput = document.getElementById("email");
const errorText = document.getElementById("error-text");
const subscribeBtn = document.getElementById("subscribeBtn");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Live check while typing
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    emailInput.classList.add("error");
    errorText.style.display = "block";
    errorText.style.color="tomato";
  } else {
    emailInput.classList.remove("error");
    errorText.style.display = "none";
  }
});

// Final check when submitting
subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    // Success action
    window.location.href = "success.html";
  } else {
    emailInput.classList.add("error");
    errorText.style.display = "block";
  }
});
