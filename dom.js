//examine the document object//

//console.dir(document);

// GET ELEMENT BY ID //

//console.log(document.getElementById('header-title'));
//let headerTitle = document.getElementById('header-title');
//let header = document.getElementById('main-header');
//headerTitle.textContent = 'hello';
//headerTitle.innerText = 'goodbye';     //innerText pays attention to styling
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';
//headerTitle.style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASS NAME //
//let items = document.getElementsByClassName('list-group-item');
//items[1].textContent = 'hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//items.style.backgroundColor = '#f4f4f4'; //doesnt work, for loop for this shown below

//for (let i = 0; i < items.length; i++) {
    //items[i].style.backgroundColor = '#f4f4f4';
//}

// GET ELEMENTS BY TAGNAME //
//let li = document.getElementsByTagName('li');
//gets all list items

// QUERY SELECTOR // 

//let header = document.querySelector('#main-header');
//header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

//let submit = document.querySelector('input[type = "submit"]');
//submit.value = 'SEND';

//QUERY SELECTOR ALL//

//let titles = document.querySelectorAll('.title');
//titles[0].textContent = 'hello';

// TRAVERSING THE DOM //
//let itemList = document.querySelector('#items');
// parentNode // same thing as parentElement
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';

// childNodes // not recommended, use children instead
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

// firstChild and lastChild are trickier, look more into that before using //
// firstElementChild and lastElementChild are better. //
// nextSibling and nextElementSibling // previousSibling and previousElementSibling //

// createElement 
//let newDiv = document.createElement('div');
// add class
//newDiv.className = 'hello';
// add id
//newDiv.id = 'hello1';
// add attr
//newDiv.setAttribute('title', 'Hello Div');
// create text node
//let newDivText = document.createTextNode('Hello World');
//add text to div
//newDiv.appendChild(newDivText);

//let container = document.querySelector('header .container'); //saying in the header we want container class 
//let h1 = document.querySelector('header h1'); //grab the h1 in the header

//container.insertBefore(newDiv, h1); //parameters are (what we're inserting, what it goes in before)

// EVENTS // 

//let button = document.getElementById('button').addEventListener('click', buttonClick);
//let button = document.getElementById('button').addEventListener('click', buttonClick2);

    

//function buttonClick() {
    //console.log('button pressed');
    //document.getElementById('header-title').textContent = 'changed';
    //document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//} 

//function buttonClick2(e) {
//console.log(e.target);
//console.log(e.target.classList)
//let output = document.getElementById('output');
//output.innerHTML = '<h3>'+e.target.id+'</h3>';
//console.log(e.type); //will tell you what kind of event
//console.log(e.clientx); //will tell you position of the mouse
//console.log(e.offsetx);
//console.log(e.offsety);
//console.log(e.shiftKey);
//console.log(e.altKey); //etc 

//}

//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mousedown", runEvent);
//button.addEventListener("mouseenter", runEvent);
//function runEvent(e){
    //console.log('EVENT TYPE: '+ e.type);
//}









