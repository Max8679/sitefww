function pain() {
  let pain = document.querySelectorAll(".pain");
  let brainPain = document.querySelector(".brain-pain");

  pain.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      brainPain.classList.remove("pain-opacity-0");
      brainPain.classList.add("pain-opacity");
    });
    element.addEventListener("mouseout", function () {
      brainPain.classList.remove("pain-opacity");
      brainPain.classList.add("pain-opacity-0");
    });
  });
}

function checkWidth() {
  var width = window.innerWidth;
  if (width > 450) {
    pain();
  }
}

window.onload = checkWidth;

// document.addEventListener("DOMContentLoaded", function () {
//   let pain = document.querySelectorAll(".pain");
//   let brainPain = document.querySelector(".brain-pain");

//   pain.forEach(function (element) {
//     element.addEventListener("mouseover", function () {
//       brainPain.classList.remove("pain-opacity-0");
//       brainPain.classList.add("pain-opacity");
//     });
//     element.addEventListener("mouseout", function () {
//       brainPain.classList.remove("pain-opacity");
//       brainPain.classList.add("pain-opacity-0");
//     });
//   });
// });
