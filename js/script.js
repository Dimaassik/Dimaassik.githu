
 var t=0,f=0,n=0,r,st="",rn=10,buff="";
 var w1 = ["morning","name","tired","turn","across","price","head","hospital", "walk" ,"near"];
 var w2 = ["ранок","ім'я","втомлений","поворот","через","ціна","голова","лікарня", "прогулюватися" ,"поруч"];
	$('#btn').bind('click', Rand); 

function Rand(){
	if(n>0&&n<=10){
		st=$("#in").val();
		if(st==buff){
			t++;
		}else{
		f++;
		}
	$('#h1').text("Не вірно "+f);
	$('#h2').text("Вірно "+t);
	if(n==10){
		n++;
	if(t<3)
		alert("Ваш рівень: початковий")
	else
	if(t<6)
		alert("Ваш рівень: середній")
	else
	if(t<9)
		alert("Ваш рівень: високий")
	else
	if(t<10)
		alert("Ваш рівень: неперевершений")
	}
	}
	if(n<10){
	$("#in").val("");
	r=Number(Math.floor(Math.random() * rn));
	rn--;
	n++;
	$('#n').text(n+"/10");
	$('#h').text(w1[r]);
	buff=w2[r];
	w1.splice(r,1);
	w2.splice(r,1);
	$('#btn').text("Далі");
	}
}
