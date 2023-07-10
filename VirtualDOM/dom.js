/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of costly DOM manipulation vs efficient DOM manipulation
 * Date: 02/08/2021
 *
 */

let array = [];
increment = 0;
let container = document.querySelector('.container');

// fast (Batch Update)
//batch
while(increment < 10000) {
    array.push(++increment);
}

//dom operation
container.innerHTML = array.join(' '); ////Dom operation akhane akbar kora hoyeche tai eta fast

//slow

// while(increment < 10000) {
//     increment++;
//      container.innerHTML += ' ' + increment; ////Dom operation akhane 10000 bar kora hoyeche tai eta slow 
// }