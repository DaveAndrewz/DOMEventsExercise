// 1a.
const button1 = document.querySelector(`#one`)
// 1b.
button1.onclick = () => {
    alert(`Cool! You can hear/understand a hummingbird and ants`);
};
// 2a.
const h3 = document.querySelector(`h3`);
// 2b.
h3.addEventListener(`mouseover`, () => {
    alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
});
// 3a.
const form = document.querySelector(`form`);
// 3b.
form.addEventListener(`submit`, () => {
     alert(`${form.elements.quote.value}`);
});
// 4a.
const darkMode = document.querySelector(`#dm`);
// 4b.

    

// 5a.
const reality = document.querySelector(`#reality`);
// 5b.
let clickNumber = 0;
reality.addEventListener(`click`, () => {
    if (clickNumber < 2) {
        alert(`You have successfully moved to another reality`);
    } else if (clickNumber === 2) {
        alert(`OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!`);
    } else if (clickNumber > 2) {
        reality.removeEventListener(`click`)
    }
    clickNumber ++;
});