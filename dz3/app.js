var tag = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var countTag = {}
for (var i = 0; i < tag.length; i++){
    var tags = tag[i]
    if (countTag[tags]){
        countTag[tags]++
    } else {
        countTag [tags] = 1
    }
}
console.log(countTag)


var massif1 = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
var massif2 = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
var massif = []
for (var number of massif1){
    if (massif2.includes(number)&&!massif.includes(number)){
        massif.push(number)
    }
}
console.log(massif)