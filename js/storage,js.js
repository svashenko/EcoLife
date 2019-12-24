var cart = {};

$('document').ready(function(){	
	loadGoods();
	checkCart();
	showMiniCart();	
  
});

function loadGoods() {
	$.getJSON( '../goods.json', function( data ) {
		let out = '';

		for (let key in data){	
			out	+= '<div class="single-goods">';				
			out	+= '<div class="single-goods__img">';				
			out += '<img src="' + data[key].image + '">';
			out += '</div>'
			out += '<div class="single-goods__name">' + data[key]['name'] + '</div>';
			out += '<div class="single-goods__cost">' + data[key]['cost'] + ' P </div>';
			out += '<button class="single-goods__btn" type="submit" data-art="'+ key +'">В корзину</button>'
			out += '</div>';
		}

		$('.catalog').html(out);	
		$('button.single-goods__btn').on('click', addToCart);
	});
};

function addToCart() {
	let articul = $(this).attr('data-art');

	if (cart[articul] != undefined) {
		cart[articul]++;
	}else {
		cart[articul] = 1;
	}

	localStorage.setItem('cart', JSON.stringify(cart));
	console.log(cart);
	showMiniCart();
};

function checkCart() {
	let cartItem = localStorage.getItem('cart');

	if(cartItem != null){
		cart = JSON.parse(cartItem);
	}
};

function showMiniCart() {
	let out = '';

	for (let articul in cart){
		out += articul + ' --- ' + cart[articul] + '<br>';
	}

	$('.mini-cart').html(out);
};

$.getJSON('../goods.json', function(data){
	let goods = data;
	checkCart();
	showCart();

	function showCart(){
		let out = '';

		for (var key in cart){
			out += '<button class="cart__delete">x<button>';
			out += '<img class="cart__img" src="'+ goods[key].image +'">';
			out += '<div class="cart__name">'+ goods[key].name +'<div>'; 
			out += '<button class="cart__minus">-<button>';
			out += '<div class="cart__count">' + cart[key] + '</div>';
			out += '<button class="cart__plus">+<button>';
			out += '<div class="cart__total-price">' + cart[key] * goods[key].cost + '</div><br>';
		}

		$('.cart').html(out);
	};

});

