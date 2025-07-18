const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const inputValue = input.value.trim();
    if (inputValue.length > 0) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
        imgBox.style.display = "block";
    } else {
        qrImage.src = "";
        imgBox.style.display = "none";
        alert("Please enter some text or URL.");
    }
});
