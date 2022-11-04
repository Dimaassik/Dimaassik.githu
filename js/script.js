 var result = prompt("Введіть ваше ім'я");
 	if(result==""){
		result="Невідомий ковбой";
	}
const h1 = document.querySelector('#h1');
 var i=1;
 var p1=0;
 var p2=0;

 const img1 = document.querySelector('#i1');
img1.addEventListener('click',() => { 
img2.remove();
img3.remove();
war()
Next();
},{once:true});
 const img2 = document.querySelector('#i2');
img2.addEventListener('click', () => { 
img1.remove();
img3.remove();
war()
Next();
},{once:true});
 const img3 = document.querySelector('#i3');
img3.addEventListener('click', () => { 
img1.remove();
img2.remove();
war()
Next();
},{once:true});

function Next(){
const d1 = document.querySelector('#d1');
d1.classList.add('classd1')
const h2 = document.createElement('h1');
h2.textContent = p1+" : "+p2;
h2.id = "h2"
d1.appendChild(h2);
const img4 = document.createElement('img');
img4.src ="img/i4.jpg";
img4.title = "Вербон Фарлей"
d1.appendChild(img4);

const d2 = document.createElement('div');
d2.id = "d2"
d2.classList.add('classd1')
const body = document.body;
body.appendChild(d2);

const h3 = document.createElement('h1');
h3.textContent = result;
h3.id = "h3"
d2.appendChild(h3);

const btn = document.createElement('button');
btn.innerHTML = 'Постріл';
btn.id = "btn"
btn.addEventListener('click', () => { Rand()});
d2.appendChild(btn);

const h4 = document.createElement('h1');
h4.textContent = "Шериф комп'ютер";
h4.id = "h4"
d2.appendChild(h4);

const d3 = document.createElement('div');
d3.id = "d3"
body.appendChild(d3);

const btn1 = document.createElement('button');
btn1.innerHTML = 'Рестарт';
btn1.id = "btn1"
btn1.addEventListener('click', () => { Restart()});
d3.appendChild(btn1);
}
function war(){
	h1.textContent = 'Бій №'+ i;
	i++;
}

function Rand(){
	if((p1!=3)&&(p2!=3)){
	var r1 = Math.floor(Math.random() * 4);
	var r2 = Math.floor(Math.random() * 4);
	console.log(r1);
	console.log(r2);
	if (r1>=r2){
		p1++;
	}
		if (r1<=r2){
		p2++;
	}
	h1.textContent = 'Бій №'+ i;
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const h4 = document.querySelector('#h4');
	h2.textContent = p1+' : '+p2;
	h3.textContent = result +": "+ r1;
	h4.textContent = "Шериф комп'ютер: "+ r2;
	i++;
	}
	if((p1==3)&&(p2!=3)){
		alert("Гарно стріляєш ковбою :)")
		h1.textContent = 'Перемога!';
	}
	if(p2==3){
		alert("Супротивник дійсно сильний, спробуй ще раз")
				h1.textContent = 'Поразка';
	}
}
function Restart(){
	r1 = 0;
	r2 = 0;
	p1 = 0;
	p2 = 0;
	i = 1;
		h1.textContent = 'Бій №'+ i;
const h2 = document.querySelector('#h2');
const h3 = document.querySelector('#h3');
const h4 = document.querySelector('#h4');
	h2.textContent = p1+' : '+p2;
	h3.textContent = result +": "+ r1;
	h4.textContent = "Шериф комп'ютер: "+ r2;
	i++;
}