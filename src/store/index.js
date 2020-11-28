import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: null,
    results: [
      {
        id: 1,
        question:
          "Какое из небес открывается после достижения 10 уровня Совершенного неба?",
        answers: [
          {
            correct: false,
            title: "Тайное небо"
          },
          {
            correct: false,
            title: "Небо миражей"
          },
          {
            correct: true,
            title: "Призрачное небо"
          },
          {
            correct: false,
            title: "Небо ясности"
          }
        ]
      },
      {
        id: 2,
        question:
          "Какая из пяти великих столиц была достроена позже остальных?",
        answers: [
          {
            correct: false,
            title: "Город Спокойствия"
          },
          {
            correct: true,
            title: "Алый город"
          },
          {
            correct: false,
            title: "Ледяной город"
          },
          {
            correct: false,
            title: "Город Драконов"
          }
        ]
      },
      {
        id: 3,
        question:
          "Что не удалось сделать шести владыкам Бездушных Морая в 3917 году?",
        answers: [
          {
            correct: true,
            title: "Обратить время вспять"
          },
          {
            correct: false,
            title: "Поглотить остальных Бездушных"
          },
          {
            correct: false,
            title: "Завладеть Солнечными часами"
          },
          {
            correct: false,
            title: "Впитать сущности городов Идеального мира"
          }
        ]
      },
      {
        id: 4,
        question: "В 4163 году Небеса Прозрения получили новое имя. Какое?",
        answers: [
          {
            correct: true,
            title: "Переправа душ"
          },
          {
            correct: false,
            title: "Земли Небожителей"
          },
          {
            correct: false,
            title: "Морай"
          },
          {
            correct: false,
            title: "Мир Людей"
          }
        ]
      },
      {
        id: 5,
        question: "Какое из этих имен не принадлежит героям народа амфибий?",
        answers: [
          {
            correct: false,
            title: "Дунфан Ле"
          },
          {
            correct: true,
            title: "Дунфан Хун"
          },
          {
            correct: false,
            title: "Дунфан Мэн"
          },
          {
            correct: false,
            title: "Дунфан Хуань"
          }
        ]
      },
      {
        id: 6,
        question:
          "Кто не входит в число четырех королей сидов, изображаемых на магических картах?",
        answers: [
          {
            correct: false,
            title: "И Юньян"
          },
          {
            correct: false,
            title: "Юнь Син"
          },
          {
            correct: false,
            title: "Юй Цзунь"
          },
          {
            correct: true,
            title: "Юсянь"
          }
        ]
      },
      {
        id: 7,
        question:
          "Кто не входит в число четырех маршалов людей, изображаемых на магических картах?",
        answers: [
          {
            correct: false,
            title: "Фан Пое"
          },
          {
            correct: false,
            title: "Лю Цзяньин"
          },
          {
            correct: true,
            title: "Е Гухань"
          },
          {
            correct: false,
            title: "Чэн Тянцы"
          }
        ]
      },
      {
        id: 8,
        question:
          "Как звали мать Зеленой владычицы Миланы, покончившую с собой после совершеннолетия дочери в 1177 году?",
        answers: [
          {
            correct: false,
            title: "Цзи Чжунь"
          },
          {
            correct: false,
            title: "Мадам Вонг"
          },
          {
            correct: false,
            title: "Черная владычица Утгард"
          },
          {
            correct: true,
            title: "Императрица Циньсе"
          }
        ]
      },
      {
        id: 9,
        question:
          "Чьим войскам дали отпор силы 36 князей Западного континента в 1366 году в Виноградной долине?",
        answers: [
          {
            correct: false,
            title: "Зеленой владычицы Миланы"
          },
          {
            correct: false,
            title: "Алого владыки Эншико"
          },
          {
            correct: true,
            title: "Черного владыки Ивана"
          },
          {
            correct: false,
            title: "Белого владыки Александра"
          }
        ]
      },
      {
        id: 10,
        question:
          "Как называется город, воздвигнутый варварами в 1345 году между Черными горами и Белой рекой?",
        answers: [
          {
            correct: true,
            title: "Ледяной город"
          },
          {
            correct: false,
            title: "Город Спокойствия"
          },
          {
            correct: false,
            title: "Нерушимый город"
          },
          {
            correct: false,
            title: "Алый город"
          }
        ]
      },
      {
        id: 11,
        question:
          "Какой город стал центром сражений во времена Второй тысячелетней войны?",
        answers: [
          {
            correct: true,
            title: "Город слез неба"
          },
          {
            correct: false,
            title: "Город Перьев"
          },
          {
            correct: false,
            title: "Город Драконов"
          },
          {
            correct: false,
            title: "Город Мечей"
          }
        ]
      },
      {
        id: 12,
        question:
          "Кто напал на поселение народа Огненного дракона в 1162 году из-за гибели сородичей в Пустыне Скорби?",
        answers: [
          {
            correct: false,
            title: "Люди"
          },
          {
            correct: false,
            title: "Сиды"
          },
          {
            correct: true,
            title: "Зооморфы"
          },
          {
            correct: false,
            title: "Древние"
          }
        ]
      },
      {
        id: 13,
        question:
          "В 1160 году родилась Зеленая владычица Милана. Из какого народа был ее отец?",
        answers: [
          {
            correct: false,
            title: "Сиды"
          },
          {
            correct: false,
            title: "Древние"
          },
          {
            correct: false,
            title: "Зооморфы"
          },
          {
            correct: true,
            title: "Люди"
          }
        ]
      },
      {
        id: 14,
        question:
          "Какой город был восстановлен в 1023 году после самой ужасной войны в истории своей расы?",
        answers: [
          {
            correct: true,
            title: "Город Сияния"
          },
          {
            correct: false,
            title: "Город Драконов"
          },
          {
            correct: false,
            title: "Город Мечей"
          },
          {
            correct: false,
            title: "Лунная гавань"
          }
        ]
      },
      {
        id: 15,
        question:
          "В 973 году родился основатель Сумеречной империи. Как его звали?",
        answers: [
          {
            correct: false,
            title: "Хуан-ди"
          },
          {
            correct: false,
            title: "Цзи Чжунь"
          },
          {
            correct: true,
            title: "Кан Ли"
          },
          {
            correct: false,
            title: "Янь Чишэн"
          }
        ]
      },
      {
        id: 16,
        question:
          "В 889 году Солнечный дух пробудил души из Долины Спящих и наделил их божественной силой. Какое название получил этот народ?",
        answers: [
          {
            correct: false,
            title: "Тени"
          },
          {
            correct: true,
            title: "Древние"
          },
          {
            correct: false,
            title: "Амфибии"
          },
          {
            correct: false,
            title: "Народ Огненного дракона"
          }
        ]
      },
      {
        id: 17,
        question:
          "Как называлось место, в котором обосновался народ Огненного дракона в 875 году?",
        answers: [
          {
            correct: false,
            title: "Город Клык"
          },
          {
            correct: false,
            title: "Деревня огня"
          },
          {
            correct: true,
            title: "Деревня точильного камня"
          },
          {
            correct: false,
            title: "Форпост заката"
          }
        ]
      },
      {
        id: 18,
        question:
          "Какие два народа в 687 году начали из-за происшествия в Лесу раненого зверя войну, растянувшуюся на несколько сотен лет?",
        answers: [
          {
            correct: false,
            title: "Сиды и зооморфы"
          },
          {
            correct: true,
            title: "Сиды и люди"
          },
          {
            correct: false,
            title: "Люди и зооморфы"
          },
          {
            correct: false,
            title: "Люди и амфибии"
          }
        ]
      },
      {
        id: 19,
        question:
          "Какой народ боги изгнали в 417 году на другой край Моря Неизвестности?",
        answers: [
          {
            correct: true,
            title: "Предков амфибий"
          },
          {
            correct: false,
            title: "Зооморфов"
          },
          {
            correct: false,
            title: "Народ Огненного дракона"
          },
          {
            correct: false,
            title: "Древних"
          }
        ]
      },
      {
        id: 20,
        question:
          "В 334 году произошло первое в Центральных землях столкновение между сидами и еще одним народом за камни души. Кто был противником сидов?",
        answers: [
          {
            correct: false,
            title: "Люди"
          },
          {
            correct: true,
            title: "Зооморфы"
          },
          {
            correct: false,
            title: "Амфибии"
          },
          {
            correct: false,
            title: "Народ Огненного дракона"
          }
        ]
      },
      {
        id: 21,
        question: "Каково максимальное значение силы звезды Звездного диска?",
        answers: [
          {
            correct: false,
            title: "10"
          },
          {
            correct: false,
            title: "15"
          },
          {
            correct: true,
            title: "20"
          },
          {
            correct: false,
            title: "30"
          }
        ]
      },
      {
        id: 22,
        question:
          "Какие предметы можно обменять у Ван Цая на книги умений фракций Морая?",
        answers: [
          {
            correct: true,
            title: "Бронзовые монеты"
          },
          {
            correct: false,
            title: "Золотые монеты"
          },
          {
            correct: false,
            title: "Идеальные призы"
          },
          {
            correct: false,
            title: "Отличные призы"
          }
        ]
      },
      {
        id: 23,
        question:
          "В волшебной печи Города Истоков ('Мировая печь - Книги умений') можно создавать учебники для изучения умений высокого уровня. Какой предмет нужен, чтобы получить книгу умений, требующих статуса Бессмертного или Сына ада?",
        answers: [
          {
            correct: false,
            title: "Части страницы устава судьбы"
          },
          {
            correct: false,
            title: "Недописанная небесная глава"
          },
          {
            correct: true,
            title: "Книга времени"
          },
          {
            correct: false,
            title: "Обрывки древней книги"
          }
        ]
      },
      {
        id: 24,
        question:
          "Сколько волшебных печей находится в юго-западной части Города Истоков рядом с аукционистом?",
        answers: [
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          },
          {
            correct: true,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          }
        ]
      },
      {
        id: 25,
        question:
          "Какая из ячеек для магических карт увеличивает магическую защиту?",
        answers: [
          {
            correct: false,
            title: "Разрушение"
          },
          {
            correct: true,
            title: "Здоровье"
          },
          {
            correct: false,
            title: "Тайна"
          },
          {
            correct: false,
            title: "Загадка"
          }
        ]
      },
      {
        id: 26,
        question:
          "Сколько единиц опыта дает каждая коробочка с картой B при поглощении?",
        answers: [
          {
            correct: false,
            title: "1"
          },
          {
            correct: true,
            title: "2"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          }
        ]
      },
      {
        id: 27,
        question:
          "К какой категории магических карт относятся карты комплекта 'Врата черной души'?",
        answers: [
          {
            correct: true,
            title: "S"
          },
          {
            correct: false,
            title: "A"
          },
          {
            correct: false,
            title: "B"
          },
          {
            correct: false,
            title: "C"
          }
        ]
      },
      {
        id: 28,
        question:
          "К какой категории магических карт относятся карты комплекта 'Шесть владык Бессмертных'?",
        answers: [
          {
            correct: false,
            title: "S"
          },
          {
            correct: true,
            title: "A"
          },
          {
            correct: false,
            title: "B"
          },
          {
            correct: false,
            title: "C"
          }
        ]
      },
      {
        id: 29,
        question:
          "Трактатом какого уровня является книга 'Восемнадцать учеников'?",
        answers: [
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          },
          {
            correct: true,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          }
        ]
      },
      {
        id: 30,
        question:
          "Какую прибавку к характеристикам дает трактат 7 уровня 'Три ученика'?",
        answers: [
          {
            correct: false,
            title: "Интеллект +45"
          },
          {
            correct: true,
            title: "Сила +45"
          },
          {
            correct: false,
            title: "Ловкость +45"
          },
          {
            correct: false,
            title: "Выносливость +45"
          }
        ]
      },
      {
        id: 31,
        question: "Какой максимальный уровень может быть у книг и трактатов?",
        answers: [
          {
            correct: false,
            title: "7"
          },
          {
            correct: false,
            title: "8"
          },
          {
            correct: true,
            title: "9"
          },
          {
            correct: false,
            title: "10"
          }
        ]
      },
      {
        id: 32,
        question:
          "На сколько при превращении в панду увеличивается скорость оборотня?",
        answers: [
          {
            correct: false,
            title: "30%"
          },
          {
            correct: false,
            title: "50%"
          },
          {
            correct: false,
            title: "80%"
          },
          {
            correct: true,
            title: "90%"
          }
        ]
      },
      {
        id: 33,
        question:
          "Каким эффектом обладает умение 'Сила бессмертия', доступное персонажам, следующим по райскому пути совершенствования?",
        answers: [
          {
            correct: false,
            title: "Приносит 50 единиц магической энергии"
          },
          {
            correct: false,
            title: "Приносит 100 единиц магической энергии"
          },
          {
            correct: true,
            title: "Приносит 50 единиц ярости"
          },
          {
            correct: false,
            title: "Приносит 100 единиц ярости"
          }
        ]
      },
      {
        id: 34,
        question: "Какой класс обладает самой высокой дальностью атаки?",
        answers: [
          {
            correct: false,
            title: "Убийца"
          },
          {
            correct: false,
            title: "Жнец"
          },
          {
            correct: true,
            title: "Лучник"
          },
          {
            correct: false,
            title: "Жрец"
          }
        ]
      },
      {
        id: 35,
        question:
          "Какие предметы требуются для переноса уровня заточки и повышения текущего уровня заточки без риска потерять имеющийся?",
        answers: [
          {
            correct: false,
            title: "Камни бессмертных"
          },
          {
            correct: true,
            title: "Камни мироздания"
          },
          {
            correct: false,
            title: "Шары дракона"
          },
          {
            correct: false,
            title: "Небесные камни"
          }
        ]
      },
      {
        id: 36,
        question:
          "Какие предметы можно обменять у Генерала Ся Фэна на Меч летнего ветра?",
        answers: [
          {
            correct: false,
            title: "Идеальные призы"
          },
          {
            correct: false,
            title: "Отличные призы"
          },
          {
            correct: true,
            title: "Таинственные знаки"
          },
          {
            correct: false,
            title: "Камни мироздания"
          }
        ]
      },
      {
        id: 37,
        question:
          "Сколько существует Древняя печать феникса, которая позволяет пройти в Ущелье Феникса?",
        answers: [
          {
            correct: false,
            title: "5 минут"
          },
          {
            correct: false,
            title: "2 часа"
          },
          {
            correct: true,
            title: "24 часа"
          },
          {
            correct: false,
            title: "15 минут"
          }
        ]
      },
      {
        id: 38,
        question:
          "Что находится ближе всего ко входу в Долину расхитителей небес?",
        answers: [
          {
            correct: false,
            title: "Лес Чудесных Птиц"
          },
          {
            correct: false,
            title: "Город Клык"
          },
          {
            correct: true,
            title: "Тренога Юй-Вана"
          },
          {
            correct: false,
            title: "Деревня снов"
          }
        ]
      },
      {
        id: 39,
        question: "На каком острове амфибий находится Кровавое озеро?",
        answers: [
          {
            correct: true,
            title: "На Острове рваных облаков"
          },
          {
            correct: false,
            title: "На Острове заключенных"
          },
          {
            correct: false,
            title: "На Острове разбитой мечты"
          },
          {
            correct: false,
            title: "На Острове утренних слез"
          }
        ]
      },
      {
        id: 40,
        question:
          "Какой из этих городов находится ближе всего к Берегу великого предела?",
        answers: [
          {
            correct: false,
            title: "Роковой город"
          },
          {
            correct: false,
            title: "Лунная гавань"
          },
          {
            correct: false,
            title: "Город Драконов"
          },
          {
            correct: true,
            title: "Город Мечей"
          }
        ]
      },
      {
        id: 41,
        question:
          "Какой из этих Мастеров телепортации не находится в Городе Драконов?",
        answers: [
          {
            correct: false,
            title: "Ли Хуаюй"
          },
          {
            correct: false,
            title: "Лэй Цзя"
          },
          {
            correct: false,
            title: "Цюин Юнь"
          },
          {
            correct: true,
            title: "Ю Мин"
          }
        ]
      },
      {
        id: 42,
        question:
          "К кому нужно обратиться, чтобы повысить уровень ожерелья с эмблемой Куба?",
        answers: [
          {
            correct: false,
            title: "К Золотой госпоже"
          },
          {
            correct: true,
            title: "К Инспектору Куба"
          },
          {
            correct: false,
            title: "К Посланцу семи добродетелей"
          },
          {
            correct: false,
            title: "К Распределителю званий"
          }
        ]
      },
      {
        id: 43,
        question:
          "На какой предмет нельзя обменять Идеальные призы у Торговки Юн?",
        answers: [
          {
            correct: false,
            title: "Нашивка офицера-призрака"
          },
          {
            correct: false,
            title: "Руна переноса"
          },
          {
            correct: false,
            title: "Свадебное вино"
          },
          {
            correct: true,
            title: "Свиток воскрешения"
          }
        ]
      },
      {
        id: 44,
        question:
          "Какие предметы можно обменять у Торговки Юн на Чеки на 10 000 000 монет?",
        answers: [
          {
            correct: false,
            title: "Идеальные призы"
          },
          {
            correct: true,
            title: "Отличные призы"
          },
          {
            correct: false,
            title: "Бронзовые монеты"
          },
          {
            correct: false,
            title: "Золотые монеты"
          }
        ]
      },
      {
        id: 45,
        question: "Какой предмет позволяет воскреснуть прямо на месте гибели?",
        answers: [
          {
            correct: false,
            title: "Карта жизни"
          },
          {
            correct: true,
            title: "Свиток воскрешения"
          },
          {
            correct: false,
            title: "Платиновый амулет"
          },
          {
            correct: false,
            title: "Настойка на живой воде"
          }
        ]
      },
      {
        id: 46,
        question:
          "Какое зелье временно увеличивает скорость передвижения персонажа?",
        answers: [
          {
            correct: false,
            title: "Защитный порошок"
          },
          {
            correct: false,
            title: "Дух-защитник"
          },
          {
            correct: true,
            title: "Воровская пилюля"
          },
          {
            correct: false,
            title: "Пластина прилива"
          }
        ]
      },
      {
        id: 47,
        question: "К кому нужно обратиться, чтобы обучить джинна умениям?",
        answers: [
          {
            correct: false,
            title: "К Королеве светлых джиннов"
          },
          {
            correct: true,
            title: "К Исследователю пяти стихий"
          },
          {
            correct: false,
            title: "К Джинну-проводнику"
          },
          {
            correct: false,
            title: "К Королеве темных джиннов"
          }
        ]
      },
      {
        id: 48,
        question:
          "Какое пассивное умение действует только в Мире Людей и режиме сюжета Мира Людей?",
        answers: [
          {
            correct: false,
            title: "Надежная защита"
          },
          {
            correct: false,
            title: "Воспитание мудрецов"
          },
          {
            correct: false,
            title: "Проклятие русалки"
          },
          {
            correct: true,
            title: "Дыхание Лирии"
          }
        ]
      },
      {
        id: 49,
        question:
          "Что требуется для создания шлема, входящего в комплект дважды улучшенной экипировки 8 воинского звания?",
        answers: [
          {
            correct: true,
            title: "Яшмовый осколок"
          },
          {
            correct: false,
            title: "Свиток дракона"
          },
          {
            correct: false,
            title: "Печать милосердия"
          },
          {
            correct: false,
            title: "Эмблема урагана"
          }
        ]
      },
      {
        id: 50,
        question:
          "В каком подземелье можно создать перевязь 'Ремень боевой песни' и повысить ее уровень?",
        answers: [
          {
            correct: false,
            title: "Пещеры Вечности низкого уровня"
          },
          {
            correct: false,
            title: "Пещеры Вечности высокого уровня"
          },
          {
            correct: true,
            title: "Город Боевых Песен"
          },
          {
            correct: false,
            title: "Город Инея"
          }
        ]
      },
      {
        id: 51,
        question:
          "Какой предмет можно обменять у Торговки Юн на перевязь 'Ремень боевой песни'?",
        answers: [
          {
            correct: false,
            title: "Знак Боевой песни"
          },
          {
            correct: false,
            title: "Медаль Боевой песни"
          },
          {
            correct: true,
            title: "Знак командира"
          },
          {
            correct: false,
            title: "Дух боевой песни"
          }
        ]
      },
      {
        id: 52,
        question:
          "Какой предмет можно обменять у Торговки Юн на ожерелье 'Эмблема Куба - Пустота'?",
        answers: [
          {
            correct: false,
            title: "Письмо директора Куба"
          },
          {
            correct: true,
            title: "Печать Куба"
          },
          {
            correct: false,
            title: "Знак командира"
          },
          {
            correct: false,
            title: "Дух боевой песни"
          }
        ]
      },
      {
        id: 53,
        question:
          "С каким типом оружия в руках воины не могут применять свои умения?",
        answers: [
          {
            correct: false,
            title: "Парные секиры"
          },
          {
            correct: false,
            title: "Кастеты"
          },
          {
            correct: false,
            title: "Копье"
          },
          {
            correct: true,
            title: "Лук"
          }
        ]
      },
      {
        id: 54,
        question:
          "Персонажи какого класса с помощью специального умения могут подсмотреть содержимое инвентаря других игроков?",
        answers: [
          {
            correct: true,
            title: "Убийцы"
          },
          {
            correct: false,
            title: "Мистики"
          },
          {
            correct: false,
            title: "Лучники"
          },
          {
            correct: false,
            title: "Призраки"
          }
        ]
      },
      {
        id: 55,
        question: "Каким эффектом обладает зелье 'Защитный порошок'?",
        answers: [
          {
            correct: false,
            title: "Дает иммунитет к любому урону на 6 секунд"
          },
          {
            correct: true,
            title:
              "Дает иммунитет к любому урону на 12 секунд, но полностью обездвиживает"
          },
          {
            correct: false,
            title: "Накладывает эффект 'Железный покров' 10 уровня на 1 час"
          },
          {
            correct: false,
            title: "Накладывает эффект 'Аура стали' 10 уровня на 1 час"
          }
        ]
      },
      {
        id: 56,
        question:
          "С помощью какого предмета можно активировать все точки телепорта?",
        answers: [
          {
            correct: false,
            title: "Руна переноса"
          },
          {
            correct: false,
            title: "Идеальная руна переноса"
          },
          {
            correct: true,
            title: "Атлас мира"
          },
          {
            correct: false,
            title: "Колокол телепортации"
          }
        ]
      },
      {
        id: 57,
        question:
          "Какой предмет необходим, чтобы выставить товар на продажу через Комиссионера Идеального мира?",
        answers: [
          {
            correct: false,
            title: "Талон на торговую лавку"
          },
          {
            correct: true,
            title: "Торговый договор"
          },
          {
            correct: false,
            title: "Книги ограничения святого духа"
          },
          {
            correct: false,
            title: "Чек на 10 000 000 монет"
          }
        ]
      },
      {
        id: 58,
        question:
          "Какого уровня должен достигнуть персонаж, чтобы открыть путь в Заоблачный мир?",
        answers: [
          {
            correct: false,
            title: "89"
          },
          {
            correct: true,
            title: "90"
          },
          {
            correct: false,
            title: "95"
          },
          {
            correct: false,
            title: "100"
          }
        ]
      },
      {
        id: 59,
        question: "Сколько всего звезд расположено на Звездном диске?",
        answers: [
          {
            correct: false,
            title: "7"
          },
          {
            correct: false,
            title: "8"
          },
          {
            correct: false,
            title: "9"
          },
          {
            correct: true,
            title: "10"
          }
        ]
      },
      {
        id: 60,
        question:
          "Какого уровня должен достигнуть персонаж, чтобы попасть в Башню Будды?",
        answers: [
          {
            correct: true,
            title: "89"
          },
          {
            correct: false,
            title: "90"
          },
          {
            correct: false,
            title: "95"
          },
          {
            correct: false,
            title: "100"
          }
        ]
      },
      {
        id: 61,
        question: "Как называется лук Бога войны?",
        answers: [
          {
            correct: true,
            title: "Девятый день"
          },
          {
            correct: false,
            title: "Кровавый закат"
          },
          {
            correct: false,
            title: "Каменный цветок"
          },
          {
            correct: false,
            title: "Ветрорубы Фью"
          }
        ]
      },
      {
        id: 62,
        question:
          "Какого уровня необходимо достигнуть персонажу, чтобы изучить уникальное умение из Заоблачного мира?",
        answers: [
          {
            correct: false,
            title: "89"
          },
          {
            correct: false,
            title: "99"
          },
          {
            correct: true,
            title: "100"
          },
          {
            correct: false,
            title: "105"
          }
        ]
      },
      {
        id: 63,
        question:
          "Если во время приключений что-то будет непонятно, игрок всегда может обратиться за подсказкой к малышке Сяомэй. Какой горячей клавишей ее можно вызвать?",
        answers: [
          {
            correct: false,
            title: "F"
          },
          {
            correct: false,
            title: "C"
          },
          {
            correct: false,
            title: "T"
          },
          {
            correct: true,
            title: "I"
          }
        ]
      },
      {
        id: 64,
        question: "К кому нужно обратиться, чтобы сменить сторону персонажа?",
        answers: [
          {
            correct: false,
            title: "К Торговке Юн"
          },
          {
            correct: true,
            title: "К Наставнице по трансформации"
          },
          {
            correct: false,
            title: "К Ван Цаю"
          },
          {
            correct: false,
            title: "К Распределителю званий"
          }
        ]
      },
      {
        id: 65,
        question: "Какой предмет необходим для смены имени персонажа?",
        answers: [
          {
            correct: false,
            title: "Сиамские плоды"
          },
          {
            correct: true,
            title: "Камень нового имени"
          },
          {
            correct: false,
            title: "Камень великих перемен"
          },
          {
            correct: false,
            title: "Форма божественных рун"
          }
        ]
      },
      {
        id: 66,
        question: "Кто встречает игроков на Острове Любви в Море Иллюзий?",
        answers: [
          {
            correct: true,
            title: "Привратник Боза"
          },
          {
            correct: false,
            title: "Лотосовая фея"
          },
          {
            correct: false,
            title: "Винодел Соу"
          },
          {
            correct: false,
            title: "Творец знаков"
          }
        ]
      },
      {
        id: 67,
        question:
          "Сколько магической энергии способен восполнить Платиновый идол?",
        answers: [
          {
            correct: false,
            title: "180 000"
          },
          {
            correct: false,
            title: "600 000"
          },
          {
            correct: false,
            title: "1 200 000"
          },
          {
            correct: true,
            title: "1 800 000"
          }
        ]
      },
      {
        id: 68,
        question:
          "Каким эффектом обладает Небесный камень при заточке экипировки?",
        answers: [
          {
            correct: true,
            title: "Значительно повышает шансы на успех"
          },
          {
            correct: false,
            title:
              "Повышает шансы на успех, а в случае неудачи уровень заточки снизится всего на 1"
          },
          {
            correct: false,
            title: "Гарантирует успех"
          },
          {
            correct: false,
            title: "Он бесполезен"
          }
        ]
      },
      {
        id: 69,
        question:
          "Какой материал не используется для создания снаряжения у Посланницы Белого владыки Юсюй?",
        answers: [
          {
            correct: false,
            title: "Узор золотой цикады"
          },
          {
            correct: true,
            title: "Радужный кристалл"
          },
          {
            correct: false,
            title: "Сокровенная жемчужина"
          },
          {
            correct: false,
            title: "Яшмовый осколок"
          }
        ]
      },
      {
        id: 70,
        question:
          "Сколько склянок Крови морского чудовища нужно для создания книги умения 'Бескрайний океан'?",
        answers: [
          {
            correct: false,
            title: "6"
          },
          {
            correct: false,
            title: "15"
          },
          {
            correct: true,
            title: "20"
          },
          {
            correct: false,
            title: "40"
          }
        ]
      },
      {
        id: 71,
        question:
          "Какой предмет нужен, чтобы войти в Пещеры Вечности низкого уровня?",
        answers: [
          {
            correct: false,
            title: "Мерцающая галька"
          },
          {
            correct: true,
            title: "Крепкое вино"
          },
          {
            correct: false,
            title: "Перья рассвета"
          },
          {
            correct: false,
            title: "Древняя печать феникса"
          }
        ]
      },
      {
        id: 72,
        question: "Где находится вход в Пещеры Вечности?",
        answers: [
          {
            correct: false,
            title: "В Мире Людей"
          },
          {
            correct: false,
            title: "В Землях Небожителей"
          },
          {
            correct: false,
            title: "В Землях Демонов"
          },
          {
            correct: true,
            title: "В Морае"
          }
        ]
      },
      {
        id: 73,
        question:
          "Задания какого подземелья нужно выполнить, чтобы улучшить накидку 'Несравненный плащ' до накидки 'Плащ вознесения'?",
        answers: [
          {
            correct: false,
            title: "Пещер Вечности низкого уровня"
          },
          {
            correct: true,
            title: "Пещер Вечности высокого уровня"
          },
          {
            correct: false,
            title: "Миража песчаных бурь"
          },
          {
            correct: false,
            title: "Серебряной цитадели"
          }
        ]
      },
      {
        id: 74,
        question: "Какие предметы позволяют увеличить силу Звездного диска?",
        answers: [
          {
            correct: false,
            title: "Пилюли звездного духа"
          },
          {
            correct: false,
            title: "Метеориты"
          },
          {
            correct: false,
            title: "Порции Звездной пыли"
          },
          {
            correct: true,
            title: "Осколки звезды"
          }
        ]
      },
      {
        id: 75,
        question:
          "Какие предметы расходуются при отправке сообщений в мировой канал чата?",
        answers: [
          {
            correct: false,
            title: "Смайлы-тигрята"
          },
          {
            correct: true,
            title: "Рупоры"
          },
          {
            correct: false,
            title: "Руны переноса"
          },
          {
            correct: false,
            title: "Идеальные горны"
          }
        ]
      },
      {
        id: 76,
        question:
          "В какой части игрового интерфейса отображается смена дня и ночи?",
        answers: [
          {
            correct: true,
            title: "В правом верхнем углу"
          },
          {
            correct: false,
            title: "В левом нижнем углу"
          },
          {
            correct: false,
            title: "В левом верхнем углу"
          },
          {
            correct: false,
            title: "В правом нижнем углу"
          }
        ]
      },
      {
        id: 77,
        question: "У какого из этих НИПов нельзя создать Пилюли премудрости?",
        answers: [
          {
            correct: false,
            title: "Рефери Клодис"
          },
          {
            correct: true,
            title: "Ветеран Робертс"
          },
          {
            correct: false,
            title: "Ван Цай"
          },
          {
            correct: false,
            title: "Сяо Цзяоя"
          }
        ]
      },
      {
        id: 78,
        question: "Кто противостоял Александру в битве у Виноградной долины?",
        answers: [
          {
            correct: false,
            title: "Бездушные"
          },
          {
            correct: false,
            title: "Метаморфы"
          },
          {
            correct: true,
            title: "Варвары"
          },
          {
            correct: false,
            title: "Темные джинны"
          }
        ]
      },
      {
        id: 79,
        question:
          "Какой наградной знак нельзя получить на Западном континенте?",
        answers: [
          {
            correct: false,
            title: "Медаль порученца"
          },
          {
            correct: false,
            title: "Медаль рыцаря"
          },
          {
            correct: false,
            title: "Медаль монарха"
          },
          {
            correct: true,
            title: "Медаль короля"
          }
        ]
      },
      {
        id: 80,
        question:
          "Какое максимальное количество участников может быть в отряде для боев 3v3 на Арене Авроры?",
        answers: [
          {
            correct: false,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: true,
            title: "5"
          },
          {
            correct: false,
            title: "6"
          }
        ]
      },
      {
        id: 81,
        question:
          "В какой части Западного континента обитает Бешеный зверь грома?",
        answers: [
          {
            correct: true,
            title: "Железные горы"
          },
          {
            correct: false,
            title: "Ревущий каньон"
          },
          {
            correct: false,
            title: "Кладбище Славы"
          },
          {
            correct: false,
            title: "Горловина ада"
          }
        ]
      },
      {
        id: 82,
        question:
          "На какой предмет нельзя обменять медали у Рыцаря Гектора из Нерушимого города?",
        answers: [
          {
            correct: false,
            title: "Живую кровь"
          },
          {
            correct: false,
            title: "Кровь морского чудовища"
          },
          {
            correct: false,
            title: "Набор рун (1 ур.)"
          },
          {
            correct: true,
            title: "Черную яшму 10 ур."
          }
        ]
      },
      {
        id: 83,
        question:
          "Какой геральдический знак образуют на карте укрепления Нерушимого города?",
        answers: [
          {
            correct: false,
            title: "Нож"
          },
          {
            correct: true,
            title: "Меч"
          },
          {
            correct: false,
            title: "Лук"
          },
          {
            correct: false,
            title: "Конь"
          }
        ]
      },
      {
        id: 84,
        question:
          "В скольких боях на Арене Авроры нужно принять участие, чтобы претендовать на награду по итогам недели?",
        answers: [
          {
            correct: false,
            title: "5"
          },
          {
            correct: false,
            title: "10"
          },
          {
            correct: true,
            title: "15"
          },
          {
            correct: false,
            title: "20"
          }
        ]
      },
      {
        id: 85,
        question:
          "Сколько очков Арены Авроры должен набрать персонаж, чтобы он мог получить титул 'Бог Войны'?",
        answers: [
          {
            correct: false,
            title: "1600"
          },
          {
            correct: false,
            title: "1800"
          },
          {
            correct: false,
            title: "2000"
          },
          {
            correct: true,
            title: "2200"
          }
        ]
      },
      {
        id: 86,
        question:
          "Начиная с какого уровня персонаж может участвовать в боях на Арене Авроры?",
        answers: [
          {
            correct: false,
            title: "89"
          },
          {
            correct: false,
            title: "90"
          },
          {
            correct: true,
            title: "100"
          },
          {
            correct: false,
            title: "103"
          }
        ]
      },
      {
        id: 87,
        question:
          "На какую награду нельзя обменять медали Авроры, если рейтинг персонажа находится ниже 2000 очков?",
        answers: [
          {
            correct: true,
            title: "Титул: Мастер Арены"
          },
          {
            correct: false,
            title: "Звездный рубин"
          },
          {
            correct: false,
            title: "Лунная пряжа"
          },
          {
            correct: false,
            title: "Атака духов"
          }
        ]
      },
      {
        id: 88,
        question:
          "Сколько осколков Звездного кварца требуется, чтобы создать из Полярного кольца одно из начальных колец Арены Авроры?",
        answers: [
          {
            correct: false,
            title: "10"
          },
          {
            correct: true,
            title: "25"
          },
          {
            correct: false,
            title: "35"
          },
          {
            correct: false,
            title: "50"
          }
        ]
      },
      {
        id: 89,
        question:
          "Как называется зал подземелья 'Музей Отшельника', в котором можно встретить Царя львов в доспехах?",
        answers: [
          {
            correct: false,
            title: "Алтарь Бездушных"
          },
          {
            correct: false,
            title: "Скорбь Сумерек"
          },
          {
            correct: false,
            title: "Холм Сансары"
          },
          {
            correct: true,
            title: "Гибельный тупик"
          }
        ]
      },
      {
        id: 90,
        question:
          "Какие предметы нельзя получить в подземелье 'Дворец Рассвета'?",
        answers: [
          {
            correct: false,
            title: "Дымчатые камни песни"
          },
          {
            correct: false,
            title: "Семена заоблачных растений"
          },
          {
            correct: false,
            title: "Рыцарские руны"
          },
          {
            correct: true,
            title: "Темные кости Линсю"
          }
        ]
      },
      {
        id: 91,
        question:
          "Сколько уровней сложности существует у подземелья 'Дворец Рассвета'?",
        answers: [
          {
            correct: false,
            title: "2"
          },
          {
            correct: true,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          }
        ]
      },
      {
        id: 92,
        question:
          "Смерть какого персонажа в сюжетной линии позволяет героям получать ежедневный пропуск в подземелье 'Дворец Рассвета'?",
        answers: [
          {
            correct: false,
            title: "Ректора Дармага"
          },
          {
            correct: true,
            title: "Великой жрицы Соледад"
          },
          {
            correct: false,
            title: "Динии из Ордена роз"
          },
          {
            correct: false,
            title: "Великого мага Севастианы"
          }
        ]
      },
      {
        id: 93,
        question:
          "В каком городе Западных земель можно встретить Ветерана Робертса?",
        answers: [
          {
            correct: false,
            title: "В Неоле"
          },
          {
            correct: true,
            title: "В Мейгуре"
          },
          {
            correct: false,
            title: "В Рунграде"
          },
          {
            correct: false,
            title: "В Нуэрии"
          }
        ]
      },
      {
        id: 94,
        question:
          "Сколько медалей Авроры нужно для создания привязанной Облачной пряжи?",
        answers: [
          {
            correct: false,
            title: "1"
          },
          {
            correct: true,
            title: "2"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          }
        ]
      },
      {
        id: 95,
        question:
          "На сколько видов делятся Рыцарские руны в зависимости от своего цвета?",
        answers: [
          {
            correct: false,
            title: "4"
          },
          {
            correct: true,
            title: "5"
          },
          {
            correct: false,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          }
        ]
      },
      {
        id: 96,
        question: "Сколько всего ячеек в Книге рун?",
        answers: [
          {
            correct: false,
            title: "5"
          },
          {
            correct: true,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          },
          {
            correct: false,
            title: "8"
          }
        ]
      },
      {
        id: 97,
        question: "В каком подземелье могут выпасть Рыцарские руны?",
        answers: [
          {
            correct: false,
            title: "В Мираже песчаных бурь"
          },
          {
            correct: false,
            title: "В Море Иллюзий"
          },
          {
            correct: true,
            title: "Во Дворце Рассвета"
          },
          {
            correct: false,
            title: "В Серебряной цитадели"
          }
        ]
      },
      {
        id: 98,
        question: "Кого нельзя встретить в мэрии Нерушимого города?",
        answers: [
          {
            correct: true,
            title: "Гудхилла"
          },
          {
            correct: false,
            title: "Динию"
          },
          {
            correct: false,
            title: "Кандиста"
          },
          {
            correct: false,
            title: "Хайдера"
          }
        ]
      },
      {
        id: 99,
        question:
          "Кто из магов отвечал за изготовление чудовищного 'зелья долголетия' в подземельях Дворца Рассвета?",
        answers: [
          {
            correct: false,
            title: "Великий маг Севастиана"
          },
          {
            correct: true,
            title: "Великий маг Фредерика"
          },
          {
            correct: false,
            title: "Ректор Дармаг"
          },
          {
            correct: false,
            title: "Великая жрица Соледад"
          }
        ]
      },
      {
        id: 100,
        question:
          "В каком из этих четырех городов Западных земель кроваво-красное небо и кружат вороны?",
        answers: [
          {
            correct: true,
            title: "В Моридори"
          },
          {
            correct: false,
            title: "В Мейгуре"
          },
          {
            correct: false,
            title: "В Нуэрии"
          },
          {
            correct: false,
            title: "В Рунграде"
          }
        ]
      },
      {
        id: 101,
        question:
          "На каком виде транспорта герои впервые прибывают на Западный континент?",
        answers: [
          {
            correct: true,
            title: "На корабле"
          },
          {
            correct: false,
            title: "На воздушном шаре"
          },
          {
            correct: false,
            title: "На поезде"
          },
          {
            correct: false,
            title: "На карете"
          }
        ]
      },
      {
        id: 102,
        question:
          "Ради чего отдала свою жизнь Диния, заместитель главы Ордена Роз?",
        answers: [
          {
            correct: false,
            title: "Ради спасения Гудхилла"
          },
          {
            correct: false,
            title: "Во славу Александра"
          },
          {
            correct: true,
            title: "Из-за своей любви к Кандисту"
          },
          {
            correct: false,
            title: "Ради веры в собственные убеждения"
          }
        ]
      },
      {
        id: 103,
        question:
          "Кто из метаморфов повредил защитный барьер, оберегающий Центральные земли?",
        answers: [
          {
            correct: false,
            title: "Великая жрица Соледад"
          },
          {
            correct: false,
            title: "Великий маг Фредерика"
          },
          {
            correct: true,
            title: "Ректор Дармаг"
          },
          {
            correct: false,
            title: "Великий маг Севастиана"
          }
        ]
      },
      {
        id: 104,
        question: "Кто руководит академией магии 'Френсен'?",
        answers: [
          {
            correct: false,
            title: "Великая жрица Соледад"
          },
          {
            correct: true,
            title: "Великий Дармаг"
          },
          {
            correct: false,
            title: "Великий маг Фредерика"
          },
          {
            correct: false,
            title: "Великий маг Севастиана"
          }
        ]
      },
      {
        id: 105,
        question: "Кто основал Лигу Бессмертных?",
        answers: [
          {
            correct: false,
            title: "Великий астролог Летиция"
          },
          {
            correct: true,
            title: "Великая жрица Соледад"
          },
          {
            correct: false,
            title: "Великий маг Фредерика"
          },
          {
            correct: false,
            title: "Великий маг Севастиана"
          }
        ]
      },
      {
        id: 106,
        question:
          "Какой материал необходим для создания начальных плащей Арены Авроры у Рефери Клодиса?",
        answers: [
          {
            correct: false,
            title: "Солнечная пряжа"
          },
          {
            correct: false,
            title: "Небесная пряжа"
          },
          {
            correct: true,
            title: "Облачная пряжа"
          },
          {
            correct: false,
            title: "Лунная пряжа"
          }
        ]
      },
      {
        id: 107,
        question:
          "Сколько медалей Авроры нужно для обмена на Полярное кольцо у Рефери Клодиса?",
        answers: [
          {
            correct: false,
            title: "50"
          },
          {
            correct: true,
            title: "100"
          },
          {
            correct: false,
            title: "120"
          },
          {
            correct: false,
            title: "150"
          }
        ]
      },
      {
        id: 108,
        question:
          "В каком городе Западных земель можно встретить монстра 'Подозрительный вампир'?",
        answers: [
          {
            correct: true,
            title: "В Мейгуре"
          },
          {
            correct: false,
            title: "В Неоле"
          },
          {
            correct: false,
            title: "В Рунграде"
          },
          {
            correct: false,
            title: "В Нуэрии"
          }
        ]
      },
      {
        id: 109,
        question:
          "Какой классический сюжет не входит в серию заданий для супружеских пар?",
        answers: [
          {
            correct: false,
            title: "'Влюбленные-бабочки'"
          },
          {
            correct: false,
            title: "'Феникс ищет подругу'"
          },
          {
            correct: true,
            title: "'Сломанное зеркало'"
          },
          {
            correct: false,
            title: "'История западных покоев'"
          }
        ]
      },
      {
        id: 110,
        question:
          "Как называется локация подземелья 'Музей Отшельника', в которой героев ожидает Главнокомандующий армии?",
        answers: [
          {
            correct: true,
            title: "Смута Шэнь У"
          },
          {
            correct: false,
            title: "Ратная Печаль"
          },
          {
            correct: false,
            title: "Холм Сансары"
          },
          {
            correct: false,
            title: "Алтарь Бездушных"
          }
        ]
      },
      {
        id: 111,
        question:
          "Какой монстр не обитает в Гибельном тупике подземелья 'Музей Отшельника' ?",
        answers: [
          {
            correct: false,
            title: "Туманный дух"
          },
          {
            correct: true,
            title: "Лошадиный лик"
          },
          {
            correct: false,
            title: "Повелитель песчаных бурь"
          },
          {
            correct: false,
            title: "Немигающий глаз"
          }
        ]
      },
      {
        id: 112,
        question:
          "Что не является обязательным условием для входа в подземелье 'Дворец Рассвета'?",
        answers: [
          {
            correct: false,
            title: "Уровень не ниже 103"
          },
          {
            correct: false,
            title: "Достижение статуса 'Асура'"
          },
          {
            correct: true,
            title: "Уровень заточки оружия не ниже +10"
          },
          {
            correct: false,
            title: "1 уровень Неба ясности и выше"
          }
        ]
      },
      {
        id: 113,
        question:
          "Какую из наград можно получить в процессе прохождения легендарного режима Дворца Рассвета?",
        answers: [
          {
            correct: false,
            title: "Сокровенную жемчужину"
          },
          {
            correct: true,
            title: "Небесную яшму"
          },
          {
            correct: false,
            title: "Око джунглей"
          },
          {
            correct: false,
            title: "Свиток дракона"
          }
        ]
      },
      {
        id: 114,
        question:
          "Через сколько квалификационных боев нужно пройти, чтобы начать получать очки рейтинга на Арене Авроры?",
        answers: [
          {
            correct: false,
            title: "0"
          },
          {
            correct: false,
            title: "5"
          },
          {
            correct: true,
            title: "10"
          },
          {
            correct: false,
            title: "20"
          }
        ]
      },
      {
        id: 115,
        question:
          "В какое время бойцы не могут участвовать в подборе боев на Арене Авроры?",
        answers: [
          {
            correct: false,
            title: "Понедельник, 20:00"
          },
          {
            correct: false,
            title: "Вторник, 16:00"
          },
          {
            correct: true,
            title: "Среда, 04:30"
          },
          {
            correct: false,
            title: "Пятница, 00:00"
          }
        ]
      },
      {
        id: 116,
        question:
          "В Книге рун 6 ячеек: милосердие, слава, смелость, скромность, верность и ... ?",
        answers: [
          {
            correct: false,
            title: "Великодушие"
          },
          {
            correct: true,
            title: "Искренность"
          },
          {
            correct: false,
            title: "Мудрость"
          },
          {
            correct: false,
            title: "Честь"
          }
        ]
      },
      {
        id: 117,
        question:
          "Сколько потребуется рун 1 уровня, чтобы синтезировать одну руну 2 уровня со 100% вероятностью?",
        answers: [
          {
            correct: true,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          },
          {
            correct: false,
            title: "6"
          }
        ]
      },
      {
        id: 118,
        question: "Каков максимальный уровень Рыцарских рун?",
        answers: [
          {
            correct: false,
            title: "7"
          },
          {
            correct: false,
            title: "8"
          },
          {
            correct: false,
            title: "9"
          },
          {
            correct: true,
            title: "10"
          }
        ]
      },
      {
        id: 119,
        question:
          "У кого можно получить ежедневный пропуск в подземелье 'Дворец Рассвета'?",
        answers: [
          {
            correct: false,
            title: "У Ректора Дармага"
          },
          {
            correct: false,
            title: "У Хозяйки таверны Вивиан"
          },
          {
            correct: true,
            title: "У Адъютанта Беннета"
          },
          {
            correct: false,
            title: "У Белого владыки"
          }
        ]
      },
      {
        id: 120,
        question:
          "Путь в какую из великих столиц удалось обнаружить в ходе поисков, предпринятых Ивейн Найт?",
        answers: [
          {
            correct: false,
            title: "Город Спокойствия"
          },
          {
            correct: true,
            title: "Нерушимый город"
          },
          {
            correct: false,
            title: "Ледяной город"
          },
          {
            correct: false,
            title: "Алый город"
          }
        ]
      },
      {
        id: 121,
        question:
          "Что нужно делать, чтобы увернуться от огненных кругов в бою с Властителем Иллюзий?",
        answers: [
          {
            correct: true,
            title: "Бегать вслед за кругами"
          },
          {
            correct: false,
            title: "Спрятаться за спиной другого персонажа"
          },
          {
            correct: false,
            title: "Застыть как камень"
          },
          {
            correct: false,
            title: "Лечь и притвориться мертвым"
          }
        ]
      },
      {
        id: 122,
        question: "Где располагается вход в Башню Будды?",
        answers: [
          {
            correct: false,
            title: "В Мире Людей"
          },
          {
            correct: false,
            title: "В Землях Демонов"
          },
          {
            correct: true,
            title: "В Землях Небожителей"
          },
          {
            correct: false,
            title: "В Морае"
          }
        ]
      },
      {
        id: 123,
        question:
          "Какой томик стихов нельзя получить в награду за прохождение Башни Будды?",
        answers: [
          {
            correct: false,
            title: "Томик стихов: Неуязвимость"
          },
          {
            correct: false,
            title: "Томик стихов: Безупречность"
          },
          {
            correct: true,
            title: "Томик стихов: Неустрашимость"
          },
          {
            correct: false,
            title: "Томик стихов: Бесстрашие"
          }
        ]
      },
      {
        id: 124,
        question:
          "Сколько очков требуется потратить в Башне Будды, чтобы увеличить показатель атаки персонажа на 30 единиц?",
        answers: [
          {
            correct: false,
            title: "200"
          },
          {
            correct: true,
            title: "100"
          },
          {
            correct: false,
            title: "50"
          },
          {
            correct: false,
            title: "10"
          }
        ]
      },
      {
        id: 125,
        question: "В каком из чертогов Башни Будды обитает Порочный Майтрея?",
        answers: [
          {
            correct: false,
            title: "В Позолоченном дворце"
          },
          {
            correct: false,
            title: "Во Дворце ночных бесов"
          },
          {
            correct: true,
            title: "Во Дворце Тушита"
          },
          {
            correct: false,
            title: "Во Дворце веселья"
          }
        ]
      },
      {
        id: 126,
        question:
          "Как зовут живущего у дверей Башни Будды монаха, у которого можно просмотреть рейтинги прохождения Башни и починить экипировку?",
        answers: [
          {
            correct: false,
            title: "Небесный наставник"
          },
          {
            correct: true,
            title: "Одинокий наставник"
          },
          {
            correct: false,
            title: "Мудрый наставник"
          },
          {
            correct: false,
            title: "Наставник новичков"
          }
        ]
      },
      {
        id: 127,
        question:
          "Со сколькими неигровыми персонажами приходится взаимодействовать при выполнении задания 'Снежный караван'?",
        answers: [
          {
            correct: false,
            title: "С тремя"
          },
          {
            correct: false,
            title: "С четырьмя"
          },
          {
            correct: true,
            title: "С пятью"
          },
          {
            correct: false,
            title: "С шестью"
          }
        ]
      },
      {
        id: 128,
        question:
          "Какой обитатель Моря Иллюзий умеет превращать противников в маленьких зверьков?",
        answers: [
          {
            correct: false,
            title: "Привратник Боза"
          },
          {
            correct: true,
            title: "Лотосовая фея"
          },
          {
            correct: false,
            title: "Винодел Соу"
          },
          {
            correct: false,
            title: "Творец знаков"
          }
        ]
      },
      {
        id: 129,
        question: "Сколько всего боссов охраняют острова Моря Иллюзий?",
        answers: [
          {
            correct: false,
            title: "6"
          },
          {
            correct: true,
            title: "7"
          },
          {
            correct: false,
            title: "5"
          },
          {
            correct: false,
            title: "4"
          }
        ]
      },
      {
        id: 130,
        question:
          "Какого максимального значения может достичь сила Звезды фатума, если значение общего показателя силы звезды Звездного диска составляет 20?",
        answers: [
          {
            correct: false,
            title: "7"
          },
          {
            correct: false,
            title: "8"
          },
          {
            correct: false,
            title: "9"
          },
          {
            correct: true,
            title: "10"
          }
        ]
      },
      {
        id: 131,
        question:
          "В каком из перечисленных событий нельзя получить в награду предметы для повышения силы Звездного диска?",
        answers: [
          {
            correct: false,
            title: "Бои на Арене героев"
          },
          {
            correct: false,
            title: "Ежедневные задания Заоблачного мира"
          },
          {
            correct: true,
            title: "Задания серии 'Охотник за головами'"
          },
          {
            correct: false,
            title: "Прохождение Башни Будды"
          }
        ]
      },
      {
        id: 132,
        question:
          "Что из перечисленного позволяет повысить уровень Звездного диска?",
        answers: [
          {
            correct: false,
            title: "Использование Метеоритов для гадания"
          },
          {
            correct: true,
            title: "Поглощение других Звездных дисков"
          },
          {
            correct: false,
            title: "Использование Звездной пыли"
          },
          {
            correct: false,
            title: "Использование Осколков звезды"
          }
        ]
      },
      {
        id: 133,
        question:
          "Сколько единиц опыта требуется, чтобы повысить уровень Звездной удачи с 3 до 4?",
        answers: [
          {
            correct: false,
            title: "400"
          },
          {
            correct: false,
            title: "600"
          },
          {
            correct: true,
            title: "800"
          },
          {
            correct: false,
            title: "1000"
          }
        ]
      },
      {
        id: 134,
        question: "Каким светом светится Звездный диск с 9 характеристиками?",
        answers: [
          {
            correct: false,
            title: "Синим"
          },
          {
            correct: false,
            title: "Зеленым"
          },
          {
            correct: false,
            title: "Желтым"
          },
          {
            correct: true,
            title: "Черным"
          }
        ]
      },
      {
        id: 135,
        question:
          "Сколько раз на одном Звездном диске может встречаться характеристика 'Боевой дух'?",
        answers: [
          {
            correct: false,
            title: "1"
          },
          {
            correct: true,
            title: "2"
          },
          {
            correct: false,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          }
        ]
      },
      {
        id: 136,
        question:
          "Если на Звездном диске выпало 10 характеристик, то сколько Звезд фатума будет на нем активно?",
        answers: [
          {
            correct: false,
            title: "2"
          },
          {
            correct: false,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: true,
            title: "5"
          }
        ]
      },
      {
        id: 137,
        question: "Для чего используется Звездная пыль?",
        answers: [
          {
            correct: false,
            title: "Она случайно изменяет число характеристик Звездного диска"
          },
          {
            correct: true,
            title:
              "Она случайно изменяет расположение характеристик на Звездном диске"
          },
          {
            correct: false,
            title:
              "Она случайно изменяет значения характеристик Звездного диска"
          },
          {
            correct: false,
            title: "Она перераспределяет значения Силы звезд на Звездном диске"
          }
        ]
      },
      {
        id: 138,
        question: "Какие предметы нужны для повышения уровня Звездного диска?",
        answers: [
          {
            correct: true,
            title: "Пилюли звездного духа"
          },
          {
            correct: false,
            title: "Осколки звезды"
          },
          {
            correct: false,
            title: "Метеориты"
          },
          {
            correct: false,
            title: "Порции Звездной пыли"
          }
        ]
      },
      {
        id: 139,
        question: "На что влияет общий показатель силы звезды Звездного диска?",
        answers: [
          {
            correct: false,
            title: "На уровень Звездного диска"
          },
          {
            correct: true,
            title: "На значения характеристик Звездного диска"
          },
          {
            correct: false,
            title: "На уровень Звездной удачи"
          },
          {
            correct: false,
            title: "На количество звезд на Звездном диске"
          }
        ]
      },
      {
        id: 140,
        question:
          "Какой предмет нужен, чтобы изменить специализацию Ремесленной мастерской?",
        answers: [
          {
            correct: false,
            title: "Кровавый камень"
          },
          {
            correct: false,
            title: "Фрагмент заоблачной стелы"
          },
          {
            correct: false,
            title: "Небесная яшма"
          },
          {
            correct: true,
            title: "Камень ремесленника"
          }
        ]
      },
      {
        id: 141,
        question:
          "В какой системе заданий Заоблачного мира можно получить чертежи цветов и деревьев?",
        answers: [
          {
            correct: false,
            title: "Списки Каталога Флори"
          },
          {
            correct: false,
            title: "Заоблачный канон: Сад"
          },
          {
            correct: false,
            title: "Заоблачный канон: Интерьер"
          },
          {
            correct: true,
            title: "Заоблачный канон: Свод трав"
          }
        ]
      },
      {
        id: 142,
        question:
          "Кто из посланников и посланниц Заоблачного мира помогает изменить характеристики оружия шестнадцати заоблачных королей?",
        answers: [
          {
            correct: true,
            title: "Заоблачная посланница Юнь Ди"
          },
          {
            correct: false,
            title: "Заоблачная посланница Юнь Шэ"
          },
          {
            correct: false,
            title: "Заоблачная посланница Юнь Чжэн"
          },
          {
            correct: false,
            title: "Юнни"
          }
        ]
      },
      {
        id: 143,
        question:
          "Какой предмет нужен для создания книг умений Заоблачного мира?",
        answers: [
          {
            correct: false,
            title: "Заоблачная купчая"
          },
          {
            correct: false,
            title: "Живая земля"
          },
          {
            correct: true,
            title: "Заоблачная печать"
          },
          {
            correct: false,
            title: "Заоблачный узел дождя"
          }
        ]
      },
      {
        id: 144,
        question: "Сколько раз в день можно принять задания Каталога Флори?",
        answers: [
          {
            correct: false,
            title: "4 раза"
          },
          {
            correct: false,
            title: "3 раза"
          },
          {
            correct: false,
            title: "2 раза"
          },
          {
            correct: true,
            title: "1 раз"
          }
        ]
      },
      {
        id: 145,
        question:
          "Каково максимальное количество объектов, которое можно разместить в локации дома?",
        answers: [
          {
            correct: true,
            title: "1000"
          },
          {
            correct: false,
            title: "3000"
          },
          {
            correct: false,
            title: "5000"
          },
          {
            correct: false,
            title: "7000"
          }
        ]
      },
      {
        id: 146,
        question:
          "На какой вкладке функциональных построек можно найти Садовый участок при строительстве?",
        answers: [
          {
            correct: false,
            title: "Ресурсы"
          },
          {
            correct: true,
            title: "Ферма"
          },
          {
            correct: false,
            title: "Ремесло"
          },
          {
            correct: false,
            title: "Прочее"
          }
        ]
      },
      {
        id: 147,
        question:
          "У кого из посланников и посланниц Заоблачного мира можно купить семена растений и детенышей животных, чтобы выращивать их на своем участке?",
        answers: [
          {
            correct: false,
            title: "У Заоблачной посланницы Юнь Ди"
          },
          {
            correct: false,
            title: "У Заоблачной посланницы Юнь Шэ"
          },
          {
            correct: true,
            title: "У Заоблачной посланницы Юнь Чжэн"
          },
          {
            correct: false,
            title: "У Юнни"
          }
        ]
      },
      {
        id: 148,
        question: "Какой ресурс используется для восстановления чистоты дома?",
        answers: [
          {
            correct: false,
            title: "Ткань"
          },
          {
            correct: true,
            title: "Еда"
          },
          {
            correct: false,
            title: "Дерево"
          },
          {
            correct: false,
            title: "Металл"
          }
        ]
      },
      {
        id: 149,
        question:
          "Сколько раз в день можно обновить список доступных заданий Каталога Флори за еду?",
        answers: [
          {
            correct: false,
            title: "3 раза"
          },
          {
            correct: false,
            title: "4 раза"
          },
          {
            correct: true,
            title: "5 раз"
          },
          {
            correct: false,
            title: "6 раз"
          }
        ]
      },
      {
        id: 150,
        question:
          "За достижение какого уровня дома можно получить в награду чертеж Пастбища?",
        answers: [
          {
            correct: false,
            title: "10 уровня"
          },
          {
            correct: true,
            title: "11 уровня"
          },
          {
            correct: false,
            title: "12 уровня"
          },
          {
            correct: false,
            title: "13 уровня"
          }
        ]
      },
      {
        id: 151,
        question:
          "Какая функциональная постройка нужна, чтобы создавать предметы со страницы Книги чертежей 'Статуи'?",
        answers: [
          {
            correct: false,
            title: "Денежная чаша"
          },
          {
            correct: false,
            title: "Ремесленная мастерская"
          },
          {
            correct: true,
            title: "Ярмарка редкостей"
          },
          {
            correct: false,
            title: "Пастбище"
          }
        ]
      },
      {
        id: 152,
        question:
          "Какой ресурс Заоблачного мира производится на Садовом участке?",
        answers: [
          {
            correct: true,
            title: "Еда"
          },
          {
            correct: false,
            title: "Металл"
          },
          {
            correct: false,
            title: "Камень"
          },
          {
            correct: false,
            title: "Дерево"
          }
        ]
      },
      {
        id: 153,
        question:
          "Сколько видов специализации существует у Ремесленной мастерской?",
        answers: [
          {
            correct: true,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          },
          {
            correct: false,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          }
        ]
      },
      {
        id: 154,
        question:
          "Книга чертежей делится на четыре больших раздела. Какой из них указан неверно?",
        answers: [
          {
            correct: false,
            title: "Роскошь"
          },
          {
            correct: false,
            title: "Отделка"
          },
          {
            correct: false,
            title: "Природа"
          },
          {
            correct: true,
            title: "Диковинки"
          }
        ]
      },
      {
        id: 155,
        question:
          "Какие из этих предметов нельзя получить в награду при прохождении Башни Будды?",
        answers: [
          {
            correct: false,
            title: "Стелы Бога войны"
          },
          {
            correct: false,
            title: "Осколки звезды"
          },
          {
            correct: false,
            title: "Таблетки 'Дух-защитник'"
          },
          {
            correct: true,
            title: "Камни бессмертных"
          }
        ]
      },
      {
        id: 156,
        question: "На сколько всего цветов делятся списки из Каталога Флори?",
        answers: [
          {
            correct: false,
            title: "12"
          },
          {
            correct: true,
            title: "10"
          },
          {
            correct: false,
            title: "9"
          },
          {
            correct: false,
            title: "8"
          }
        ]
      },
      {
        id: 157,
        question:
          "Какой предмет нужно использовать, чтобы изменить название своего дома?",
        answers: [
          {
            correct: false,
            title: "Свиток перемен"
          },
          {
            correct: true,
            title: "Камень Флори"
          },
          {
            correct: false,
            title: "Камень нового имени"
          },
          {
            correct: false,
            title: "Камень великих перемен"
          }
        ]
      },
      {
        id: 158,
        question: "Как зовут цветочную фею, которая оберегает Заоблачный мир?",
        answers: [
          {
            correct: false,
            title: "Незабудка"
          },
          {
            correct: false,
            title: "Роза"
          },
          {
            correct: true,
            title: "Флори"
          },
          {
            correct: false,
            title: "Фиалка"
          }
        ]
      },
      {
        id: 159,
        question:
          "Какая из этих построек Заоблачного мира нужна для производства ткани?",
        answers: [
          {
            correct: false,
            title: "Садовый участок"
          },
          {
            correct: false,
            title: "Плотницкая мастерская"
          },
          {
            correct: true,
            title: "Ткацкая мастерская"
          },
          {
            correct: false,
            title: "Нефритовая мастерская"
          }
        ]
      },
      {
        id: 160,
        question:
          "Как называется мир, на одном из участков которого персонаж может построить собственный дом?",
        answers: [
          {
            correct: true,
            title: "Заоблачный мир"
          },
          {
            correct: false,
            title: "Заснеженный мир"
          },
          {
            correct: false,
            title: "Затерянный мир"
          },
          {
            correct: false,
            title: "Поднебесный мир"
          }
        ]
      },
      {
        id: 161,
        question:
          "Какие предметы не встречаются среди лотов ежевечернего Аукционного зала?",
        answers: [
          {
            correct: false,
            title: "Свитки с летательными средствами"
          },
          {
            correct: true,
            title: "Наборы камней души"
          },
          {
            correct: false,
            title: "Талоны на ездовых питомцев"
          },
          {
            correct: false,
            title: "Талоны на книги умений"
          }
        ]
      },
      {
        id: 162,
        question:
          "С помощью какого из этих предметов можно улучшить кольца 'Полный контроль ситуации' и 'Длань, управляющая тучами'? ",
        answers: [
          {
            correct: true,
            title: "Сокровенная жемчужина"
          },
          {
            correct: false,
            title: "Дух звездного света "
          },
          {
            correct: false,
            title: "Кристалл Якшас"
          },
          {
            correct: false,
            title: "Книга Юэ И"
          }
        ]
      },
      {
        id: 163,
        question:
          "Сколько раз в день с одной учетной записи можно использовать Знаки опыта, приобретенные у интендантов фракций Морая?",
        answers: [
          {
            correct: false,
            title: "5"
          },
          {
            correct: false,
            title: "10"
          },
          {
            correct: true,
            title: "20"
          },
          {
            correct: false,
            title: "30"
          }
        ]
      },
      {
        id: 164,
        question:
          "Сколько единиц здоровья может восстановить Платиновый амулет?",
        answers: [
          {
            correct: false,
            title: "1 000 000"
          },
          {
            correct: false,
            title: "1 100 000"
          },
          {
            correct: true,
            title: "1 200 000"
          },
          {
            correct: false,
            title: "1 300 000"
          }
        ]
      },
      {
        id: 165,
        question:
          "Как называется предмет, который позволяет снять с летательного средства сковывающую его колдовскую печать?",
        answers: [
          {
            correct: true,
            title: "Растворитель магии"
          },
          {
            correct: false,
            title: "Перьевые крылья"
          },
          {
            correct: false,
            title: "Жемчужина Фу Си"
          },
          {
            correct: false,
            title: "Дух ветра"
          }
        ]
      },
      {
        id: 166,
        question: "Какой ресурс нужен для глубокой медитации?",
        answers: [
          {
            correct: false,
            title: "Камень мироздания"
          },
          {
            correct: false,
            title: "Малая сфера алхимика"
          },
          {
            correct: false,
            title: "Колокол телепортации"
          },
          {
            correct: true,
            title: "Золотая чешуйка"
          }
        ]
      },
      {
        id: 167,
        question:
          "Какую прибавку к характеристикам дает владельцу комплект улучшенного снаряжения восьмого воинского ранга из четырех предметов?",
        answers: [
          {
            correct: false,
            title: "Показатель защиты +10"
          },
          {
            correct: false,
            title: "Показатель защиты +15"
          },
          {
            correct: true,
            title: "Показатель атаки +15"
          },
          {
            correct: false,
            title: "Показатель атаки +10"
          }
        ]
      },
      {
        id: 168,
        question: "В каком из этих событий больше нельзя принять участие?",
        answers: [
          {
            correct: false,
            title: "Плато Асуров"
          },
          {
            correct: true,
            title: "Бой в Городе темных зверей"
          },
          {
            correct: false,
            title: "Битва династий"
          },
          {
            correct: false,
            title: "Бои на Арене героев"
          }
        ]
      },
      {
        id: 169,
        question:
          "К какой из игровых фракций персонажи не могут присоединиться?",
        answers: [
          {
            correct: false,
            title: "Орден Солнца"
          },
          {
            correct: false,
            title: "Орден Мрака"
          },
          {
            correct: false,
            title: "Армия Зари"
          },
          {
            correct: true,
            title: "Армия Тирана"
          }
        ]
      },
      {
        id: 170,
        question:
          "Какого уровня должна достичь Сокровищница Базы гильдии, чтобы в ней можно было купить Камень Пань Гу?",
        answers: [
          {
            correct: false,
            title: "5"
          },
          {
            correct: false,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          },
          {
            correct: true,
            title: "8"
          }
        ]
      },
      {
        id: 171,
        question: "Сколько Монет династий нужно для создания Печати владыки?",
        answers: [
          {
            correct: false,
            title: "900"
          },
          {
            correct: true,
            title: "1000"
          },
          {
            correct: false,
            title: "1100"
          },
          {
            correct: false,
            title: "1200"
          }
        ]
      },
      {
        id: 172,
        question:
          "Сколько Монет династий нужно для создания Шара дракона 5 уровня?",
        answers: [
          {
            correct: false,
            title: "400"
          },
          {
            correct: true,
            title: "450"
          },
          {
            correct: false,
            title: "500"
          },
          {
            correct: false,
            title: "550"
          }
        ]
      },
      {
        id: 173,
        question:
          "Сколько склянок Живой крови требуется для создания Камня созидания, необходимого для второго перерождения?",
        answers: [
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          },
          {
            correct: true,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          }
        ]
      },
      {
        id: 174,
        question:
          "Сколько надо собрать магических карт, чтобы получить титул 'Коллекционер-новичок'?",
        answers: [
          {
            correct: false,
            title: "10"
          },
          {
            correct: true,
            title: "20"
          },
          {
            correct: false,
            title: "30"
          },
          {
            correct: false,
            title: "40"
          }
        ]
      },
      {
        id: 175,
        question:
          "Сколько Идеальных серебряных монет нужно, чтобы обменять их на Коробочку с картой B?",
        answers: [
          {
            correct: false,
            title: "2"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: true,
            title: "8"
          },
          {
            correct: false,
            title: "10"
          }
        ]
      },
      {
        id: 176,
        question:
          "Какая из этих наград, создаваемых за Идеальные серебряные монеты, не привязана к персонажу?",
        answers: [
          {
            correct: false,
            title: "Коробочка с картой S"
          },
          {
            correct: false,
            title: "Коробочка с картой A"
          },
          {
            correct: false,
            title: "Коробочка с картой B"
          },
          {
            correct: true,
            title: "Коробочка с картой C"
          }
        ]
      },
      {
        id: 177,
        question:
          "Сколько Камней драконьей души требуется для перековки снаряжения из Зала Перерождения в улучшенное снаряжение восьмого воинского ранга?",
        answers: [
          {
            correct: false,
            title: "300"
          },
          {
            correct: false,
            title: "400"
          },
          {
            correct: true,
            title: "500"
          },
          {
            correct: false,
            title: "600"
          }
        ]
      },
      {
        id: 178,
        question:
          "Сколько единиц показателя атаки приносит владельцу оружие третьего грейда девятого воинского ранга?",
        answers: [
          {
            correct: false,
            title: "50"
          },
          {
            correct: false,
            title: "60"
          },
          {
            correct: true,
            title: "70"
          },
          {
            correct: false,
            title: "80"
          }
        ]
      },
      {
        id: 179,
        question:
          "Что можно получить в награду за выполнение любого задания в Мире Людей?",
        answers: [
          {
            correct: true,
            title: "Единицы духовного знания"
          },
          {
            correct: false,
            title: "Склянки Живой крови"
          },
          {
            correct: false,
            title: "Коробочки с картой C"
          },
          {
            correct: false,
            title: "Серебряные монеты"
          }
        ]
      },
      {
        id: 180,
        question:
          "Какое из этих поселений не отображается на карте Мира Людей до начала исторического движения?",
        answers: [
          {
            correct: false,
            title: "Страна фонарей"
          },
          {
            correct: false,
            title: "Осенняя деревня"
          },
          {
            correct: false,
            title: "Поселок Единорога"
          },
          {
            correct: true,
            title: "Звездный лагерь"
          }
        ]
      },
      {
        id: 181,
        question: "Как называется коса Бога войны?",
        answers: [
          {
            correct: true,
            title: "Вой волчьего короля"
          },
          {
            correct: false,
            title: "Вечная река"
          },
          {
            correct: false,
            title: "Тусклый огонь"
          },
          {
            correct: false,
            title: "Три тысячи цветов"
          }
        ]
      },
      {
        id: 182,
        question:
          "Сколько единиц духовного знания можно получить за выполнение скрытого задания 'Охрана повозки' в режиме сюжета Мира Людей?",
        answers: [
          {
            correct: false,
            title: "50"
          },
          {
            correct: true,
            title: "100"
          },
          {
            correct: false,
            title: "150"
          },
          {
            correct: false,
            title: "200"
          }
        ]
      },
      {
        id: 183,
        question: "Сколько Пилюль духовного знания можно принять за один день?",
        answers: [
          {
            correct: false,
            title: "8"
          },
          {
            correct: true,
            title: "10"
          },
          {
            correct: false,
            title: "12"
          },
          {
            correct: false,
            title: "15"
          }
        ]
      },
      {
        id: 184,
        question:
          "Какое из этих заданий Мира Людей выполняется не в режиме сюжета?",
        answers: [
          {
            correct: true,
            title: "Оледеневшие узники"
          },
          {
            correct: false,
            title: "Река Матери и сына"
          },
          {
            correct: false,
            title: "Разгром лагеря"
          },
          {
            correct: false,
            title: "Поиск силы"
          }
        ]
      },
      {
        id: 185,
        question:
          "В награду за выполнение какого из заданий Мира Людей можно получить Пилюлю духовного знания?",
        answers: [
          {
            correct: false,
            title: "Спасение енотов"
          },
          {
            correct: false,
            title: "Река Матери и сына"
          },
          {
            correct: true,
            title: "Поиск силы"
          },
          {
            correct: false,
            title: "Соглашение о союзе"
          }
        ]
      },
      {
        id: 186,
        question:
          "Какой из этих неигровых персонажей не участвует в событиях задания 'Дом за скрепку'?",
        answers: [
          {
            correct: false,
            title: "Отшельник"
          },
          {
            correct: true,
            title: "Бин Янь"
          },
          {
            correct: false,
            title: "Сяо Е"
          },
          {
            correct: false,
            title: "Сяо Шань"
          }
        ]
      },
      {
        id: 187,
        question:
          "В какой из печей Миража блуждающих песков можно создать прекрасную экипировку для низкоуровневых персонажей?",
        answers: [
          {
            correct: true,
            title: "В Печи созидания"
          },
          {
            correct: false,
            title: "В Печи изменения"
          },
          {
            correct: false,
            title: "В Печи Морая"
          },
          {
            correct: false,
            title: "В Печи усовершенствования"
          }
        ]
      },
      {
        id: 188,
        question:
          "В какой из печей Миража песчаных бурь можно повторно усовершенствовать экипировку восьмого воинского ранга?",
        answers: [
          {
            correct: false,
            title: "В Печи гармонии"
          },
          {
            correct: false,
            title: "В Печи равновесия"
          },
          {
            correct: true,
            title: "В Печи усовершенствования"
          },
          {
            correct: false,
            title: "В Печи гармонии"
          }
        ]
      },
      {
        id: 189,
        question: "Какое событие позволило Теням появиться в Идеальном Мире?",
        answers: [
          {
            correct: false,
            title: "Снятие Заклятия семи катастроф"
          },
          {
            correct: true,
            title: "Самопожертвование Сына бога"
          },
          {
            correct: false,
            title: "Самопожертвование Солнечного духа"
          },
          {
            correct: false,
            title: "Снятие Предельной печати"
          }
        ]
      },
      {
        id: 190,
        question:
          "Что позволяет принимать чеки в своей торговой лавке и увеличивает количество мест для продажи и покупки предметов?",
        answers: [
          {
            correct: true,
            title: "Торговая палатка"
          },
          {
            correct: false,
            title: "Торговый договор"
          },
          {
            correct: false,
            title: "Торговый указ"
          },
          {
            correct: false,
            title: "Торговый купон"
          }
        ]
      },
      {
        id: 191,
        question:
          "Где появляется предводитель наемников Тирана, известный как дракон Садэман?",
        answers: [
          {
            correct: false,
            title: "В режиме сюжета Мира Людей"
          },
          {
            correct: false,
            title: "В Морае"
          },
          {
            correct: true,
            title: "В Мире Людей"
          },
          {
            correct: false,
            title: "На Переправе душ"
          }
        ]
      },
      {
        id: 192,
        question:
          "Какой предмет позволяет защитить повозку, перевозящую ресурсы вашей гильдии, от повреждений?",
        answers: [
          {
            correct: true,
            title: "Защитный амулет"
          },
          {
            correct: false,
            title: "Кровь черного дракона"
          },
          {
            correct: false,
            title: "Камень очищения духа"
          },
          {
            correct: false,
            title: "Живая кровь"
          }
        ]
      },
      {
        id: 193,
        question:
          "В каком событии нужно принять участие, чтобы получить в награду Солдатское жалование?",
        answers: [
          {
            correct: false,
            title: "В сражениях за территории"
          },
          {
            correct: false,
            title: "В Битве династий"
          },
          {
            correct: false,
            title: "В сражениях на Драконьем Острове"
          },
          {
            correct: true,
            title: "В Битве за ресурсы"
          }
        ]
      },
      {
        id: 194,
        question:
          "Какие предметы используются для повышения уровня и эволюции боевых питомцев друида?",
        answers: [
          {
            correct: false,
            title: "Идеальные бисквиты"
          },
          {
            correct: false,
            title: "Перья гарпии"
          },
          {
            correct: true,
            title: "Мускусные шарики"
          },
          {
            correct: false,
            title: "Загадочные кости"
          }
        ]
      },
      {
        id: 195,
        question: "Какое из следующих утверждений о перерождении верно?",
        answers: [
          {
            correct: true,
            title:
              "Персонаж может попасть в Мир Людей только после перерождения."
          },
          {
            correct: false,
            title: "После перерождения уровень персонажа будет снижен до 80."
          },
          {
            correct: false,
            title:
              "Персонажи, совершившие перерождение на 100 и 105 уровнях, получат одинаковое число очков характеристик."
          },
          {
            correct: false,
            title: "Персонаж может попасть в Морай только после перерождения."
          }
        ]
      },
      {
        id: 196,
        question:
          "При каком количестве МЭ от максимального значения автоматически срабатывает идол?",
        answers: [
          {
            correct: false,
            title: "60%"
          },
          {
            correct: false,
            title: "65%"
          },
          {
            correct: false,
            title: "70%"
          },
          {
            correct: true,
            title: "75%"
          }
        ]
      },
      {
        id: 197,
        question: "Что в Идеальном Мире нельзя перекрасить в другой цвет?",
        answers: [
          {
            correct: false,
            title: "Модные браслеты и перчатки"
          },
          {
            correct: false,
            title: "Модную обувь"
          },
          {
            correct: false,
            title: "Ездовых животных"
          },
          {
            correct: true,
            title: "Модное оружие"
          }
        ]
      },
      {
        id: 198,
        question:
          "Какая комбинация персонажей не может использовать действие 'Объятия'?",
        answers: [
          {
            correct: true,
            title: "Женский персонаж с женским персонажем"
          },
          {
            correct: false,
            title: "Мужской персонаж с персонажем в форме лисицы"
          },
          {
            correct: false,
            title: "Женский персонаж с персонажем в форме тигра"
          },
          {
            correct: false,
            title: "Мужской персонаж с женским персонажем"
          }
        ]
      },
      {
        id: 199,
        question:
          "Какой предмет нужен гильдии, чтобы предложить соперникам договорное сражение?",
        answers: [
          {
            correct: false,
            title: "Мерцающая галька"
          },
          {
            correct: false,
            title: "Перо рассвета"
          },
          {
            correct: true,
            title: "Приглашение на бой"
          },
          {
            correct: false,
            title: "Камень Инь-ян"
          }
        ]
      },
      {
        id: 200,
        question: "Где можно забрать награду после окончания Битвы династий?",
        answers: [
          {
            correct: false,
            title: "В почтовом ящике Идеального мира"
          },
          {
            correct: true,
            title: "В почтовом ящике Долины битв"
          },
          {
            correct: false,
            title: "В почтовом ящике Мира Людей"
          },
          {
            correct: false,
            title: "В почтовом ящике Морая"
          }
        ]
      },
      {
        id: 201,
        question:
          "Каким требованиям должен удовлетворять персонаж, чтобы участвовать в Битве династий?",
        answers: [
          {
            correct: true,
            title: "Достичь 100 уровня и статуса Безупречный или Демон"
          },
          {
            correct: false,
            title: "Достичь статуса Безупречный или Демон"
          },
          {
            correct: false,
            title:
              "Совершить второе перерождение и достичь 10 уровня Неба миражей"
          },
          {
            correct: false,
            title:
              "Совершить первое перерождение и достичь 10 уровня Тайного неба"
          }
        ]
      },
      {
        id: 202,
        question: "Какое из следующих утверждений о духовных Небесах ошибочно?",
        answers: [
          {
            correct: false,
            title: "Духовные Небеса открываются только после перерождения."
          },
          {
            correct: false,
            title:
              "Чтобы освоить ступени Тайного неба, нужно совершить первое перерождение."
          },
          {
            correct: false,
            title:
              "Чтобы освоить ступени Неба миражей, нужно совершить два перерождения."
          },
          {
            correct: true,
            title:
              "Чтобы освоить ступени Совершенного неба, нужно совершить три перерождения."
          }
        ]
      },
      {
        id: 203,
        question:
          "Какое из следующих утверждений о системе очков активности содержит ошибку?",
        answers: [
          {
            correct: true,
            title:
              "Можно самостоятельно выбрать, какие задания окажутся в оранжевой части списка, а какие - в голубой."
          },
          {
            correct: false,
            title:
              "Очки активности можно использовать для завершения заданий из голубой части списка активности."
          },
          {
            correct: false,
            title:
              "Очки активности можно получить, выполняя задания из оранжевой части списка активности."
          },
          {
            correct: false,
            title:
              "Сфера алхимика увеличивает число очков активности, доступных для использования."
          }
        ]
      },
      {
        id: 204,
        question:
          "Какой предмет позволяет увеличить число очков активности, доступных для использования?",
        answers: [
          {
            correct: true,
            title: "Сфера алхимика"
          },
          {
            correct: false,
            title: "Колокол телепортации"
          },
          {
            correct: false,
            title: "Камень познания"
          },
          {
            correct: false,
            title: "Портал в город"
          }
        ]
      },
      {
        id: 205,
        question:
          "Сколько склянок Живой крови нужно для создания книги умения 'Источник добродетелей'?",
        answers: [
          {
            correct: false,
            title: "2"
          },
          {
            correct: false,
            title: "8"
          },
          {
            correct: false,
            title: "10"
          },
          {
            correct: true,
            title: "20"
          }
        ]
      },
      {
        id: 206,
        question:
          "Небесная руна - легендарный артефакт, который позволяет сменить путь совершенствования персонажа. Кто помогает им воспользоваться?",
        answers: [
          {
            correct: false,
            title: "Старейшина Города Истоков"
          },
          {
            correct: false,
            title: "Старейшина Города Драконов"
          },
          {
            correct: true,
            title: "Наставница по трансформации"
          },
          {
            correct: false,
            title: "Старейшина Порта Мечты"
          }
        ]
      },
      {
        id: 207,
        question:
          "Клавиша F12 активирует систему автоматических тренировок. Использование какого предмета можно настроить, нажав кнопку 'Функции' в меню тренировки?",
        answers: [
          {
            correct: true,
            title: "Сферы алхимика"
          },
          {
            correct: false,
            title: "Руны переноса"
          },
          {
            correct: false,
            title: "Свитка воскрешения"
          },
          {
            correct: false,
            title: "Портала в город"
          }
        ]
      },
      {
        id: 208,
        question: "Какое событие проходит в мире Морая по субботам?",
        answers: [
          {
            correct: false,
            title: "Тайный указ"
          },
          {
            correct: false,
            title: "Сокровищница Страны фонарей"
          },
          {
            correct: false,
            title: "Победа над Мраком"
          },
          {
            correct: true,
            title: "Битва орденов"
          }
        ]
      },
      {
        id: 209,
        question: "Какой из этих неигровых персонажей не перемещается?",
        answers: [
          {
            correct: true,
            title: "Гонец из Мира людей"
          },
          {
            correct: false,
            title: "Заплутавший звездный дух"
          },
          {
            correct: false,
            title: "Посланник Шао Хао"
          },
          {
            correct: false,
            title: "Наставник Боюн"
          }
        ]
      },
      {
        id: 210,
        question:
          "Какой предмет позволяет повысить уровень контроля над магическими картами?",
        answers: [
          {
            correct: true,
            title: "Усилитель карт"
          },
          {
            correct: false,
            title: "Пилюля Тайного неба"
          },
          {
            correct: false,
            title: "Пилюля откровения"
          },
          {
            correct: false,
            title: "Пилюля премудрости"
          }
        ]
      },
      {
        id: 211,
        question: "Какое из этих утверждений о титулах неверно?",
        answers: [
          {
            correct: false,
            title: "Титулы можно получить за успешное прохождение подземелий."
          },
          {
            correct: true,
            title:
              "Предметы, нужные для получения титулов, нельзя купить в Игровом магазине."
          },
          {
            correct: false,
            title:
              "Титулы даются за выполнение некоторых заданий Нерушимого города."
          },
          {
            correct: false,
            title:
              "Титулы можно получить, выполняя цепочки заданий из серии 'Записи...'"
          }
        ]
      },
      {
        id: 212,
        question:
          "Сколько очков репутации требуется набрать, чтобы заслужить восьмое воинское звание?",
        answers: [
          {
            correct: false,
            title: "50 000"
          },
          {
            correct: false,
            title: "100 000"
          },
          {
            correct: false,
            title: "1 500 000"
          },
          {
            correct: true,
            title: "200 000"
          }
        ]
      },
      {
        id: 213,
        question:
          "Какой предмет позволяет автоматически использовать зелья и эликсиры?",
        answers: [
          {
            correct: true,
            title: "Сфера алхимика"
          },
          {
            correct: false,
            title: "Совершенный камень"
          },
          {
            correct: false,
            title: "Камень познания"
          },
          {
            correct: false,
            title: "Камень мироздания"
          }
        ]
      },
      {
        id: 214,
        question:
          "В какой части игрового интерфейса находится календарь событий?",
        answers: [
          {
            correct: false,
            title: "Рядом с иконкой персонажа"
          },
          {
            correct: false,
            title: "Рядом с окном чата"
          },
          {
            correct: false,
            title: "Рядом с панелью умений"
          },
          {
            correct: true,
            title: "Рядом с миникартой"
          }
        ]
      },
      {
        id: 215,
        question: "Какой предмет позволяет изменить имя питомца?",
        answers: [
          {
            correct: false,
            title: "Камень нового имени"
          },
          {
            correct: true,
            title: "Ошейник для питомца"
          },
          {
            correct: false,
            title: "Мускусный шарик"
          },
          {
            correct: false,
            title: "Свиток перемен"
          }
        ]
      },
      {
        id: 216,
        question:
          "Кто помогает разобрать модную одежду и получить за нее красители?",
        answers: [
          {
            correct: true,
            title: "Цюй И"
          },
          {
            correct: false,
            title: "Портной"
          },
          {
            correct: false,
            title: "Ткачиха"
          },
          {
            correct: false,
            title: "Гуйгуцзы"
          }
        ]
      },
      {
        id: 217,
        question: "К кому следует обратиться, чтобы совершить Перерождение?",
        answers: [
          {
            correct: false,
            title: "К Старейшине Города Драконов"
          },
          {
            correct: false,
            title: "К Посланнице Морая"
          },
          {
            correct: true,
            title: "К Мастеру перерождения"
          },
          {
            correct: false,
            title: "К Великому ученому Города Драконов"
          }
        ]
      },
      {
        id: 218,
        question: "Какие предметы требуются для заточки снаряжения?",
        answers: [
          {
            correct: true,
            title: "Камни бессмертных"
          },
          {
            correct: false,
            title: "Совершенные камени"
          },
          {
            correct: false,
            title: "Камни души"
          },
          {
            correct: false,
            title: "Камни восьми диаграмм"
          }
        ]
      },
      {
        id: 219,
        question: "Сколько всего мастеров телепорта в Городе Драконов?",
        answers: [
          {
            correct: false,
            title: "1"
          },
          {
            correct: false,
            title: "2"
          },
          {
            correct: false,
            title: "3"
          },
          {
            correct: true,
            title: "4"
          }
        ]
      },
      {
        id: 220,
        question:
          "К кому нужно обратиться, чтобы улучшить вплавленные в снаряжение камни или чтобы превратить их в камни другого типа?",
        answers: [
          {
            correct: false,
            title: "К Ван Цаю"
          },
          {
            correct: true,
            title: "К Торговке Юн"
          },
          {
            correct: false,
            title: "К Кузнецу"
          },
          {
            correct: false,
            title: "К Алхимику"
          }
        ]
      },
      {
        id: 221,
        question:
          "Какой из следующих предметов позволяет попасть прямо ко входу в подземелье?",
        answers: [
          {
            correct: true,
            title: "Волшебная кукла"
          },
          {
            correct: false,
            title: "Портал в город"
          },
          {
            correct: false,
            title: "Руна переноса"
          },
          {
            correct: false,
            title: "Колокол телепортации"
          }
        ]
      },
      {
        id: 222,
        question:
          "С какого уровня можно открывать энергетические точки в системе Каналов души?",
        answers: [
          {
            correct: false,
            title: "30"
          },
          {
            correct: false,
            title: "35"
          },
          {
            correct: true,
            title: "40"
          },
          {
            correct: false,
            title: "45"
          }
        ]
      },
      {
        id: 223,
        question:
          "До какого значения увеличивается лимит принимаемых заданий, если использовать Камень дополнительных заданий?",
        answers: [
          {
            correct: false,
            title: "20"
          },
          {
            correct: false,
            title: "25"
          },
          {
            correct: true,
            title: "30"
          },
          {
            correct: false,
            title: "35"
          }
        ]
      },
      {
        id: 224,
        question:
          "Сколько очков репутации нужно набрать, чтобы получить комплект снаряжения первого воинского ранга?",
        answers: [
          {
            correct: false,
            title: "200"
          },
          {
            correct: true,
            title: "300"
          },
          {
            correct: false,
            title: "400"
          },
          {
            correct: false,
            title: "500"
          }
        ]
      },
      {
        id: 225,
        question: "Какой из этих типов оружия могут использовать Жнецы?",
        answers: [
          {
            correct: true,
            title: "Косы"
          },
          {
            correct: false,
            title: "Мечи"
          },
          {
            correct: false,
            title: "Магические сферы"
          },
          {
            correct: false,
            title: "Кинжалы"
          }
        ]
      },
      {
        id: 226,
        question:
          "Какой предмет экипировки позволяет питомцам не становиться голодными?",
        answers: [
          {
            correct: false,
            title: "Оружие"
          },
          {
            correct: false,
            title: "Плащ"
          },
          {
            correct: true,
            title: "Трактат"
          },
          {
            correct: false,
            title: "Полет"
          }
        ]
      },
      {
        id: 227,
        question: "Какой горячей клавишей вызывается окно изучения умений?",
        answers: [
          {
            correct: true,
            title: "R"
          },
          {
            correct: false,
            title: "Q"
          },
          {
            correct: false,
            title: "F"
          },
          {
            correct: false,
            title: "E"
          }
        ]
      },
      {
        id: 228,
        question:
          "Сколько единиц здоровья приносит Призракам каждая единица очков характеристик, вложенная в Выносливость?",
        answers: [
          {
            correct: false,
            title: "10"
          },
          {
            correct: false,
            title: "11"
          },
          {
            correct: false,
            title: "12"
          },
          {
            correct: true,
            title: "13"
          }
        ]
      },
      {
        id: 229,
        question:
          "Какой предмет необходим для заполнения приглашений на свадебную церемонию?",
        answers: [
          {
            correct: false,
            title: "Свадебный сертификат"
          },
          {
            correct: true,
            title: "Свадебное свидетельство"
          },
          {
            correct: false,
            title: "Свадебное вино"
          },
          {
            correct: false,
            title: "Свадебные конфеты"
          }
        ]
      },
      {
        id: 230,
        question: "Начиная с какого уровня можно попасть в Ущелье Феникса?",
        answers: [
          {
            correct: true,
            title: "30"
          },
          {
            correct: false,
            title: "40"
          },
          {
            correct: false,
            title: "50"
          },
          {
            correct: false,
            title: "60"
          }
        ]
      },
      {
        id: 231,
        question:
          "Когда И Тяньюань был молод, ему нравилась одна девушка из сидов по имени Юй Хань. Как ее зовут теперь?",
        answers: [
          {
            correct: false,
            title: "И Юйсян"
          },
          {
            correct: false,
            title: "И Линъюй"
          },
          {
            correct: true,
            title: "И Ванжань"
          },
          {
            correct: false,
            title: "И Фэйянь"
          }
        ]
      },
      {
        id: 232,
        question:
          "Лола - известный исследователь Города Драконов. Около статуи какого из четырех небесных королей она потеряла свой рюкзак?",
        answers: [
          {
            correct: true,
            title: "Владыки До Вэна"
          },
          {
            correct: false,
            title: "Владыки Гуанму"
          },
          {
            correct: false,
            title: "Владыки Цзен Чана"
          },
          {
            correct: false,
            title: "Владыки Чи Го"
          }
        ]
      },
      {
        id: 233,
        question:
          "Кто выдает персонажу ежедневное задание 'Ценный камень' на 46 уровне?",
        answers: [
          {
            correct: false,
            title: "Чжан Уцзи"
          },
          {
            correct: false,
            title: "Ду Жо"
          },
          {
            correct: true,
            title: "Хоу Жэнь Си"
          },
          {
            correct: false,
            title: "Ли Мэнбай"
          }
        ]
      },
      {
        id: 234,
        question:
          "На Переправе Душ есть три странствующих персонажа, которые щедро награждают тех, кто их встретит. Кто из следующих в списке не принадлежит к этой тройке?",
        answers: [
          {
            correct: false,
            title: "Старик на ослике"
          },
          {
            correct: false,
            title: "Заплутавший звездный дух"
          },
          {
            correct: false,
            title: "Дозорный"
          },
          {
            correct: true,
            title: "Пляшущая богиня"
          }
        ]
      },
      {
        id: 235,
        question:
          "В какой части Переправы Душ находится вход в Светлую пещеру?",
        answers: [
          {
            correct: true,
            title: "В Поселении Кунтун"
          },
          {
            correct: false,
            title: "В Руинах храма огня"
          },
          {
            correct: false,
            title: "В Павильоне полумесяца"
          },
          {
            correct: false,
            title: "В Городе странников"
          }
        ]
      },
      {
        id: 236,
        question:
          "Появлению расы Теней сопутствовало изменение фона страницы выбора персонажей. Что за место было там изображено?",
        answers: [
          {
            correct: false,
            title: "Облачный путь"
          },
          {
            correct: false,
            title: "Водопад Млечного пути"
          },
          {
            correct: true,
            title: "Жемчужный водопад"
          },
          {
            correct: false,
            title: "Пруд омытых песков"
          }
        ]
      },
      {
        id: 237,
        question:
          "Богини с Переправы Душ стараются не принимать участия в мирских делах и живут в уединенном чертоге. Что это за место?",
        answers: [
          {
            correct: false,
            title: "Терраса Сансары"
          },
          {
            correct: false,
            title: "Алтарь истины"
          },
          {
            correct: false,
            title: "Павильон полумесяца"
          },
          {
            correct: true,
            title: "Небесный дворец"
          }
        ]
      },
      {
        id: 238,
        question:
          "С какими существами воины Идеального мира вынуждены сражаться в Мираже блуждающих песков и Мираже песчаных бурь?",
        answers: [
          {
            correct: false,
            title: "С Богами смерти"
          },
          {
            correct: false,
            title: "С Якшасами"
          },
          {
            correct: false,
            title: "С Тенями"
          },
          {
            correct: true,
            title: "С Демонами ночи"
          }
        ]
      },
      {
        id: 239,
        question:
          "Главным чудом Лунной гавани считается ее мощная флотилия. Из скольки кораблей она состоит?",
        answers: [
          {
            correct: false,
            title: "3"
          },
          {
            correct: true,
            title: "5"
          },
          {
            correct: false,
            title: "7"
          },
          {
            correct: false,
            title: "9"
          }
        ]
      },
      {
        id: 240,
        question: "Потомками представителей каких двух рас считаются Тени?",
        answers: [
          {
            correct: false,
            title: "Людей и Демонов ночи"
          },
          {
            correct: false,
            title: "Сидов и Богов смерти"
          },
          {
            correct: true,
            title: "Людей и Богов смерти"
          },
          {
            correct: false,
            title: "Людей и Сына бога"
          }
        ]
      },
      {
        id: 241,
        question:
          "Кто устроил мятеж в Аквиларии, намереваясь убить Сына бога и его жену Юлию?",
        answers: [
          {
            correct: false,
            title: "Боги смерти"
          },
          {
            correct: true,
            title: "Демоны ночи"
          },
          {
            correct: false,
            title: "Якшасы"
          },
          {
            correct: false,
            title: "Члены Лиги семи убийств"
          }
        ]
      },
      {
        id: 242,
        question: "Как называется остров, который считается родиной Теней?",
        answers: [
          {
            correct: false,
            title: "Переправа Душ"
          },
          {
            correct: true,
            title: "Аквилария"
          },
          {
            correct: false,
            title: "Остров Предков"
          },
          {
            correct: false,
            title: "Небеса Прозрения"
          }
        ]
      },
      {
        id: 243,
        question:
          "Кто изначально запечатал семерых Небесных зверей на Переправе душ?",
        answers: [
          {
            correct: false,
            title: "Старейшина Теней"
          },
          {
            correct: false,
            title: "Герои Острова странствующих рыцарей"
          },
          {
            correct: false,
            title: "Сын бога"
          },
          {
            correct: true,
            title: "Богини Небесного дворца"
          }
        ]
      },
      {
        id: 244,
        question: "Кто не обучает юных героев на Переправе душ?",
        answers: [
          {
            correct: true,
            title: "Сеун Сюань"
          },
          {
            correct: false,
            title: "Фэй Кунсин"
          },
          {
            correct: false,
            title: "Лен Фэйянь"
          },
          {
            correct: false,
            title: "Фэй Лэн"
          }
        ]
      },
      {
        id: 245,
        question:
          "На Переправе душ воины помогают собрать и запечатать души семи священных зверей. Кто из этих зверей захватил Светлую пещеру и тайно сеял беспорядки на Переправе душ?",
        answers: [
          {
            correct: false,
            title: "Безмолвный феникс"
          },
          {
            correct: true,
            title: "Снежный лис"
          },
          {
            correct: false,
            title: "Пламенный леопард"
          },
          {
            correct: false,
            title: "Семидушный зверь"
          }
        ]
      },
      {
        id: 246,
        question:
          "На Переправе душ воины помогают собрать и запечатать души семи священных зверей. Кто из них первым встречается юным героям?",
        answers: [
          {
            correct: false,
            title: "Пламенный леопард"
          },
          {
            correct: false,
            title: "Безумная обезьяна"
          },
          {
            correct: true,
            title: "Огненный мотылек"
          },
          {
            correct: false,
            title: "Семидушный зверь"
          }
        ]
      },
      {
        id: 247,
        question:
          "На какое количество владений делится карта территорий Идеального мира?",
        answers: [
          {
            correct: false,
            title: "50"
          },
          {
            correct: false,
            title: "51"
          },
          {
            correct: true,
            title: "52"
          },
          {
            correct: false,
            title: "53"
          }
        ]
      },
      {
        id: 248,
        question:
          "На каких уровнях доступны ежедневные задания из серии 'Времена года'?",
        answers: [
          {
            correct: false,
            title: "80-95"
          },
          {
            correct: true,
            title: "80-99"
          },
          {
            correct: false,
            title: "85-95"
          },
          {
            correct: false,
            title: "85-99"
          }
        ]
      },
      {
        id: 249,
        question:
          "Какова наивысшая категория магических карт среди представленных в справочнике по картам?",
        answers: [
          {
            correct: true,
            title: "S+"
          },
          {
            correct: false,
            title: "S"
          },
          {
            correct: false,
            title: "A"
          },
          {
            correct: false,
            title: "B"
          }
        ]
      },
      {
        id: 250,
        question:
          "Сколько Знаков боевой песни требуется для создания одной Нашивки офицера-призрака?",
        answers: [
          {
            correct: false,
            title: "1"
          },
          {
            correct: true,
            title: "2"
          },
          {
            correct: false,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          }
        ]
      },
      {
        id: 251,
        question:
          "Какого уровня небес нужно достичь для входа в подземелье 'Храм Стихий'?",
        answers: [
          {
            correct: false,
            title: "10 уровня Призрачного неба"
          },
          {
            correct: true,
            title: "1 уровня Тайного неба"
          },
          {
            correct: false,
            title: "10 уровня Неба миражей"
          },
          {
            correct: false,
            title: "1 уровня Совершенного неба"
          }
        ]
      },
      {
        id: 252,
        question:
          "Каков текущий максимальный уровень ячеек для магических карт?",
        answers: [
          {
            correct: false,
            title: "5"
          },
          {
            correct: false,
            title: "6"
          },
          {
            correct: false,
            title: "7"
          },
          {
            correct: true,
            title: "8"
          }
        ]
      },
      {
        id: 253,
        question:
          "Убийство какого из монстров не интересует Хранителя наград Нерушимого города, выдающего задания серии 'Опытный охотник'?",
        answers: [
          {
            correct: true,
            title: "Аурогон Владыка Драконов"
          },
          {
            correct: false,
            title: "Владыка иллюзий"
          },
          {
            correct: false,
            title: "Безумная принцесса Лян Цзи"
          },
          {
            correct: false,
            title: "Великая жрица Соледад"
          }
        ]
      },
      {
        id: 254,
        question:
          "Какого уровня нужно достичь персонажу, чтобы открыть доступ к системе очков активности?",
        answers: [
          {
            correct: false,
            title: "90"
          },
          {
            correct: false,
            title: "95"
          },
          {
            correct: true,
            title: "100"
          },
          {
            correct: false,
            title: "105"
          }
        ]
      },
      {
        id: 255,
        question:
          "В каком из этих мест нельзя провести договорные бои между гильдиями?",
        answers: [
          {
            correct: false,
            title: "Земли драконов"
          },
          {
            correct: false,
            title: "Перечный луг"
          },
          {
            correct: false,
            title: "Поле костей"
          },
          {
            correct: true,
            title: "Ущелье волчьего тотема"
          }
        ]
      },
      {
        id: 256,
        question:
          "Какую горячую клавишу нужно нажать, чтобы вызвать меню настроек группы?",
        answers: [
          {
            correct: false,
            title: "G"
          },
          {
            correct: true,
            title: "T (правильный, но не правильный ответ %)"
          },
          {
            correct: false,
            title: "O"
          },
          {
            correct: false,
            title: "P"
          }
        ]
      },
      {
        id: 257,
        question:
          "С какого уровня становится доступным для выполнения начало серии заданий 'Обряд инициации'?",
        answers: [
          {
            correct: false,
            title: "40"
          },
          {
            correct: false,
            title: "45"
          },
          {
            correct: true,
            title: "50"
          },
          {
            correct: false,
            title: "55"
          }
        ]
      },
      {
        id: 258,
        question:
          "Сколько ярмарочных золотых слитков можно получить в награду за достижение 105 уровня?",
        answers: [
          {
            correct: false,
            title: "260"
          },
          {
            correct: false,
            title: "280"
          },
          {
            correct: true,
            title: "300"
          },
          {
            correct: false,
            title: "320"
          }
        ]
      },
      {
        id: 259,
        question:
          "Какой босс подземелья 'Серебряная цитадель' не может оставить после себя книги навыков?",
        answers: [
          {
            correct: true,
            title: "Серебряный дракон"
          },
          {
            correct: false,
            title: "Столетняя золотая лягушка"
          },
          {
            correct: false,
            title: "Демонесса цветов"
          },
          {
            correct: false,
            title: "Му Шихуань, потомок Тирана"
          }
        ]
      },
      {
        id: 260,
        question:
          "Сколько серебряных монет можно получить при прохождении подземелья 'Серебряная цитадель' в режиме 'Принцесса Лян Цзи'?",
        answers: [
          {
            correct: false,
            title: "2 или 102"
          },
          {
            correct: false,
            title: "5 или 105"
          },
          {
            correct: true,
            title: "8 или 108"
          },
          {
            correct: false,
            title: "10 или 110"
          }
        ]
      },
      {
        id: 261,
        question:
          "Сколько склянок Живой крови необходимо для создания книги умения 'Заоблачный гром'?",
        answers: [
          {
            correct: false,
            title: "2"
          },
          {
            correct: true,
            title: "8"
          },
          {
            correct: false,
            title: "14"
          },
          {
            correct: false,
            title: "20"
          }
        ]
      },
      {
        id: 262,
        question:
          "Сколько очков активности в день можно использовать при отсутствии в инвентаре Сферы алхимика?",
        answers: [
          {
            correct: false,
            title: "20"
          },
          {
            correct: false,
            title: "25"
          },
          {
            correct: true,
            title: "30"
          },
          {
            correct: false,
            title: "35"
          }
        ]
      },
      {
        id: 263,
        question: "Сколько Камней грез находится в Городе Драконов?",
        answers: [
          {
            correct: false,
            title: "1"
          },
          {
            correct: false,
            title: "2"
          },
          {
            correct: true,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          }
        ]
      },
      {
        id: 264,
        question:
          "Каково максимальное количество дней, которое можно пропустить без отметок в календаре, и при этом получить положительную отметку о регистрации за данный месяц?",
        answers: [
          {
            correct: false,
            title: "2"
          },
          {
            correct: true,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          }
        ]
      },
      {
        id: 265,
        question:
          "Сколько Камней песни требуется для повторного улучшения оружия восьмого воинского ранга?",
        answers: [
          {
            correct: false,
            title: "8000"
          },
          {
            correct: false,
            title: "8500"
          },
          {
            correct: true,
            title: "9000"
          },
          {
            correct: false,
            title: "9500"
          }
        ]
      },
      {
        id: 266,
        question:
          "Сколько материалов из Миража блуждающих песков требуется для создания оружия с прекрасными характеристиками в бою против монстров?",
        answers: [
          {
            correct: false,
            title: "3"
          },
          {
            correct: false,
            title: "6"
          },
          {
            correct: false,
            title: "9"
          },
          {
            correct: true,
            title: "12"
          }
        ]
      },
      {
        id: 267,
        question:
          "Сколько нужно потратить очков подвигов, чтобы получить у глав фракций Морая Приказ Поджигателя небес по ежедневному заданию?",
        answers: [
          {
            correct: false,
            title: "18"
          },
          {
            correct: true,
            title: "20"
          },
          {
            correct: false,
            title: "22"
          },
          {
            correct: false,
            title: "24"
          }
        ]
      },
      {
        id: 268,
        question:
          "Сколько Камней песни можно получить в награду за выполнение ежедневного задания в Мираже песчаных бурь?",
        answers: [
          {
            correct: false,
            title: "100"
          },
          {
            correct: true,
            title: "105"
          },
          {
            correct: false,
            title: "110"
          },
          {
            correct: false,
            title: "115"
          }
        ]
      },
      {
        id: 269,
        question:
          "Сколько боссов требуется убить в Мираже песчаных бурь, чтобы выполнить ежедневное задание 'Пляска песков'?",
        answers: [
          {
            correct: false,
            title: "2"
          },
          {
            correct: false,
            title: "3"
          },
          {
            correct: true,
            title: "4"
          },
          {
            correct: false,
            title: "5"
          }
        ]
      },
      {
        id: 270,
        question:
          "Какое число персонажей должно состоять в группе для выполнения заданий подземелий 'Мираж блуждающих песков' и 'Мираж песчаных бурь', соответственно?",
        answers: [
          {
            correct: true,
            title: "2-6 и 7-10"
          },
          {
            correct: false,
            title: "5-6 и 7-10"
          },
          {
            correct: false,
            title: "4-6 и 8-10"
          },
          {
            correct: false,
            title: "5-6 и 8-10"
          }
        ]
      },
      {
        id: 271,
        question:
          "Каким условиям должен удовлетворять персонаж для входа в Мираж блуждающих песков?",
        answers: [
          {
            correct: false,
            title: "Получить 50 уровень и статус 'Жестокий'"
          },
          {
            correct: false,
            title: "Получить 55 уровень и статус 'Загадочный'"
          },
          {
            correct: true,
            title: "Получить 50 уровень и статус 'Загадочный'"
          },
          {
            correct: false,
            title: "Получить 55 уровень и статус 'Жестокий'"
          }
        ]
      },
      {
        id: 272,
        question:
          "Сколько Пропусков в Мираж песчаных бурь можно получать у Ва Шинью ежедневно?",
        answers: [
          {
            correct: false,
            title: "1"
          },
          {
            correct: true,
            title: "2"
          },
          {
            correct: false,
            title: "3"
          },
          {
            correct: false,
            title: "4"
          }
        ]
      },
      {
        id: 273,
        question: "Каковы условия для входа в Мираж песчаных бурь?",
        answers: [
          {
            correct: false,
            title:
              "2 перерождение, 100 уровень, Бессмертный или Сын ада, 10 уровень Неба миражей"
          },
          {
            correct: true,
            title:
              "2 перерождение, 100 уровень, Безупречный или Демон, 10 уровень Неба миражей"
          },
          {
            correct: false,
            title:
              "2 перерождение, 100 уровень, Бессмертный или Сын ада, 10 уровень Тайного неба"
          },
          {
            correct: false,
            title:
              "2 перерождение, 100 уровень, Безупречный или Демон, 10 уровень Тайного неба"
          }
        ]
      },
      {
        id: 274,
        question:
          "Где располагается вход в подземелья 'Мираж блуждающих песков' и 'Мираж песчаных бурь'?",
        answers: [
          {
            correct: true,
            title: "На Поле костей"
          },
          {
            correct: false,
            title: "В Ветряном ущелье"
          },
          {
            correct: false,
            title: "В Долине песчаных бурь"
          },
          {
            correct: false,
            title: "В Высохшем море"
          }
        ]
      },
      {
        id: 275,
        question: "Какое имя носит локация для новичков?",
        answers: [
          {
            correct: false,
            title: "Переправа духов"
          },
          {
            correct: false,
            title: "Перевал душ"
          },
          {
            correct: true,
            title: "Переправа душ"
          },
          {
            correct: false,
            title: "Перевал духов"
          }
        ]
      },
      {
        id: 276,
        question: "Какая из этих особенностей Жнеца уникальна?",
        answers: [
          {
            correct: false,
            title: "Способность отталкивать противников"
          },
          {
            correct: false,
            title: "Способность принимать другой облик"
          },
          {
            correct: false,
            title: "Способность призывать боевых питомцев"
          },
          {
            correct: true,
            title: "Способность применять заклинания во время движения"
          }
        ]
      },
      {
        id: 277,
        question: "Оружие какого типа могут использовать Призраки?",
        answers: [
          {
            correct: false,
            title: "Простой клинок"
          },
          {
            correct: false,
            title: "Простой меч"
          },
          {
            correct: false,
            title: "Кинжалы"
          },
          {
            correct: true,
            title: "Сабля"
          }
        ]
      },
      {
        id: 278,
        question: "Как называется столица Теней?",
        answers: [
          {
            correct: false,
            title: "Небесный дворец"
          },
          {
            correct: false,
            title: "Заброшенный город"
          },
          {
            correct: true,
            title: "Лунная гавань"
          },
          {
            correct: false,
            title: "Город странников"
          }
        ]
      },
      {
        id: 279,
        question:
          "Какая новая раса появилась в Идеальном мире, когда огромный корабль, тянущий за собой целый остров, показался на северо-востоке Безбрежного моря?",
        answers: [
          {
            correct: false,
            title: "Древние"
          },
          {
            correct: false,
            title: "Народ Огненного дракона"
          },
          {
            correct: false,
            title: "Амфибии"
          },
          {
            correct: true,
            title: "Тени"
          }
        ]
      },
      {
        id: 280,
        question:
          "Кто из богов существовал в самом начале мира среди безмерного Хаоса?",
        answers: [
          {
            correct: false,
            title: "Бог воды Гунгун"
          },
          {
            correct: true,
            title: "Бог-создатель Пань Гу"
          },
          {
            correct: false,
            title: "Бог огня Чжужун"
          },
          {
            correct: false,
            title: "Богиня земли Нюйва"
          }
        ]
      },
      {
        id: 281,
        question: "Почему Чжун Лин никогда не женился?",
        answers: [
          {
            correct: false,
            title:
              "Чжун Лин: Начальник стражи Города Мечей. Его отец и его дед также были"
          },
          {
            correct: false,
            title: "Высокопоставленными стражами и храбрыми военачальниками."
          },
          {
            correct: true,
            title:
              "В молодости Чжун Лин полюбил дочку главы города, но она отдала свое сердце офицеру сидов Тянь Яо."
          },
          {
            correct: false,
            title: "Поэтому Чжун Лин никогда не женился."
          }
        ]
      }
    ]
  },
  mutations: {
    setQuery: (state, query) => (state.query = query)
  }
});
