const billamount=document.querySelector("#bill-amount");
const cashgiven=document.querySelector("#cash-given");
const checkbutton=document.querySelector("#check-btn");
const message=document.querySelector("#msg-here");
const noofnotes=document.querySelectorAll(".output-box");

const availableNotes=[2000,500,100,20,10,5,1];
function validateBillAndCashAmount(){
    message.style.display="none";
    if(billamount.value>0){
        if(cashgiven.value>=billamount.value){
            const amounttobereturned=cashgiven.value-billamount.value;
            calculatenotes(amounttobereturned);
        }
        else{
            showMessage("The cash given should be atleast equal to bill amount");
        }

    }
    else{
        showMessage("The bill amount shouid be greater than 0");
    }
}
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}
function calculatenotes(amounttobereturned){
  for(let i=0;i<availableNotes.length;i++){
    const notes=Math.trunc(amounttobereturned/availableNotes[i]);
    amounttobereturned=amounttobereturned%availableNotes[i];
    noofnotes[i].innerText=notes;

  }
}
checkbutton.addEventListener("click",validateBillAndCashAmount);