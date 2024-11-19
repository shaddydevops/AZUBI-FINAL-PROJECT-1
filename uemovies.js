(document.onload=()=>{
fetch('https://benasdom.github.io/moviesapi/db.json').then(res=>res.json())
.then((res)=>{
document.querySelector(".centershow").firstChild.src=res.blogs[Math.round(Math.random()*(res.blogs.length-1))].image;
document.querySelector(".mask").style.cssText="background-image:url("+document.querySelector(".centershow")
.firstChild.src+");background-attachment:unset;background-size:cover;background-position:center;";
[...document.querySelectorAll(".movies"),...document.querySelectorAll(".series"),...document.querySelectorAll(".filtered")]
.filter((a,b,c)=>c.indexOf(a)==b).map((a)=>
{
    let shuffled=res.blogs[Math.round(Math.random()*(res.blogs.length-1))];
    a.firstChild.src=shuffled.image;
    a.parentElement.lastChild.innerHTML=`<i className="fa fa-film pad"></i> ${shuffled.title}`;
     a.dataset.ptext==""?a.dataset.ptext=(shuffled.title.length>20?shuffled.title.split("").slice(0,20).join("")+"...":shuffled.title):"";
    let add=0;
    a.addEventListener("mouseover",()=>{
        let named=shuffled.body;
        let midval=setInterval(()=>{
            add+=1;
            if(add<named.length+1)
            {
                a.dataset.texts=(named.length>100?named.split("").slice(0,100).join("").substr(0,add)+"...":named.substr(0,add));
              }
            else{
                clearInterval(midval);
            }

        },100)
    })
    
}    );

[...document.querySelectorAll(".poslist")]
.map((a)=>{
    let change=[];
    change.push(res.blogs[Math.round(Math.random()*(res.blogs.length-1))]);
    a.firstChild.src=change.map(a=>a.image+"");
    a.children[1].children[0].innerText=change.map(a=>a.title.length>12?a.title.split("").slice(0,12).join("")+"...":a.title);
    a.children[1].children[0].title=change.map(a=>a.title+"");
    a.children[1].children[1].innerText=change.map(a=>a.body.length>12?a.body.split("").slice(0,12).join("")+"...":a.body);
    a.children[1].children[1].title=change.map(a=>a.body+"");


})


}
)
let theme=0;
let logoname=document.querySelector(".logoname");
let numm=0;
 document.querySelector(".mask").style.animation="none";
 
    setTimeout((aa,b)=>{
        aa=document.querySelector(".loadtext");
         b=document.querySelector(".loading");
        aa.style.cssText="width:250px";
        aa.innerText="connection timeout";
         b.style.cssText="animation:none;"},27000)
    setTimeout(()=>{document.querySelector(".loader").style.cssText="opacity:0;z-index:-2"},30000)
     let choice=["filter:invert(0)","filter:invert(1)","filter:invert(0)","filter:invert(1)","filter:invert(0)"];
    let choicemade=parseInt(Math.random()*choice.length+1);
    document.querySelector(".loader").style.cssText=choice[choicemade];

    document.addEventListener('DOMContentLoaded', () => {
        let named=logoname.innerText;

    setTimeout(()=>{
    let val=setInterval(()=>{
        numm+=1;
        if(numm<named.length+1){
            logoname.innerText=named.substr(0,numm);
        }
    else{
    clearInterval(val)}
    },100) ;

    (()=>{
        document.querySelector(".loader").style.cssText="opacity:0;z-index:-2";
        document.querySelector(".mask").style.animationName="masker";
    })

},100);

})

})();