// const button = document.querySelector('button');
// button.addEventListener('mousemove',function(){

//     const hight = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth); 
//     button.style.left =`${hight}px`;
//     button.style.top = `${width}px`;
// })

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

const container = document.querySelector('#boxes');
const h1 = document.createElement('h1');
document.body.append(h1);
 const printColor=function (){
     const color = this.style.backgroundColor;
     h1.innerHTML=color.toUpperCase();
}; 
for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor= color;
    box.classList.add('box');
    container.appendChild(box); 
    box.addEventListener('click',printColor);
}
 
