
function submit()
{
    a = document.getElementById("a").value; // age
    c = document.getElementById("c").value; // company
    v = document.getElementById("v").value; // vip
    result = document.getElementById("result"); //result..

    if (a > 35 && c.toUpperCase() == "DECISIONS" || v.toUpperCase() == "VIP") 
    { 
      result.innerHTML = ('TRUE'); 
    } else { result.innerHTML = ('FALSE'); }
}
