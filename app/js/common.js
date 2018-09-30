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
				blocks = 300,
				pages = 1100;

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

			total = land + ' руб.';
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

			total = corpSite + ' руб.';
			totalPrice.innerHTML = total;
			
		});

		for(let i = 0; i < inputs.length; i++){
			inputs[i].addEventListener('input', () => {

				if(inputs[i] === counterBlock) {
					counterHours.value = '';
					costHours.value = '';
					totalPrice.innerHTML = counterBlock.value * blocks + ' руб.';
				}
				if(inputs[i] === counterPages){
					counterHours.value = '';
					costHours.value = '';
					totalPrice.innerHTML = counterPages.value * pages + ' руб.';
				}
				if(inputs[i] === counterHours){
					counterBlock.value = '';
					counterPages.value = '';
					totalPrice.innerHTML = 0 + ' руб.';
					time = counterHours.value;
					hourCost = time * costHours.value;
					totalPrice.innerHTML = hourCost + ' руб.';
				}
				if(inputs[i] === costHours){
					counterBlock.value = '';
					counterPages.value = '';
					totalPrice.innerHTML = 0 + ' руб.';
					hourCost = time * costHours.value;
					totalPrice.innerHTML = hourCost + ' руб.';
				}
			});
		}

		changeCheck.addEventListener('change', function(){
			if(this.checked){
				totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + changeText + ' руб.';
			} else {
				totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - changeText + ' руб.';
			}
		});

		cmsCheck.addEventListener('change', function(){
			if(this.checked){
				totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + cms + ' руб.';
			} else {
				totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - cms + ' руб.';
			}
		});

});
