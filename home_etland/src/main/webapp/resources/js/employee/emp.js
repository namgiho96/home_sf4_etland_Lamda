var emp = emp || {}

emp =(()=>{
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
		
		
	};
	return {init:init}
})();