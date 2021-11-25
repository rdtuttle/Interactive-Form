const name = document.getElementById("name");
name.focus();

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

//payment

const pay = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");

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

//form validation
const email = document.getElementById("email");
const ccNum = document.getElementById("cc-num");
const zip = document.getElementById("zip");
const cvv = document.getElementById("cvv");
const form = document.querySelector("form");

function validName () {
  const nameValue = name.value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  if (nameIsValid === false) {
    event.preventDefault();
    name.parentElement.className = "not-valid";
    name.parentElement.classList.remove("valid");
    name.parentElement.lastElementChild.style.display = "block";
  } else {
    name.parentElement.className = "valid";
    name.parentElement.classList.remove("not-valid");
    name.parentElement.lastElementChild.style.display = "none"

  }
}

function validEmail () {
  const emailValue = email.value;
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/.test(emailValue);
  if (emailIsValid === false) {
    event.preventDefault();
    email.parentElement.className = "not-valid";
    email.parentElement.classList.remove("valid");
    email.parentElement.lastElementChild.style.display = "block";
  } else {
   email.parentElement.className = "valid";
   email.parentElement.classList.remove("not-valid");
   email.parentElement.lastElementChild.style.display = "none"

  }
}

function validCC () {
  const cardValue = ccNum.value;
  const cardNumberIsValid = /^\d{13,16}$/.test(cardValue);
  if (cardNumberIsValid === false) {
    event.preventDefault();
    ccNum.parentElement.className = "not-valid";
    ccNum.parentElement.classList.remove("valid");
    ccNum.parentElement.lastElementChild.style.display = "block";
  }else  {
    ccNum.parentElement.className = "valid";
    ccNum.parentElement.classList.remove("not-valid");
    ccNum.parentElement.lastElementChild.style.display = "none"
  }
}

function validZip () {
  const zipValue = zip.value;
  const zipIsValid = /[0-9]{5}/.test(zipValue);
  if (zipIsValid === false) {
    event.preventDefault();
    zip.parentElement.className = "not-valid";
    zip.parentElement.classList.remove("valid");
    zip.parentElement.lastElementChild.style.display = "block";
  }else{
    zip.parentElement.className = "valid";
    zip.parentElement.classList.remove("not-valid");
    zip.parentElement.lastElementChild.style.display = "none"
  }
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
  if (cvvIsValid === false) {
    event.preventDefault();
    cvv.parentElement.className = "not-valid";
    cvv.parentElement.classList.remove("valid");
    cvv.parentElement.lastElementChild.style.display = "block"
  } else  {
    cvv.parentElement.className = "valid";
    cvv.parentElement.classList.remove("not-valid");
    cvv.parentElement.lastElementChild.style.display = "none"
  }
}

function validForm () {
  activities.classList.add('not-valid');
  document.getElementById('activities-hint').style.display = 'contents';
if ( total !== 0) {
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

//accessibility

const checkbox = document.querySelectorAll("input[type=checkbox]");
for (let i=0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("focus", () => {
    checkbox[i].parentElement.classList.add("focus")
  });
  checkbox[i].addEventListener("blur", () => {
    checkbox[i].parentElement.classList.remove("focus")
  });
}

