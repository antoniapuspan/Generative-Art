const art1 = document.getElementById("artwork1");
for(let i=100;i<300;i=i+20) {
    //create div
    let box = document.createElement("div");
    //add class
    box.classList.add("box");
    //change style proprieties
    box.style.width = i + "px"; 
    box.style.height = i + "px"; 
    //append
    art1.appendChild(box);
}

const art2 = document.getElementById("artwork2");
for(let i=0;i<90;i=i+10) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.transform = "rotate("+ i +"deg)" ;
    art2.appendChild(box); 
}

const art3 = document.getElementById("artwork3");
for(let i=0;i<200;i=i+10) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.width = i + "px";
    circle.style.height = i + "px";
    art3.appendChild(circle);
}

const art4 = document.getElementById("artwork4");
for(i=-90;i<90;i=i+20) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.transform = "translate(" + i + "px, " + i + "px)";
    art4.appendChild(box);
}

const art5 = document.getElementById("artwork5");
for(i=1;i<512;i=i*2) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.width = i + "px";
    circle.style.height = i + "px";
    art5.appendChild(circle);
}

const art6 = document.getElementById("artwork6");
for(i=-20;i<45;i=i+5) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.transform = `translateX(${i}-50)`;
    circle.style.transform = `rotate(${i}deg)`;
    art6.appendChild(circle);
}

const art7 = document.getElementById("artwork7");
for(i=0;i<200;i=i+10) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.width = i + "px";
    circle.style.height = i + "px";
    circle.style.transform = `translateX(${i})`;
    circle.style.transform = `translateY(${i}/2)`;

    art6.appendChild(circle);
}