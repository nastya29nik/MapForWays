// Координаты точек
const points = {
    A: {
        lat: 55.646061910390536, 
        lng: 38.0057492404587, 
        name: "Станция Малаховка", 
        info: "Станция Малаховка — железнодорожная платформа Казанского направления. Открыта в 1884 году. Названа в честь купца Василия Малахова, владельца местной усадьбы. ",
        image: "images/Malahovka_Station.jpg"
    },
    B: {
        lat: 55.64757879127236, 
        lng: 38.00602075374311, 
        name: "Ул. Константинова (Аптекарская)", 
        info: "Пересечение улицы Константиново и Большого Коренёвского шоссе. Улица Константиново раньше называлась Аптекарская. Здесь раньше находилась аптека, принадлежавшая П.А.Соколову. В 1990-е годы в здании располагалась редакция газеты.",
        image: "images/Apteka.jpg"
    },
    C: {
        lat: 55.64884818166064, 
        lng: 38.00714574652059, 
        name: "Пр-д им. Павла и Сергея Соколовых", 
        info: "В 2018 году сообщалось, что Совет депутатов городского округа одобрил присвоение имени братьев Соколовых безымянному проезду, который находился между Большим Коренёвским шоссе и улицей Театральная. Решение было принято в связи с тем, что в конце XIX — начале XX века братья Соколовы были владельцами Малаховки и жили на её северной стороне. Они пожертвовали часть своей земли на строительство церкви Петра и Павла, храм был освящён в 1902 году.",
        image: "images/socolovi.jpg"
    },
    D: {
        lat: 55.64693380630757, 
        lng: 38.00951653895977, 
        name: "Летний парк", 
        info: "Летний театр — культурное сердце дачной Малаховки начала XX века. Здесь показывали спектакли из репертуара знаменитых московских театров: Малого, Художественного, Корша, Незлобина и других. Осенью 1915 года на сцене Летнего театра состоялся дебют актрисы Фаины Раневской в спектакле «Тот, кто получает пощёчины» по пьесе Леонида Андреева. Также на сцене театра давали концерты Фёдор Шаляпин, Леонид Собинов, Антонина Нежданова, Александр Вертинский, Айседора Дункан.",
        image: "images/Theater.jpg"
    },
    E: {
        lat: 55.646956601772146, 
        lng: 38.01221817971968, 
        name: "МОУ гимназия №46", 
        info: "В 1938 году возле станции Малаховка на ул. Грибоедова открыли здание школы №1, где школьники получали образование в 8, 9 и 10-м классах. В 1965 году школа №1 сменила номер и стала гимназией №46. Сейчас гимназия №46 объединяет две старейшие школы городского округа Люберцы: гимназию №46 и школу №48.",
        image: "images/gimnazia.png"
    },
    F: {
        lat: 55.64462296407635, 
        lng: 38.0124341693049, 
        name: "Доходный дом братьев Соколовых, Южная, 18", 
        info: "Бывший доходный дом братьев Соколовых — здание в посёлке Малаховка (Московская область). Находится по адресу: ул. Южная, 18. Бревенчатый, одноэтажный дом украшен резьбой по фронтонам и по периметру крыши. Окна декорированы резными наличниками.",
        image: "images/dom.jpg"
    },
    G: {
        lat: 55.64630717854699, 
        lng: 38.01520915871104, 
        name: "Петропавловский парк", 
        info: "Петропавловский парк — парк культуры и отдыха в посёлке городского типа Малаховка городского округа Люберцы Московской области. Здесь часто проводятся различные мероприятия для взрослых и детей.",
        image: "images/petropavlovskiy.jpg"
    },
    H: {
        lat: 55.64783917879239, 
        lng: 38.01526492648276, 
        name: "Храм апостолов Петра и Павла", 
        info: "Храм был основан братьями Соколовыми в 1902-1903 годах. После доработки и росписи он был полностью завершён к 1909 году. Закрытый в 1937 году, храм был возвращён верующим в 1992-м, и с тех пор велись восстановительные работы. Сегодня храм полноценно работает и является действующим духовным центром Малаховки. В храме особо почитается икона Пресвятой Богородицы «Споручница грешных».",
        image: "images/Hram.jpg"
    },
    I: {
        lat: 55.64667239006622, 
        lng: 38.019179372893966, 
        name: "Старинная Дача", 
        info: "Одна из сохранившихся старинных дач Малаховки с резными наличниками.",
        image: "images/dacha.jpg"
    },
    J: {
        lat: 55.644015945690114, 
        lng: 38.02376691581956, 
        name: "Сквер Юрия Ломакина", 
        info: "Сквер имени Юрия Сергеевича Ломакина — парк культуры и отдыха в Малаховке. Название, присвоенное скверу в 2020 году, связано с подвигом Юрия Сергеевича Ломакина в годы Великой Отечественной войны. В сквере часто проходят различные мероприятия для жителей посёлка.",
        image: "images/Lomakin.jpg"
    }
};

