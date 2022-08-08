const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color = document.querySelector(".chosen-color");
let randBtn = document.getElementById("randomize-btn");
let copyBtn = document.getElementById("copy-btn");
let currentColor;

function getRandomNumber (){
    return Math.floor(Math.random() * hex.length);
}

randBtn.addEventListener ('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    return currentColor = hexColor;
});

copyBtn.addEventListener ('click', function() {
    navigator.clipboard.writeText(currentColor).then(() => {
        alert("Copied: " + currentColor);
    })
    .catch(() => {
        alert("Unable To Copy");
    });
})