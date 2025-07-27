let result = "";
function press(val) {
    result += val;
    document.getElementById("display").value = result;
}
function clr() {
    result = "";
    document.getElementById("display").value = "";
}
function calculate() {
    try {
        result = eval(result);
        document.getElementById("display").value = result;
    }
    catch {
        document.getElementById("display").value = "Error";
        result = "";
    }
}