let enddate="20 march 2024 10:00 PM"
document.getElementById("enddate").innerText=enddate;
const input=document.querySelectorAll("input")


function clock()
{
    const end= new Date(enddate);
    const todaydate=new Date()
const diff=(end-todaydate)/1000;
if(diff<0)
return;
input[0].value=(Math.floor(diff/3600/24))
input[1].value=(Math.floor(diff/3600)%24)
input[2].value=(Math.floor(diff/3600)%60)
input[3].value=(Math.floor(diff)%60)

}
clock()
setInterval(function () {clock()}, 1000);