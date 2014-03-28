$(function(){
	//anything in here will execute AFTER all the HTML is loaded
	//hide everything, show the first box
	//list for the NEXT button for ALL next buttons
	// when that NEXT button is click, figure out which BOX that clicked NEXT button belongs to... then high ALL boxes, and SHOW the NEXT one
	
	


	
	$("#cards input").on('click',function(){
		console.log('test');
		var clickedcard = $(this).val();
		mycard.card = clickedcard;
	});
	
	$("#stepone .next").on('click',function(){
		var cardimage = '/media/images/big/'+mycard.card+'_big.jpg';
		
	$('#steptwo .bigcard img, #stepthree .bigcard img').attr('src',cardimage); });
	
	$("#steptwo .next").on('click',function(){
		
		var tname = $("#tname").val();
		var temail = $("#temail").val();
		var fname = $("#fname").val();
		var femail = $("#femail").val();
		var message = $("#message").val();
		var month = $("#month").val()
		var date = $("#date").val()
		var year = $("#year").val()
		
		
		
		var form_complete = true;
		//check each input to make sure that it is NOT empty
		if (tname == '') {
			$("#tname").addClass('border');
			form_complete = false;	
		}else{
			$("#tname").removeClass('border');
		}
		
		if (temail == '') {
			$("#temail").addClass('border');
			form_complete = false;
		}else{
			$("#temail").removeClass('border');
		}
		
		if (fname == '') {
			$("#fname").addClass('border');
			form_complete = false;
		}else{
			$("#fname").removeClass('border');
		}
		
		if (femail == '') {
			$("#femail").addClass('border');
			form_complete = false;	
		}else{
			$("#fname").removeClass('border');
		}
		
		if (message == '') {
			$("#message").addClass('border');
			form_complete = false;	
		}else{
			$("#message ").removeClass('border');
		}
		
		if($("#month, #date, #year").val() == ""){
			alert('Choose Date');
			form_complete = false;
		}
		
		
		
		//if the form is complete then continue progress the user to the next step
		if (form_complete == true) {
			mycard.tname = tname;
			mycard.temail = temail;
			mycard.fname = fname;
			mycard.femail = femail;
			mycard.message = message;
			mycard.month = month;
			mycard.date = date;
			mycard.year = year;		
		
			var mystring = mycard.tname + "<br>" + mycard.message + "<br>Happy Mother's Day!<br>" + mycard.fname
			var datestamp = mycard.month + " " + mycard.date + " " +mycard.year + "<br>"
			$("#datestamp").html(datestamp)
			$("#previewtext").html(mystring)
			$("#stepthree").show();
			$("#steptwo").hide();
		}
		
			
			//form is INCOMPLETE. google search "javascript alert()" and alert the user to fill out all fields
			
			var form_complete = true;
			//check each input to make sure that it is NOT empty
		
		
	});
	
	
	
	$("#stepone, #steptwo, #stepthree, #done").hide()
	
	$("#createfirst").on('click',function(){
		$("#stepone").show();
		$("#begin").hide();
	});
	
	$("#stepone .back").on('click',function(){
		$("#begin").show();
		$("#stepone").hide();
	});
	
	$("#stepone .next").on('click',function(){
		$("#steptwo").show();
		$("#stepone").hide();
	});
	
	$("#steptwo .back").on('click',function(){
		$("#stepone").show();
		$("#steptwo").hide();
	});
	
	$("#stepthree .next").on('click',function(){
		$("#done").show();
		$("#stepthree").hide();
	});
	
	$("#stepthree .back").on('click',function(){
		$("#steptwo").show();
		$("#stepthree").hide();
	});
	
	
	FB.ui(
	  {
	    method: 'feed',
	    name: 'Facebook Dialogs',
	    link: 'https://developers.facebook.com/docs/dialogs/',
	    picture: 'http://egreeting.milesretuta.com/media/images/steptwo.png',
	    caption: 'Share your e-card on Facebook!',
	    description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
	  },
	  function(response) {
	    if (response && response.post_id) {
	      alert('Post was published.');
	    } else {
	      alert('Post was not published.');
	    }
	  }
	);

});

var mycard = {};
	

$("#social #fb").on('click',function(){FB.ui({ method: 'feed', 
link: 'https://google.com', 
caption: 'An example caption', }, function(response){});  
})

console.log($("#rees"));
// console.log(document.getElementById('rees'));



// rare examples of when to use CORE JAVASCRIPT
// alert()
// window.location.href
// complicated:
// document.getElementById('rees').whenthiselementisclick();

