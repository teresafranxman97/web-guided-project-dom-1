// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('h2');
const logoTitle = document.getElementById('logo-title');
const firstCard = document.querySelector('div.card:nth-of-type(1)')
console.log(firstCard);
// B- finding within one particular element
const imageFirstCard = document.querySelector('img')
const titleFirstCard = document.querySelector('h2.card-title')
console.log(titleFirstCard);
const subtitleFirstCard = document.querySelector('h3')
console.log(subtitleFirstCard);
const textFirstCard = document.querySelector('p.card-text')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
// console.log(link1FirstCard)
const link2FirstCard = link1FirstCard.nextElementSibling
console.log(link2FirstCard)


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const navItems = document.querySelectorAll('nav a')
// console.log(navItems)

// B- Loop over the links and console.log their text content
navItems.forEach(a => console.log(a.textContent))

// C- Turn the collection of links into a real array
const arrNavItems = Array.from(navItems
    )
// D- Use .filter to find the anchor tag with the textContent of "Home"
const result = arrNavItems.filter(a => a.textContent === "Home")
console.log(result)

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
document.querySelector('h1').textContent = 'Lambda Dog'
document.querySelector('img.card-img-top').src = ''
document.querySelector('img.card-img-top').setAttribute('alt', 'dogs are mans best friend')

//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
const h2 = document.querySelector('h2.card-title')
h2.style.color = 'red';

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"

const blogNavItem = document.createElement('a')
blogNavItem.textContent = 'Blog'
blogNavItem.classList.add('menu-item')
document.querySelector('nav').appendChild(blogNavItem)
console.log(blogNavItem);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
document.querySelector('div.card-group').appendChild(secondCard)
// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
