# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- HTML dialog element
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Using dialogs for modal views.

```html
<dialog id="menu">Something To Show like Menu</dialog>
<button id="a-button">Show Dialog</button>
```

```js
dialogPop = document.getElementById("menu");
btn = document.getElementById("a-button");
btn.onclick = () => {
  dialogPop.showModal();
};
```

### Continued development

CSS Layout.

## Author

- Abiodun
- Website - [Add your name here](https://www.your-site.com)
