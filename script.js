function mood () {
    // assign everything that will need to be styled
        let container = document.querySelector(".container");
    
    // get the user's name and their mood
    
    let username = document.getElementById("username").value       
    let mood = document.getElementById("mood").value
    
    // build the cases of what happens depending on the mood
    
    let feedback = "";
    
    if (mood === "happy") {
        feedback = ("Thats great! " + username + " 🙂"), 
        document.body.style.backgroundColor = "goldenrod";
        container.style.backgroundColor = "yellow";
        document.querySelector("h1").style.color = "goldenrod";
        document.querySelector("button").style.backgroundColor = "goldenrod";
        document.querySelector("p").style.color = "goldenrod";
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
        document.body.style.backgroundColor = "lightblue";
        container.style.backgroundColor = "blue";
        document.querySelector("h1").style.color = "lightblue";
        document.querySelector("button").style.backgroundColor = "lightblue";
        document.querySelector("p").style.color = "lightblue";


    } else if (mood === "angry") {
        feedback = ( "Take a breath " + username + " 😡" )
        document.body.style.backgroundColor = "firebrick"
        container.style.backgroundColor = "darkred";
        document.querySelector("h1").style.color = "firebrick";
        document.querySelector("button").style.backgroundColor = "firebrick";
        document.querySelector("p").style.color = "firebrick";
    
        } 
        
      else if (mood === "scared") {
        feedback = ("You will survive this " + username + " 😨")
        document.body.style.backgroundColor =  "purple"
        container.style.backgroundColor = "indigo"
        document.querySelector("h1").style.color =  "darkmagenta"
        document.querySelector("button").style.backgroundColor = "darkmagenta"
        document.querySelector("p").style.color = "darkmagenta"
    } 

     else if (mood === "disgusted") {
        feedback = ("leave the situation " + username + " 🤢")
        document.body.style.backgroundColor =  "forestgreen"
        container.style.backgroundColor = "darkgreen"
        document.querySelector("h1").style.color ="forestgreen"
        document.querySelector("button").style.backgroundColor = "forestgreen"
        document.querySelector("p").style.color = "forestgreen"
    }
    
    //display the changes 
    
    let feedbackMessage = document.getElementById("message");
    feedbackMessage.textContent = feedback
    
}



