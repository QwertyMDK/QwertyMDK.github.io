var mangas = [
    {
        id: 1,
        name: 'One Piece / Ван пис',
        tome: 95,
        chapterCount: 959,
        status: "выпуск продолжается",
        genres: [
            'сёнэн', 'боевик', 'психология', 'сверхъестественное', 'приключения' 
        ],
        year: 1997,
        poster: './../img/Posters/OnePiecePoster1.jpg',
        author: 'Ода Эйитиро',
        short_description: 'Последние слова, произнесённые Королем Пиратов Гол Д. Роджером перед казнью, вдохновили многих выйти в море: "Мои сокровища? Я завещаю их тому, кто сможет их найти Ищите! Я все оставил в одном месте!". Лишённые сна и покоя люди ринулись на Гранд Лайн, самое опасное место в мире. Так началась великая эра пиратов...',
        description: 'Но с каждым годом романтиков становилось все меньше, их постепенно вытесняли прагматичные пираты-разбойники, которым награбленное добро было куда ближе, чем какие-то «никчёмные мечты». Но вот, одним прекрасным днем, семнадцатилетний Монки Д. Луффи исполнил заветную мечту детства — отправился в море. Его цель — ни много, ни мало стать новым Королём Пиратов. За достаточно короткий срок юному капитану удаётся собрать команду, состоящую из не менее амбициозных искателей приключений. И пусть ими движут совершенно разные устремления, главное, этим ребятам важны не столько деньги и слава, сколько куда более ценное – принципы и верность друзьям. И ещё – служение Мечте.'
    }, 
    {
        id: 2,
        name: 'Моя геройская акдемия',
        tome: 25,
        chapterCount: 248,
        status: "выпуск продолжается",
        genres: [
            'сёнэн', 'боевик', 'комедия', 'сверхъестественное', 'школа' 
        ],
        year: 2014,
        poster: './../img/Posters/myHeroAcademy.jpg',
        author: 'Хорикоси Кохэи',
        short_description: 'Если большинство людей владеет суперспособностями, то и воинов правосудия надо много. Школы для одаренных есть везде — а вот Мидории Идзуку, истовому фанату геройских дел, способностей не досталось, о чем он очень жалеет. Но ничего, судьба и храброе сердце однажды свели Мидорию с Всемогущим, сильнейшим героем на свете. Ветерану парень понравился — настолько, что он открыл тому свой истинный облик и решил передать собственный дар. Неподготовленного такая сила просто уничтожит, надо учиться — а значит, юного бойца ждет Геройская Академия!',
        description: 'Однако Идзуку скоро осознал, что до мечты еще далеко — тело не готово, даже после тренировок надо отлеживаться в медпункте. Но под руководством мудрых учителей парень понял главное: в бою решает не грубая сила, а светлая голова; чтение соперника и трезвый расчет позволяют победить, управляя ходом сражения. Конечно, злодеи могучи и многочисленны, зато у героев лучше командная работа — не зря дар Всемогущего носит имя «Один за всех». А вообще, путь к решающей битве только начинается!'    
    }
]



var mangaTop = document.querySelector(".mangaTop");
function generatePage(i){
    var mangaInfoBlock = `<div class="description">                                                        <div class="poster">                                                               <img src="${mangas[i].poster}" alt="">                    </div>                                                                         <div class="info">                                                                 <p><h2>${mangas[i].name}</h2></p>                                            <div class="readBtn"><a href="">Читать мангу</a></div>                         <div class="readBtnSince"><a href="">Читать ${mangas[i].tome} - ${mangas[i].chapterCount}</a></div>                                                           <div>                                                                              <p>Информация о манге</p>                                                      <b>Томов: </b>${mangas[i].tome} , ${mangas[i].status} <br>                                    <b>Жанры: </b> ${mangas[i].genres}<br>                               <b>Автор: </b> ${mangas[i].author}<br>                                             </div>                                                                      </div>                                                                       </div>                                                                         <div class="about">                                                                <p><h2>Описание</h2></p>                                                       <p>${mangas[i].short_description}</p><p>${mangas[i].description}</p>                                                                   </div>`;

    return mangaInfoBlock;
}
mangaTop.innerHTML = generatePage(1);


var newsObject = 
[
    {
        id: 1,
        type: "Статьи",
        title: "Интервью: Сува Митихико - продюсер Аниме detective conan",
        date: new Date(2019, 3, 7),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/1.jpg"
    },
    {
        id: 2,
        type: "Новости",
        title: "Манга Dai Dark автора Dorohedoro наконец стартовал!",
        date: new Date(2018, 11, 14),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/2.jpg"
    },
    {
        id: 3,
        type: "Новости",
        title: "Интервью: Сува Митихико - продюсер Аниме detective conan",
        date: new Date(2019, 3, 3),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/3.jpg"
    },
    {
        id: 4,
        type: "Новости",
        title: "Автор 'Акиры' спустя 38 лет выпускает ваншот к своей манге Kibun wa mo senso",
        date: new Date(2019, 3, 3),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/4.jpg"
    },
    {
        id: 5,
        type: "Новости",
        title: "Исаяма Хадзимэ показал финал манги 'Атаки титанов'",
        date: new Date(2018, 10, 19),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/5.jpg"
    },
    {
        id: 6,
        type: "Новости",
        title: "Исаяма Хадзимэ показал финал манги 'Атаки титанов'",
        date: new Date(2018, 10, 19),
        author: "Мадияр Куанышбеков",
        img: "./img/NewsTitleImage/5.jpg"
    }
]

const newsBlock = document.querySelector('.newsBlock');
function formatDate(date) {
    var dd = newsObject[0].date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = newsObject[0].date.getMonth();
    if (mm < 10) mm = '0' + mm;

    var yy = newsObject[0].date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;  
    
    return dd + '.' + mm + '.' + yy;
}

var newBlock = '';
for(let i=0; i<newsObject.length; i++) {
    var newDate = newsObject[0].date;
    newBlock+= `<div><img src="${newsObject[i].img}" alt=""> <div class="shortInfo">
        <p class="newType">${newsObject[i].type}</p>
        <p class="newTitle">
            ${newsObject[i].title}
        </p>
        <div class="newDateAuthor">
            ${formatDate(newDate)} - by <a>${newsObject[i].author}</a>
        </div>
        <div>
            <ul class="shareIn">
                <li>Fb</li>
                <li>Vk</li>
                <li>Tw</li>
            </ul>
        </div>
    </div></div>`;
}
newsBlock.innerHTML = newBlock;