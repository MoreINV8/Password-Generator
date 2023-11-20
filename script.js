const statusBlock = document.querySelector(".status");
const passwordField = document.querySelector(".password-field input");
const copyBtn = document.querySelector(".password-field img");
const generateBtn = document.querySelector(".generate");

const alphabet = 
{
    "U" : "ABCDEFGHIJKLMNOPQRSTUVXYZ",
    "L" : "abcdefghijklmnopqrstuvxyz",
    "N" : "0123456789",
    "S" : "!@#$%^&*()"
};

let password = "";
let char = "";
const passwordLength = 12;

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
Array.from(statusBlock.children).forEach(block => {
    block.addEventListener("click", selected);
});

function selected(e) {
    const element = e.target;
    element.classList.toggle("unchecked");
}

function generatePassword() {
    Array.from(statusBlock.children).forEach(block => {
        if (!block.classList.contains("unchecked")) {
            switch (block.innerHTML[0]) {
                case 'U':
                    char += alphabet.U;
                    break;
                case 'L':
                    char += alphabet.L;
                    break;
                case 'N':
                    char += alphabet.N;
                    break;
                case 'S':
                    char += alphabet.S;
                    break;
            }
        }
    });

    for (let i = 0; i < passwordLength; i++) {
        const rand = Math.floor(Math.random() * char.length);
        password += char[rand];
    }

    passwordField.value = password;
    password = "";
    char = "";
}

async function copyPassword() {
    // first way (old way)
    // passwordField.select();
    // document.execCommand("copy");

    // second way using clipboard api
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(passwordField.value);
    }
}