var a = [2,3,4,5,6];
var max = a[0];

for(let i=0; i<a.length; i++){
    console.log(a[i]);
    if(a[i]> max) {
        max = a[i];
    }
}

console.log(max);