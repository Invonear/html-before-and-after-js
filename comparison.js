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
    ? "Both previews now show the same article. The script added the headline, text and links to the second page."
    : "The first page already has a headline and two links. The second preview is empty because the article lives in a script.";
}
modePicker.addEventListener("change", updatePreview);
window.addEventListener("pageshow", updatePreview);
