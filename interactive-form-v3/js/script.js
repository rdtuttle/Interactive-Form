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

