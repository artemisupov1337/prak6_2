// Функція для обчислення NOR (АБО-НЕ)
function norOperation(a, b) {
    return !(a || b);
}

// Функція для обробки натискання кнопок
function handleButtonClick(event) {
    // Отримуємо ідентифікатор натиснутої кнопки
    const buttonId = event.target.id;
    
    // Визначаємо значення A і B на основі ідентифікатора кнопки
    let a, b;
    switch (buttonId) {
        case 'btn-00':
            a = 0;
            b = 0;
            break;
        case 'btn-01':
            a = 0;
            b = 1;
            break;
        case 'btn-10':
            a = 1;
            b = 0;
            break;
        case 'btn-11':
            a = 1;
            b = 1;
            break;
    }

    // Обчислюємо результат операції NOR
    const result = norOperation(a, b);

    // Виводимо результат на екран
    document.getElementById('result').textContent = `Результат: NOR(${a}, ${b}) = ${result ? 1 : 0}`;
}

// Додаємо обробник подій для кожної кнопки
document.getElementById('btn-00').addEventListener('click', handleButtonClick);
document.getElementById('btn-01').addEventListener('click', handleButtonClick);
document.getElementById('btn-10').addEventListener('click', handleButtonClick);
document.getElementById('btn-11').addEventListener('click', handleButtonClick);