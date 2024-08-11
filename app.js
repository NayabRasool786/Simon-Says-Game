let gameSeq=[];
let userSeq=[];
let btns=["yellow", "green", "purple", "red"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
let a=document.querySelectorAll(".btn");
for(let i=0; i<a.length; i++){
    console.dir(a[i].innerText);
    a[i].innerText=" ";
}
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started=true;
        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
    
}

function checkAns(ind,level){
   // console.log("current level: ",level);
    // let ind=level-1;
    if(userSeq[ind]==gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    } else{
        h2.innerHTML=`Game Over ! Your Score Is:<b> ${gameSeq.length-1} </b><br/>Press Any Key To Start Again `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },100);
        reset();
    }

}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 200);
    userClr=btn.getAttribute("id");
    userSeq.push(userClr);
    // console.log(userClr);
    // console.log(userSeq);
    
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranInd=Math.floor(Math.random()*4);
    let randClr=btns[ranInd]; 
    let randBtn=document.querySelector(`.${randClr}`);
    // console.log(ranInd);
    // console.log(randClr);
    // console.log(randBtn);
    gameSeq.push(randClr);
    console.log(gameSeq);
    gameFlash(randBtn);
} 


function btnPress() {
    let btn=this;
    userFlash(btn);
    
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for(bt of allBtns){
    bt.addEventListener("click",btnPress);
}

function reset(){
     started=false;
     gameSeq=[];
     userSeq=[];
     level=0;
}