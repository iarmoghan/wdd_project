function showMsg(obj) {
var inner1 = document.getElementById("msg");
let message = obj.getAttribute("msg");
inner1.innerHTML = message;
if (inner1.style.display == "none") {
inner1.style.display = "";
} else {
inner1.style.display = "none";
}
}