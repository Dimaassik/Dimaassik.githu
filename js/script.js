const div1 = document.createElement('div');
div1.classList.add('class1')
const body = document.body;
body.appendChild(div1);
const inp = document.createElement('input');
div1.appendChild(inp);
const h1 = document.createElement('h1');
h1.textContent = 'Введіть те, що хочете запитати в кулі';
div1.appendChild(h1);
h1.insertAdjacentElement('afterend',inp);
const br1 = document.createElement('br');
div1.appendChild(br1);
const br2 = document.createElement('br');
div1.appendChild(br2);
const btn = document.createElement('button');
btn.innerHTML = 'Спитати';
div1.appendChild(btn);
inp.insertAdjacentElement('afterend',inp);
const h2 = document.createElement('h1');
h2.textContent = '';
div1.appendChild(h2);
btn.addEventListener('click', () => {
	var st = String(inp.value).indexOf("?");
	console.log(st);
	if(st == -1){
		h2.textContent = 'Не бачу питання'
	}else{
var arr = ['Ні', 'Ні в якому разі', 'Гадаю що ні','Складно відповісти','Можливо','Так','Однозначно так','Духи нейтральні','Без сумнівів','Шансів мало','Смутно'];
var r = Math.floor(Math.random() * 11);
	h2.textContent = String(arr[r]);}
});

