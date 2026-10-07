// ---------- Feature 1: contact form check ----------
// When someone clicks "Send by email", we check the form,
// then open their email app with the message already written.
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();                       // stop the page from reloading

  const name = form.name.value.trim();          // .trim() removes extra spaces
  const message = form.message.value.trim();

  if (name === "") {
    showStatus("Enter your name.", "error");
    return;
  }
  if (message.length < 10) {
    showStatus("Write a message of at least 10 characters.", "error");
    return;
  }

  showStatus("Opening your email app...", "ok");
  const subject = encodeURIComponent("Message from " + name);
  const body = encodeURIComponent(message);
  window.location.href =
    "mailto:mehulmehendiratta422@gmail.com?subject=" + subject + "&body=" + body;
});

function showStatus(text, type) {
  status.textContent = text;
  status.className = type;                      // "error" or "ok" (colours are in style.css)
}

// ---------- Feature 2: copy email button ----------
const copyButton = document.getElementById("copy-email");

copyButton.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText("mehulmehendiratta422@gmail.com");
    copyButton.textContent = "Copied";
  } catch (error) {
    copyButton.textContent = "Copy failed, select the email manually";
  }
  setTimeout(function () { copyButton.textContent = "Copy email"; }, 2000);
});