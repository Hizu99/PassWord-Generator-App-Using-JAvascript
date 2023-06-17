const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^!@#$%^&+_)()*()"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("number-case")
const symbolInput = document.getElementById("symbol-case")


const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatPassword = (password = "") =>{

    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(upperInput.checked){
        password += getRandomData(lowerSet)
    }
    if(upperInput.checked){
        password += getRandomData(numberSet)
    }
    if(upperInput.checked){
        password += getRandomData(symbolSet)
    }
  if (password.length < totalChar.value){
    return generatPassword(password)
  }
  passBox.innerText = truncateString(password, totalChar.value)
}
generatPassword()

document.getElementById("btn").addEventListener("click", function (){
    generatPassword()
})


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}