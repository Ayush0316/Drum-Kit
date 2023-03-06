var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
        console.log(event);
        var keyPressed = this.innerHTML;
        eventOnEachDrum(keyPressed);
        buttonAnimation(keyPressed);
    });
}

document.addEventListener("keydown", function(event){
    eventOnEachDrum(event.key);
    buttonAnimation(event.key);
})

function eventOnEachDrum(keyValue){
    switch (keyValue){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            alert("Invalid key pressed!!");
            break;
    }
}

function buttonAnimation(keyPressed){
    var classAssociated = "."+keyPressed;
    document.querySelector(classAssociated).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(classAssociated).classList.remove("pressed");
    },100);
}