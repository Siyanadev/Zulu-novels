document.addEventListener("DOMContentLoaded", function () {

  // Welcome message
  alert("Welcome to Zulu Novels 📚🔥");

  // Log message (for testing)
  console.log("Zulu Novels app is running...");

  // Optional: button click effect
  let link = document.querySelector("a");

  if (link) {
    link.addEventListener("click", function () {
      alert("Opening WhatsApp Channel 📲");
    });
  }

});