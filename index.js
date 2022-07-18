var flag=false;
const cont=document.querySelector(".container");
const elem=document.querySelector(".joke");
const button=document.querySelector(".btn");
// console.log(cont);
const getJoke= async ()=>{
    elem.textContent="Loading..."
    if(flag===true)
    cont.classList.add("loading-container");
    const header={
        headers:{
        'Accept': 'application/json'
        }
    };
    let resp=await fetch('https://icanhazdadjoke.com/',header);
    let data=await resp.json();
    if(flag===true)
    cont.classList.remove("loading-container");
    elem.textContent=data.joke;
}
getJoke();
button.addEventListener("click",()=>{
    let aud=new Audio('sounds/click.wav');
    flag=true;
    aud.play();
    getJoke();
});
// const f = async ()=>{
//     let r=await fetch('https://restcountries.com/v3.1/all');
//     let d=await r.json();
//     // console.log(d.length);
// }
// f();