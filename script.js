let text = "Привет! Ты собака, выбирый чем ты должен заниматься, правила: не допускай того чтобы голод был 0/50, не допускай того чтобы здоровье было 0/50, не допускай того чтобы настроение было 0/50, ешь, спи, гуляй и т.д.";
let zdorove = 50;
let golod = 50;
let nastr = 50;
let score = 0;
let GameStart = false;

function GameS() {
    GameStart = true;
    alert("Игра началась!");
}

function resetGame() {
    zdorove = 50;
    golod = 50;
    nastr = 50;
    score = 0;
    text = "Привет! Ты собака, выбирый чем ты должен заниматься, правила: не допускай того чтобы голод был 0/50, не допускай того чтобы здоровье было 0/50, не допускай того чтобы настроение было 0/50, ешь, спи, гуляй и т.д.";
    obn();
}

function obn() {
    document.getElementById('text').textContent = text;
    document.getElementById('zdorove').textContent = zdorove;
    document.getElementById('golod').textContent = golod;
    document.getElementById('nastr').textContent = nastr;
}

function otdh() {
    nastr = Math.min(50, nastr + 5);
    zdorove = Math.min(50, zdorove + 1);
    obn();
}

function plus() {
    golod = Math.min(50, golod + 1);
    nastr = Math.min(50, nastr + 1);
    zdorove = Math.min(50, zdorove + 1);
    score++;
    obn();
}



function sleep() {
    nastr = Math.min(50, nastr + 1);
    zdorove = Math.min(50, zdorove + 1);
    obn();
}

function gul() {
    nastr = Math.min(50, nastr + 1);
    zdorove = Math.min(50, zdorove + 1);
    obn();
}

setInterval(() => {
    if (GameStart) {
        zdorove = Math.min(50, zdorove - 1);
        golod = Math.min(50, golod - 1);
        nastr = Math.min(50, nastr - 1);
        if (golod <= 0) {
            text = "Game over! Собаке нечего было есть, игра перезапустилась";
            resetGame();
            
        }
        if (zdorove <= 0) {
            text = "Game Over! Собаке стало плохо, игра перезапустилась";
            resetGame();
            
        }
        if (nastr <= 0) {
            text = "Собаке было плохо, Game over! Игра перезапустилась";
            resetGame();
            
        }
        if (score > 20) {
            text = "Game over! Вы умерли от ожирения, собакам нельзя очень много кушать, игра перезапустилась";
            resetGame();
        }
        obn();

    }

}, 1000);



const consoleE = document.getElementById('console');
const inputt = document.getElementById('input');

let ZaCapybar = 0;
let ZaDog = 0;
let ZaCat = 0;
let ZaHamster = 0;

let QS = 'start';

function log(message) {
    consoleE.textContent += `\n> ${message}`;
    consoleE.scrollTop = consoleE.scrollHeight;
}

function handleInput(event) {
    if (event.key === 'Enter') {
        const InputTrim = inputt.value.trim();
        inputt.value = "";
        CommandProcces(InputTrim);
    }
}

