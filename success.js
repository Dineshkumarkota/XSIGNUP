document.addEventListener("DOMContentLoaded", () => {
  const userEmailSpan = document.getElementById("userEmail");
  const dismissBtn = document.getElementById("dismissBtn");

  // Get email from localStorage
  const email = localStorage.getItem("subscribedEmail");

  if (email) {
    userEmailSpan.textContent = email;
  }

  dismissBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
