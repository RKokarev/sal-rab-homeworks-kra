function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

     // создайте переменную shippingSum
    // если productsSum равно 0,
    // то shippingSum присвоить значение 0
    // если productsSum Больше или равна freeShippingMinSum,
    // то shippingSum присвоить значение 0
    // если productsSum больше 0 и меньше freeShippingMinSum,
    // то shippingSum присвоить значение shippingPrice

    // Задание №2.1. Рассчитать доставку
    let shippingSum;
    
    if (productsSum == 0) 
        shippingSum = 0;    
    else if (productsSum >= freeShippingMinSum)
        shippingSum = 0;
    else if (productsSum > 0 && productsSum < freeShippingMinSum)
        shippingSum = shippingPrice;

    console.log (`Стоимость доставки равна ${shippingSum}`);

    // Конец решения задания №2.1.
    

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    // создайте переменную discountSum

    // если productsSum больше или равно discountMinSum,
    // то присвойте discountSum значение discountPart процентов от productsSum,
    // иначе присвойте discountSum значение 0

    let discountSum;

    if (productsSum >= discountMinSum) 
        discountSum = discountPart / 100 * productsSum;    
    else
        discountSum = 0;

    // Конец решения задания №2.2.

    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    // создайте переменную totalSum

    // присвойте totalSum значение productsSum
    // уменьшите totalSum на discountSum

    let totalSum = productsSum;
    //console.log (`${totalSum} цена продукта без скидки`); // check
    
    totalSum -= discountSum;
    //console.log (`${totalSum} цена продукта со скидкой`); // check

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    // прибавьте к totalSum значение shippingSum
    //console.log (`${shippingSum} стоимость доставки`); // check

    totalSum += shippingSum;
    //console.log (`${totalSum} цена продукта с доставкой`); // check

    // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

   let freeShipping = false;   

   //console.log (`${shippingSum} стоимость доставки до моего кода`); // check
   //console.log (`Доставка бесплатная (до моего кода)? - ${freeShipping}`); // check

   freeShipping = !shippingSum;

   //console.log (`${shippingSum} стоимость доставки после моего кода`); // check
   //console.log (`Доставка бесплатная (после моего кода)? - ${freeShipping}`); // check


    
    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
