// 퀵메뉴 이미지

// for()문을 이용해서 <img>를 span 안에 넣기
/*
let quick1="";
for(let i=0; i<20; i++){
    if(i<10){
        quick1 += '<img src="img/quick01/quick01_0000${i}.png" />';
    }else{
        quick1 += '<img src="img/quick01/quick01_000${i}.png" />';    
    }
}
document.querySelector("span.quick1").innerHTML = quick1;
*/
const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');

for(let j=0; j<quickSpan.length; j++){ //span 4개 0,1,2,3
    let images=''
    for(let i=0; i<20; i++){ //각 span 안에 img 20개 생성
        if(i<10){
            images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" />`;
        }else{
            images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />`;
        }
    }
    quickSpan[j].innerHTML = images;
}

// 로그인이미지
let appear="";
for(let k=0; k<57; k++){
    if(k<10){
        appear +=`<img src="images/appear/appear_0000${k}.png" />`;
    }else{
        appear +=`<img src="images/appear/appear_000${k}.png" />`;
    }
}
document.querySelector("a.appear").innerHTML = appear;

let loop="";
for(let h=0; h<82; h++){
    if(h<10){
        loop +=`<img src="images/loop/loop_0000${h}.png" />`;
    }else{
        loop += `<img src="images/loop/loop_000${h}.png" />`;
    }
}
document.querySelector("a.loop").innerHTML = loop;


//animation: ani 1s linear 2.95s infinite;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for(let i=0; i<appearImgs.length;i++){
    appearImgs[i].style.animation = `ani 2.85s linear ${i*delay}s 1`;
}
for(let j=0; j<loopImgs.length; j++){
    loopImgs[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}

// 고객센터
const topMenuDD = document.querySelectorAll('dl.topMenu > dd');
topMenuDD[4].addEventListener('click',e => {
    e.currentTarget.classList.toggle("on");
    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","고객센터 열기")
    }
})

// 주메뉴
// .header_wrap.on
// nav.gnb>ul>li>ul.on
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll('.gnb>ul>li'); //큰li
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');

for (var i = 0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',() => {
    //    고객센터에 on붙어 있으면 고객센터의 on을 지운다
    if(topMenuDD[4].classList.contains('on')){
        topMenuDD[4].classList.remove("on");
    }
    // 검색박스에 on붙어있으면 검색박스의 on을 지운다
    if(srchOpen.classList.contains('on')){
        srchOpen.classList.remove("on");
        srchBox.classList.remove("on");
    }

        headerWrap.classList.add("on");
        subMenu.forEach(item => {
            item.classList.add("on")
        })
    })//mouseover
    gnbMenu[i].addEventListener('mouseout',() => {
        headerWrap.classList.remove("on");
        subMenu.forEach(item => {
            item.classList.remove("on")
        })
    })//mouseout
    gnbMenu[i].children[0].addEventListener('focus',() => {
        headerWrap.classList.add("on");
        subMenu.forEach(item => {
            item.classList.add("on")
        })
    })//focus
    gnbMenu[i].children[0].addEventListener('blur',() => {
        headerWrap.classList.remove("on");
        subMenu.forEach(item => {
            item.classList.remove("on")
        })
    })//blur
}

// 검색열기닫기
const srchBox = document.querySelector('form.srch');
const srchOpen = document.querySelector('.srch_open');
const btn_srch = document.querySelector('.srch_open>a');

srchOpen.addEventListener('click',e=>{
    e.preventDefault();
    srchOpen.classList.toggle('on');
    srchBox.classList.toggle('on');


if(srchOpen.classList.contains('on')){
    srchOpen.children[0].setAttribute('title','검색입력서식 닫기');
}else{
    srchOpen.children[0].setAttribute('title','검색입력서식 열기');
}
})

// 배너
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
const bnnFrame = document.querySelector('.banner_frame');
const bnnSection = document.querySelectorAll('.banner_frame>section');//0~11번 섹션

const arrowA = document.querySelectorAll('banner_arrow>a');
const rollingA = document.querySelectorAll('.banner_rolling a');

const bnn_rollA = document.querySelectorAll('.banner_rolling li a');

let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize',()=>{
    bnnW=document.querySelector('body>secction').offsetWidth;
});

let bnnNum = 0;
let lastNum = bnnSection.length -1;

let secWhite = (bannerNumer) =>{
    if(bnnSection[bannerNumer].classList.contains('white')) {
    arrowA.forEach(item =>{
        item.classList.add('white');
    })
    rollingA.forEach(item =>{
        item.classList.add('white');
    })
   }else{
    arrowA.forEach(item =>{
        item.classList.remove('white');
    })
    rollingA.forEach(item=>{
        item.classList.remove('white');
    })
   }

    bnn_rollA.forEach(item => {
        item.classList.remove('on');
    });
    bnn_rollA[bannerNumer].classList.add('on');
}

secWhite(0);

btnNext.addEventListener('click',e=>{
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum)bnnNum = 0;
   // bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,-200% ... -1100%
   bnnFrame.style.left = `${-bnnNum * bnnW}px`;
   secWhite(bnnNum);
});

btnPrev.addEventListener("click" , e =>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum=lastNum;
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite();
   
})

//  오토배너
let autoBanner = () => {
    bnnNum++;
    if(bnnNum>lastNum)bnnNum = 0;
   // bnnFrame.style.left = `${-bnnNum * 100}%`; //0,-100%,-200% ... -1100%
   bnnFrame.style.left = `${-bnnNum * bnnW}px`;
   secWhite(bnnNum);

    autoBnn = setTimeout(autoBanner,5000);//재귀함수
};
let autoBnn = setTimeout(autoBanner, 5000);

// 재생/멈춤 버튼
let flag = true;
const play = document.querySelector('a.btn_play');
bnnPlayBtn.addEventListener('click',(e) => {
    e.preventDefault();
    if (flag){
        clearTimeout(autoBnn);
        bnnPlay.classList.add('pause');
        flag = false;
    }else{
        autoBnn = setTimeout(autoBanner,5000);
        btnPlay.classList.remove('pause');
        flag = true;
    }
});

// 롤리클릭
const bnnRollLists = document.querySelectorAll(".banner_rolling li");

for(let i=0; i<bnnRollLists.length;i++){
    bnnRollLists[i].addEventListener("click",e => {
        clearTimeout(autoBnn);
        bnnFrame.style.left = `${-i * bnnW}px`;
        secWhite(i);
       
    })
}

// content1
// 마우스 올렸을 때 이미지에 애니메이션 적용
// 마우스 뗐을떄 이미지에 애니메이션 삭제
const content1Li = document.querySelectorAll(".content1>ul>li>span img");
for(let i=0; i<content1Li.length; i++){
    content1Li[i].addEventListener("mouseover",e => {
        for(let k=0; k<20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`;
        }
    })
}
/*
content1Li.forEach(item => {
    item.addEventListener("mouseover",e=>{
        for(let k=0; k<20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`;
        }
    })
} */

