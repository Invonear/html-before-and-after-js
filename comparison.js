const modePicker = document.getElementById("mode");
const observation = document.getElementById("observation");
const scriptedPreview = document.querySelector('iframe[src="rendered.html"]');

modePicker.hidden = false;
function updatePreview() {
  const enabled = modePicker.querySelector("input:checked").value === "on";
  if (enabled) {
    scriptedPreview.removeAttribute("sandbox");
  } else {
    scriptedPreview.setAttribute("sandbox", "allow-same-origin");
  }
  // Sandbox changes take effect on navigation. Reload the actual example.
  scriptedPreview.src = "rendered.html";
  observation.textContent = enabled
    ? "The second page now has the same headline, paragraphs and two section links as the first."
    : "The second preview is blank. Choose “Run JavaScript” to load its article.";
}
modePicker.addEventListener("change", updatePreview);
window.addEventListener("pageshow", updatePreview);
