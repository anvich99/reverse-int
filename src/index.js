module.exports = function reverse(n) {
    let str = '';
    n = String(n)
    let num = Number(n)
    if(num < 0){
        num = num * (-1);
        n = String(num)
    }
    for(let i = n.length-1; i>=0; i--){
        str+=n[i]
    }
    return str;
}
