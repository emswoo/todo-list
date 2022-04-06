"use strict";

const onClickAdd = () => {
    // get what you added as todo
    const inputText = document.getElementById("add-text").value;
    // reset the input box after adding the todo
    document.getElementById("add-text").value = "";

    // create div
    const div = document.createElement("div");
    div.className = "list";
    
    // create li
    const li = document.createElement("li");
    li.innerText = inputText; // adds what you typed as todo in <li>

    // create delete button tag for the new list
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Done";
    deleteButton.addEventListener("click", () => {
        // delete the list
        const deleteTarget = deleteButton.parentNode;
        document.getElementById("task").removeChild(deleteTarget);

    });

    // put the tags under <div>
    div.appendChild(li);
    div.appendChild(deleteButton);

    // put <div> under <ul>
    document.getElementById("task").appendChild(div);
};

// add click event
document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());


// clear text
function clearText() {
    const clearInput = document.getElementById("add-text");
    clearInput.value = ""; 
}