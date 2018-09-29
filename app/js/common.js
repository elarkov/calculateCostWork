$(function() {

	//custom js
	let total = 5000,
			time = 1,
			hourCost,
			tabLeft = document.querySelector('.js-tab-left'),
			tabRight = document.querySelector('.js-tab-right'),
			blocksList = document.querySelector('.js-blocks'),
			pagesList = document.querySelector('.js-pages'),
			counterBlock = document.querySelector('.js-counter-block'),
			counterHours = document.querySelector('.js-counter-hours'),
			costHours = document.querySelector('.js-cost-hours'),
			counterPages = document.querySelector('.js-counter-pages'),
			changeCheck = document.querySelector('.js-change-check'),
			cmsCheck = document.querySelector('.js-cms-check'),
			totalPrice = document.querySelector('.js-total-cost');
			inputs = document.querySelectorAll('input');


	const land = 5000,
				corpSite = 12000,
				cms = 4000,
				changeText = 1000,
				blocks = 500,
				pages = 2500;

	//window.addEventListener('DOMContentLoaded', function(){
		tabLeft.addEventListener('click', () => {
			for(let i = 0; i < inputs.length; i++){
				inputs[i].value = '';
				totalPrice.innerHTML = '';
			}

			blocksList.style.display = 'flex';
			pagesList.style.display = 'none';

			tabLeft.classList.add('active');
			tabRight.classList.remove('active');

			if(changeCheck.checked){
				changeCheck.checked = false;
			}

			if(cmsCheck.checked){
				cmsCheck.checked = false;
			}

			total = land;
			totalPrice.innerHTML = total;

		});

		tabRight.addEventListener('click', () => {
			for(let i = 0; i < inputs.length; i++){
				inputs[i].value = '';
				totalPrice.innerHTML = '';
			}

			blocksList.style.display = 'none';
			pagesList.style.display = 'flex';

			tabRight.classList.add('active');
			tabLeft.classList.remove('active');

			if(changeCheck.checked){
				changeCheck.checked = false;
			}

			if(cmsCheck.checked){
				cmsCheck.checked = false;
			}

			total = corpSite;
			totalPrice.innerHTML = total;
			
		});
	//});

});
