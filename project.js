


    //calculator :
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => { 
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = " ";
                break ;
            case '&larr':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default :
                display.innerText += e.target.innerText;     


        }
    });
});

//TABLES :
function makeTable(){
    var table = document.getElementById('tab');
    var row = document.getElementById('rows').value;
    var col = document.getElementById('cols').value;

console.log(row+" "+col);

for(var rowIndex = 0; rowIndex<row; rowIndex++){
    var tr = document.createElement('tr');

    for(var colIndex = 0; colIndex<col; colIndex++){
        var td = document.createElement('td');
        var text = document.createTextNode("tables "+colIndex);

     td.appendChild(text);
     tr.appendChild(td);
    }
    table.appendChild(tr);
}
}
document.getElementById('make').addEventListener("click",makeTable);

document.write("<br><br>")

function go(){
     
    var str = document.getElementById("t1").value;
    var vowel="a,e,i,o,u";
    var ctr=0;

    for(var x=0; x<str.length; x++){
        for(var y=0; y<vowel.length; y++){
            if(str[x]==vowel[y])
            {
               ctr++;
            }
        } 
    }
document.getElementById("p1").innerHTML="The number of vowel in textbox is :-"+ctr;
    
} 

document.write("<br><br>")

clickBtn = document.querySelector('#btn');
clickBtn.addEventListener('click', primeNumber);

function primeNumber(){
   let number = document.querySelector('#txt').value;
   number = Math.floor(number);
   result = '';
   let isprime = true;
   
   if(number ===1){
       result ="1 is neither prime nor composite number.";
   }
   else if(number > 1){ 

       for(let i = 2; i < number; i++){
           if(number % i == 0){
               isprime = false;
               break;
           }
       }
       if(isprime){
           result = 'it is a prime number';
       }else{
           result = 'it is not an prime number';
       }
   }
   document.querySelector('.output').innerHTML= "the given"+""+number+"number :-"+result;

}
document.write("<br><br>")

//Fibonacci serier
clicksub =document.querySelector('#sub');
clicksub.addEventListener('click', fibonacci);

function fibonacci(){
    number = document.querySelector('#num').value;

    var var1 = 0;
    var var2 = 1;
    var var3 ;
    var result =' ';

    for(var i=0; i<number; i++){
        result+= var1+ ",";
        var3 = var1+var2;
        var1 = var2;
        var2 = var3;
    }
    document.querySelector('.get').innerHTML = "the fibonacci serier ;-"+result;
}
document.write("<br><br>")

//string a rotate

clickgo = document.querySelector('#go');
clickgo.addEventListener('click', rotatestr);

function rotatestr(){
    let newstring = document.getElementById('word').value;

    newstring = newstring.trim().split("");
    console.log(newstring);

    let strreverse = '';
    for(let i=newstring.length -1;i>=0; i--){
        removeFirst = newstring.shift();
        console.log(newstring);
        insertlast=newstring.push(removeFirst);
        console.log(newstring);
        strreverse += newstring.join('') + "<br>";
    }
document.querySelector('.value').innerHTML="the reversed string is :-"+ strreverse;

}
document.write("<br><br>")

//Factorial
clickon = document.querySelector('#on');
clickon.addEventListener('click', factorial);

function factorial(){
    let number = document.querySelector('#fac').value;

       let fact = 1

    for( let i=number; i>=1; i--){
     
        fact=fact*i;
     }
    document.querySelector('.ans').innerHTML = "The factoial number :"+ fact;
    
    
}
document.write("<br><br>")

//pyramid number
clickon = document.querySelector('#use');
clickon.addEventListener('click', pyramid);

function pyramid(){
    num = document.querySelector('#pyr').value;
    console.log(num);
    result = '' ;
    for(let i=1;i<=num;i++){
        for(let j=num; j>i; j--){
           result+= '&nbsp';
       }
        for(let k=0; k<((i*2)-1);k++){
           result += '*'; 
           
        }
        result += '<br>';
   }
   for(let i=1; i<num; i++){
       for(let j = 0; j<i; j++){
           result += '&nbsp';
       }
       for(let k=(num-i)* 2-1; k>0; k--){
           result += '*';
       }
       result += '<br>';
   }
document.querySelector('.pyra').innerHTML="<br>" +result;
}
document.write("<br><br>")

// to do list
function addItem(){
   
    let text = document.getElementById("to-do").value;
    let li = document.createElement("li");
    li.textContent = text + " ";
    let deleteLink = document.createElement("a");
    deleteLink.textContent = "[Delete]";
    deleteLink.href = "#";
    deleteLink.addEventListener("click",deleteItem);
    li.appendChild(deleteLink);

    document.getElementById("myList").appendChild(li);
    text.value = "";

    function deleteItem(){
        document.getElementById("myList").removeChild(li);
    }
}
document.write("<br><br>")

//progress bar :
let clicktpy  = document.querySelector('#tpy');
clicktpy.addEventListener('click',move)

var i = 0;
function move() {
    if(i == 0){
        i = 1;
        var elam = document.getElementById("bar");
        var num = document.getElementById("per").value;
         
        var width = 0;
        var id = setInterval(frame,30);
        function frame(){
            if(width >= num){
                clearInterval(id);
                i = 0;

            }else{
                width++;
                elam.style.width = width +"%";
                elam.innerHTML = width +"%";
                
            }
        }
    }
}

          




















