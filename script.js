function mood () {
    // assign everything that will need to be styled
        let container = document.querySelector(".container");
    
    // get the user's name and their mood
    
    let username = document.getElementById("username").value       
    let mood = document.getElementById("mood").value
    
    // build the cases of what happens depending on the mood
    
    let feedback = "";
    
    if (mood === "happy") {
        feedback = ("Thats great, " + username + "! 🙂"), 
        document.body.style.backgroundColor = "#FFEE88";
        container.style.backgroundColor = "#FFD93D";
        document.querySelector("h1").style.color = "#FFEE88";
        document.querySelector("button").style.backgroundColor = "#FFEE88";
        document.querySelector("p").style.color = "#FFEE88";
    } 
    else if (mood === "default") {
        feedback = ("Thank You, " + username), 
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
        document.querySelector("h1").style.color = "#FF6B6B";
        document.querySelector("button").style.backgroundColor = "#FF6B6B";
        document.querySelector("p").style.color = "#FF6B6B";
    
        }
        
      else if (mood === "scared") {
        feedback = ("You will survive this " + username + " 😨")
        document.body.style.backgroundColor =  "#C29CFF"
        container.style.backgroundColor = "#5C2D91"
        document.querySelector("h1").style.color =  "#C29CFF"
        document.querySelector("button").style.backgroundColor = "#C29CFF"
        document.querySelector("p").style.color = "#C29CFF"
    } 

     else if (mood === "disgusted") {
        feedback = ("leave the situation " + username + " 🤢")
        document.body.style.backgroundColor =  "#7BE27A"
        container.style.backgroundColor = "#1B5E20"
        document.querySelector("h1").style.color ="#7BE27A"
        document.querySelector("button").style.backgroundColor = "#7BE27A"
        document.querySelector("p").style.color = "#7BE27A"
    }
    
    //display the changes 
    
    let feedbackMessage = document.getElementById("message");
    feedbackMessage.textContent = feedback
    
}




