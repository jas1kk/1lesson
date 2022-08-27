function specialCharacter() {
    let numbers = prompt('Введите от 0 до 9');
    let valid = /^[0-9]+$/g;
    if(numbers == 0){
        alert(')')
    }else if (numbers == 1){
        alert('!')
    }else if  (numbers == 2){
        alert('@')
    }else if  (numbers == 3){
        alert('#')
    }else if  (numbers == 4){
        alert('$')
    }else if  (numbers == 5){
        alert('%')
    }else if  (numbers == 6){
        alert('^')
    }else if  (numbers == 7){
        alert('&')
    }else if  (numbers == 8){
        alert('*')
    }else if  (numbers == 9){
        alert('(')
    }else if  (numbers > 9){
        alert('Больше 9 вводить нельзя !')
    }else if (valid.test(numbers)){
    }else{
        alert('Строки запрещены !')
    }
}
specialCharacter()