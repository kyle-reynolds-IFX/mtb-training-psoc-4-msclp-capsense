document.addEventListener("DOMContentLoaded", function () {
  if (window.location.protocol === "file:") {
    document.documentElement.classList.add("file-preview-no-search");
  }
});