const urlParams = new URLSearchParams(window.location.search);
const routeNumber = urlParams.get('route') || '1';

// Координаты точек (замените на реальные координаты Малаховки)
const points = {
    A: {
        lat: 55.646061910390536, 
        lng: 38.0057492404587, 
        name: "Станция Малаховка", 
        info: "Default",
        image: "images/Malahovka_Station.jpg"
    },
    B: {
        lat: 55.64757879127236, 
        lng: 38.00602075374311, 
        name: "Ул. Константинова (Аптекарская)", 
        info: "Default",
        image: "images/Apteka.jpg"
    },
    C: {
        lat: 55.64884818166064, 
        lng: 38.00714574652059, 
        name: "Пр-д им. Павла и Сергея Соколовых", 
        info: "Default",
        image: "images/default.png"
    },
    D: {
        lat: 55.64693380630757, 
        lng: 38.00951653895977, 
        name: "Летний парк", 
        info: "Default",
        image: "images/Theater.jpg"
    },
    E: {
        lat: 55.646956601772146, 
        lng: 38.01221817971968, 
        name: "МОУ гимназия №46", 
        info: "Default",
        image: "images/default.png"
    },
    F: {
        lat: 55.64462296407635, 
        lng: 38.0124341693049, 
        name: "Доходный дом братьев Соколовых, Южная, 18", 
        info: "Default",
        image: "images/dom.jpg"
    },
    G: {
        lat: 55.64630717854699, 
        lng: 38.01520915871104, 
        name: "Петропавловский парк", 
        info: "Default",
        image: "images/petropavlovskiy.jpg"
    },
    H: {
        lat: 55.64783917879239, 
        lng: 38.01526492648276, 
        name: "Храм апостолов Петра и Павла", 
        info: "Default",
        image: "images/Hram.jpg"
    },
    I: {
        lat: 55.64667239006622, 
        lng: 38.019179372893966, 
        name: "Старинная Дача", 
        info: "Default",
        image: "images/dacha.jpg"
    },
    J: {
        lat: 55.644015945690114, 
        lng: 38.02376691581956, 
        name: "Сквер Юрия Ломакина", 
        info: "Default",
        image: "images/Lomakin.jpg"
    }
};

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
        [55.64783917879239,38.01526492648276], // H:
        [55.64667239006622,38.019179372893966], // I:
        [55.64662385229306,38.01935371647993],
        [55.64592156462682,38.0187958170048],
        [55.645413429989816,38.02059038366092],
        [55.644713350673086,38.02287479963553],
        [55.644176371220276,38.022461739447245],
        [55.64413086414715,38.023625818159715],
        [55.644015945690114,38.02376691581956] // J:





    ],
    '2': [ // Маршрут B → A → C
        [55.64700495160209, 38.009269735905384], // Точка B
        [55.646988875651324,38.00965024844113], // Промежуточная точка 1
        [55.64747087121461,38.00989717616434], // Промежуточная точка 2
        [55.646800830804715,38.01279673324863], // Промежуточная точка 3
        [55.64751087108444,38.013523496857644],
        [55.64617980827896,38.01746656665488],
        [55.646082731446, 38.01746656665488], // Точка A
        [55.646327588338025,38.01512012972848],
        [55.644318092392886,38.0134946226031],
        [55.64537990517833,38.009313631209764],
        [55.6448459686546,38.00915538087788],
        [55.64488540739174,38.008836198005106],
        [55.64428320376835,38.00836949363653],
        [55.64389942683851,38.008836198005106],
        [55.6417468688482,38.00997345462744],
        [55.6367010136314,38.01019876018473],
        [55.635092756644674,38.0110248805613],
        [55.635257148823655,38.01213433513328],
        [55.635257148823655, 38.01213433513328]  // C
    ],
    '3': [ // Маршрут C → B → A
        [55.6480, 37.7750], // Точка C
        [55.6495, 37.7740], // Промежуточная точка 1
        [55.6500, 37.7730], // Промежуточная точка 2
        [55.6505, 37.7720], // Промежуточная точка 3
        [55.6510, 37.7710], // Промежуточная точка 4
        [55.6515, 37.7700], // Промежуточная точка 5
        [55.64700495160209, 38.009269735905384], // Точка B
        [55.646988875651324,38.00965024844113], // Промежуточная точка 1
        [55.64747087121461,38.00989717616434], // Промежуточная точка 2
        [55.646800830804715,38.01279673324863], // Промежуточная точка 3
        [55.64751087108444,38.013523496857644],
        [55.64617980827896,38.01746656665488],
        [55.646082731446, 38.01746656665488]  // Точка A
    ]
};

