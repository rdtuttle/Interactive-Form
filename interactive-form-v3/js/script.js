document.getElementById("name").focus();

const otherJobRole = document.getElementById("other-job-role")
const job = document.getElementById("title")
otherJobRole.style.display = "none";

//event listener to hide "other job" textbox when not selected

job.addEventListener ("change", ()=> {
  if (job.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});
//set T-Shirt Design to coorespond with matching colors in dropdown menu
const color = document.getElementById("color");
const design = document.getElementById("design");
color.disabled = true;

design.addEventListener("change", () => {
  color.disabled = false;
  for (let i = 0; i < color.children.length; i++) {
    const value = event.target.value;
    const attribute = color.children[i].getAttribute("data-theme");
    const option = color.children[i];
    if (value === attribute) {
      option.hidden = false;
      option.setAttribute("selected", true);
    } else {
      option.hidden = true;
      option.setAttribute("selected", false);
    }
  }
});
//Adds total price of activities checked
const activities = document.getElementById("activities");
const totalCost = document.getElementById("activities-cost");
let total = 0;

activities.addEventListener("change", (e) => {
  const clicked = e.target;
  const dataCost = clicked.getAttribute("data-cost");
  const cost = +dataCost;
  if (clicked.checked) {
    total += cost;
  }
  if (clicked.checked === false) {
    total -= cost;
  }
  totalCost.innerHTML = `<p>Total: $${total}</p>`
});

