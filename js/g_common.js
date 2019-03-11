$(function(){
	$('.register .colMint ').click(function(){
		$('.register').css('display','none');
		$('.login').css('display','block');
	})
	
	$('.login .colMint ').click(function(){
		$('.login').css('display','none');
		$('.register').css('display','block');
	})
})
