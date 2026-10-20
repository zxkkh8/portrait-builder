const usernameInput =
document.getElementById("username");

const generateBtn =
document.getElementById("generate");

const backgroundSelect =
document.getElementById("background");

const canvasName =
document.getElementById("canvasName");

const displayName =
document.getElementById("displayName");

const portraitCard =
document.getElementById("portraitCard");

generateBtn.addEventListener("click", async () => {

    const username =
    usernameInput.value.trim();

    if(username.length > 0){

        canvasName.textContent =
        username;

        displayName.textContent =
        username;
    }

    portraitCard.className =
    "portrait-card " +
    backgroundSelect.value;

});
