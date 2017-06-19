jQuery(document).ready(function($){
	$('.portfolio-item').each(function(){
		$(this).hoverdir();
	});
	$('.node-type-commerce-product .field-small-thumb img').hover(function(){
		var img = $(this).attr('src');
		$('.node-type-commerce-product .field-big-thumb img').attr('src',img);
	});
	
	/**Commerce My Cart**/
	$('#block-commerce-cart-cart .block-contents .content').prepend('<div class="commerce_close btn_close">x</div>');
	
	$('#block-commerce-cart-cart .block-contents .block-title').click(function(){
		$('#block-commerce-cart-cart .block-contents .content').fadeToggle('fast').toggleClass('active').css("overflow","visible");
	});
	
	$('.commerce_close').click(function(){
		$('#block-commerce-cart-cart .block-contents .content').toggleClass('active').slideToggle('fast');
	});

	//Confirmation Add to cart 
	if($('#messages .raw .message-inner .added-product-title').length) {
		$('.node-type-commerce-product').toggleClass('overlay');
		$('.node-type-commerce-product').append('<div class="overlay"></div>');
	}
	//close confirmation box
	$('.overlay #messages .close, .overlay #messages .button-wrapper .continue').click(function(){
		$('.alert, div.overlay').remove();
	});
	// Fix Height Shop Icon
	$('.region-shop-bottom').each(function(){
		var subs = $(this).find('> .col-lg-4');
		if(subs.length < 2) return;
		var maxHeight = Math.max.apply(null, $(this).find(">.col-lg-4").map(function(){
			return $(this).height();
		}).get());
		$(this).find(">.col-lg-4").height(maxHeight-3);
	});

	// EBD - Home - Areas of Expertise panel - Added JV 12/19
    $('.callOut01').show();
	$("#enterpriseLabel").addClass("bold");
	$('.callOut02').hide();
	$('.callOut03').hide();

	$('#01_arrow').show();
	$('#02_arrow').hide();
	$('#03_arrow').hide();

	$(".iconEnterprise").hover(function(){
		$('.callOut01').show(); $('.callOut02').hide(); $('.callOut03').hide();
		$('#01_arrow').show(); $('#02_arrow').hide(); $('#03_arrow').hide();
		$("#enterpriseLabel").addClass("bold");
		$("#experienceLabel").removeClass("bold");$("#productLabel").removeClass("bold");
		$(".iconEnterprise").addClass("in"); $(".iconExperience").removeClass("in"); $(".iconProduct").removeClass("in");
	},function(){
		//$('.callOut03').hide();
		$(".iconEnterprise").removeClass("in");
		$("#enterpriseLabel").removeClass("bold");
		$('#01_arrow').hide();
		$('.callOut01').fadeOut();
	});

	$(".iconExperience").hover(function(){
		$('.callOut01').hide(); $('.callOut02').show(); $('.callOut03').hide();
		$('#01_arrow').hide(); $('#02_arrow').show(); $('#03_arrow').hide();
		$("#experienceLabel").addClass("bold");
		$("#enterpriseLabel").removeClass("bold");$("#productLabel").removeClass("bold");
		$(".iconEnterprise").removeClass("in"); $(".iconExperience").addClass("in"); $(".iconProduct").removeClass("in");
	},function(){
		$(".iconExperience").removeClass("in");
		$("#experienceLabel").removeClass("bold");
		$('#02_arrow').hide();
		$('.callOut02').fadeOut();
	});

	$(".iconProduct").hover(function(){
		$('.callOut01').hide(); $('.callOut02').hide(); $('.callOut03').show();
		$('#01_arrow').hide(); $('#02_arrow').hide(); $('#03_arrow').show();
		$("#productLabel").addClass("bold");
		$("#enterpriseLabel").removeClass("bold");$("#experienceLabel").removeClass("bold");
		$(".iconEnterprise").removeClass("in"); $(".iconExperience").removeClass("in"); $(".iconProduct").addClass("in");
	},function(){
		$(".iconProduct").removeClass("in");
		$("#productLabel").removeClass("bold");
		$('#03_arrow').hide();
		$('.callOut03').fadeOut();
	});

	// EBD - How we work  - Our Process panel - Added JV 05/15
	$("ul.process_how > li:even").hover(function(){
		$(this).toggleClass('selected').siblings().removeClass('selected');
	});
	$("ul.process_how_main > li:even").hover(function(){
		$(this).toggleClass('selected').siblings().removeClass('selected');
	});

	// EBD - Process Detail - Our Process panel - Added JV 05/15
	$(".bx-wrapper .slide").mouseenter(function () {
    	$(this).toggleClass('selected').siblings().removeClass('selected');
	})

	$(".bx-wrapper .slide").mouseleave(function () {
	   $(this).toggleClass('selected').siblings().removeClass('selected');
	});

})