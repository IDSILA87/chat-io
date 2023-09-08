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
  message.innerHTML += `<li><span>${data.name}</span>${data.message}</li>`
});