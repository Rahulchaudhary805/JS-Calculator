function Display(value) {
    document.getElementById("solution").value += value;
} 
function solve() {
    document.getElementById("solution").value = eval(document.getElementById("solution").value);
    // let y = eval(x);
    // document.getElementById("solution").value = y;
}

function clr() {
    document.getElementById("solution").value = " ";
}




