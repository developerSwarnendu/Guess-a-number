let score=20;
let guess=Math.floor(Math.random()*(20-1+1))+1;
let highScore=0;
let sc=document.getElementById('score');
let high=document.getElementById('high');
let too=document.getElementById('too');
let inp=document.getElementById('input');
let start=document.getElementById('start');
// console.log(guess);
sc.innerHTML=`💯 Score:  ${score}`;
high.innerHTML=`🥇 Highscore:  ${highScore}`;
document.getElementById('check').addEventListener('click',myFun);
function myFun(){
    let val=Number(inp.value);
    // console.log(val,typeof val);
    if(val===guess){
        start.innerHTML='🎉 Correct Number';
        too.innerHTML='';
        document.body.style.background='yellowgreen';
        inp.style.background='yellowgreen';
        document.querySelector('.mid').innerHTML=guess;
        if(score>highScore){
            highScore=score;
            high.innerHTML=`🥇 Highscore:  ${highScore}`;
        }
        inp.setAttribute('disabled','');
        document.getElementById('check').removeEventListener('click',myFun);
    }
    else if(val===0){
        too.innerHTML='⛔ No number!';
    }
    else{
        score--;
        sc.innerHTML=`💯 Score:  ${score}`;
        if(score===0){
            start.innerHTML="You loose";
            inp.setAttribute('disabled','');
            document.getElementById('check').removeEventListener('click',myFun);
        }
        else{
            // if(val<guess){
            //         too.innerHTML='📉 Too low';
            // }else{
            //         too.innerHTML='📈 Too high';
            // }
            too.innerHTML=(val<guess)?'📉 Too low':'📈 Too high';
        }
    }
}
document.getElementById('again').addEventListener('click',myFun2);
function myFun2(){
    score=20;
    sc.innerHTML=`💯 Score:  ${score}`;
    guess=Math.floor(Math.random()*(20-1+1))+1;
    // console.log(guess);
    too.innerHTML='';
    start.innerHTML='Start guessing...';
    document.querySelector('.mid').innerHTML='?';
    document.body.style.background='black';
    inp.style.background='black';
    inp.value='';
    document.getElementById('check').addEventListener('click',myFun);
    inp.removeAttribute('disabled');
}
