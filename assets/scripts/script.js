$('.js-submitBtn').on('click', function(event) { // Добавляем функция при клике на кнопку с классом js-loginBtn
	let errorCount = 0; // переменная которая будет увелчиваться, если будут ошибки ввода 
	let form = $(this).parents('.js-form');  // находим форму в которой находится кнопка
	let inputs = $(form).find('.js-input'); // находим все поля ввода в форме
	$(inputs).each(function() { // пройдемся функцией по каждому полю ввода
		value = $(this).val(); // узнаем что введено пользователем в поле
		if (value == "") { // функция на случай если поле пустое
			$(this).addClass('error') // добавляем класс, который  добавит рамку
			errorCount++;
		} else {
			$(this).removeClass('error')
		}
	});
	if ($('.js-inputRadio').is(':checked')){ // проверяем выбран ли чекбокс, если нет то обводим красным
		$('.js-inputRadio').removeClass('error')
	} else {
		$('.js-inputRadio').addClass('error');
		errorCount++; // увеличиваем количество допущенных ошибок что б предотвратить переход дольше
	}
	if (errorCount != 0) { // условия которое проверяет есть ли ошибки ввода
		event.preventDefault(); // если они есть, то отменяем стандартное поведение перехода
	}
});


$('.js-input').on('keydown', function() {
	$(this).removeClass('error') // убираем класс ошибки когда пользователь что-то вводит
});

$('.js-inputRadio').on('click', function() {
	let regBtn = $('.js-regBtn') // находим кнопку перехода
	let value = $(this).val(); // узнаем аттрибут значения выбранного чекбокса
	$(regBtn).attr("href", value + ".html") // заменяем адрес для перехода на хначение из чекбокса
	$('.js-inputRadio').removeClass('error') // убираем класс ошибки когда пользователь что-то вводит
});