function CommandProcces(command) {
    switch(QS) {
        case 'start':
            if (command === '150-170') {
                QS = 'd';
                ZaCapybar++;
                log("\nВы выбрали рост 150-170.");
                log("Второй вопрос: Ваш любимый урок?");
                log("1.математика");
                log('2.физ-ра');
                log('3.изо');
                log('4.русс.яз');
            } else if (command === "200") {
                QS = 'd';
                ZaDog++;
                log("\nВы выбрали рост 200.");
                log("Второй вопрос: Ваш любимый урок?");
                log("1.математика");
                log('2.физ-ра');
                log('3.изо');
                log('4.русс.яз');
            } else if (command === "120-145") {
                QS = 'd';
                ZaCat++;
                log("\nВы выбрали рост 120-145.");
                log("Второй вопрос: Ваш любимый урок?");
                log("1.математика");
                log('2.физ-ра');
                log('3.изо');
                log('4.русс.яз');
            } else if (command === "100-115") {
                QS = 'd';
                ZaHamster++;
                log("\nВы выбрали рост 100-115.");
                log("Второй вопрос: Ваш любимый урок?");
                log("1.математика");
                log('2.физ-ра');
                log('3.изо');
                log('4.русс.яз');
            } else {
                log("\nНекорректный ввод. Пожалуйста, введите один из предложенных вариантов.");
            }
            break;

        case 'd':
            if (command === 'математика') {
                QS = 'b';
                ZaCapybar++;
                log('Третий вопрос: Ваше хобби?');
                log("1.программирование");
                log('2.нету');
                log('3.спорт');
                log('4.рисование');
            } else if (command === 'физ-ра') {
                QS = 'b';
                ZaDog++;
                log('Третий вопрос: Ваше хобби?');
                log("1.программирование");
                log('2.нету');
                log('3.спорт');
                log('4.рисование');
            } else if (command === 'изо') {
                QS = 'b';
                ZaCat++;
                log('Третий вопрос: Ваше хобби?');
                log("1.программирование");
                log('2.нету');
                log('3.спорт');
                log('4.рисование');
            } else if (command === 'русс.яз') {
                QS = 'b';
                ZaHamster++;
                log('Третий вопрос: Ваше хобби?');
                log("1.программирование");
                log('2.нету');
                log('3.спорт');
                log('4.рисование');
            } else {
                log("\nНекорректный ввод. Пожалуйста, введите один из предложенных вариантов.");
            }
            break;

        case 'b':
            if (command === 'программирование') {
                QS = 'ppp';
                ZaCapybar++;
                log("Четвёртый вопрос: Ваш любимый вид музыки?");
                log('1.поп-музыка');
                log('2.рок');
                log('3.рэп');
                log('4.техно');
            } else if (command === 'нету') {
                QS = 'ppp';
                ZaHamster++;
                log("Четвёртый вопрос: Ваш любимый вид музыки?");
                log('1.поп-музыка');
                log('2.рок');
                log('3.рэп');
                log('4.техно');
            } else if (command === 'спорт') {
                QS = 'ppp';
                ZaDog++;
                log("Четвёртый вопрос: Ваш любимый вид музыки?");
                log('1.поп-музыка');
                log('2.рок');
                log('3.рэп');
                log('4.техно');
            } else if (command === 'рисование') {
                QS = 'ppp';
                ZaCat++;
                log("Четвёртый вопрос: Ваш любимый вид музыки?");
                log('1.поп-музыка');
                log('2.рок');
                log('3.рэп');
                log('4.техно');
            } else {
                log("\nНекорректный ввод. Пожалуйста, введите один из предложенных вариантов.");
            }
            break;

        case "ppp":
            if (command === "рэп") {
                QS = 'rr';
                ZaCapybar++;
                log('Пятый вопрос: Ваш любимый цвет');
                log('1.синий, зелёный');
                log('2.серый, чёрный');
                log('3.коричневый, белый');
                log('4.оранжевый, жёлтый');
            } else if (command === "рок") {
                QS = 'rr';
                ZaDog++;
                log('Пятый вопрос: Ваш любимый цвет');
                log('1.синий, зелёный');
                log('2.серый, чёрный');
                log('3.коричневый, белый');
                log('4.оранжевый, жёлтый');
            } else if (command === "поп-музыка") {
                QS = 'rr';
                ZaCat++;
                log('Пятый вопрос: Ваш любимый цвет');
                log('1.синий, зелёный');
                log('2.серый, чёрный');
                log('3.коричневый, белый');
                log('4.оранжевый, жёлтый');
            } else if (command === 'техно') {
                QS = 'rr';
                ZaHamster++;
                log('Пятый вопрос: Ваш любимый цвет');
                log('1.синий, зелёный');
                log('2.серый, чёрный');
                log('3.коричневый, белый');
                log('4.оранжевый, жёлтый');
            } else {
                log("\nНекорректный ввод. Пожалуйста, введите один из предложенных вариантов.");
            }
            break;

        case 'rr':
            if (command === "синий, зелёный") {
                QS = 'r';
                ZaCapybar++;
                log("Шестой вопрос: Ваше любимое животное из этих");
                log('1.капибара');
                log('2.собака');
                log('3.кот');
                log('4.хомяк');
            } else if (command === "коричневый, белый") {
                QS = 'r';
                ZaDog++;
                log("Шестой вопрос: Ваше любимое животное из этих");
                log('1.капибара');
                log('2.собака');
                log('3.кот');
                log('4.хомяк');
            } else if (command === "серый, чёрный") {
                QS = 'r';
                ZaCat++;
                log("Шестой вопрос: Ваше любимое животное из этих");
                log('1.капибара');
                log('2.собака');
                log('3.кот');
                log('4.хомяк');
            } else if (command === 'оранжевый, жёлтый') {
                QS = 'r';
                ZaHamster++;
                log("Шестой вопрос: Ваше любимое животное из этих");
                log('1.капибара');
                log('2.собака');
                log('3.кот');
                log('4.хомяк');
            } else {
                log("\nНекорректный ввод. Пожалуйста, введите один из предложенных вариантов.");
            }
            break;

        case "r":
            if (command === "капибара") {
                ZaCapybar++;
            } else if (command === 'собака') {
                ZaDog++;
            } else if (command === 'кот') {
                ZaCat++;
            } else if (command === 'хомяк') {
                ZaHamster++;
            } else {
                log("\nНекорректный ввод. Пожалуйста, введите один из предложенных вариантов.");
                break;
            }

            QS = 'kk';
            const maxValue = Math.max(ZaCapybar, ZaCat, ZaDog, ZaHamster);
            let resultAnimal = '';
            
            if (maxValue === ZaCapybar) resultAnimal = 'капибара';
            else if (maxValue === ZaDog) resultAnimal = 'собака';
            else if (maxValue === ZaCat) resultAnimal = 'кот';
            else if (maxValue === ZaHamster) resultAnimal = 'хомяк';
            
            log('Поздравляем, вы ' + resultAnimal + "!");
            break;

        case "kk":
            break;
    }
}

inputt.addEventListener('keydown', handleInput);
restartGame();

function restartGame() {
    QS = 'start';
    ZaCapybar = 0;
    ZaDog = 0;
    ZaCat = 0;
    ZaHamster = 0;
    consoleE.textContent = '';
    log("Привет! Это тест какое ты животное, здесь ты будешь отвечать на вопросы и потом мы скажем какое ты животное");
    log("\n1 вопрос (отвечать буквами, например: если твой рост из вариантов 150-170, ты должен переписать ответ): Какого ты роста?");
    log('\n1.150-170');
    log("\n2.200");
    log("\n3.120-145");
    log("\n4.100-115");
}