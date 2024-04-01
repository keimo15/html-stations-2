function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  text    = document.getElementById("text");
  element = document.getElementById("check");
  if (element.checked){
    text.style.backgroundColor = "red";
  }
  else {
    text.style.backgroundColor = "white";
  }
}
