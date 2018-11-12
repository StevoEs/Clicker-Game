////////////////////////////////
// create by Stefan Studenski //
// Version 0.45               //
////////////////////////////////

//////////////////////////////////////
// ### New Updates ###              //
// - Game Language now: English     //
//////////////////////////////////////

//////////////////////
// Global variables //
//////////////////////

var click = 1,
    worker = 0,
    bills = 100,
    lvl = 1,
    multi = 1,
    ep = 0,
    coins = 0,
    jobs = 0,
    count = 0,
    min = 1,
    max = 10,
    interval = false;
    interval2 = false;
    btn1 = false;

///////////////////////////
// create user interface //
///////////////////////////
window.onload = function() {
    var span = document.getElementById('coin');
        
    var coinAnzeige = document.createElement('span'); 
        
    var coinText = document.createTextNode(coins + "€");   
 
coinAnzeige.appendChild(coinText);
span.appendChild(coinAnzeige);

    var span_lvl = document.getElementById('lvl');
        
    var lvlAnzeige = document.createElement('span'); 
        
    var lvlText = document.createTextNode("Level " + lvl);   
 
lvlAnzeige.appendChild(lvlText);
span_lvl.appendChild(lvlAnzeige);
}

function writeUI() {
document.getElementById('coin').innerHTML = coins + "€";
document.getElementById('lvl').innerHTML = "Level " + lvl;
}
///////////////////////////////
// Gamble and click features //
///////////////////////////////
function myFunction() {
    var cube_1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var cube_2 = Math.floor(Math.random() * (max - min + 1)) + min;
    var erg = cube_1 + cube_2;
    
    // Progressbar //
    var loaderbar = document.getElementById('load');
    if (loaderbar.value >= 1000) {
        loaderbar.value = 0;
        // Bonus //
        jobs += + 1;
        ep += + (lvl * cube_1 + cube_2);
        coins += + lvl * (cube_1 + cube_2 + jobs); 
        } else {
        loaderbar.value += click;
        ep += multi;
    } 
    // Output //
    var out =          document.getElementById('output');
    if(cube_1 == cube_2) {
        loaderbar.value += + lvl *
(cube_1 + cube_2);
        // Pasch-output and style //
        out.innerHTML = ("+ " + erg);
        out.style.color = 'green';
    } else {
        out.innerHTML = " ";
    }
    
    writeUI();       
};
////////////////////
// action buttons //
////////////////////

function update1() {
    if (coins < 100) {
        alert("nicht genug Geld");
    } else {
        coins -= 100;
        writeUI();
        if (interval == false){
        setInterval(function() {
        var loaderbar = document.getElementById('load');
        loaderbar.value += worker + click;
        myFunction();
        myFunction3();
   } ,1000);
        writeUI();
        interval = true;
        } else {
            worker += +1;
        }
    }}
function update2() {
    if (coins < 1000) {
        alert("Nicht geunug Geld");
    } else {
        coins -= 1000;
        click += + 1;
        writeUI();
    }}
function update3() {
    if (coins < 10000) {
        alert("nicht genug Geld");
    } else {
    coins -= 10000;
    writeUI();
    if (interval2 == false){
    setInterval(function() {
        coins += bills;
        writeUI();
        interval2 = true;
   } ,1000);
   } else {
       bills += +100;
   }
    }}
function update4() {
        coins += jobs * multi;
        writeUI();
    }

////////////////////////////////
// Button state true or false //
////////////////////////////////
function myFunction2() {  
    if (btn1 == false) {
        var btn = document.getElementById('btn');
        btn1 = true;
    }
    else {
        var btn = document.getElementById('btn');
        btn1 = false;  
        }
     } 
     
///////////////////
// LVL UP System //
///////////////////
function myFunction3() {
   
function lvlup() {
    lvl += 1;
    multi += 1;
    coins += multi + jobs * 2;
    writeUI();
}

    if (ep >= 100 && lvl === 1) {
        lvlup();
    }
    else if (ep >= 200 && lvl === 2) {
        lvlup();
    }
    else if (ep >= 400 && lvl === 3) {
        lvlup();
    }
    else if (ep >= 800 && lvl === 4) {
        lvlup();
    }
    else if (ep >= 1600 && lvl === 5) {
        lvlup();
    }
    else if (ep >= 3200 && lvl === 6) {
        lvlup();
    }
    else if (ep >= 6400 && lvl === 7) {
        lvlup();
    }
    else if (ep >= 12800 && lvl === 8) {
        lvlup();
    }
    else if (ep >= 25600 && lvl === 9) {
        lvlup();
    }
    else if (ep >= 51200 && lvl === 10) {
        lvlup();
    }
}  
 
//////////////////////////
// regist eventListener //
//////////////////////////
function init() {
    let element = document.getElementById('btn')  
    element.addEventListener('click', myFunction);
    element.addEventListener('click', myFunction2);
    element.addEventListener('click', myFunction3);
    
    let pay1 = document.getElementById('btn_pay1');
    pay1.addEventListener('click', update1);
    let pay2 = document.getElementById('btn_pay2');
    pay2.addEventListener('click', update2);
    let pay3 = document.getElementById('btn_pay3');
    pay3.addEventListener('click', update3);
    let pay4 = document.getElementById('btn_pay4');
    pay4.addEventListener('click', update4);
}

document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', start);

// particleJs //

function start(){
 particlesJS("particle", {

    "particles": {
        "number": { 
            "value": 5, 
            "density": { 
                "enable": true, 
                "value_area": 50 
               } 
            }, 
        "color": { 
            "value": "#ffffff" 
            }, 
        "shape": { 
            "type": "circle", 
        "stroke": { 
            "width": 0, 
            "color": "#000000" 
            }, 
        "polygon": { 
            "nb_sides": 5 
            }, 
        }, 
        "opacity": { 
            "value": 0.5, 
            "random": false, 
            "anim": { 
                "enable": false, 
                "speed": 1, 
                "opacity_min": 0.1, 
                "sync": false 
                } 
            }, 
        "size": { 
            "value": 5, 
            "random": true, 
            "anim": { 
                "enable": true, 
                "speed": 10, 
                "size_min": 0.1, 
                "sync": true 
                } 
            }, 
        "line_linked": { 
            "enable": true, 
            "distance": 350, 
            "color": "#8E24AA", 
            "opacity": 0.4, 
            "width": 1 
            }, 
        "move": { 
            "enable": true, 
            "speed": 3, 
            "direction": "none", 
            "random": false, 
            "straight": false, 
            "out_mode": "out", 
            "bounce": false, 
            "attract": { 
                "enable": false, 
                "rotateX": 600, 
                "rotateY": 1200 
                } 
            } 
        }, 
        "interactivity": { 
            "detect_on": "canvas", 
            "events": { 
                "onhover": { 
                    "enable": false, 
                    "mode": "repulse" 
                    }, 
            "onclick": { 
                "enable": true, 
                "mode": "push" 
                }, 
                "resize": true 
                }, 
            "modes": { 
                "grab": { 
                "distance": 400, 
                "line_linked": { 
                    "opacity": 1 
                    } 
                }, 
            "bubble": { 
                "distance": 400, 
                "size": 40, 
                "duration": 2, 
                "opacity": 8, 
                "speed": 3 
                }, 
            "repulse": { 
                "distance": 200, 
                "duration": 0.4 }, 
                "push": { 
                    "particles_nb": 1
                    }, 
            "remove": { 
                "particles_nb": 2 
                } 
            } 
        }, 
        "retina_detect": true 
        });
    }
