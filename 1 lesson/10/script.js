function check(num) {
    return (-1) ** num + 1 ? "Чётное." : "Нечётное.";
  }
  const n = prompt("Введите целое число.");
  alert(check(n));