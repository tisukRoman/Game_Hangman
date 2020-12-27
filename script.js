let screenWord = document.getElementById('word');
let button = document.querySelector('.button');
let picture = document.querySelector('.paint');
let attent = document.getElementById('attention');
let attempt = document.getElementById('attempts');
let bigDig = document.getElementById('big');
let usedPanel = document.getElementById('used_words');
let menuButton = document.querySelector('.menu_');
let menuDisp = document.querySelector('.menu_display');
let hist = document.getElementById('history');
let bio = document.getElementById('biology');
let lit = document.getElementById('literature');
let inp;

let GameModel = { //игровая модель
    currentWord: "",
    theme: localStorage.getItem('theme'),
    attempts: 6,
    win: false,
    lose: false
};
let litWords = ["Авангардизм", "Акмеизм", "Аллегория", "Акростих", "Аллитерация", "Амфибрахий", "Альманах", "Анапест", "Антитеза", "Аннотация", "Антология", "Афоризм", "Баллада", "Басня", "Беллетристика", "Бурлеск", "Буриме", "Былина", "Варваризм", "Версификация", "мемуары", "Вульгаризм", "Гекзаметр", "Гипербола", "Градация", "Гротеск", "Гуманизм", "Декадентство", "Детектив", "Диалектизм", "Дифирамб", "Дольник", "Завязка", "Зачин", "Идеализация", "Идиллия", "Имажинизм", "Импрессионизм", "Импровизация", "Интонация", "Инверсия", "Ирония", "Интрига", "Каламбур", "Кантилена", "Кантата", "Классицизм", "Клаузула", "Коллизия", "Комедия", "Композиция", "Конфликт", "Контраст", "Концовка", "Кульминация", "Лаконизм", "Легенда", "Лейтмотив", "Лирика", "Мадригал", "Мелодрама", "Мейнстрим", "Метафора", "Метонимия", "Миниатюра", "Модернизм", "Монолог", "Моноритм", "Мотивировка", "Натурализм", "Неологизм", "Новелла", "Обращение", "Олицетворение", "Памфлет", "Параллелизм", "Пародия", "Пасквиль", "Перифраз", "Портрет", "Посвящение", "Поговорка", "Послесловие", "Послание", "Поэзия", "Прибаутка", "Псевдоним", "Публицистика", "Развязка", "Редакция", "Ремарка", "Рефрен", "Романс", "Рубаи", "Сарказм", "Сатира", "Символизм", "Сравнение", "Строфа", "Сюжет", "Тавтограмма", "Терцет", "Тематика", "Трактат", "Урбанизм", "Фабула", "Утопия", "Фантастика", "Фельетон", "Хорей", "Хроника", "Цезура", "Частушка", "Эвфемизм", "Эпиграф", "Эссе", "Эпизод", "Эпитет"];
let histWords = ["абсолютизм", "автономизация", "акциз", "анархизм", "аннексия", "антисемитизм", "барщина", "баскак", "Бироновщина", "Большевизм", "Бояре", "Бюрократия", "Варяги", "Вервь", "Вече", "Воевода", "Волостели", "Вотчина", "Гвардия", "Гетман", "Гласные", "ГОЭЛРО", "ГУЛАГ", "Дань", "Дворянство", "Декрет", "Депортация", "Десятина", "Диссидентство", "Диктатура", "Ереси", "Жандармерия", "Закладники", "Земщина", "Индустриализация", "Издольщина", "Интернационал", "Испольщина", "Кадеты", "Казачество", "Картель", "Коллегия", "Коллективизация", "Контрибуция", "Концерн", "Кооперация", "Кормление", "Корниловщина", "Космополитизм", "Лендлиз", "Мануфактура", "Меньшевизм", "Местничество", "Министерства", "Монополия", "Наместник", "Национализация", "Нестяжатели", "Номенклатура", "Община", "Оброк", "Октябристы", "Оппозиция", "Опричнина", "Отруб", "Оттепель", "Патриаршество", "Переселенчество", "Перестройка", "Барбаросса", "Погост", "Полюдье", "Поместье", "приватизация", "продналог", "продразверстка", "революция", "синдикат", "тоталитаризм", "троцкизм", "трудовики", "фискал", "хутор", "шляхта", "экспроприация", "язычество", "ярлык"];
let bioWords = ["Абиогенез", "Абиосфера", "Австралопитек", "Автотроф", "Агроценоз", "Адвентивность", "Аденозин", "Аденома", "Аксон", "Аллель", "Альбинизм", "Альвеола", "Анабиоз", "Анаболизм", "Анемия", "Антропогенез", "Антропология", "Атавизм", "Аутосома", "Аэроб", "Бацилла", "Белок", "Бивалент", "Биосинтез", "Вакуоль", "Вакцина", "Вирус", "Витамин", "Галлофоб", "Гаплоид", "Гаструла", "Гемоглобин", "Гемофилия", "Генерация", "Генетика", "Гидрофил", "Гиподинамия", "Гомеостаз", "Гормон", "Гуанин", "Дальтонизм", "Деструктор", "Диплоид", "Дупликация", "Зигота", "Иммунитет", "Инбридинг", "Интерфаза", "Ингибитор", "Канцероген", "Кариотип", "Катализатор", "Консумент", "Кроссинговер", "Латеральный", "Лизосома", "Лимфоцит", "Мезодерма", "Метаболизм", "Метаморфоз", "Митохондрия", "Овуляция", "Органелла", "Пестицид", "Плазма", "Популяция", "Протоплазма", "Рецессивность", "Рибосома", "Сапротроф", "Сперматоцит", "Трансформация", "Тромбоцит", "Тычинка", "Фермент", "Физиология", "Яйцеклетка", "Эукариота", "Эволюция", "Экосистема", "Цитоплазма" ];
/////////////////

