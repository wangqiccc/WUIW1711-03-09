//SES6
//alert(1);
//banner图轮播
{
	let imgs=document.querySelectorAll(".banner_tu li");
	let pagers=document.querySelectorAll(".pager li");
	let banners=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banners.onmouseenter=function(){
		clearInterval(t);
	};
	banners.onmouseleave=function(){
		t=setInterval(move,3000);
	};
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	};
	imgs.forEach(function(ele){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})

}
//banner列表
{
	var list=document.querySelectorAll(".banner_nav li");
	var menu=document.querySelectorAll(".banner_left");
	let obj=menu[0];
	list.forEach(function(ele,index){
		ele.onmouseenter=function(){
			menu[index].style.display="block";
			obj=menu[index];
		}
		ele.onmouseleave=function(){
			menu[index].style.display="none";
		}
	})
}
// 明星单品
{
	const prev=document.querySelector(".mingxing_btn1");
	const next=document.querySelector(".mingxing_btn2");
	const inner=document.querySelector(".mingxing_danping_rall");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable")
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
	}
}
// 内容
{	
	function content1(parent){
		var prev=parent.querySelector(".neirong_left");
		var next=parent.querySelector(".neirong_right");
		var inner=parent.querySelector(".neirong_bottom1");
		var items=parent.querySelectorAll(".neirong_item");
		var pagers=parent.querySelectorAll(".neirong_button div");
		console.log(pagers);
		let n=0;
		next.onclick=function(){
			n++;
			if(n===items.length){
				n=items.length-1;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("neirong_btn2");
			pagers[n-1].classList.remove("neirong_btn2");
			obj=pagers[n];
		}
		prev.onclick=function(){
			n--;
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-296*n+"px";
			pagers[n].classList.add("neirong_btn2");
			pagers[n+1].classList.remove("neirong_btn2");
			obj=pagers[n];
		}
		let obj=pagers[0];
		pagers.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("neirong_btn2");
				ele.classList.add("neirong_btn2");
				obj=this;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		})
		
	}

	const contentList1=document.querySelectorAll(".neirong_bottomall");
	contentList1.forEach(function(ele){
		content1(ele);
	})
}


//搭配
{
	function content(parent){
		const types=parent.querySelectorAll(".zhineng_wzright span");
		const goods=parent.querySelectorAll(".dapei_item");
		//console.log(types);
		//console.log(goods);
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("dapei_nav_active");
					goods[i].classList.remove("active")

				}
				this.classList.add("dapei_nav_active");
				goods[index].classList.add("active");
			}
		});
	}
	const contentList=document.querySelectorAll(".dapei");
	contentList.forEach(function(ele){
		content(ele);
	})
}
// 推荐
{
	const prev=document.querySelector(".tuijian_btn1");
	const next=document.querySelector(".tuijian_btn2");
	const inner=document.querySelector(".tuijian_goodsall");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===1){
			this.classList.add("disable");
		}
		if(n===2){
			n=1;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable")
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}
//导航
{
	var daoh=document.querySelectorAll(".daoh_wenzi2");
	var daohlist=document.querySelectorAll(".daoh_xiaoguo");
	let obj=daohlist[0];
	daoh.forEach(function(ele,index){
		ele.onmouseenter=function(){
			daohlist[index].style.display="block";
            daohlist[index].style.height="220px";
			daohlist[index].style.zIndex=200;
			obj=daohlist[index];

		}
		ele.onmouseleave=function(){
			daohlist[index].style.display="none";
			daohlist[index].style.height="0"
		}
	})
}
