function calcSum(){
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    var sum = Number(one) + Number(two);
    document.getElementById("result").value = sum;
}