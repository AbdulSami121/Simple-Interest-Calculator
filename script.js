function showrate(x)
{
    document.getElementById("enteredRate").innerText = x;
}
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value,10);
    var rate = parseFloat(document.getElementById("rate").value,10);
    var years = parseFloat(document.getElementById("years").value,10);
    var interest = principal * years * rate / 100;
    var currentYear = new Date().getFullYear();
    var finalYear = currentYear + years;
    document.getElementById("result").innerHTML = "<br />If you deposit "+principal+",<br /> at an interest rate of "+rate+"%.<br />You will receive an amount of "+interest+"<br />in the year "+finalYear+"<br />";
}