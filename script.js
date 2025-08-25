// Toggle Ingredients/Steps
function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

// Cooking Steps One by One
let stepIndex = 0;
function startCooking() {
  const steps = document.querySelectorAll("#steps li");
  const currentStep = document.getElementById("current-step");
  const progressBar = document.getElementById("progress-bar");

  if (stepIndex < steps.length) {
    currentStep.innerText = "➡️ " + steps[stepIndex].innerText;
    let progress = ((stepIndex + 1) / steps.length) * 100;
    progressBar.style.width = progress + "%";
    stepIndex++;
  } else {
    currentStep.innerText = "✅ Done! Enjoy your cake!";
    progressBar.style.width = "100%";
    stepIndex = 0; // reset
  }
}