SetCurrentWord();

attempt.innerHTML = GameModel.attempts;

function SetCurrentWord(){  //Подбор нового слова
    if(GameModel.theme==null) {screenWord.innerHTML = 'Выберите тематику =>'; return false;}
    if(GameModel.theme=="history") GameModel.currentWord =  histWords[Math.floor(Math.random()*histWords.length)].toLowerCase();
    if(GameModel.theme=="biology") GameModel.currentWord =  bioWords[Math.floor(Math.random()*bioWords.length)].toLowerCase();
    if(GameModel.theme=="literature") GameModel.currentWord =  litWords[Math.floor(Math.random()*litWords.length)].toLowerCase();
    console.log(GameModel.theme);

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
   if(CheckInput()==true){
       if(!usedPanel.innerHTML.includes(inp.toUpperCase()))usedPanel.innerHTML += inp.toUpperCase() + ', ';
       IsCorrectLetter();
    }
   else return false;
});

document.addEventListener('keydown', function(event){ //нажатие на 'Enter'
    if(event.key=='Enter'){
        inp = document.querySelector('input').value;
        CheckInput();
        if(CheckInput()==true){
            if(!usedPanel.innerHTML.includes(inp.toUpperCase()))usedPanel.innerHTML += inp.toUpperCase() + ', ';
            IsCorrectLetter();
         }
        else return false;
    }
});

menuButton.addEventListener('click', function(){ //открытие меню
    menuDisp.classList.toggle('open');
});

hist.addEventListener('click', function(){ //выбор темы "История"
    localStorage.setItem('theme', 'history');
    menuDisp.classList.remove('open');
    location.reload();
});
bio.addEventListener('click', function(){  //выбор темы "Биология"
    localStorage.setItem('theme', 'biology');
    menuDisp.classList.remove('open');
    location.reload();
});
lit.addEventListener('click', function(){  //выбор темы "Литература"
    localStorage.setItem('theme', 'literature');
    menuDisp.classList.remove('open');
    location.reload();
});



function IsCorrectLetter(){ //Игрок делает попытку
    let pivot = GameModel.currentWord.split('');
    let pivot2; 
    inp = inp.toLowerCase();
        if(pivot.indexOf(inp) == -1){
            GameModel.attempts--; 
            attempt.innerHTML = GameModel.attempts;
            attent.innerHTML = 'Не та буква((';
            CheckWin();
        }
        else{
            attent.innerHTML = 'Молодец!';
            for(let i = 0; i<pivot.length; i++){
                if(inp == pivot[i]){
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
        screenWord.innerHTML = GameModel.currentWord;
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


