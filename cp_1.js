document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const commentsInput = document.getElementById("comments");
  const charCount = document.getElementById("char-count");
  const feedbackDisplay = document.getElementById("feedback-display");

  commentsInput.addEventListener("input", () => {
    charCount.textContent = `${commentsInput.value.length} characters`;
  });

  form.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      const tooltip = e.target.nextElementSibling;
      if (tooltip && tooltip.classList.contains("tooltip")) {
        tooltip.style.display = "inline";
      }
    }
  });

  form.addEventListener("mouseout", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      const tooltip = e.target.nextElementSibling;
      if (tooltip && tooltip.classList.contains("tooltip")) {
        tooltip.style.display = "none";
      }
    }
  });

  document.body.addEventListener("click", (e) => {
    if (!form.contains(e.target)) {
      e.stopPropagation();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    if (!name || !email || !comments) {
      alert("Please fill in all fields.");
      return;
    }

    const entry = document.createElement("div");
    entry.classList.add("feedback-entry");
    entry.innerHTML = `<p><strong>${name}</strong> (${email}) says:<br>${comments}</p>`;
    feedbackDisplay.appendChild(entry);

    form.reset();
    charCount.textContent = "0 characters";
  });

  form.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      console.log("Focused on:", e.target.id);
    }
  });
});