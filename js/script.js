var popup = document.querySelector("div.popup");
var closePopup = document.querySelector("button.close-popup");

setTimeout( function() {
	popup.style.display = "block";
}
, 10000);

closePopup.addEventListener("click",  function() {
	popup.style.display = "none";
});