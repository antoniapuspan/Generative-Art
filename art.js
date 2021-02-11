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
