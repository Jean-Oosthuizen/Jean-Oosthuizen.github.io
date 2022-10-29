//gets the size of the window
let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;
//grabs the pointer image and stores it
let pointer = document.getElementById("pointer");
//grabs scam image
let image = document.getElementById("image");
//grabs hidden image and sets it on the opposite side of the screen as the scam image
let hidden = document.getElementById("hidden");
hidden.style.transform = "translate("+(viewportWidth-400)+"px,"+(viewportHeight-130)+"px)";
//sets the position of the home link
document.getElementById("home").style.transform = "translate("+(viewportWidth/2+30)+"px,"+(viewportHeight/2+30)+"px)";
//calles mouseController when the mouse moves over the body
document.getElementById("mouseMovement").onmousemove = function(event){
    var pointerx = viewportWidth - event.clientX; //x position within the element.
    var pointery = viewportHeight - event.clientY;  //y position within the element.
    console.log(pointerx, pointery);
    pointer.style.transform = "translate("+pointerx+"px,"+pointery+"px)";
}
document.getElementById("hidden").onclick = function(event){
    let imgx = Math.floor(Math.random() * (viewportWidth-400));
    let imgy = Math.floor(Math.random() * (viewportHeight-130));
    hidden.style.transform = "translate("+imgx+"px,"+imgy+"px)";
    image.style.transform = "translate("+(viewportWidth-(imgx+400))+"px,"+(viewportHeight-(imgy+130))+"px)";
}