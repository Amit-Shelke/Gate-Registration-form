document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gateForm");
  const fullname = document.getElementById("fullname");
  const phone = document.getElementById("phone");

  form.addEventListener("submit", function (e) {
      // Validate full name - allow only alphabets and spaces
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(fullname.value.trim())) {
          alert("Name should only contain alphabets and spaces.");
          fullname.focus();
          e.preventDefault();
          return;
      }

      // Validate phone number - only 10 digits and cannot start with 0,1,2,3,4,5
      const phoneDigits = phone.value.replace(/\D/g, "");
      const invalidStartingDigits = /^[0-5]/;  // Check if it starts with 0,1,2,3,4,5
      if (phoneDigits.length !== 10) {
          alert("Phone number must be exactly 10 digits.");
          phone.focus();
          e.preventDefault();
          return;
      }

      if (invalidStartingDigits.test(phoneDigits)) {
          alert("Phone number cannot start with 0, 1, 2, 3, 4, or 5.");
          phone.focus();
          e.preventDefault();
          return;
      }
  });
});
