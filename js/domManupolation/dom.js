
 function login(){
   const username = document.getElementById('userName').value; 
   const password = document.getElementById('password').value;
   console.log(username, password);
}

function addUl(){
  const ul = document.querySelector('ul');
  const newLi = document.createElement('li');
  newLi.innerHTML = "new element";
  ul.appendChild(newLi);
}

