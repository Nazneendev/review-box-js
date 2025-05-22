let reviewContainer = document.getElementById('reviewContainer');
let inputReview = document.getElementById('inputReview');
let addReview = document.getElementById('addReview');


addReview.addEventListener('click', () => {
    let inputvalue = inputReview.value

    let paragraph = document.createElement("p")
    paragraph.innerText = inputvalue
    reviewContainer.appendChild(paragraph)
    inputReview.value = ""
})