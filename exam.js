function alertData(){
    document.getElementById('content').innerHTML='This is the new content';
}

function myToggle(){
    if(document.getElementById("mymessage").style.display!=''){
        document.getElementById("mymessage").style.display='';
    }else{
        document.getElementById('mymessage').style.display='none';
    }
}

function myLength(){
    document.getElementById('mysize').innerHTML = document.getElementById('myname').value.length;
}

function myColor(){
    document.getElementById('myfocustest').style.color = 'white';
    document.getElementById('myfocustest').style.backgroundColor = 'black';
}

function myRestore(){
    document.getElementById('myfocustest').style.color = 'black';
    document.getElementById('myfocustest').style.backgroundColor = 'white';
}

function myProgress(){
    document.getElementById('progvalue').style.width='78%';
    document.getElementById('progpercent').innerHTML='78%';
}

function myNumbers(){
    for( i=1; i<=9;i++){
        for(k=1;k<=i;k++){
            document.write(k);
        }
        document.write("<br/>");
    }

}

function myOpenNew(){
    window.open("https://www.google.com/","google");
}

function changeColor(){
    var myColors = ['#aaaaaa',
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00'];
    var myRand = Math.floor(Math.random()*100) %5;
    document.body.style.background = myColors[myRand];
}

function getBold(){
    var elements = document.getElementsByTagName('b');
    var myArea = new Array(elements.length);
    for(i=0; i<elements.length;i++){
        myArea[i]=elements[i].innerText;
    }
}