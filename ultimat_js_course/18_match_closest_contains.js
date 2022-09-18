// let row = document.getElementsByClassName('row')[0];
// console.log(row.matches('#best_row'));//matches
let best_row = document.getElementById('best_row');
console.log(best_row.matches('.row'));//indicating same element
console.log(best_row.closest('#best_row'));
console.log(best_row.closest('.container'));// parent to parent search
console.log(best_row.closest('.second'));
console.log(best_row.contains(document.getElementsByClassName('second')[0]));