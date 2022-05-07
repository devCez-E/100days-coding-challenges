//console.log(window);
//alert();
//window.alert();

// DOM
// Document Object Model
//console.dir(document);
//document.body.children[1].children[0].href = 'https://google.com';
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('#external-link');
anchorElement.href = 'https://academind.com';

anchorElement = document.querySelector('p a');
anchorElement.href = 'https://www.naver.com';


// Add an Element
// 1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.textContent = "Link";
newAnchorElement.href = "https://google.com";
// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');
// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);