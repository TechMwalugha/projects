const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const generatePasswordBtn = document.getElementById('generate-password')
const firstBtn = document.querySelector('.f-btn')
const secondBtn = document.querySelector('.s-btn')

generatePasswordBtn.addEventListener('click', ()=>{
    getGeneratedPassword()
})

function getGeneratedPassword () {
    const firstPassword = generatePassword()
    const secondPassword = generatePassword()
    firstBtn.value = firstPassword.join("")
    secondBtn.value = secondPassword.join("")
}
function generatePassword () {
    let generatedPassword = []
    for(let i = 0; i <=15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        generatedPassword.push(characters[randomNumber])
    }
    return generatedPassword
}

function copyToClipBoard(copyText) {

  // Select the text field
//   const copyText = document.querySelector('.f-btn')
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
 document.execCommand('copy')

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
firstBtn.onclick = () => {
   copyToClipBoard(firstBtn)
}
secondBtn.onclick = () => {
   copyToClipBoard(secondBtn)
}


// console.log(firstPassword)
// console.log(secondPassword)

