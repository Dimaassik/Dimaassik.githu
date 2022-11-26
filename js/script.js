
$('#l1').bind('click', prediction); 
$('#l2').bind('click', duel); 
$('#l3').bind('click', k21); 
$('#l4').bind('click', dgo); 
function prediction(){
	$('#main').remove(); 
	$('title').text('Бабка гадалка');
	$('body').css({backgroundImage: "url('img/bg1.jpg')"});
	$('body').html('<div class="classpr"><h1>Запитайте в кулі</h1><input type="text" id=inp><br><button id="btn">Спитати</button><h1 id="pr1"/></div>')
	$('#btn').bind('click', prediction2); 
}
function prediction2(){
	var arr = ['Ні', 'Ні в якому разі', 'Гадаю що ні','Складно відповісти','Можливо','Так','Однозначно так','Духи нейтральні','Без сумнівів','Шансів мало','Смутно'];
	var p = ($('#inp').val()).indexOf("?");
	if(p == -1){
		$("#pr1").text('Не бачу питання');
	}else{
	var r = Math.floor(Math.random() * 11);
	$("#pr1").text(arr[r]);}
}

function duel(){
	$('#main').remove(); 
	$('title').text('Техас');
	$('body').css({
		backgroundImage: "url('img/bg2.jpg')",	
		backgroundColor: "#150B02"});
	$('body').html('<h1 id="h1" class="classtx">Виберіть персонажа</h1><div id="d1" class="classtx"><img src="img/i1.jpg" alt="" title="Седі Адлер" id="i1"><img src="img/i2.jpg" alt="" title="Датч Ван Дер Лінде" id="i2"><img src="img/i3.jpg" alt="" title="Джон Марстон" id="i3"></div>')
	var result = prompt("Введіть ваше ім'я");
 	if((result=="")||(result==null))
		result="Невідомий ковбой";
	
	const img1 = document.querySelector('#i1');
	img1.addEventListener('click',() => { duel2(1,result)},{once:true});
	const img2 = document.querySelector('#i2');
	img2.addEventListener('click',() => { duel2(2,result)},{once:true});
	const img3 = document.querySelector('#i3');
	img3.addEventListener('click',() => { duel2(3,result)},{once:true});
}
function duel2(i,result){
	var n=1, player1=0, player2=0;
	if(i==1){
		$('#i2').remove();
		$('#i3').remove();
	}
	if(i==2){
		$('#i1').remove();
		$('#i3').remove();
	}
	if(i==3){
		$('#i1').remove();
		$('#i2').remove();
	}
	$('#h1').text('Бій №'+ n);
	n++;
		
const d1 = document.querySelector('#d1');
const h2 = document.createElement('h1');
h2.textContent = player1+" : "+player2;
h2.id = "h2"
d1.appendChild(h2);

const img4 = document.createElement('img');
img4.src ="img/i4.jpg";
img4.title = "Вербон Фарлей"
d1.appendChild(img4);

const d2 = document.createElement('div');
d2.id = "d2";
d2.classList.add('classtx2')
const body = document.body;
body.appendChild(d2);

const h3 = document.createElement('h1');
h3.textContent = result;
h3.id = "h3";
d2.appendChild(h3);

const btn = document.createElement('button');
btn.innerHTML = 'Постріл';
btn.id = "btn";
btn.addEventListener('click', () => {
	if((player1!=3)&&(player2!=3)){
		var r1 = Math.floor(Math.random() * 4);
		var r2 = Math.floor(Math.random() * 4);
	if (r1>=r2){
		player1++;
	}
	if (r1<=r2){
		player2++;
	}
	h1.textContent = 'Бій №'+ i;
	const h2 = document.querySelector('#h2');
	const h3 = document.querySelector('#h3');
	const h4 = document.querySelector('#h4');
	h2.textContent = player1+' : '+player2;
	h3.textContent = result +": "+ r1;
	h4.textContent = "Шериф комп'ютер: "+ r2;
	n++;
	}
	if((player1==3)&&(player2!=3)){
		alert("Гарно стріляєш ковбою :)")
		h1.textContent = 'Перемога!';
	}
	if(player2==3){
		alert("Супротивник дійсно сильний, спробуй ще раз")
		h1.textContent = 'Поразка';
	}
});
d2.appendChild(btn);

const h4 = document.createElement('h1');
h4.textContent = "Шериф комп'ютер";
h4.id = "h4";
d2.appendChild(h4);

const d3 = document.createElement('div');
d3.id = "d3";
d3.classList.add('classtx2');
body.appendChild(d3);

const btn1 = document.createElement('button');
btn1.innerHTML = 'Рестарт';
btn1.id = "btn1"
btn1.addEventListener('click', () => {
	r1 = 0;
	r2 = 0;
	player1 = 0;
	player2 = 0;
	n = 1;
	h1.textContent = 'Бій №'+ n;
	const h2 = document.querySelector('#h2');
	const h3 = document.querySelector('#h3');
	const h4 = document.querySelector('#h4');
	h2.textContent = player1+' : '+player2;
	h3.textContent = result +": "+ r1;
	h4.textContent = "Шериф комп'ютер: "+ r2;
	n++;
});
d3.appendChild(btn1);
}

