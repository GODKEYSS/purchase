// ======= OPTION DAY =========

let optionDay = "";
var selectDayElement = document.getElementById("select-day")
for (let i = 1; i <= 31; i++) {
    optionDay += `<option value = "${i}">${i}</option>`
}
selectDayElement.innerHTML = optionDay;

// ======= OPTION MONTH =========

let optionMonth = "";
var selectMonthElement = document.getElementById("select-month")
for (let i = 1; i <= 12; i++) {
    optionMonth += `<option value = "${i}">${i}</option>`
}
selectMonthElement.innerHTML = optionMonth;

// ======= OPTION YEAR =========

let optionYear = "";
var selectYearElement = document.getElementById("select-year")
for (let i = 2000; i <= 2024; i++) {
    optionYear += `<option value = "${i}">${i}</option>`
}
selectYearElement.innerHTML = optionYear;

// SWITCH input gender detail 

let gender = document.querySelectorAll('input[name="sex"]')
let inputGengerDetail = document.getElementById("gender-detail")
for (const radioButton of gender) {
    radioButton.addEventListener("click", function handleClick() {
        console.log(radioButton)
        if (radioButton.value == "OTHER") {
            inputGengerDetail.style.display = "block"
        } else {
            inputGengerDetail.style.display = "none"
        }
    })
}

// ramdom select input-check-login

let Subject = ["Anh ấy", "Cô ấy", "Em ấy", "Bà ấy"];
let Do = ["Chúc", "Chia buồn", "Ăn vạ"];
let message = ["Sinh nhật vui vẻ", "Đám cưới hạnh phúc", "100k"]
const randomSubject = Subject[Math.floor(Math.random() * Subject.length)]
const randomDo = Do[Math.floor(Math.random() * Do.length)]
const randomMessage = message[Math.floor(Math.random() * message.length)]

let selectCheckLogin = document.getElementById("input-check-login")
let otionCheckLogin = ""
for(const item of Subject){
    otionCheckLogin += `<option>${Subject[Math.floor(Math.random() * Subject.length)]} ${Do[Math.floor(Math.random() * Do.length)]} ${message[Math.floor(Math.random() * message.length)]}
</option>`
}

selectCheckLogin.innerHTML = otionCheckLogin;

let register = document.getElementsByClassName('registration')[0].addEventListener("click",function(){

    let firstName = document.getElementsByClassName("first-name")[0].value;
    let lastName = document.getElementsByClassName("last-name")[0].value;
    let fullName = firstName + "" + lastName
    let birthDay = document.getElementById('select-day').value
    let birthMonth = document.getElementById('select-month').value
    let birthYear = document.getElementById('select-year').value
    let fullBirthDate = birthDay + "-" + birthMonth + "-" + birthYear;
    let sex = document.querySelector("input[name = sex]:checked").value;
    let fullIntroduction = fullName + " " + fullBirthDate + " " + sex;
    alert(`Xin chào ${fullIntroduction}, đã đăng ký thành công`)
})



