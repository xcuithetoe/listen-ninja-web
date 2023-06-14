
const input = document.getElementById("myInput");
var statusLabel = document.querySelector(".floating-label").style;

function changeStatus(text, colorT, colorB) {
    statusLabel.setProperty('--backgroundColor', colorB);
    statusLabel.setProperty('--textColor', colorT);
    document.querySelector(".floating-label").setAttribute("status", text);
    
}
changeStatus("Inactive", "Red", "pink");
//input.addEventListener("paste", changeStatus("Active", "Green", "mintcream"))    
