const socket = io();
const message = document.querySelector('.message');
const form = document.querySelector('.form');
const name = document.querySelector('.name');
const input = document.querySelector('.input');

const userName = prompt('Ваше имя:');
name.innerText = userName;
form.addEventListener('submit', (e) =>{
  e.preventDefault();
  if(input.value){
    socket.emit('SEND_MESSAGE', {message: input.value,name: userName});
  }
  input.value = '';
});
socket.on('SEND_MESSAGE', (data) => {
  if(data.name == userName){
    message.innerHTML += `<div class="imMes"><div></div><div class="textMes">${data.message}</div></div>`;
  }
  else{
    message.innerHTML += `<div class="youMes">  <div class="textMes2">${data.message}</div><div class="nameMes">${data.name}</div><div></div></div>`
  }
  
});