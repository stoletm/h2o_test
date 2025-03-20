export const prettyPrice = (price) => {
    if (price == null) {
        return '-';
    }
    return price
        .toString()
        .replace(/(\d+)(\.|,)(\d+)/g, function(o, a, b, c){
        // Где o = всё совпадение целиком, a, b и с = совпадения из 1-й, 2-й и 3-й скобок.
        // символ \d находит совпадение с любой цифрой. Плюсик после него означает "один или несколько"
        return a + b + c.slice(0,2);
      })
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') // отделяет разряды
}