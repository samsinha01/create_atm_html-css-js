var card=document.querySelector(".card");
// window.onresize=function(){
	// // console.log(this.innerWidth);
	// var page01=document.querySelector(".page01");
	// if(this.innerWidth<=1102){
		// var pagehead=document.querySelector(".page01>h1");
		// // console.log(pagehead);
		// pagehead.style.left="100px";
	// }
// }
card.onclick=function(){
	var page01=document.querySelector(".page01");
	page01.classList.add("hide");
	
	body.innerHTML=`
		<section class="pin-box">
			<h1>Enter PIN</h2>
			
			<div class="pin-code form-group">
				<input type="password" placeholder="Enter 4 digit Pin Code">
			</div>
			
			<div class="form-group pin-submit">
				<button class="">SUBMIT</button>
			</div>
		</section>
	`;
	
	var pinSubmit=document.querySelector(".pin-submit>button");
	pinSubmit.onclick=function(){
		var pinCode=Number(document.querySelector(".pin-code>input").value);
		
		if(pinCode===1234){
			var pinBox=document.querySelector(".pin-box");
			pinBox.classList.add("hide");
			
			body.innerHTML=`
				<section class="acc-box">
					<h1>Enter Your Account</h2>
					
					<div class="acc-btn form-group">
						<button class="btn btn-primary">Saving Account</button>
						<button class="btn btn-primary">Current Account</button>
					</div>
				</section>
			`;
			
			var accBtn=document.querySelectorAll(".acc-btn>button");
			// console.log(accBtn);
			
			accBtn[0].onclick=function(){
				var accBox=document.querySelector(".acc-box");
				accBox.classList.add("hide");
				
				body.innerHTML=`
					<section class="accOpt">
						<h1>Saving Account</h1>
						
						<div class="form-group optBtn">
							<button class="btn btn-primary btn1">Cash Withdraw</button>
							<button class="btn btn-primary btn2">Cash Deposite</button>
							<button class="btn btn-primary btn3">Balance Check</button>
							<button class="btn btn-primary btn4">Pin Change</button>
						</div>
					</section>
				`;
				
				var withOpt=document.querySelector(".btn1");
				withOpt.onclick=function(){
					var Acc=document.querySelector(".accOpt");
					Acc.classList.add("hide");
					
					body.innerHTML=`
						<section class="with-box">
							<h1>Cash Withdraw</h2>

							<div class="with-code form-group">
								<input type="text" placeholder="Enter Withdraw Amount">
							</div>

							<div class="form-group with-submit">
								<button class="btn btn-primary">SUBMIT</button>
							</div>
						</section>
					`;
					
					var withSbt=document.querySelector(".with-submit>button");
					withSbt.onclick=function(){
						var withAmt=Number(document.querySelector(".with-code>input").value);
						if(withAmt<=10000){
							var withBox=document.querySelector(".with-box");
							withBox.classList.add("hide");
							
							body.innerHTML=`
								<section class="with-AMt">
									<h1>Your Amount ${withAmt} withdraw Successfully.</h1>
								</section>
							`;
						}
						else{
							alert("enter minimum 10000 amount");
						}
					}
				}  //WithdrawAmt Section
				
				var cashOpt=document.querySelector(".btn2");
				cashOpt.onclick=function(){
					var accOpt=document.querySelector(".accOpt");
					accOpt.classList.add(".hide");
					
					body.innerHTML=`
						<section class="cash-box">
							<h1>Cash Deposite</h2>

							<div class="cash-code form-group">
								<input type="text" placeholder="Enter Withdraw Amount">
							</div>

							<div class="form-group cash-submit">
								<button class="btn btn-primary">SUBMIT</button>
							</div>
						</section>
					`;
					
					var cashSbt=document.querySelector(".cash-submit>button");
					cashSbt.onclick=function(){
						var cashAmt=Number(document.querySelector(".cash-code>input").value);
						if(cashAmt<=10000){
							var cashBox=document.querySelector(".cash-box");
							cashBox.classList.add("hide");
							
							body.innerHTML=`
								<section class="cash-AMt">
									<h1>Your Amount ${cashAmt} Deposite Successfully.</h1>
								</section>
							`;
						}
						else{
							alert("enter minimum 10000 amount");
						}
					}
				}  //deposite Option
				
				//balance check start
				var balCheck=document.querySelector(".btn3");
				balCheck.onclick=function(){
					var accOpt=document.querySelector(".accOpt");
					accOpt.classList.add("hide");
					
					var curBal=2000;
					body.innerHTML=`
						<section CLASS="cash-AMt">
							<h1>Your account Balance is: ${curBal}</h1>
						</section>
					`;
				}   //balance check close
				
				//pin change button click start
				var pinChange=document.querySelector(".btn4");
				pinChange.onclick=function(){
					var accOpt=document.querySelector(".accOpt");
					accOpt.classList.add("hide");
					
					body.innerHTML=`
						<section class="p-change-box container">
							<h1>Change Your Pin</h1>
							
							<div class="p-change-code">
								<div class="form-group pin01 pinCge">
									<input type="password" placeholder="Enter Current Pin">
								</div>
								
								<div class="form-group pin02 pinCge">
									<input type="password" placeholder="Enter New Pin">
								</div>
								
								<div class="form-group pin03 pinCge">
									<input type="password" placeholder="Confirm New Pin">
								</div>
							</div>
							
							<div class="form-group p-change-submit">
								<button class="btn btn-primary">SUBMIT</button>
							</div>
						</section>
					`;
					
					var changeSub=document.querySelector(".p-change-submit>button");
					changeSub.onclick=function(){
						var curPin=Number(document.querySelector(".pin01>input").value);
						var newPin=Number(document.querySelector(".pin02>input").value);
						var conPin=Number(document.querySelector(".pin03>input").value);
					
						if(conPin==newPin && curPin===1234){
							var changeBox=document.querySelector(".p-change-box");
							changeBox.classList.add("hide");
						
							body.innerHTML=`
								<section class="cash-AMt">
									<h1>Your Pin Change Successfully.</h1>
								</section>
							`;
						}
						else{
							alert("check your Pin");
						}
					}
				}    //pin-change close
			}   //saving account close
			
			//if user click current account so they navigate on same page where previous went.
				accBtn[1].onclick=function(){
				var accBox=document.querySelector(".acc-box");
				accBox.classList.add("hide");
				
				body.innerHTML=`
					<section class="accOpt">
						<h1>Current Account</h1>
						
						<div class="form-group optBtn">
							<button class="btn btn-primary btn1">Cash Withdraw</button>
							<button class="btn btn-primary btn2">Cash Deposite</button>
							<button class="btn btn-primary btn3">Balance Check</button>
							<button class="btn btn-primary btn4">Pin Change</button>
						</div>
					</section>
				`;
				
				var withOpt=document.querySelector(".btn1");
				withOpt.onclick=function(){
					var Acc=document.querySelector(".accOpt");
					Acc.classList.add("hide");
					
					body.innerHTML=`
						<section class="with-box">
							<h1>Cash Withdraw</h2>

							<div class="with-code form-group">
								<input type="text" placeholder="Enter Withdraw Amount">
							</div>

							<div class="form-group with-submit">
								<button class="btn btn-primary">SUBMIT</button>
							</div>
						</section>
					`;
					
					var withSbt=document.querySelector(".with-submit>button");
					withSbt.onclick=function(){
						var withAmt=Number(document.querySelector(".with-code>input").value);
						if(withAmt<=10000){
							var withBox=document.querySelector(".with-box");
							withBox.classList.add("hide");
							
							body.innerHTML=`
								<section class="with-AMt">
									<h1>Your Amount ${withAmt} withdraw Successfully.</h1>
								</section>
							`;
						}
						else{
							alert("enter minimum 10000 amount");
						}
					}
				}  //WithdrawAmt Section
				
				var cashOpt=document.querySelector(".btn2");
				cashOpt.onclick=function(){
					var accOpt=document.querySelector(".accOpt");
					accOpt.classList.add(".hide");
					
					body.innerHTML=`
						<section class="cash-box">
							<h1>Cash Deposite</h2>

							<div class="cash-code form-group">
								<input type="text" placeholder="Enter Withdraw Amount">
							</div>

							<div class="form-group cash-submit">
								<button class="btn btn-primary">SUBMIT</button>
							</div>
						</section>
					`;
					
					var cashSbt=document.querySelector(".cash-submit>button");
					cashSbt.onclick=function(){
						var cashAmt=Number(document.querySelector(".cash-code>input").value);
						if(cashAmt<=10000){
							var cashBox=document.querySelector(".cash-box");
							cashBox.classList.add("hide");
							
							body.innerHTML=`
								<section class="cash-AMt">
									<h1>Your Amount ${cashAmt} Deposite Successfully.</h1>
								</section>
							`;
						}
						else{
							alert("enter minimum 10000 amount");
						}
					}
				}  //deposite Option
				
				//balance check option start
				
				var balCheck=document.querySelector(".btn3");
				balCheck.onclick=function(){
					var accOpt=document.querySelector(".accOpt");
					accOpt.classList.add("hide");
					
					var curBal=2000;
					body.innerHTML=`
						<section CLASS="cash-AMt">
							<h1>Your account Balance is: ${curBal}</h1>
						</section>
					`;
				}   //balance check close
				
				//pin change button click start
				var pinChange=document.querySelector(".btn4");
				pinChange.onclick=function(){
					var accOpt=document.querySelector(".accOpt");
					accOpt.classList.add("hide");
					
					body.innerHTML=`
						<section class="p-change-box container">
							<h1>Change Your Pin</h1>
							
							<div class="p-change-code">
								<div class="form-group pin01 pinCge">
									<input type="password" placeholder="Enter Current Pin">
								</div>
								
								<div class="form-group pin02 pinCge">
									<input type="password" placeholder="Enter New Pin">
								</div>
								
								<div class="form-group pin03 pinCge">
									<input type="password" placeholder="Confirm New Pin">
								</div>
							</div>
							
							<div class="form-group p-change-submit">
								<button class="btn btn-primary">SUBMIT</button>
							</div>
						</section>
					`;
					
					var changeSub=document.querySelector(".p-change-submit>button");
					changeSub.onclick=function(){
						var curPin=Number(document.querySelector(".pin01>input").value);
						var newPin=Number(document.querySelector(".pin02>input").value);
						var conPin=Number(document.querySelector(".pin03>input").value);
					
						if(conPin==newPin && curPin===pinCode){
							var changeBox=document.querySelector(".p-change-box");
							changeBox.classList.add("hide");
						
							body.innerHTML=`
								<section class="cash-AMt">
									<h1>Your Pin Change Successfully.</h1>
								</section>
							`;
						}
						else{
							alert("check your Pin");
						}
					}
				}    //pin-change close
			}    //current account close
		}
		else{
			alert("Enter the Correct Pin");
		}
	}
}