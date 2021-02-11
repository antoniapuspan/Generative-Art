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