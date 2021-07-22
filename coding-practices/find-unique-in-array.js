var arr = [1,1,1,2,3,4,4,4,5,6,7,8,8,8,8,9];
var uniqueArr = [];
uniqueArr = arr.filter(function(item, pos){
    return arr.indexOf(item) == pos;
})