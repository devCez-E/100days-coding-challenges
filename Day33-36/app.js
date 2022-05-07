//console.log(window);
//alert();
//window.alert();

// DOM
// Document Object Model
// console.dir(document);
// document.body.children[1].children[0].href = 'https://google.com';
let anchorElement = document.getElementById('external-link');
let highlightElement = document.querySelector('.highlight-text');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-link');
anchorElement.href = 'https://academind.com';

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://www.naver.com';


// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.textContent = "Link";
newAnchorElement.href = "https://google.com";

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);


// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it
firstH1Element.remove();
// for Older Browser
//firstH1Element.parentElement.removeChild(firstH1Element);


// MOVE ELEMENT
firstParagraph.parentElement.appendChild(firstParagraph);


// innerHTML
console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';