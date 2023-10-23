'use strict'
const PasswordBox=document.querySelector('.password-box')
const copyBtn=document.querySelector('.material-symbols-outlined')
const range=document.querySelector('.range')
const checkBox1=document.getElementById('checkbox1');
const checkBox2=document.getElementById('checkbox2');
const checkBox3=document.getElementById('checkbox3');
const checkBox4=document.getElementById('checkbox4');
const generatorBtn=document.querySelector('.generator-btn');
const selectAny=document.querySelector('.select-any');
const size=document.querySelector('.length');
const box1=document.getElementById('box1');
const box2=document.getElementById('box2');
const box3=document.getElementById('box3');
const box4=document.getElementById('box4');
const activeBox=document.querySelectorAll('.active-box');
let password="";
  
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*()-_=+[{}]\|<,.>/?"
    


 
function createPassword(){
 console.log("sfwefwef")
  const lengthOfPassword=range.value;
if(checkBox1.checked||checkBox2.checked||checkBox3.checked||checkBox4.checked){


  while(lengthOfPassword>password.length){
if(checkBox1.checked){
  password+=upperCase[Math.floor(Math.random()*upperCase.length)]
  selectAny.textContent=""
}
if(checkBox4.checked){
  password+=symbols[Math.floor(Math.random()*symbols.length)]
  selectAny.textContent=""
   
}
if(checkBox2.checked){
  password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
  selectAny.textContent=""
}
if(checkBox3.checked){
  password+=numbers[Math.floor(Math.random()*numbers.length)]
  selectAny.textContent=""
}

}}
else{
  
selectAny.textContent="Select any checkbox"
}
PasswordBox.value=password;
password="";
}

// to copy password
function copyPassword(){
  PasswordBox.select();
  document.execCommand("copy");
}
// length of password
function sizeOfPassword(){
  size.textContent= range.value;
}


// active checkBox
function active(){
  if(checkBox1.checked){
   box1.classList.add('active')
  }
  else {
    box1.classList.remove('active')
  }
  if(checkBox2.checked){
    box2.classList.add('active')
  }
  else {
    box2.classList.remove('active')
  }
  if(checkBox3.checked){
    box3.classList.add('active')
  }
  else {
    box3.classList.remove('active')
  }
  if(checkBox4.checked){
    box4.classList.add('active')
  }
  else {
    box4.classList.remove('active')
  }
}
copyBtn.addEventListener('click',copyPassword)
generatorBtn.addEventListener('click',createPassword)
range.addEventListener('input',sizeOfPassword)
activeBox.forEach(e=>addEventListener("input",active))