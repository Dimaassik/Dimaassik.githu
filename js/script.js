 var result = prompt("Введіть ваше ім'я");
 	if(result==""){
		result="Невідомий лудоман";
	}
 var i=0,p1=0,p2=0,r1=0,r2=0;
const body = document.body;
const d1 = document.createElement('div');
d1.id = "d1"
body.appendChild(d1);
const img1 = document.createElement('img');
img1.src ="img/k11.jpg";
d1.appendChild(img1);
const btn = document.createElement('button');
btn.innerHTML = 'Викласти карту';
btn.id = "btn"
btn.addEventListener('click', () => { Rand()});
d1.appendChild(btn);
const img2 = document.createElement('img');
img2.src ="img/k11.jpg";
d1.appendChild(img2);
const d2 = document.createElement('div');
d2.id = "d2";
body.appendChild(d2);
const h3 = document.createElement('h1');
h3.textContent = result;
h3.id = "h3";
d2.appendChild(h3);
const h2 = document.createElement('h1');
h2.textContent = p1+" : "+p2;
h2.id = "h2";
d2.appendChild(h2);
const h4 = document.createElement('h1');
h4.textContent = "Картковий геній";
h4.id = "h4";
d2.appendChild(h4);
const d3 = document.createElement('div');
d3.id = "d3"
body.appendChild(d3);

const btn1 = document.createElement('button');
btn1.innerHTML = 'Лудоманити знову';
btn1.id = "btn1"
btn1.addEventListener('click', () => { Restart()});
d3.appendChild(btn1);

function Rand(){
	i++;

	if(i<4){
		r1 = Number(Math.floor(Math.random() * 8)+2);
		r2 = Number(Math.floor(Math.random() * 8)+2);
		console.log(r1);
		console.log(r2);
		switch(r1){
		case(2):
			img1.src ="img/k2.png";
			p1+=2;
			break;
		case(3):
			img1.src ="img/k3.png";
			p1+=3;
			break;
		case(4):
			img1.src ="img/k4.png";
			p1+=4;
			break;
		case(5):
			img1.src ="img/k5.png";
			p1+=11;
			break;
		case(6):
			img1.src ="img/k6.png";
			p1+=6;
			break;
		case(7):
			img1.src ="img/k7.png";
			p1+=7;
			break;
		case(8):
			img1.src ="img/k8.png";
			p1+=8;	
			break;
		case(9):
			img1.src ="img/k9.png";
			p1+=9;
			break;
		case(10):
			img1.src ="img/k10.png";
			p1+=10;
			break;
		}
		switch(r2){
		case 2:
			img2.src ="img/k2.png";
			p2+=2;
			break;
		case 3:
			img2.src ="img/k3.png";
			p2+=3;
			break;
		case 4:
			img2.src ="img/k4.png";
			p2+=4;
			break;
		case 5:
			img2.src ="img/k5.png";
			p2+=11;
			break;
		case 6:
			img2.src ="img/k6.png";
			p2+=6;
			break;
		case 7:
			img2.src ="img/k7.png";
			p2+=7;
			break;
		case 8:
			img2.src ="img/k8.png";
			p2+=8;
			break;
		case 9:
			img2.src ="img/k9.png";
			p2+=9;
			break;
		case 10:
			img2.src ="img/k10.png";
			p2+=10;
			break;
		}
		h2.textContent = p1+' : '+p2;
	}
	if(i>2){
		if(p1>p2){
		alert("Перемога твоя");
		}
		if(p2>p1){
		alert("Поразка")
		}
		if(p2==p1){
		alert("Вааау, це що нічія?")
		}
	}
}

function Restart(){
	r1 = 0;
	r2 = 0;
	p1 = 0;
	p2 = 0;
	i = 0;
	h2.textContent = p1+' : '+p2;
	h3.textContent = result +": "+ r1;
	h4.textContent = "Картковий геній: "+ r2;
}
// валет-2 дама-3 король-4 туз-5 (11) 6 7 8 9 10