// Определяем последовательность точек для каждого маршрута
const routePoints = {
    '1': ['A', 'B', 'C'],
    '2': ['B', 'A', 'C'],
    '3': ['C', 'B', 'A']
};

// Переменные для хранения состояния карты
let map, routePolyline, markers = [];

// Инициализируем карту
function initMap() {
    map = L.map('map').setView([points.A.lat, points.A.lng], 15);
    
    // Добавляем слой с картой (используем OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Сначала добавляем все точки на карту
    addAllPoints();
    
    // Затем рисуем выбранный маршрут
    drawRoute(routeNumber);
    
    // Добавляем кнопки для переключения маршрутов (только для разработки)
    addRouteSwitcher();
    
    // Добавляем кнопку для возврата в Telegram
    if (window.Telegram && window.Telegram.WebApp) {
        addBackButton();
    }
}

// Функция для добавления всех точек на карту
function addAllPoints() {
    for (const key in points) {
        const point = points[key];
        const marker = L.marker([point.lat, point.lng], { 
            icon: createCustomIcon(key),
            zIndexOffset: 1000 // Увеличиваем z-index, чтобы точки были поверх линий
        }).addTo(map);
        
        // Добавляем popup с информацией и изображением
        let popupContent = `
            <div style="text-align: center; max-width: 250px;">
                <b>${point.name} (${key})</b><br>
                ${point.info}
        `;
        
        if (point.image) {
            popupContent += `<br><img src="${point.image}" style="max-width: 100%; max-height: 150px; margin-top: 10px; border-radius: 5px;" onerror="this.style.display='none'">`;
        }
        
        popupContent += `</div>`;
        
        marker.bindPopup(popupContent);
        markers.push(marker);
    }
}

// Функция для рисования маршрута
function drawRoute(routeNum) {
    // Очищаем предыдущий маршрут
    if (routePolyline) {
        map.removeLayer(routePolyline);
    }
    
    // Получаем координаты для выбранного маршрута
    const routeCoordinates = predefinedRoutes[routeNum];
    const pointSequence = routePoints[routeNum];
    
    // Создаем фиолетовую линию маршрута
    routePolyline = L.polyline(routeCoordinates, {
        color: 'purple', 
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1,
        className: 'route-line' // Добавляем класс для стилизации
    }).addTo(map);
    
    // Масштабируем карту чтобы показать весь маршрут
    map.fitBounds(routePolyline.getBounds());
    
    // Обновляем информацию о маршруте
    updateRouteInfo(routeNum, pointSequence);
}

// Функция для создания кастомных иконок
function createCustomIcon(letter) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            width: 35px; 
            height: 35px; 
            background: purple; 
            color: white; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            font-weight: bold;
            font-size: 16px;
            border: 3px solid white;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            z-index: 1000;
            ">${letter}</div>`,
        iconSize: [35, 35],
        iconAnchor: [17, 17]
    });
}

// Функция для обновления информации о маршруте
function updateRouteInfo(routeNum, pointSequence) {
    const routeSequence = pointSequence.join(' → ');
    document.getElementById('routeInfo').textContent = `Маршрут ${routeNum}: ${routeSequence}`;
}

// Функция для добавления кнопки возврата
function addBackButton() {
    const backButton = document.createElement('div');
    backButton.className = 'back-button';
    backButton.innerHTML = '<button style="padding: 5px; background: white; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;">← Назад</button>';
    backButton.onclick = function() {
        window.Telegram.WebApp.close();
    };
    document.body.appendChild(backButton);
}

// Функция для переключения маршрутов (только для разработки)
function switchRoute(routeNum) {
    // Обновляем URL без перезагрузки страницы
    window.history.replaceState({}, '', `?route=${routeNum}`);
    // Перерисовываем маршрут
    drawRoute(routeNum);
}

// Инициализируем карту после загрузки страницы
document.addEventListener('DOMContentLoaded', initMap);