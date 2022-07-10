// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    
    let dataProperty = {client: '', order: {}, goods: []};
    
    for (let i = 0; i <= (goods.length-1); i++) {
        let good = {title: goods[i].title, count: goods[i].count};        
        dataProperty.goods.push(good);        
    }
    
    let addressString = '';
    for (property in address) {
        let value = address[property];
        
        if (property=='street') {
            addressString = `${addressString}ул. ${value}, `;
        }
        if (property=='house') {
            addressString = `${addressString}дом ${value}, `;
        }
        if (property=='entrance') {
            addressString = `${addressString}${value} подъезд, `;
        }
        if (property=='floor') {
            addressString = `${addressString}${value} этаж, `;
        }
        if (property=='flat') {
            addressString = `${addressString}кв ${value}`;
        }
    }
                
    dataProperty.order = {address: addressString, sum: sum};
    dataProperty.client = `${name} ${phone}`;

    let jsonData = JSON.stringify({data:dataProperty});

    return jsonData;
}
