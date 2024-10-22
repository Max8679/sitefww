document.addEventListener("DOMContentLoaded", function () {
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
});

// document.addEventListener("DOMContentLoaded", function () {
//     let pain = document.querySelectorAll(".pain");
//     let brainPain = document.querySelector(".brain-pain");

//     pain.forEach(function (element) {
//       element.addEventListener("mouseover", function () {
//         brainPain.classList.add("pain-opacity");
//       });
//       element.addEventListener("mouseout", function () {
//         brainPain.classList.remove("pain-opacity");
//       });
//     });
//   });
