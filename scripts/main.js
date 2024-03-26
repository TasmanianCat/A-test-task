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
  //   form.style.display = "flex";
  openBtn.style.display = "flex";
  //   createJobBtn.style.backgroundColor = "";
  //   createJobBtn.style.fontSize = "";
  //   createJobBtn.innerHTML = "Create job";
});

//! Functionality: sent POST request
const form = document.getElementById("form");
const formData = new FormData(form);

const createJobBtn = document.getElementById("createJobButton");

createJobBtn.addEventListener("click", async (event) => {
  event.preventDefault();

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
    } catch (error) {
      console.error("Error, form data has not been sent!", error.message);
    }
  }

  await submitFormData();
});
