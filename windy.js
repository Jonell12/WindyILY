const messages = [
    "Thank you for protecting me from those toxic friends",
    "Thank you for being the Best Girl ever",
    "Thank you for not hating me when sometimes i did something wrong",
    "Thank you for being my healthy food buddy",
    "Thank you for loving me even i am still fat",
    "Thank you for being calm when i'm overthinking",
    "Thank you for the way you love me always",
    "There are so many things i have to thank you for"
];

const shortMessages = [
    "I promise to choose my friends wisely",
    "napaka dabes talaga, wala ng ihihiling pa",
    "kahit nagkamali ako, minamahal mo parin ako ng lubusan",
    "you always recommend and push me to eat healthy foods, so cute!",
    "i promise to be fit someday and to work harder",
    "nirereassure mo ako lagi pag nag aalala",
    "you made me fell in love with myself again",
    "i love you and now, i have important question, hehe",
];

const images = [
    "images/milkmocha1.gif",
    "images/milkmocha1.gif",
    "images/milkmocha2.gif",
    "images/milkmocha3.gif",
    "images/milkmocha5.gif",
    "images/milkmocha2.gif",
    "images/milkmocha4.gif",
    "images/milkmocha6.gif",
];

let index = 0;

function nextMessage() {
    if (index < messages.length - 1) {
        index++;

        // Get elements
        let messageElement = document.getElementById("message");
        let shortMessageElement = document.getElementById("shortMessage");
        let gifElement = document.getElementById("bgImage"); // Get the GIF element

        // Update text content
        messageElement.innerText = messages[index];
        shortMessageElement.innerText = shortMessages[index];

        // Apply fade-in effect
        messageElement.classList.remove("fade-in");
        shortMessageElement.classList.remove("fade-in");
        void messageElement.offsetWidth; // Trigger reflow
        void shortMessageElement.offsetWidth;
        messageElement.classList.add("fade-in");
        shortMessageElement.classList.add("fade-in");

        // Change the GIF image dynamically
        gifElement.src = images[index % images.length];
    } else {
        // Hide the messages and next button
        document.getElementById("message").style.display = "none";
        document.getElementById("shortMessage").style.display = "none";
        document.querySelector(".btn").style.display = "none";

        // Show the Valentine question box
        document.getElementById("valentineBox").style.display = "block";
    }
}

// Moving "No" Button Randomly
document.getElementById("noBtn").addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    document.getElementById("noBtn").style.position = "absolute";
    document.getElementById("noBtn").style.left = `${x}px`;
    document.getElementById("noBtn").style.top = `${y}px`;
});

// Show Final Message When Clicking "Yes"
function showLoveMessage() {
    document.getElementById("finalMessage").style.display = "block";
    document.getElementById("valentineBox").style.display = "none";
    document.getElementById("smallMessage").style.display = "block";
}