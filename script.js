let screenWord = document.getElementById('word');
let button = document.querySelector('.button');
let picture = document.querySelector('.paint');
let attent = document.getElementById('attention');
let attempt = document.getElementById('attempts');
let bigDig = document.getElementById('big');
let inp;

let GameModel = { //игровая модель
    currentWord: "",
    attempts: 6,
    win: false,
    lose: false
};

let wordsArr = ["абсолютизм", "автономизация", "акциз", "анархизм", "аннексия", "антисемитизм", "барщина", "баскак", "Бироновщина", "Большевизм", "Бояре", "Бюрократия", "Варяги", "Вервь", "Вече", "Воевода", "Волостели", "Вотчина", "Гвардия", "Гетман", "Гласные", "ГОЭЛРО", "ГУЛАГ", "Дань", "Дворянство", "Декрет", "Депортация", "Десятина", "Диссидентство", "Диктатура", "Ереси", "Жандармерия", "Закладники", "Земщина", "Индустриализация", "Издольщина", "Интернационал", "Испольщина", "Кадеты", "Казачество", "Картель", "Коллегии", "Коллективизация", "Контрибуция", "Концерн", "Кооперация", "Кормление", "Корниловщина", "Космополитизм", "Лендлиз", "Мануфактура", "Меньшевизм", "Местничество", "Министерства", "Монополия", "Наместник", "Национализация", "Нестяжатели", "Номенклатура", "Община", "Оброк", "Октябристы", "Оппозиция", "Опричнина", "Отруб", "Оттепель", "Патриаршество", "Переселенчество", "Перестройка", "Барбаросса", "Погост", "Полюдье", "Поместье", "приватизация", "продналог", "продразверстка", "революция", "синдикат", "тоталитаризм", "троцкизм", "трудовики", "фискал", "хутор", "шляхта", "экспроприация", "язычество", "ярлык"];

/////////////////

SetCurrentWord();

attempt.innerHTML = GameModel.attempts;

function SetCurrentWord(){  //Подбор нового слова
    GameModel.currentWord =  wordsArr[Math.floor(Math.random()*wordsArr.length)].toLowerCase();
    console.log(GameModel.currentWord);
    let pivot = GameModel.currentWord.split('');
    pivot = pivot.join(' ');
    pivot = pivot.replace(/\S/g, '_');
    screenWord.innerHTML = pivot;
}

function CheckInput(){  //Валидация инпута (при правильном вводе даёт true)
    if(/^[а-яё]{1}$/gi.test(inp)==true){
        document.querySelector('input').value = '';
        return true;
    } 
    else{
        attent.innerHTML = 'Введите одну букву русского алфавита';
        document.querySelector('input').value = '';
    }
}

button.addEventListener('click', function(){  //Нажатие на кнопку
   inp = document.querySelector('input').value;
   CheckInput();
   if(CheckInput()==true) IsCorrectLetter();
   else return false;
    
});

function IsCorrectLetter(){ //Игрок делает попытку
    let pivot = GameModel.currentWord.split('');
    let pivot2; 
    inp = inp.toLowerCase();

        if(pivot.indexOf(inp)==-1)
        {
            GameModel.attempts--; 
            attempt.innerHTML = GameModel.attempts;
            attent.innerHTML = 'Не та буква((';
            CheckWin();
        }
        else
        {
            attent.innerHTML = 'Молодец!';
            for(let i = 0; i<pivot.length; i++){
                if(inp==pivot[i]){
                    pivot2 = screenWord.innerHTML.split(' ');
                    pivot2[i] = pivot[i];
                    pivot2 = pivot2.join(' ');
                    screenWord.innerHTML = pivot2;
                }
            }
            CheckWin();
        }                         
}

function CheckWin(){  // проверка проигрыша\победы и перезагрузка
    if(GameModel.attempts==0){
        GameModel.lose = true;
        attent.innerHTML = 'Вы проиграли(';
        picture.classList.add('lose');
        Restart();
    }
    if(screenWord.innerHTML.indexOf('_')==-1){
        GameModel.win = true;
        attent.innerHTML = 'Вы победили)';
        picture.classList.add('win');
        Restart();
        
    }
}

function Restart(){  // рестарт страницы

    bigDig.style.display = "block";

	let i = 4;
		setInterval(function(){
			bigDig.innerHTML = i;
			i--;	
			if(i==-1){
				location.reload();
			}
        }, 1000);	
        	
    setTimeout(function(){
        location.reload();
    }, 5000);
}


