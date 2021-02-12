function compute()
{
    p = document.getElementById("principal").value;
    
}
function showrate(x)
{
    document.getElementById("enteredRate").innerText = x;
}
function compute()
{
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var interest = principal * years * rate / 100;
    
}