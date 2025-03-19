// script.js
document.addEventListener("DOMContentLoaded", function () {
  const details = document.querySelector("details");
  
  details.addEventListener("toggle", function () {
      if (details.open) {
          console.log("Section revealed");
      } else {
          console.log("Section hidden");
      }
  });
});