for(let i=0; i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseout",e=>{
        for(let k = 0; k < 20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation="none";
        }
    })
}

// 스크롤이벤트
const BtnTop=document.querySelector('.top');

window.addEventListener('scroll',()=>{
    let scroll = document.querySelector('html').scrollTop;
    //도넛
    const doughnut_Left_L = document.querySelector("doughnut_Left_L");
    const doughnut_Left_s = document.querySelector("doughnut_Left_s");
    const combine_Left = document.querySelector("combine_Left");
    
    combine_Left.style.top = `${scroll*0.7}px`;
    doughnut_Left_s.style.top = `${scroll*0.5}`;
    doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;

//패밀리사이트
const familySite = document.querySelector("dd.family_site");
familySite.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","열기");
    }
})

//top버튼
if(scroll<=0){
    BtnTop.classList.remove("on","ab");
}else if(scroll>0&&scroll<2700){
    BtnTop.classList.remove("ab");
    BtnTop.classList.add("on");
}else{
    BtnTop.classList.add("ab");
}

});

// content3
//li하나하나에 마우스오버 하면 모든 li에 .on을 지우고 마우스 오버한 li만 .on이 붙음
const content3Li = document.querySelectorAll(".content3_inner>div>ul>li");

for(let h=0; h<content3Li.length;h++){
    content3Li[h].addEventListener('mouseover',e =>{
        e.preventDefault();
        content3Li.forEach(item =>{
            item.classList.remove("on");

        });
        content3Li[h].classList.add('on');
    })
}
//대분류
const group = document.querySelectorAll(".content3_inner>ul>li>a");//5개

const ent = document.querySelectorAll(".content3_inner>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>ul>li.box");

for(let k=0; k<group.length;k++){
    group[k].addEventListener('click',e =>{
        e.preventDefault();

        group.forEach(item =>{
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class");

        all.forEach(item=>{
            item.style.display = "none";
        })

        switch(className){
            case"all":
               all.forEach(item =>{
                item.style.display="block";
               })
              break;
            case"ent":
             ent.forEach(item =>{
                item.style.display="block";
               }) 
              break;
            case"shop":
            shop.forEach(item =>{
                item.style.display="block";
               }) 
            break;
            case"diner":
            diner.forEach(item =>{
                item.style.display="block";
               }) 
            break;
            case"box":
            box.forEach(item =>{
                item.style.display="block";
               }) 
            break;
            default:
                break;
        }
    })
}

//패밀리사이트
const familySite =document.querySelector("dd.family_site");
familySite.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","닫기")
    }else{
        e.currentTarget.children[0].setAttribute("title","열기")
    }
})

//TOP
 BtnTop.addEventListener('click',e=>{
    e.preventDefault();
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })
 })


// 햄버거 버튼 클릭
const body = document.querySelector("body");
const bg = document.querySelector("div.bg");

const mobBtn = document.querySelector(".mobBtn")
const mobBtn_Close = document.querySelector(".mobBtn_close")
const mob = document.querySelector(".mob")

mobBtn.addEventListener('click',e=>{
    e.preventDefault();
    body.classList.add("on");
    bg.classList.add("on");
    mob.classList.add("on");
    mobBtn_Close.classList.add("on");
});

mobBtn_Close.addEventListener('click',e=>{
    e.preventDefault();
    body.classList.remove("on");
    bg.classList.remove("on");
    mob.classList.remove("on");
    mobBtn_Close.classList.remove("on");
});

