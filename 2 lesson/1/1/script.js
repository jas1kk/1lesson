let age = prompt('Сколько вам лет?', 0);
    if (age >= 0 && age < 12)
    {
        alert('Вы ребёнок');
    }
    else if (age >= 12 && age < 18)
    {
        alert('Вы подросток');
    }
    else if (age >= 18 && age < 60)
    {
        alert('Вы взрослый');
    }
    else if (age >= 60)
    {
        alert('Вы пенсионер');
    }