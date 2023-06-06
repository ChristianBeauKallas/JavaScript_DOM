console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
var node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
var node2 = document.getElementsByClassName("node2");
node2[0].textContent = "I used the getElementByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
var h3Tags = document.getElementsByTagName('h3');
for (var i = 0; i < h3Tags.length; i++) {
    h3Tags[i].textContent = "I used the getElementByTagName('h3') method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
var newParagraph = document.createElement('p');
newParagraph.textContent = "This node was created using the createElement() method";

var divParentId = document.getElementById('parent');
divParentId.appendChild(newParagraph);

var newAnchor = document.createElement('a')
newAnchor.textContent = "I am a <a> tag";
newAnchor.href ="https://truecoders.io/"
newAnchor.target = "_blank";
divParentId.appendChild(newAnchor);

divParentId.insertBefore(newAnchor, newParagraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

var parentNode = document.getElementById("exercise-container3")
var childNode = document.getElementById("N1");
var newChildNode = document.createElement('p');

newChildNode.textContent = "New Child Node";

setTimeout(()=> {
    parentNode.replaceChild(newChildNode, childNode);
}, 3000);

setTimeout(()=> {
    parentNode.removeChild(newChildNode);
}, 6000);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
var unorderedList = document.createElement('ul');

// TODO: Iterate over the array values, and create a list item element for each
list.forEach(function(item){
    let liElement = document.createElement('li');
    liElement.textContent = item;
    unorderedList.appendChild(liElement);
});
// TODO: Append the new list items to the unordered list element
// TODO: Append the unordered list to the `div#container` under exercise 4 
var divContainer = document.getElementById('container');
divContainer.appendChild(unorderedList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
//  get button from html
        //create a parent and child div
        //child div will be the modal card - this will have the text
        //
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

let button = document.getElementById('btn');
let ex5 = document.querySelector(".exercise5")

// button.onclick = 
function show (){
    let parentDiv = document.createElement('div');
    let childDiv = document.createElement('div');
    childDiv.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    parentDiv.id = "modal"
    childDiv.classList.add("modal-card")
    
    parentDiv.appendChild(childDiv);
    ex5.appendChild(parentDiv);

    parentDiv.onclick = function() {
        ex5.removeChild(parentDiv);
    };
}
button.addEventListener('click', show);

