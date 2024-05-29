document.addEventListener("DOMContentLoaded", function () {
  // Scroll to top button
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Sticky header
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 20);
  });

  // EMAIL SUB
 

  // Form validation
  const form = document.getElementById("reservationForm");

  // Inputs
  const nameInput = document.getElementById("name");
  const phoneNumberInput = document.getElementById("phone_number");
  const numberInput = document.getElementById("number");
  const dateInput = document.getElementById("date");
  const timeInput = document.getElementById("time");

  // Warnings
  const nameWarning = document.getElementById("name-warning");
  const phoneWarning = document.getElementById("phone-warning");
  const numberWarning = document.getElementById("number-warning");
  const dateWarning = document.getElementById("date-warning");
  const timeWarning = document.getElementById("time-warning");

  // Validate form inputs
  form.addEventListener("submit", function (event) {
    console.log("Script loaded");
    let valid = true;

    // Validate name input (maximum 100 characters)
    if (nameInput.value.length > 100) {
      nameWarning.style.display = "block";
      valid = false;
    } else {
      nameWarning.style.display = "none";
    }

    // Validate phone number input (maximum 11 characters)
    if (phoneNumberInput.value.length > 11) {
      phoneWarning.style.display = "block";
      valid = false;
    } else {
      phoneWarning.style.display = "none";
    }

    // Validate number of people (maximum 8)
    if (parseInt(numberInput.value) > 8) {
      numberWarning.style.display = "block";
      valid = false;
    } else {
      numberWarning.style.display = "none";
    }

    // Validate date input (should not be empty)
    if (dateInput.value === "") {
      dateWarning.style.display = "block";
      valid = false;
    } else {
      dateWarning.style.display = "none";
    }

    // Validate time input (should not be empty)
    if (timeInput.value === "") {
      timeWarning.style.display = "block";
      valid = false;
    } else {
      timeWarning.style.display = "none";
    }

    // If the form is not valid, prevent submission
    if (!valid) {
      event.preventDefault();
      console.log("Form validation failed");
    } else {
      console.log("Form submitted successfully");
    }
  });
});
