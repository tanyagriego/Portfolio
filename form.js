function showPreview() {
  var contentElement = document.getElementById("content");
  var convertedContent = marked (contentElement.value);
  document.getElementById("preview".innerHtml) = convertedContent;
}

window.addEventListener("load", function()) {
  document.getElementById("showPreview").addEventListener("click", showPreview);
});
