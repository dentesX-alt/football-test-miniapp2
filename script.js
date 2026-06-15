// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand(); // Расширяем на весь экран
tg.MainButton.hide();

// Вопросы теста (10 штук)
const questions = [
    {
        text: "1/10. 🍽️ Какая еда идеально описывает твой вечер?",
        answers: [
            { text: "🥩 Сочный стейк медиум", value: "messi" },
            { text: "🥦 Брокколи и грудка", value: "ronaldo" },
            { text: "🦞 Лобстеры в ресторане", value: "mbappe" },
            { text: "🍔 Бургер и картошка фри", value: "yamal" },
            { text: "🥧 Английский пирог", value: "kane" }
        ]
    },
    {
        text: "2/10. 🛋️ Твой идеальный отдых — это...",
        answers: [
            { text: "🏡 Дома с любимой семьей", value: "messi" },
            { text: "🏋️‍♂️ В спортзале на режиме", value: "ronaldo" },
            { text: "🛩 На джете в Монако", value: "mbappe" },
            { text: "🎮 Рубиться в PS5 с кентами", value: "yamal" },
            { text: "⛳ Спокойная игра в гольф", value: "kane" }
        ]
    },
    {
        text: "3/10. 👕 Какой стиль одежды ты предпочитаешь?",
        answers: [
            { text: "👕 Простая футболка и шорты", value: "messi" },
            { text: "🕴 Дорогой строгий костюм", value: "ronaldo" },
            { text: "👟 Лимитированный люкс", value: "mbappe" },
            { text: "🩳 Оверсайз худи и кеды", value: "yamal" },
            { text: "🧥 Классический кэжуал", value: "kane" }
        ]
    },
    {
        text: "4/10. 💬 Твоё отношение к хейтерам в соцсетях?",
        answers: [
            { text: "🤫 Вообще не читаю комменты", value: "messi" },
            { text: "💪 Скину фото пресса", value: "ronaldo" },
            { text: "😏 Напишу загадочный пост", value: "mbappe" },
            { text: "🤪 Запишу танец в TikTok", value: "yamal" },
            { text: "🤝 Проигнорю и пойду пахать", value: "kane" }
        ]
    },
    {
        text: "5/10. 😨 Твой главный страх в жизни?",
        answers: [
            { text: "👴 Старость и конец карьеры", value: "messi" },
            { text: "🥈 Стать вторым в чём-то", value: "ronaldo" },
            { text: "📉 Потерять авторитет", value: "mbappe" },
            { text: "📝 Что вызовут к доске", value: "yamal" },
            { text: "❌ Не выиграть ни одного кубка", value: "kane" }
        ]
    },
    {
        text: "6/10. ⚡ Твоя суперсила на футбольном поле?",
        answers: [
            { text: "🪄 Магический дриблинг", value: "messi" },
            { text: "🚀 Мощный прыжок и удар", value: "ronaldo" },
            { text: "🏃‍♂️ Космическая скорость", value: "mbappe" },
            { text: "✨ Дерзость и финты", value: "yamal" },
            { text: "🎯 Голевое чутье в штрафной", value: "kane" }
        ]
    },
    {
        text: "7/10. ⚽ Пенальти на 90-й минуте. Твои действия?",
        answers: [
            { text: "🎯 Спокойно пробью на исполнение", value: "messi" },
            { text: "💥 Заберу мяч и врежу со всей силы", value: "ronaldo" },
            { text: "👑 Я капитан, это мой мяч без слов", value: "mbappe" },
            { text: "🙋‍♂️ Отдам старшим, не буду рисковать", value: "yamal" },
            { text: "😭 Забью, но команда проиграет", value: "kane" }
        ]
    },
    {
        text: "8/10. 🎉 Какое празднование гола ты выберешь?",
        answers: [
            { text: "☝️ Руки вверх и взгляд в небо", value: "messi" },
            { text: "🦁 Прыжок, разворот и SIUUU!", value: "ronaldo" },
            { text: "❌ Гордо скрещу руки на груди", value: "mbappe" },
            { text: "🤙 Покажу пальцами индекс района", value: "yamal" },
            { text: "🥊 Сделаю мощный апперкот", value: "kane" }
        ]
    },
    {
        text: "9/10. 🏆 Что для тебя важнее всего?",
        answers: [
            { text: "🏆 Командный кубок и победа", value: "messi" },
            { text: "📊 Личные рекорды и статистика", value: "ronaldo" },
            { text: "💰 Важно всё, и контракт побольше", value: "mbappe" },
            { text: "😎 Получать кайф от игры", value: "yamal" },
            { text: "🏅 Нужен ХОТЬ КАКОЙ-ТО кубок", value: "kane" }
        ]
    },
    {
        text: "10/10. ⚽ За какой клуб мечты ты хотел бы играть?",
        answers: [
            { text: "🔵 Барселона или Интер Майами", value: "messi" },
            { text: "⚪ Реал Мадрид или Аль-Наср", value: "ronaldo" },
            { text: "👑 ПСЖ или мадридский Реал", value: "mbappe" },
            { text: "❤️ Только родная Барса!", value: "yamal" },
            { text: "🍻 Бавария или Тоттенхэм", value: "kane" }
        ]
    }
];

