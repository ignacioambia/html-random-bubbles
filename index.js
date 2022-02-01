const container = document.querySelector('.container');
console.log('Add container: ', container);


function createBall(id){

  const elem = document.createElement('div')
  elem.classList.add('ball');
  const diameter = randomRange(10, 100);
  const background = `rgb(${randomRange(0, 255)},${randomRange(0, 255)},${randomRange(0, 255)})`;

  console.log('background is ', background)
  elem.style.background = background;
  elem.style.width = `${diameter}px`;
  elem.style.height = `${diameter}px`;
  elem.style.top = `${randomRange(0, container.clientHeight - diameter)}px`;
  elem.style.left = `${randomRange(0, container.clientHeight - diameter)}px`;
  // elem.innerText = id;

  container.appendChild(elem);
}

function randomRange(min, max){
  console.log('minmax', min, max);
  return Math.random() * (max - min ) + min;
}


for(let i = 0; i < 500; i++){
  createBall(i);
}
