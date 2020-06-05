let points=0;
let next= document.getElementById("next");
var timer= 20;
var x="Time left: ";
document.getElementById("timerbox").innerHTML= x+ timer;
var p="Score: ";
document.getElementById("pointbox").innerHTML= p+ points;
var j=0;
var modal = document.getElementById("myModal");
var final = document.getElementById("final-message");
var span = document.getElementsByClassName("close")[0];
let r1= document.getElementById("radio1");
let r2= document.getElementById("radio2");
let r3= document.getElementById("radio3");
let r4= document.getElementById("radio4");
var elem=document.getElementById("content");
var radio1=document.getElementById("l1");
var radio2=document.getElementById("l2");
var radio3=document.getElementById("l3");
var radio4=document.getElementById("l4");
var changecontent=0;
var changeoption=0;
let questions=[
    {
        q:"What does CSS stand for?",
        op1:"Cascading Style Sheet",
        op2:"Computer Style Sheet",
        op3:"Colourful Style Sheet",
        op4:"Creative Style Sheet",
        ans: op1
    },
    {
        q:"What is the default value of Java datatype boolean??",
        op1:"true",
        op2:"false",
        op3:"0",
        op4:"1",
        ans: op2
    },
    {
        q:"Which is the default package that is visible to your program ?",
        op1:"java.net",
        op2:"javax.swing",
        op3:"java.io",
        op4:"java.util",
        ans: op3
    },
    {
        q:"Which entry in WEB-INF is used to map a servlet ?",
        op1:"servlet-mapping",
        op2:"servlet-registration",
        op3:"servlet-entry",
        op4:"servlet-attachment",
        ans: op1
    },
    {
        q:"Which of the following a is not a keyword in Java ?",
        op1:"class",
        op2:"interface",
        op3:"extends",
        op4:"abstraction",
        ans: op3
    }
];
function moreVisible()
{
    if(changecontent===1)clearInterval(time);
    changecontent+=0.05;
    elem.style.opacity=changecontent;
    
}
function optionVisible()
{
    if(changeoption===1)clearInterval(t);
    changeoption+=0.1;
    radio1.style.opacity=changeoption;
    radio2.style.opacity=changeoption;
    radio3.style.opacity=changeoption;
    radio4.style.opacity=changeoption;
  
}
var time=setInterval(moreVisible,40);
var t=setInterval(optionVisible,150);
let flagbox= document.getElementById("flagbox");
for(let flag=0; flag<5; flag++)
{
    let f= document.createElement("button");
   f.className="flagbtn";
    f.setAttribute("id", flag+1);
    f.innerHTML=flag+1;
    f.addEventListener("click", function()
    {
       get(flag);
    });
    flagbox.appendChild(f);


}

function get(j)
{
   changecontent=0;
   changeoption=0;
moreVisible();
optionVisible();
r1.disabled=false;
r2.disabled=false;
r3.disabled=false;
r4.disabled=false;
r1.checked=false;
r2.checked=false;
r3.checked=false;
r4.checked=false;
let ques1= document.getElementById("ques1");
ques1.innerHTML=questions[j].q;
for(let i=1; i<=4; i++)
{
    document.getElementById("op"+i).innerHTML=questions[j][`op${i}`];

}
if(j==4)
{
next.innerHTML="Submit";
next.addEventListener("click",function() {
    modal.style.display = "block";
    final.innerHTML="Your score is: "+ points;
})
}
else
next.innerHTML="Next Question";
}
span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
function change()
{
j++;
get(j);
}
function flagquestion()
{
    document.getElementById(j+1).style.backgroundColor="yellow";
}
get(0);
function check(answer)
{

   if(answer=== questions[j].ans)
    points++;
    r1.disabled=true;
    r2.disabled=true;
    r3.disabled=true;
    r4.disabled=true;
    document.getElementById("pointbox").innerHTML= p+ points;
}
function timer1()
{
    timer--;
    if(timer<20)
    {
        document.getElementById("timerbox").innerHTML= x+timer;
    }
    if(timer<1)
    {
        window.clearInterval(update);
        modal.style.display = "block";
        final.innerHTML="Time's up. Your Score is: "+points;
    }
}
update= setInterval("timer1()", 1000);
window.addEventListener("beforeunload", function(event) {
    event.returnValue = "Your custom message.";
});





























