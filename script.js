
function mood () {
    // assign everything that will need to be styled
    let container = document.querySelector(".container");
    
    // get the user's name and their mood
    
    let username = document.getElementById("username").value       
    let mood = document.getElementById("mood").value
    
    // build the cases of what happens depending on the mood
    
    let feedback = "";

    if (username === "") {
       alert("Please fill in both your name and how you feel.")
       return;
    }
    
    if (mood === "happy") {
        feedback = ("Thats great, " + username + "! 🙂"), 
        document.body.style.backgroundColor = "#FFEE88";
        container.style.backgroundColor = "#D4A017";
        document.querySelector("h1").style.color = "#FFD93D";
        document.querySelector("button").style.backgroundColor = "#FFD93D";
        document.querySelector("p").style.color = "#FFD93D";
    } 
    else if (mood === "default") {
        feedback = ("Thank You, " + username + "!"), 
        document.body.style.backgroundColor = "";
        container.style.backgroundColor = "";
        document.querySelector("h1").style.color = "";
        document.querySelector("button").style.backgroundColor = "";
        document.querySelector("p").style.color = "";
    }
    
    
    
    
    else if (mood === "sad") {
        feedback = ("Hope it gets better " + username + " 😭")
        document.body.style.backgroundColor = "#4A90E2";
        container.style.backgroundColor = "#1E5BA3";
        document.querySelector("h1").style.color = "#4A90E2";
        document.querySelector("button").style.backgroundColor = "#4A90E2";
        document.querySelector("p").style.color = "#4A90E2";


    } else if (mood === "angry") {
        feedback = ( "Take a breath " + username + " 😡" )
        document.body.style.backgroundColor = "#FF6B6B"
        container.style.backgroundColor = "#A4161A";
        document.querySelector("h1").style.color = "#E63946";
        document.querySelector("button").style.backgroundColor = "#E63946";
        document.querySelector("p").style.color = "#E63946";
    
        }
        
      else if (mood === "scared") {
        feedback = ("You will survive this " + username + " 😨")
        document.body.style.backgroundColor =  "#C29CFF"
        container.style.backgroundColor = "#5C2D91"
        document.querySelector("h1").style.color =  "#9B5DE5"
        document.querySelector("button").style.backgroundColor = "#9B5DE5"
        document.querySelector("p").style.color = "#9B5DE5"
    } 

     else if (mood === "disgusted") {
        feedback = ("leave the situation " + username + " 🤢")
        document.body.style.backgroundColor =  "#7BE27A"
        container.style.backgroundColor = "#1B5E20"
        document.querySelector("h1").style.color ="#4CAF50"
        document.querySelector("button").style.backgroundColor = "#4CAF50"
        document.querySelector("p").style.color = "#4CAF50"
    }
    //display the changes 
    
    let feedbackMessage = document.getElementById("message");
    feedbackMessage.textContent = feedback
    
}




