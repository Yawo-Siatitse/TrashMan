let dayNum = 0;
let healthPer = 100;
let foodPer = 100;
let jobTit = "none";
let moneyNum = 0;
let travel = "bare foot";
let housing = "none";

document.getElementById('dayNum').innerHTML = dayNum;
document.getElementById('healthPer').innerHTML = healthPer;
document.getElementById('foodPer').innerHTML = foodPer;
document.getElementById('JobTitle').innerHTML = jobTit;
document.getElementById('money').innerHTML = moneyNum;
document.getElementById('travel').innerHTML = travel;
document.getElementById('house').innerHTML = housing;

document.getElementById('dayNum').onClick = healthUp;
function healthUp()
{
    
    document.getElementById('dayNum').innerHTML = dayNum;
}
document.getElementById('dayNum').innerHTML = dayNum;