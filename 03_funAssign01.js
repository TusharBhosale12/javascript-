console.log('-----------Step 1----------------');
function multi(n1,n2) {
    console.log('Given numbers are:',n1,n2);    
}
multi(10,20);

console.log('-----------Step 2----------------');
function personalDetails(n1,n2,n3) {
    console.log('First Name:',n1,'Last Name:',n2,'College Name:',n3);
    
}
personalDetails("Tushar","Bhosale","SMS");
personalDetails("mine","stive","su");


console.log('-----------Step 3----------------');
function swapValues(n1,n2) {
    console.log('Before Swap:','n1=>',n1,'n2=>',n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log('after Swap:','n1=>',n1,'n2=>',n2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log('-----------Step 4----------------');
function addThreeValues(n1,n2,n3) {
    console.log('Given Number are',n1,n2,n3);
    var result=n1+n2+n3;
    return result;
    
}
var returnValue=addThreeValues(10,20,30);
console.log('addition is :',returnValue);
var returnValue=addThreeValues("Hello","good","Morning");
console.log('addition is :',returnValue);