//! Functionality: open / close a modal
// Open the modal
const openBtn = document.getElementById("menuButton");
const closeBtn = document.getElementById("closeButton");
const mainModal = document.getElementById("modal");
const viewDealinfo = document.getElementById("viewDeal");

openBtn.addEventListener("click", (event) => {
  openBtn.style.display = "none";
  mainModal.style.display = "flex";
});

// Close the modal and show the menu button
closeBtn.addEventListener("click", (event) => {
  mainModal.style.display = "none";
  viewDealinfo.style.display = "none";
  form.style.display = "flex";
  openBtn.style.display = "flex";
  createJobBtn.style.backgroundColor = "";
  createJobBtn.style.fontSize = "";
  createJobBtn.innerHTML = "Create job";
});

//! Some form validation for fields of the form
function highlightInvalidFields(form) {
  const invalidFields = form.querySelectorAll(":invalid");
  invalidFields.forEach((field) => {
    // Red color of borders for invalid fields
    field.style.outlineColor = "red";
  });

  // Reset border color for valid fields
  const validFields = form.querySelectorAll(":valid");
  validFields.forEach((field) => {
    field.style.outlineColor = ""; // Reset border color
  });
}

// Function for form validation
function validationFormFields(form) {
  if (!form.checkValidity()) {
    // If form is not valid, return false to prevent further processing
    highlightInvalidFields(form);
    // Display validation messages to the user
    form.reportValidity();
    return false;
  }
  return true;
}

//! Functionality: sent POST request
const form = document.getElementById("form");
const formData = new FormData(form);

const createJobBtn = document.getElementById("createJobButton");

createJobBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  // Using the highlightInvalidFields function (I wrote it above)
  if (!validationFormFields(form)) {
    return;
  }

  // Changing CSS properties for the createJobButton (color, font-size and the inner text)
  createJobBtn.style.backgroundColor = "red";
  createJobBtn.style.fontSize = "1rem";
  createJobBtn.innerHTML = "Request is sent";

  // Submit request by clicking the Create Job Button
  const first_address_url = "https://api.workiz.com/job/97CUTT";
  var second_address_url = "https://httpbin.org/post";

  async function submitFormData() {
    try {
      const response = await fetch(second_address_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error("Something went wrong with the response!");
      }

      const responseData = await response.json();
      console.log("Form data has been sent successfully!", responseData);

      // Hide the form after form data has been sent successfully
      form.style.display = "none";
      // Show a div block with text information and a link "ViewDeal" after form data has been sent successfully
      viewDeal.style.display = "block";

      // The submitFormData function continues to work
    } catch (error) {
      console.error("Error, form data has not been sent!", error.message);
    }
  }

  await submitFormData();
});
