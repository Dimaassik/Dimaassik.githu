
 var t=0,f=0,n=0,r,rn=10,buff="";
 var w1 = ["morning","name","tired","turn","across","price","head","hospital", "walk" ,"near"];
 var w2 = ["ранок","ім'я","втомлений","поворот","через","ціна","голова","лікарня", "прогулюватися" ,"поруч"];
 
 var w3 = ["heartbeat","workout","underground","outlook","enmity","novice","velocity","curiosity", "solitude" ,"memory"];
 var w4 = ["серцебиття","тренування","метро","світогляд","ненависть","новачок","швидкість","допитливість", "самотність" ,"пам’ять"];
 
 var w5 = ["avarice","gluttony","maxim","nadir","penchant","predilection","sycophant","zenith", "candor" ,"aberration"];
 var w6 = ["жадібність","ненаситність","вислів","занепад","пристрасть","перевага","підлабузник","розквіт", "відвертість" ,"відхилення"];
 
	$('#btn').bind('click', begin); 

function begin(){
		r=$('#sel').val();
	if(r==1)
		box(w1,w2);
	if(r==2)
		box(w3,w4);
	if(r==3)
		box(w5,w6);
}
function box(arr1, arr2){
	if(n>0&&n<=10){
		if($("#in").val() === buff.toUpperCase()){
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
		$('#h').text(arr1[r]);
		buff=arr2[r];
		arr1.splice(r,1);
		arr2.splice(r,1);
		$('#btn').text("Далі");
	}
}
