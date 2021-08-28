const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOFNotes=document.querySelectorAll("no-of-notes");
const avalableNotes =[2000,500,100,50,20,10,5,1]

checkButton.addEventListener("click",function validateBillAndCashAmount(){
   hideMessage();
    if ( billAmount.value > 0){
        if(cashGiven.value>=billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("doyou want cash plates?");
        }
   
    } else {
        showMessage("invalid bill amounr");
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<avalableNotes.length;i++){
        const numberOfNotes=math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned%=avalableNotes[i];
        amountToBeReturned = amountToBeReturned % availableNotes[i]
        noOFNotes[i].innerText=numberOfNotes;
    }
}

function hideMessage()
{
    message.style.display="none";
}

function showMessage(message){
    message.style.display="block";
    message.innerText=msg;

}