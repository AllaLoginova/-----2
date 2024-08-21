const defuser = document.getElementById('defuser-btn');
let explodeId = 0; // идентификатор интервала взрыва

// функция обезвреживания бомбы
defuser.addEventListener('click', () => {
    clearInterval(explodeId); // остановка таймера (интервала) взрыва
    defuser.disabled = true;
    console.log('Бомба обезврежена.');
});
 
// Запуск таймера бомбы
function explosion(seconds) {
    console.log(seconds + '...');
    explodeId = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
            console.log('БУМ!');
            defuser.disabled = true;
            clearInterval(explodeId); // остановка таймера (интервала) взрыва
        }
        else {
            console.log(seconds + '...');
        }
            
    }, 1000);
}

explosion(3); // через 3 сек


// console.log('3...');

// setTimeout(() => {
// console.log('2...');
// }, 1000);

// setTimeout(() => {
//     console.log('1...');
// }, 2000);


// const timeoutId = setTimeout(() => {
//     console.log('BOOM!');
// }, 3000);
// console.log(timeoutId);// опредуляем номер таймаута
