function showTable(){
    var strNum =  document.querySelector("#tableNum").value;
    const showResult = document.querySelector("#showResult1");
    var str = ""
    if(strNum != ""){
    var num = Number.parseInt(strNum);
    for(var i=1;i<=10;i++){
        str += `<h5>${num}  *  ${i}  =  ${num*i}</h5>`
    }
    }
    showResult.innerHTML = str; 

}
const revNumber = document.querySelector("#revNumber");
const showResult = document.querySelector("#showResult2");
revNumber.addEventListener('keyup',(event)=>{
    if(event.keyCode == 13){
         showResult.innerHTML = "you pressed enter key..."+event.target.value;     
    }
})
