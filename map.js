// Получаем номер маршрута из URL параметров
const urlParams = new URLSearchParams(window.location.search);
const routeNumber = urlParams.get('route') || '1';

// Координаты точек (замените на реальные координаты Малаховки)
const points = {
    A: {
        lat: 55.646082731446, 
        lng: 38.01746656665488, 
        name: "Петропавловский парк", 
        info: "Исторический парк с красивыми аллеями и памятниками архитектуры.",
        image: "images/petropavlovskiy.jpg"
    },
    B: {
        lat: 55.64700495160209, 
        lng: 38.009269735905384, 
        name: "Летний парк", 
        info: "Популярное место отдыха с фонтанами и детскими площадками.",
        image: "images/letniypark.jpg"
    },
    C: {
        lat: 55.635257148823655, 
        lng: 38.01213433513328, 
        name: "Малаховское озеро", 
        info: "Живописное озеро с оборудованной набережной и зоной для пикников.",
        image: "images/malahovskoe.jpg"
    }
};

// Предопределенные маршруты с конкретными координатами пути
const predefinedRoutes = {
    '1': [ // Маршрут A → B → C
        [55.646082731446, 38.01746656665488], // A
        [55.64617980827896,38.01746656665488], // Промежуточная точка 1
        [55.64751087108444,38.013523496857644], // Промежуточная точка 2
        [55.646800830804715,38.01279673324863], // Промежуточная точка 3
        [55.64747087121461,38.00989717616434], // Промежуточная точка 4
        [55.646988875651324,38.00965024844113], // Промежуточная точка 5
        [55.64700495160209, 38.009269735905384], // B
        [55.646866015293064,38.0091681213707], // Промежуточная точка 6
        [55.64676931936851,38.00958453432027], // Промежуточная точка 7
        [55.64545574784159,38.00905345693533], // Промежуточная точка 8
        [55.64537990517833,38.009313631209764], // Промежуточная точка 9
        [55.6448459686546,38.00915538087788], // Промежуточная точка 10
        [55.64488540739174,38.008836198005106],
        [55.64428320376835,38.00836949363653],
        [55.64389942683851,38.008836198005106],
        [55.6417468688482,38.00997345462744],
        [55.6367010136314,38.01019876018473],
        [55.635092756644674,38.0110248805613],
        [55.635257148823655,38.01213433513328],
        [55.635257148823655, 38.01213433513328]  // C
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

// Функция для добавления переключателя маршрутов (только для разработки)
function addRouteSwitcher() {
    // Проверяем, не в Telegram ли мы
    if (!window.Telegram || !window.Telegram.WebApp) {
        const switcher = document.createElement('div');
        switcher.className = 'route-switcher';
        switcher.innerHTML = `
            <div style="position: absolute; bottom: 10px; left: 10px; z-index: 1000; background: white; padding: 10px; border-radius: 5px; box-shadow: 0 0 5px rgba(0,0,0,0.2);">
                <h3 style="margin: 0 0 10px 0;">Переключение маршрутов (только для разработки)</h3>
                <button onclick="switchRoute(1)" style="margin: 5px; padding: 5px 10px;">Маршрут 1</button>
                <button onclick="switchRoute(2)" style="margin: 5px; padding: 5px 10px;">Маршрут 2</button>
                <button onclick="switchRoute(3)" style="margin: 5px; padding: 5px 10px;">Маршрут 3</button>
            </div>
        `;
        document.body.appendChild(switcher);
    }
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