function k21(){
	$('#main').remove();
	$('title').text('21');
	$('body').css({
		backgroundImage: "url('img/bg3.jpg')"});
	var result = prompt("Введіть ваше ім'я");
 	if((result=="")||(result==null))
		result="Невідомий лудоман";
	
	var i=0,p1=0,p2=0,r1=0,r2=0;
	const body = document.body;
	const D1 = document.createElement('div');
	D1.id = "D1"
	D1.classList.add('class21')
	body.appendChild(D1);
	
	const Img1 = document.createElement('img');
	Img1.src ="img/k11.png";
	D1.appendChild(Img1);
	
	const b = document.createElement('button');
	b.innerHTML = 'Викласти карту';
	b.id = "b"
	b.addEventListener('click', () => {
	i++;
	if(i<4){
		r1 = Number(Math.floor(Math.random() * 8)+2);
		r2 = Number(Math.floor(Math.random() * 8)+2);
		var qw=["img/k",".png"];
		Img1.src=qw[0]+r1+qw[1];
		if(r1==5){
			p1+=11;
		}else{p1+=r1;}
		Img2.src=qw[0]+r2+qw[1];
		if(r2==5){
			p2+=11;
		}else{p2+=r2;}
		H2.textContent = p1+' : '+p2;
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
		});
	D1.appendChild(b);
	
	const Img2 = document.createElement('img');
	Img2.src ="img/k11.png";
	D1.appendChild(Img2);
	
	const D2 = document.createElement('div');
	D2.id = "D2";
	D2.classList.add('class22')
	body.appendChild(D2);
	
	const H3 = document.createElement('h1');
	H3.textContent = result;
	H3.id = "H3";
	D2.appendChild(H3);
	
	const H2 = document.createElement('h1');
	H2.textContent = p1+" : "+p2;
	H2.id = "H2";
	D2.appendChild(H2);
	
	const H4 = document.createElement('h1');
	H4.textContent = "Картковий геній";
	H4.id = "H4";
	D2.appendChild(H4);
	
	const D3 = document.createElement('div');
	D3.id = "D3"
	D3.classList.add('class22')
	body.appendChild(D3);

	const b1 = document.createElement('button');
	b1.innerHTML = 'Лудоманити знову';
	b1.id = "b1"
	b1.addEventListener('click', () => {	
	r1 = 0;
	r2 = 0;
	p1 = 0;
	p2 = 0;
	i = 0;
	Img1.src ="img/k11.png";
	Img2.src ="img/k11.png";
	H2.textContent = p1+' : '+p2;});
	D3.appendChild(b1);
}

function dgo(){
	$('#main').remove(); 
	$('title').text('Хлопчак Джо');
	$('body').css({
		backgroundImage: "url('img/bg4.jpg')",	
		backgroundColor: "#851025"});
	$('body').html('<h1 id="hh1">Баланс</h1><h1 id="hh2"> </h1><div id="qq1" class="classdgo"><div id="d11" class="classdgo1"><img src="img/q1.png" id="q1"><img src="img/q1.png" id="q2"><img src="img/q1.png" id="q3"></div><div id="d12" class="classdgo1"><img src="img/q1.png" id="q4"><img src="img/q1.png" id="q5"><img src="img/q1.png" id="q6"></div><div id="d13" class="classdgo1"><img src="img/q1.png" id="q7"><img src="img/q1.png" id="q8"><img src="img/q1.png" id="q9"></div><button id="qtn">Крутити</button></div>')
	result = prompt("Введіть ваше ім'я");
	if((result==null)||(result=="")){
		result="Лудоман";
	}
	var i=0,v=0,r1=0,r2=0,r3=0; b=100;
	const body = document.body;
	const d1 = document.getElementById('qq1');
	const btn = document.getElementById('qtn');
	btn.addEventListener('click', () => {
	b-=10;
	h1.textContent ="Баланс: " + b;
	r1 = Number(Math.floor(Math.random() * 6));
	i1.src = "img/"+f[r1]+".png";
	r2 = Number(Math.floor(Math.random() * 6));
	i2.src = "img/"+f[r2]+".png";
	r3 = Number(Math.floor(Math.random() * 6));
	i3.src = "img/"+f[r3]+".png";
	if((r1==r2)&&(r2==r3)){
		b+=100;
	}
	h1.textContent ="Баланс: " + b;
	r1 = Number(Math.floor(Math.random() * 6));
	i4.src = "img/"+f[r1]+".png";
	r2 = Number(Math.floor(Math.random() * 6));
	i5.src = "img/"+f[r2]+".png";
	r3 = Number(Math.floor(Math.random() * 6));
	i6.src = "img/"+f[r3]+".png";
	if((r1==r2)&&(r2==r3)){
		b+=100;
	}
	h1.textContent ="Баланс: " + b;
	r1 = Number(Math.floor(Math.random() * 6));
	i7.src = "img/"+f[r1]+".png";
	r2 = Number(Math.floor(Math.random() * 6));
	i8.src = "img/"+f[r2]+".png";
	r3 = Number(Math.floor(Math.random() * 6));
	i9.src = "img/"+f[r3]+".png";
	if((r1==r2)&&(r2==r3)){
	b+=100;
	}
	h1.textContent ="Баланс: " + b;
	});
	const h1 = document.getElementById('hh1');
	h1.textContent ="Баланс: " + b;
	const h2 = document.getElementById('hh2');
	h2.textContent = result;

	const i1 = document.getElementById('q1');
	const i2 = document.getElementById('q2');
	const i3 = document.getElementById('q3');
	const i4 = document.getElementById('q4');
	const i5 = document.getElementById('q5');
	const i6 = document.getElementById('q6');
	const i7 = document.getElementById('q7');
	const i8 = document.getElementById('q8');
	const i9 = document.getElementById('q9');

	var f = ["q1","q2","q3","q4","q5","q6"] 
}
