var prod =  prod || {} ;

prod =(()=>{
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
			$.when(
				$.getScript(compojs)
			).done(()=>{
				carousel();
			})
			.fail(()=>{
              alert('prod/prod.js 를 찾지  못했습니다.');
          });
			
		};
		let post =()=>{
			
		};
		let get=()=>{
			
		};
		let put=()=>{
			
		};
		let del=()=>{
			
		};
		let carousel =()=>{
			$(r_cnt).html(compo.cust_carousel());
			$('#myCarousel').after(compo.prod_post());
		};
		
		return {init:init}
	})();