
  
<!DOCTYPE html> 
<html>
    <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" href="/Users/shreyaamitabh/Downloads/bootstrap-4.4.1-dist/css/bootstrap.min.css" >
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <style>
  body{
  width:100%;
  height:100%;
  font-family: fantasy;
  /* background-image: url('/Users/shreyaamitabh/Downloads/quizback.jpg'); */
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url('/Users/shreyaamitabh/Downloads/quiz1.jpg');
}
.heading{
  text-align: center;
  text-shadow: 4px 2px 3px white;

 font-weight: bold;
  font-size: 80px;
}
#content{
  opacity:0;
  filter:alpha(opacity=0);
}
.form-check::after {
    content: "";
    clear: both;
    display: block;
    margin-top: 2em;
  }
#radio1 ,#radio2, #radio3, #radio4{
      margin-left: 5em;
     
  }
  .card{
    border:none;
  }
  .card-body, .card{
    margin-right: 2em;
    height:10em;
    background-color: #6c757d;
    color: white;
    border-radius: 10%;
   
   
  }
  #time{
    margin-top: 4em;
    margin-right: 2rem;
  }
  .flagbtn{
   width:35px;
   height:35px;
   background-color: lawngreen;
   display:inline-block;
    margin:10px;
  }
  .r1{
      margin-left: 7em;
      font-size: large;
  }
  .form-check-label{
    height: auto;
    margin-top: 2em;
  width:80%;
  }
  .badge{
    height:auto;
  }
  .row{
    margin-top:2em;
  }
  .col-md-9{
    margin-left:2em;
  }
  #flagbutton{
    margin-right: 5em;
    margin-top: 2em;
  }
  #next{
    height:10px;
  }
  #l1, #l2, #l3, #l4{
    opacity: 0;
    filter:alpha(opacity=0);
  }
  #timerbox, #pointbox{
    background-color:#f8f9fa;
    font-size: x-large;
    color: black;
    text-align: center;
  }
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    height:40%;
  }
  
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  .close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#final-message{
  margin:auto;
  padding: auto;
  font-size: 50px;
  font-family: fantasy;
  font-weight: bolder;
  font-variant: small-caps;
  font-stretch: extra-condensed;
  text-shadow: 4px 2px 3px gray;
}
</style>
    </head>
    <body>
        <p class="heading">Quiz Up!</p>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-9">
              <h1><span id="content" class="badge badge-secondary" style="width:80%; padding-top: 20px;"><p id="ques1"></p></span></h1>
              <label id="l1" class="form-check-label card bg-light text-dark card-body" >
                <input type="radio" class="form-check-input " id="radio1" name="radio" value="option1" onclick="check(op1)"> <p id="op1" class="r1"></p>
              </label>
              <label id="l2" class="form-check-label card bg-light text-dark card-body" >
                <input type="radio" class="form-check-input " id="radio2" name="radio" value="option2" onclick="check(op2)" > <p id="op2" class="r1"></p>
              </label>
              <label id="l3" class="form-check-label card bg-light text-dark card-body" >
                <input type="radio" class="form-check-input " id="radio3" name="radio" value="option3" onclick="check(op3)" > <p id="op3" class="r1"></p>
              </label>
              <label id="l4" class="form-check-label card bg-light text-dark card-body" >
                <input type="radio" class="form-check-input " id="radio4" name="radio" value="option4" onclick="check(op4)"> <p id="op4" class="r1"></p>
              </label>
            </div>
            <div class="col-md ">
              <div class="card">
                <div class="card-body" id="flagbox">
                 Status of questions:
                </div>
              </div>
              <div class= "card"  id="time">
                <div class= "card-body">
               <p id="timerbox"></p>
               <p style="margin-top:1.5em;" id="pointbox"></p>
                </div>
              </div>
            </div>
           
          </div>
          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <p id="final-message"></p>
            </div>
          
          </div>
          <div  class=" text-center">
            <button id="flagbutton" type="submit" onclick="flagquestion()" class="btn btn-primary ">Flag this question</button>
            <button style="margin-top:2em;" type="submit" onclick="change()" class="btn btn-primary "><p id="next"></p></button>
            </div>
            
           
        </div>
          <script >let points=0;
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
 </script>
    </body>
</html>



