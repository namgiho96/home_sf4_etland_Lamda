var cust = cust ||{}


cust =(()=>{
let _,js,compojs,r_cnt,l_cnt;
	 let init =()=>{
	 _ = $.ctx();
     js = $.js();
     compojs = js+'/component/compo.js';
     
     r_cnt = '#right_content';
     l_cnt = '#left_content';
		onCreate();
	};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript(compojs);
		$.getScript(js+'/prod/prod.js');
		mypage();
	};
	let mypage=()=>{
		
		$(r_cnt).html(compo.cust_mypage());
		$(l_cnt+' ul').empty();
		  let arr=[{
               txt : '마이페이지', name : 'mypage'},	  
              {txt : '회원탈퇴', name : 'del'}, 
              {txt : '정보수정', name : 'update'}, 
              {txt : '쇼핑몰', name : 'shop'}, 
              {txt : '구매내역', name : 'history'},
              {txt : '장바구니', name : 'basket'
         }];
		$.each(arr,(i,j)=>{
			
			 $('<li><a  href="#">'+j.txt+'</a></li>')
			  .attr('name', j.name)
              .appendTo(l_cnt+' ul.nav')
              .click(function(){
                  let that = $(this).attr('name');
                  $(this).addClass('active');
                  $(this).siblings().removeClass('active');
                  switch(that){
                  case 'mypage':
                	  $(r_cnt).html(compo.cust_mypage());
                      break;
                  case 'update':
              		  $(r_cnt).html(compo.cust_update());
                       break;
                  case 'del':
                	  
                       break;
                  case 'shop':
                	  alert('shop : 클릭함');
                	  prod.init();
                       break;
                  case 'history':
                	  
                       break;
                  case 'basket':
                	  
                      break;
                  }
             });
		})
		$('ul li[name=mypage]').addClass('active');
		
	};
	return {init:init}
})();
	