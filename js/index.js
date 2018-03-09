{
    //const
    //var
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagerbox li");
    let banner=document.querySelector("#banner");
    let next=document.querySelector(".next");
    let prev=document.querySelector(".prev");
    console.log(banner);
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            ele.classList.add("active");
            // this.classList.add("active");
            imgs[index].classList.add("active");
            n=index;
        }
    });

    let n = 0;
    let t=setInterval(move, 3000);
    function move() {
        n++;
        // n=n%5;
        if (n === imgs.length) {
            n = 0;
        }
        if (n <0) {
            n = imgs.length-1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }
    banner.onmouseenter=function () {
        clearInterval(t)
    };
    banner.onmouseleave=function () {
        t=setInterval(move,3000)
    };
    let flag=true;
    next.onclick=function () {
        if(flag){
            flag=false;
            move();
        }
    };
    // next.onclick=function () {
    //     move();
    // };
    prev.onclick=function () {
        if(flag) {
            flag = false;
            n -= 2;
            move();
        }
    };
    imgs.forEach(function (ele,index) {
        ele.addEventListener("transitionend",function () {
            flag=true;
        })
    })
}

{
    const star_btn1=document.querySelector(".star_btn1");
    const star_btn2=document.querySelector(".star_btn2");
    const star_bottom=document.querySelector(".star_bottom");
    let n=0;
    star_btn2.onclick=function () {
        n++;
        star_btn1.classList.remove("disable");
        if(n===2){
            star_btn2.classList.add("disable");
        }
        if(n===3){
            n=2;
            return;//中止函数的执行
        }
        star_bottom.style.marginLeft=-1226*n+"px";
    }
    star_btn1.onclick=function () {
        n--;
        star_btn2.classList.remove("disable");
        if(n===0){
            star_btn1.classList.add("disable");
        }
        if(n===-1){
            n=0;
            renturn;
        }
        star_bottom.style.marginLeft=-1226*n+"px";
    }
}
//内容
{
    function content(parent) {
        const types = parent.querySelectorAll(".type");
        const goods = parent.querySelectorAll(".goodlist");
        console.log(types,goods)
        types.forEach(function (ele, index) {
            ele.onmouseenter  = function () {
                for (let i = 0; i < types.length; i++) {
                    types[i].classList.remove("active1");
                    goods[i].classList.remove("active1");
                }
                this.classList.add("active1");
                goods[index].classList.add("active1")
            }
        })
    }
    const  contentList=document.querySelectorAll(".content");
    // content(contentList[0]);
    // content(contentList[1]);
    // content(contentList[2]);
    // content(contentList[3]);
    // content(contentList[4]);
    contentList.forEach(function (ele) {
        content(ele);
    })
}
