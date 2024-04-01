function displayList() {
  const doc = document.getElementById("fruits"); 
  const fruits = doc.children;
  let text = "<ul>";
  for (let i=0; i<fruits.length; i++) {
    text += "<li>" + fruits[i].innerText + "</li>";
  }
  text += "</ul>";
  doc.innerHTML = text;
}