// Данные о футболистах
const footballers = {
    messi: { name: "Лионель Месси 🐐", desc: "Ты — гений чистой воды! Спокойный, семейный человек вне поля, но инопланетянин в игре.", photo: "https://i.bigenc.ru/resizer/resize?sign=Fs4IUm7GYknX_-ALmK9SHA&filename=vault/b426fda2d2c29248d394081ac1f7917c.webp&width=320" },
    ronaldo: { name: "Криштиану Роналду 🤖", desc: "Ты — чистая машина и ментальный гигант! Безумная дисциплина, режим 24/7 и фокус на победе.", photo: "https://s.yimg.com/ny/api/res/1.2/p98fifJSqs.XGK2fxV4o2Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/us_magazine_896/c7d251e4a299c82ce499761eb55deadc" },
    mbappe: { name: "Килиан Мбаппе ⚡", desc: "Ты — невероятная скорость и амбиции! Обожаешь быть лидером и находиться в центре внимания.", photo: "https://img.championat.com/s/1200x630/news/big/v/q/mbappe-francuzskij-diktator-yuar-eto-fnl-lihachyov-nikitin-i-simbirskij-o-chm_17812796521726050698.jpg" },
    yamal: { name: "Ламин Ямаль 🍭", desc: "Ты — молодой краш! Делаешь историю на чистом расслабоне, любишь игры в PS5 и ценишь свои корни.", photo: "https://img.championat.com/0FrwOl-BVH4CewjlXq295uEgUhoRKB0ASfi4aN-ETNg/p(q:0)/i/q/o/1780815105550883596.jpg" },
    kane: { name: "Гарри Кейн 👑", desc: "Ты — истинный джентльмен и суперпрофи! Забиваешь голы пачками, но главное — никогда не сдаваться.", photo: "https://avatars.mds.yandex.net/i?id=d7b06a8b6c5284fb56126662ccfc7b6b_l-5210229-images-thumbs&n=13" }
};

// Состояние теста
let currentQuestion = 0;
let scores = {
    messi: 0,
    ronaldo: 0,
    mbappe: 0,
    yamal: 0,
    kane: 0
};

// DOM элементы
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const questionCounter = document.getElementById('question-counter');

// Отображение вопроса
function showQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    questionCounter.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
    
    // Обновляем прогресс-бар
    updateProgressBar();
    
    // Очищаем и заполняем ответы
    answersContainer.innerHTML = '';
    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer.text;
        btn.onclick = () => selectAnswer(answer.value);
        answersContainer.appendChild(btn);
    });
}

// Обновление прогресс-бара
function updateProgressBar() {
    let progressBar = document.querySelector('.progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        document.querySelector('.progress').appendChild(progressBar);
    }
    const percent = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;
}

// Обработка выбора ответа
function selectAnswer(footballerId) {
    scores[footballerId]++;
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Показ результата
function showResult() {
    // Находим победителя
    let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const result = footballers[winner];
    
    // Скрываем вопросы, показываем результат
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // Формируем карточку результата
    const resultCard = document.getElementById('result-card');
    resultCard.innerHTML = `
        <img src="${result.photo}" alt="${result.name}" class="result-photo" onerror="this.src='https://via.placeholder.com/120'">
        <div class="result-name">${result.name}</div>
        <div class="result-desc">${result.desc}</div>
    `;
    
    // Показываем кнопку отправки в Telegram
    tg.MainButton.setText("🏆 Отправить результат в бот");
    tg.MainButton.show();
    tg.MainButton.onClick(() => {
        // Отправляем результат боту через sendData
        tg.sendData(winner);
        tg.close();
    });
}

// Перезапуск теста
document.getElementById('restart-btn')?.addEventListener('click', () => {
    currentQuestion = 0;
    scores = { messi: 0, ronaldo: 0, mbappe: 0, yamal: 0, kane: 0 };
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    tg.MainButton.hide();
    showQuestion();
});

// Поделиться
document.getElementById('share-btn')?.addEventListener('click', () => {
    tg.showPopup({
        title: "Поделиться",
        message: "Скопируй ссылку на бота и отправь друзьям!",
        buttons: [{ type: "ok" }]
    });
});

// Запуск теста
showQuestion();
