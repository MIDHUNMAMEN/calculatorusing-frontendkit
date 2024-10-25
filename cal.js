function buttons(col){
     document.getElementById("etext").value+=col
}
function clearDisplay(){
    document.getElementById("etext").value=" "

}
function butclear(){
    var number=document.getElementById("etext").value
    var result=eval(number)
    document.getElementById("etext").value=result
}
