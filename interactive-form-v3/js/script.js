const name = document.getElementById("name");
const otherJobRole = document.getElementById("other-job-role")
const job = document.getElementById("title")
const color = document.getElementById("color");
const design = document.getElementById("design");
const activities = document.getElementById("activities");
const totalCost = document.getElementById("activities-cost");
const pay = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
const email = document.getElementById("email");
const ccNum = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");
name.focus();
otherJobRole.style.display = "none";

//event listener to hide "other job" textbox when not selected
job.addEventListener ("change", ()=> {
  if (job.value === "other") {
    otherJobRole.style.display = "block";
  }else {
    otherJobRole.style.display = "none";
  }
});
//event listener to set T-Shirt Design to coorespond with matching colors in dropdown menu
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

//Adds the total price of the activities checked in the Register for Activities section
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
//displays the paypal/bitcoin information when selected in the dropdown menu
paypal.style.display = "none";
bitcoin.style.display = "none";
pay.children[1].setAttribute("selected", "selected");
pay.addEventListener("change", (e)=> {
  if (e.target.value === "paypal") {
    paypal.style.display = "block";
    bitcoin.style.display = "none";
  }else if (e.target.value === "bitcoin") {
    bitcoin.style.display = "block";
    paypal.style.display ="none";
  }else if (e.target.value === "credit-card") {
    bitcoin.style.display = "none";
    paypal.style.display ="none";
  }
});

//function for form validation
function validation (element, isValid) {
  if (isValid === false) {
    event.preventDefault();
    element.className = "not-valid";
    element.classList.remove("valid");
    element.lastElementChild.style.display = "block";
  } else {
    element.className = "valid";
    element.classList.remove("not-valid");
    element.lastElementChild.style.display = "none"
  }
}
function validName () {
  const nameValue = name.value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  const nParent = name.parentElement;
  validation (nParent, nameIsValid);
}
function validEmail () {
  const emailValue = email.value;
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailValue);
  const eParent = email.parentElement;
  if (emailIsValid === false) {
    event.preventDefault();
    if (emailValue === "") {
      eParent.className = "not-valid";
      eParent.classList.remove("valid");
      eParent.lastElementChild.style.display = "block";
      eParent.lastElementChild.innerHTML = "Email field can't be empty";
    }else{
      eParent.className = "not-valid";
      eParent.classList.remove("valid");
      eParent.lastElementChild.style.display = "block";
      eParent.lastElementChild.innerHTML = "Email format is incorrect" }
  }else{
   eParent.className = "valid";
   eParent.classList.remove("not-valid");
   eParent.lastElementChild.style.display = "none"

  }
}
function validCC () {
  const cardValue = ccNum.value;
  const cardNumberIsValid = /^\d{13,16}$/.test(cardValue);
  const ccPar = ccNum.parentElement;
  validation(ccPar, cardNumberIsValid);
}
function validZip () {
  const zipValue = zip.value;
  const zipIsValid = /[0-9]{5}/.test(zipValue);
  const zipParent = zip.parentElement;
  validation(zipParent, zipIsValid);
}
function validForm () {
  if (total = 0) {
    form.parentElement.className = "not-valid";
    form.parentElement.classList.remove("valid");
    form.parentElement.lastElementChild.style.display = "block"
  }
}
function validCVV () {
  const cvvValue = cvv.value;
  const cvvIsValid = /[0-9]{3}/.test(cvvValue);
  const cvvParent = cvv.parentElement
  validation(cvvParent, cvvIsValid);
}
function validForm () {
  if (total === 0) {
    event.preventDefault();
    activities.classList.add('not-valid');
    document.getElementById('activities-hint').style.display = 'contents';
  }
  if (total !== 0) {
    activities.classList.add('valid');
    activities.classList.remove('not-valid');
    document.getElementById('activities-hint').style.display = 'none';
  }
}
form.addEventListener("submit", () => {
  validName();
  validEmail();
  validCC();
  validZip ();
  validCVV();
  validForm();
});

//adds additional highlighting for accessibility
const checkbox = document.querySelectorAll("input[type=checkbox]");
for (let i=0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("focus", () => {
    checkbox[i].parentElement.classList.add("focus")
  });
  checkbox[i].addEventListener("blur", () => {
    checkbox[i].parentElement.classList.remove("focus")
  });
}

//prevent conflicting registration in the form field for events occuring at the same time
activities.addEventListener("change", (e) =>{
  for(let i = 0; i < checkbox.length; i++){
    if(e.target.checked === true){
      if(checkbox[i].disabled === false && checkbox[i] !== e.target){
        if(checkbox[i].parentElement.children[2].textContent === e.target.parentElement.children[2].textContent){
        checkbox[i].disabled = true;
      }
    }
  }
    if(e.target.checked === false){
      if(checkbox[i].disabled === true && checkbox[i] !== e.target){
        if(checkbox[i].parentElement.children[2].textContent === e.target.parentElement.children[2].textContent){
        checkbox[i].disabled = false;
      }
    }
    }
  }
});
//keyup listener to update form status in realtime
name.addEventListener("keyup", (e) => {
  validName();
});
ccNum.addEventListener("keyup", (e) => {
  validCC();
});


