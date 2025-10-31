// Sets current year in footer
document.addEventListener('DOMContentLoaded', function(){
  var yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});