/*let alcoholic = prompt('Вы алкаш?', '');
if (alcoholic == 'Да') alert( 'Вы правы!' );

outer: 
    for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Значение на координатах (${i},${j})`, '');

        if (!input) break outer;
    }
}
alert('Готово!');
*/

let userName = prompt(`Кто там?`, '');

if(userName == 'Алкаш') {
    
    let pass = prompt(`Пароль?`, '');
    if( pass == 'Шампанское') {
        alert('Здравствуйте!');
    } else if( pass == '' || pass == null) {
        alert ('Отменено');
    } else {
        alert('Неверный пароль');
    }

    } else if(userName == '' || userName == null) {
        alert('Отменено');
    } else {
        alert('Я вас не знаю');
    }