// Пути
const predefinedRoutes = {
    '1': [
        [55.646061910390536,38.0057492404587], // A: Станция Малаховка
        [55.646042304366276,38.00611451271804],
        [55.64614089812505,38.00602465871601],
        [55.64757879127236,38.00602075374311], // В: Ул. Константинова (Аптекарская)
        [55.64883119789549,38.00634604667689],
        [55.64884818166064,38.00714574652059], // C: Пр-д им. Павла и Сергея Соколовых
        [55.648839919037336,38.00816793715021],
        [55.64718312167128,38.007706372076775],
        [55.64686611240105,38.009138671690735],
        [55.64693380630757,38.00951653895977], // D: Летний парк
        [55.647020331669125,38.00969882293896],
        [55.64746019855894,38.00989462419705],
        [55.646956601772146,38.01221817971968], // E: МОУ гимназия №46
        [55.64680334347952,38.012793965622635],
        [55.64617489747359,38.01220435088239],
        [55.646770214388695,38.00958200438818],
        [55.64544529839206,38.009026827269416],
        [55.64462296407635,38.0124341693049], // F: Доходный дом братьев Соколовых, Южная, 18
        [55.64432056623387,38.01351587548468],
        [55.64630717854699,38.01520915871104], // G: Петропавловский парк
        [55.64757222828006,38.01617687754783],
        [55.64783917879239,38.01526492648276], // H: Храм апостолов Петра и Павла
        [55.64667239006622,38.019179372893966], // I: Старинная Дача
        [55.64662385229306,38.01935371647993],
        [55.64592156462682,38.0187958170048],
        [55.645413429989816,38.02059038366092],
        [55.644713350673086,38.02287479963553],
        [55.644176371220276,38.022461739447245],
        [55.64413086414715,38.023625818159715],
        [55.644015945690114,38.02376691581956] // J: Сквер Юрия Ломакина
    ],
    '2': [ 
        
    ]
};

// Последовательность точек
const routePoints = {
    '1': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    '2': ['B', 'A', 'C'] 
};

// Переменные для хранения состояния карты
let map, routePolyline, markers = [];

// Инициализируем карту
function initMap() {
    const urlParams = new URLSearchParams(window.location.search);
    let routeNumber = urlParams.get('route') || '1';

    // --- ИЗМЕНЕНО: Проверка, если запрошен удаленный 3-й маршрут, переключаем на 1-й ---
    if (routeNumber === '3') routeNumber = '1';

    const startPointKey = routePoints[routeNumber][0];
    const startPoint = points[startPointKey];

    map = L.map('map').setView([startPoint.lat, startPoint.lng], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    // --- ИЗМЕНЕНО: Заменили addAllPoints на функцию рисования конкретного маршрута ---
    drawRoute(routeNumber);
    
    if (window.Telegram && window.Telegram.WebApp) {
        addBackButton();
    }
}

function addRoutePoints(routeNum) {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    const pointsToShow = routePoints[routeNum];
    if (!pointsToShow) return;

    // --- ИЗМЕНЕНО: Добавили 'index' в цикл, чтобы считать порядковый номер (0, 1, 2...) ---
    pointsToShow.forEach((key, index) => {
        const point = points[key];
        if (point) {
            // --- НОВОЕ: Рассчитываем номер для отображения (index + 1), то есть 1, 2, 3... ---
            const displayNumber = index + 1;

            const marker = L.marker([point.lat, point.lng], { 
                // --- ИЗМЕНЕНО: Передаем в иконку номер (1, 2...), а не ключ (A, B...) ---
                icon: createCustomIcon(displayNumber),
                zIndexOffset: 1000 
            }).addTo(map);
            
            let popupContent = `
                <div style="text-align: center; max-width: 250px;">
                    <b>${point.name}</b><br>
                    <small>${point.info}</small>
            `;
            if (point.image) {
                popupContent += `<br><img src="${point.image}" style="max-width: 100%; max-height: 150px; margin-top: 10px; border-radius: 5px;" onerror="this.style.display='none'">`;
            }
            popupContent += `</div>`;
            marker.bindPopup(popupContent);
            markers.push(marker);
        }
    });
}

function drawRoute(routeNum) {
    if (routePolyline) {
        map.removeLayer(routePolyline);
    }
    
    const routeCoordinates = predefinedRoutes[routeNum];
    
    if (routeCoordinates) {
        routePolyline = L.polyline(routeCoordinates, {
            color: 'purple', 
            weight: 5,
            opacity: 0.7,
            smoothFactor: 1
        }).addTo(map);
        map.fitBounds(routePolyline.getBounds());
    }

    addRoutePoints(routeNum);
    updateRouteInfo(routeNum);
}

// --- ИЗМЕНЕНО: Теперь функция принимает label (текст/цифру), который нужно написать ---
function createCustomIcon(label) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            width: 30px; 
            height: 30px; 
            background: #9C27B0; 
            color: white; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            ">${label}</div>`, // Сюда вставится 1, 2, 3...
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15]
    });
}

function updateRouteInfo(routeNum) {
    const infoDiv = document.getElementById('routeInfo');
    if (infoDiv) {
        infoDiv.textContent = `Маршрут №${routeNum}`;
    }
}

function addBackButton() {
    const backButton = document.createElement('div');
    backButton.className = 'back-button';
    backButton.innerHTML = '<button style="padding: 8px 15px; background: white; border: none; border-radius: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); font-weight: bold; cursor: pointer;">← Назад</button>';
    backButton.onclick = function() {
        window.Telegram.WebApp.close();
    };
    document.body.appendChild(backButton);
}

document.addEventListener('DOMContentLoaded', initMap);