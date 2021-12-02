// The function filter() (see below) should be called
// when the user writes something in the search field.
// However, the page has to be completely loaded first.
// Write extra code here that accomplishes this.

let searchField = document.getElementById("searchfield");
let table = document.getElementById("table");
window.addEventListener("load", () => {
    searchField.addEventListener("input", filter);
})


/**
 * Hides or shows table rows, based on the search term of the user.
 */
function filter() {
    let rowArray = [...table.rows];
    rowArray.shift();
    let keyword = searchField.value;
    rowArray.forEach(r => r.style.display = !r.innerHTML.includes(keyword) && keyword !== "" ? "none" : "table-row")
}
