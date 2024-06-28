const vj = document.querySelector('#vj');
 const rathod = document.querySelector('#rathod');
 const number = document.querySelector('#number');
 const email = document.querySelector('#email');
 const password = document.querySelector('#password');
 const confirm = document.querySelector('#confirm');
 const inputlar = document.querySelector('.inputlarr');

 inputlar.addEventListener('submit',function(event){
event.preventDefault();
const natija = {
    vj:vj.value,
    rathod:rathod.value,
    number:number.value,
    email:email.value,
    password:password.value,
    confirm:confirm.value,
}
console.log(natija);
 })