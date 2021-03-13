function calc(){
    let n1 = document.getElementById('n1');
    let n2 = document.getElementById('n2');
    let n3 = document.getElementById('n3');
    console.log(n1.value)
    console.log(n2.value)
    n3.value = Number(n1.value) + Number(n2.value)
}