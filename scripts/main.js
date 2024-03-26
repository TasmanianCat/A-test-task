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
  form.style.display = "grid";
  createJobBtn.innerHTML = "Create job";
  mainModal.style.display = "none";
  viewDealinfo.style.display = "none";
  openBtn.style.display = "flex";
  createJobBtn.style.backgroundColor = "";
  createJobBtn.style.fontSize = "";
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

const createJobBtn = document.getElementById("createJobButton");

createJobBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

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

      // Clear form fields after form data has been sent successfully
      clearForm();

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

//! Functionality: clear form after data has been sent successfully
// Clear form fields after form data has been sent successfully (This function was placed above)
function clearForm() {
  form.reset();
}

// Clear form fields
// function clearForm() {
//   const firstNameInp = document.getElementById("firstName");
//   if (firstNameInp.value !== "" && firstNameInp.value !== null) {
//     firstNameInp.value = "";
//     firstNameInp.style.outlineColor = "";
//   }

//   const lastNameInp = document.getElementById("lastName");
//   if (lastNameInp.value !== "" && lastNameInp.value !== null) {
//     lastNameInp.value = "";
//     lastNameInp.style.outlineColor = "";
//   }
//   const telInp = document.getElementById("tel");
//   if (telInp.value !== "" && telInp.value !== null) {
//     telInp.value = "";
//     telInp.style.outlineColor = "";
//   }

//   const emailInp = document.getElementById("email");
//   if (emailInp.value !== "" && emailInp.value !== null) {
//     emailInp.value = "";
//     emailInp.style.outlineColor = "";
//   }

//   const selectJobInp = document.getElementById("selectJob");
//   if (selectJobInp.value !== "" && selectJobInp.value !== null) {
//     selectJobInp.value = "0";
//     selectJobInp.style.outlineColor = "";
//   }

//   const selectAddInfoInp = document.getElementById("selectAddInfo");
//   if (selectAddInfoInp.value !== "" && selectAddInfoInp.value !== null) {
//     selectAddInfoInp.value = "0";
//     selectAddInfoInp.style.outlineColor = "";
//   }

//   const descriptionInp = document.getElementById("description");
//   if (descriptionInp.value !== "" && descriptionInp.value !== null) {
//     descriptionInp.value = "";
//     descriptionInp.style.outlineColor = "";
//   }

//   const addressInp = document.getElementById("address");
//   if (addressInp.value !== "" && addressInp.value !== null) {
//     addressInp.value = "";
//     addressInp.style.outlineColor = "";
//   }

//   const cityInp = document.getElementById("city");
//   if (cityInp.value !== "" && cityInp.value !== null) {
//     cityInp.value = "";
//     cityInp.style.outlineColor = "";
//   }
//   const stateInp = document.getElementById("state");
//   if (stateInp.value !== "" && stateInp.value !== null) {
//     stateInp.value = "";
//     stateInp.style.outlineColor = "";
//   }

//   const zipCodeInp = document.getElementById("zipCode");
//   if (zipCodeInp.value !== "" && zipCodeInp.value !== null) {
//     zipCodeInp.value = "";
//     zipCodeInp.style.outlineColor = "";
//   }

//   const selectAreaInp = document.getElementById("selectArea");
//   if (selectAreaInp.value !== "" && selectAreaInp.value !== null) {
//     selectAreaInp.value = "0";
//     selectAreaInp.style.outlineColor = "";
//   }

//   const dateInp = document.getElementById("date");
//   if (dateInp.value !== "" && dateInp.value !== null) {
//     dateInp.value = "";
//     dateInp.style.outlineColor = "";
//   }
//   const beginTimeInp = document.getElementById("beginTime");
//   if (beginTimeInp.value !== "" && beginTimeInp.value !== null) {
//     beginTimeInp.value = "";
//     beginTimeInp.style.outlineColor = "";
//   }

//   const finishTimeInp = document.getElementById("finishTime");
//   if (finishTimeInp.value !== "" && finishTimeInp.value !== null) {
//     finishTimeInp.value = "";
//     finishTimeInp.style.outlineColor = "";
//   }

//   const selectTechnicianInp = document.getElementById("selectTechnician");
//   if (selectTechnicianInp.value !== "" && selectTechnicianInp.value !== null) {
//     selectTechnicianInp.value = "0";
//     selectTechnicianInp.style.outlineColor = "";
//   }
//   return false;
// }
