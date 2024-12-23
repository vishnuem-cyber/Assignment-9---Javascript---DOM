/* <p id="quote">Placeholder text for quote</p> */
// Change the text content of the paragraph with ID 'quote' to your favourite quote


let quote = document.getElementById("quote");
quote.innerHTML = "Be yourself ; everyone else is already taken";


// Change background color of all 'info-box' class divs
let infoboxes = document.getElementsByClassName("info-box");
for (let i=0; i<infoboxes.length; i++){
    infoboxes[i].style.backgroundColor = "red";
}

// 3. Update the third list item in the task list to a different text

let tasklists = document.getElementsByTagName("li");
tasklists[2].textContent = "Assignment 3"

// 4. Append the message -"Have a great day" to the footer span using querySelector
let footer = document.querySelector("footer span");
footer.textContent += "  - Have a great day";