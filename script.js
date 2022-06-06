sum = 0;
q1 = prompt('Сколько будет 2+2?');
if(q1 == 4) {
    sum += 10;
} else {
    sum += 0;
}
q2 = prompt('Солнце встает на востоке?').toLowerCase().trim();
if(q2 === 'да' || q2 === 'да.') {
    sum += 10;
} else {
    sum += 0;
}
q3 = prompt('Сколько будет 5 / 0?');
if(isNaN(q3)) {
    sum += 10;
} else {
    sum += 0;
}
q4 = prompt('Какого цвета небо?').toLowerCase().trim();
if(q4 === 'голубого' || q4 === 'голубого.') {
    sum += 10;
} else {
    sum += 0;
}
q5 = prompt('Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?');
if(q5 == 42) {
    sum += 10;
} else {
    sum += 0;
}
alert(`Результат: ${sum} из 50`);