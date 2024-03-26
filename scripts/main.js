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
