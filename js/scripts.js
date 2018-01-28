let dayNum = 0;
let healthPer = 100;
let foodPer = 100;
let jobTit = "begger";
let moneyNum = 0;
let travel = "bare foot";
let housing = "none";
let dead = false;

let slippers = false;
let shoes = false;
let bike = false;
let car = false;
let jet = false;

let box = false;
let garage = false;
let apartment = false;
let house = false;
let mansion = false;

document.getElementById('dayNum').innerHTML = dayNum;
document.getElementById('healthPer').innerHTML = healthPer + "%";
document.getElementById('foodPer').innerHTML = foodPer + "%";
document.getElementById('JobTitle').innerHTML = jobTit;
document.getElementById('money').innerHTML = moneyNum;
document.getElementById('travel').innerHTML = travel;
document.getElementById('house').innerHTML = housing;

//Function for health
document.getElementById('healthPer').onclick = healthUp;
document.getElementById('sleep').onclick = healthUp;
function healthUp(){
    if(dead){
        return;
    }
    
    dayNum = dayNum + 1;
    document.getElementById('dayNum').innerHTML = dayNum;
    
    healthPer = healthPer + 15;
    if(healthPer > 100){
        healthPer = 100; 
    }
    document.getElementById('healthPer').innerHTML = healthPer + "%";
    
    foodPer = foodPer - 5;
    if(foodPer < 1){
        foodPer = "Starved";
        dead = true;
        document.getElementById('foodPer').innerHTML = foodPer;
    }
    else{
        document.getElementById('foodPer').innerHTML = foodPer + "%";
    }
    if(dead){
        document.getElementById('img').src = "images/Death.png";
    }
}

//Function for food
document.getElementById('eat').onclick = foodUp;
document.getElementById('foodPer').onclick = foodUp;
function foodUp(){
    if(dead){
        return;
    }
     
    dayNum = dayNum + 1;
    document.getElementById('dayNum').innerHTML = dayNum;
    
    foodPer = foodPer + 15;
    if(foodPer > 100){
        foodPer = 100; 
    }
    document.getElementById('foodPer').innerHTML = foodPer + "%";
    
    healthPer = healthPer - 5;
    if(healthPer < 1){
        healthPer = "Heart Attack";
        dead = true;
        document.getElementById('healthPer').innerHTML = healthPer;
    }
    else{
        document.getElementById('healthPer').innerHTML = healthPer + "%";
    }
    if(dead){
        document.getElementById('img').src = "images/Death.png";
    }
}

//Function for job
document.getElementById('work').onclick = work;
document.getElementById('JobTitle').onclick = work;
function work(){
    if(dead){
        return;
    }
    
    dayNum = dayNum + 1;
    document.getElementById('dayNum').innerHTML = dayNum;
    
    
    moneyNum = moneyNum + .25;
    document.getElementById('money').innerHTML = moneyNum;
    
    if(slippers == true && box == true){
        document.getElementById('JobTitle').innerHTML = "Floor Sweeper";
        document.getElementById('title').innerHTML = "Hobo Man";
        document.getElementById('img').src = "images/Hobo_Man.png";
        moneyNum = moneyNum + .75;
        document.getElementById('money').innerHTML = moneyNum;
    }
    
     if(shoes == true && garage == true){
        document.getElementById('JobTitle').innerHTML = "Janitor";
        moneyNum = moneyNum + 4;
        document.getElementById('money').innerHTML = moneyNum;
    }
    
    if(bike == true && apartment == true){
        document.getElementById('JobTitle').innerHTML = "Cashier";
        document.getElementById('title').innerHTML = "Casual Man";
        document.getElementById('img').src = "images/Casual_Man.png";
        moneyNum = moneyNum + 25;
        document.getElementById('money').innerHTML = moneyNum;
    }
    
    if(car == true && house == true){
        document.getElementById('JobTitle').innerHTML = "Manager";
        moneyNum = moneyNum + 170;
        document.getElementById('money').innerHTML = moneyNum;
    }
    
     if(jet == true && mansion == true){
        document.getElementById('JobTitle').innerHTML = "CEO";
        document.getElementById('title').innerHTML = "Rich Man";
        document.getElementById('img').src = "images/Rich_Man.png";
        moneyNum = moneyNum + 800;
        document.getElementById('money').innerHTML = moneyNum;
    }
    
    if(moneyNum >= 100000)
        {
            document.getElementById('img').src = "images/YouWin.png";
        }
       
    foodPer = foodPer - 5;
    if(foodPer < 1){
        foodPer = "Starved";
        dead = true;
        document.getElementById('foodPer').innerHTML = foodPer;
    }
    else{
        document.getElementById('foodPer').innerHTML = foodPer + "%";
    }
    
    healthPer = healthPer - 5;
    if(healthPer < 1){
        healthPer = "Heart Attack";
        dead = true;
        document.getElementById('healthPer').innerHTML = healthPer;
    }
    else{
        document.getElementById('healthPer').innerHTML = healthPer + "%";
    }
    if(dead){
        document.getElementById('img').src = "images/Death.png";
    }
}



//Function for travel
document.getElementById('travel').onclick = transportation;
document.getElementById('slippers').onclick = transportation;
document.getElementById('shoes').onclick = transportation;
document.getElementById('bike').onclick = transportation;
document.getElementById('car').onclick = transportation;
document.getElementById('jet').onclick = transportation;
function transportation(){
    if(dead){
        return;
    }
    
    if(moneyNum >= 5 && slippers == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('travel').innerHTML = "slippers";
        slippers = true;
        moneyNum = moneyNum - 5;
    }
    if(moneyNum >= 25 && shoes == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('travel').innerHTML = "shoes";
        shoes = true;
        moneyNum = moneyNum - 25;
    }
    if(moneyNum >= 125 && bike == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('travel').innerHTML = "bike";
        bike = true;
        moneyNum = moneyNum - 125;
    }
    if(moneyNum >= 1000 && car == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('travel').innerHTML = "car";
        car = true;
        moneyNum = moneyNum - 1000;
    }
    if(moneyNum >= 10000 && jet == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('travel').innerHTML = "jet";
        jet = true;
        moneyNum = moneyNum - 10000;
    }
    
    if(dead){
        document.getElementById('img').src = "images/Death.png";
    }
}


//Function for housing
document.getElementById('box').onclick = home;
document.getElementById('garage').onclick = home;
document.getElementById('apartment').onclick = home;
document.getElementById('houseBy').onclick = home;
document.getElementById('mansion').onclick = home;
document.getElementById('house').onclick = home;
function home(){
    if(dead){
        return;
    }

    if(moneyNum >= 5 && box == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('house').innerHTML = "box";
        box = true;
        moneyNum = moneyNum - 5;
    }
    if(moneyNum >= 25 && garage == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('house').innerHTML = "garage";
        garage = true;
        moneyNum = moneyNum - 25;
    }
    if(moneyNum >= 125 && apartment == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('house').innerHTML = "apartment";
        apartment = true;
        moneyNum = moneyNum - 125;
    }
    if(moneyNum >= 1000 && house == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('house').innerHTML = "house";
        house = true;
        moneyNum = moneyNum - 1000;
    }
    if(moneyNum >= 10000 && mansion == false){
        document.getElementById('money').innerHTML = moneyNum;
        document.getElementById('house').innerHTML = "mansion";
        mansion = true;
        moneyNum = moneyNum - 10000;
    }
    
    if(dead){
        document.getElementById('img').src = "images/Death.png";
    }
}


















