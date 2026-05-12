const colorOptions = document.querySelectorAll(".color-option");
const powertrainOptions = document.querySelectorAll(".option");
const accessoryDetails = document.querySelectorAll(".Accessories-option");

colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    colorOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});
powertrainOptions.forEach((option) => {
  option.addEventListener("click", () => {
    powertrainOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});
accessoryDetails.forEach((detail) => {
  detail.addEventListener("click", () => {
    accessoryDetails.forEach((det) => det.classList.remove("selected"));
    detail.classList.add("selected");
  });
});
