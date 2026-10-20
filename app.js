const usernameInput = document.getElementById("username");
const displayName = document.getElementById("displayName");
const portraitCard = document.getElementById("portraitCard");
const backgroundSelect = document.getElementById("background");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {

    const username = usernameInput.value.trim();

    if(username !== ""){
        displayName.textContent = username;
    }

    portraitCard.className =
        "portrait-card " +
        backgroundSelect.value;
});
