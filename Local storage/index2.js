const sum = (x,y)=> {
    x = x && 5
    y = y || 5
    return x + y
}
sum(20, 5)
console.log(sum(20,5));