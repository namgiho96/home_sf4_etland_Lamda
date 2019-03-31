var auth = auth || {};
auth = (()=>{
     let _,js,compojs,r_cnt,l_cnt;
     let init =()=>{
          _ = $.ctx();
          js = $.js();
          compojs = js+'/component/compo.js';
          r_cnt = '#right_content';
          l_cnt = '#left_content';
          custjs = js+'/customer/cust.js'
          onCreate();
     };
     let onCreate =()=>{
          setContentView();
     };
     let setContentView =()=>{
          $.getScript(compojs)
          .done(()=>{
        	  $(r_cnt).html(compo.cust_login_form());
        	  $('form button[type=submit]').click(e=>{ 
        		  e.preventDefault();
        		  login();
        	  }); //클릭이벤트
        	  
        	  
        	  //왼쪽 네비게이션
              $(l_cnt+' ul.nav').empty();
              let arr=[{
                   txt : '로그인', name : 'login'
              },{
                   txt : '회원가입', name : 'join'
              },{
                   txt : '사원등록', name : 'register'
              },{
                   txt : '사원접속', name : 'access'
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
                         case 'login':
                              $(r_cnt).empty();
                              $(compo.cust_login_form())
                              .appendTo(r_cnt);
                              $('form button[type=submit]').click(e=>{ 
                        		  e.preventDefault();
                        		  login();
                        	  }); //클릭이벤트
                              break;
                         case 'join':
                              $(r_cnt).empty();
                              $(compo.cust_join_form())
                              .appendTo(r_cnt);
                              $('form button[type=submit]').click(e=>{ 
                        		  e.preventDefault();
                        		  join();
                        	  }); //클릭이벤트
                              break;
                         case 'register':
                              $(r_cnt).empty();
                              $(compo.emp_access_form()
                                       )
                              .appendTo(r_cnt);
                              break;
                         case 'access':
                              $(r_cnt).empty();
                               $(compo.emp_register_form())
                              .appendTo(r_cnt);
                              break;
                         }
                    }); //클릭
              }); //each
          }) //done
          .fail(()=>{
              alert('component/compo.js 를 찾지  못했습니다.');
          });
     }; //setContenview이다.
     let login =()=>{
              let data = {
                        customerID:$('form input[name=uname]').val(),
                        password:$('form input[name=psw]').val()};
               $.ajax({
                    url : _+'/customers/'+data.customerID,
                    type : 'POST',
                    dataType : 'json',
                    data : JSON.stringify(data),
                    contentType : 'application/json',
                    success : d =>{
                    	if (d.customerID!=='') {
                    		$(r_cnt).empty();
                    		 $(compo.cust_mypage())
                             .appendTo(r_cnt);
                    		 $.getScript(custjs)
                    		 .done(()=>{
                    			 cust.init();
                    		 })
                    		 .fail(()=>{
                    			 	alert('component/compo.js 를 찾지  못했습니다.');
                    		 });
                    		 
                    		 $('div button[type=submit]').click(e=>{ 
                          		  e.preventDefault();
                          		  login();
                          	  });
						}else{
							alert('로그인 실패');
						}
                    },
                    error : e=>{
                         alert('실패');
                    }
               }); // $.ajax
     }; //login
     let join =()=>{
    	 let data = {
    			 customerID : $('form input[name=cid]').val(),
    			 customerName : $('form input[name=cname]').val(),
    			 password : $('form input[name=cpass]').val(),
    			 ssn : $('form input[name=cssn]').val(),
    			 phone : $('form input[name=cphone]').val(),
    			 city : $('form input[name=ccity]').val(),
    			 address : $('form input[name=cadr]').val(),
    			 postalCode : $('form input[name=cptc]').val()
    	 };
    	 $.ajax({
    		 url : _+'/customers',
    		 type : 'POST',
    		 dataType : 'json',
    		 data : JSON.stringify(data),
    		 contentType : 'application/json',
    		 success : d =>{
    			 if (d.msg==='SUCCESS') {
    				 alert('회원가입 성공했습니다');
    				 $(r_cnt).empty();
    				 $(compo.cust_login_form())
                     .appendTo(r_cnt);
    				 $('form button[type=submit]').click(e=>{ 
               		  e.preventDefault();
               		  login();
               	  });
				}else{
					alert('회원가입실패!!');
				}
             },
             error : e=>{
                  alert('실패');
                  $(r_cnt).empty();
 				 $(compo.cust_login_form())
                  .appendTo(r_cnt);
 				login();
             }
    	 });
     };
    
     
     
     let register =()=>{
    	  let data = {
    			  employeeID:$('form input[name=employeeID]').val(),
    			  manager:$('form input[name=manager]').val(),
    			  name:$('form input[name=name]').val(),
    			  photo:$('form input[name=photo]').val(),
    			  BirthDate:$('form input[name=BirthDate]').val(),
    			  notes:$('form input[name=notes]').val()};
    		 $.ajax({
        		 url : _+'/users/cust/',
        		 type : 'POST',
        		 dataType : 'json',
        		 data : JSON.stringify(data),
        		 contentType : 'application/json',
        		 success : d =>{
        			 if (d.msg==='SUCCESS') {
        				 alert('회원가입 성공했습니다');
        				 $(r_cnt).empty();
        				 $(compo.cust_login_form())
                         .appendTo(r_cnt);
        				 $('form button[type=submit]').click(e=>{ 
                   		  e.preventDefault();
                   		  login();
                   	  });
    				}else{
    					alert('회원가입실패!!');
    					
    				}
                 },
                 error : e=>{
                      alert('실패');
                      $(r_cnt).empty();
     				 $(compo.cust_login_form())
                      .appendTo(r_cnt);
     				login();
                 }
        	 }); // $.ajax
     };
     let access =()=>{
    	 
	    let data = {
	    		employeeID:$('form input[name=employeeID]').val(),
	    		name:$('form input[name=name]').val()};
           $.ajax({
                url : _+'/users/cust/'+data.customerID,
                type : 'POST',
                dataType : 'json',
                data : JSON.stringify(data),
                contentType : 'application/json',
                success : d =>{
                	if (d.customerID!=='') {
                		alert('아이디 : '+d.customerID);
                		$(r_cnt).empty();
                		 $(compo.cust_mypage())
                         .appendTo(r_cnt);
                		 $('div button[type=submit]').click(e=>{ 
                      		  e.preventDefault();
                      		  login();
                      	  });
					}else{
						alert('로그인 실패');
					}
                },
                error : e=>{
                     alert('실패');
                }
           }); // $.ajax
     };
     return {init:init};
})();