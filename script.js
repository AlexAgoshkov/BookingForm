let myRadio = document.querySelectorAll('.myRadio');
let myArriveDate = document.querySelectorAll('.Arrive');
let myLables = document.querySelector('.totalPrice');
let myDateLeave = document.querySelectorAll('.Leave');
let myPrice = document.querySelectorAll('.priceLabel');

Start();

function ChangeValue(type, value){
   
   if (type.nodeName == 'INPUT') {
    type.value = value;
   }
   if (type.nodeName == 'LABEL') {
    type.textContent = value;
   }
}

function Start(){
    let result1;
    let result2;
    let totalResult;
    let currentRes;

     for (let i = 0; i < myRadio.length; i++) {
        const element = myRadio[i];
        element.addEventListener('click', function(){
            currentRes = myPrice[i].textContent; 
            myArriveDate[i].oninput = book;
            myDateLeave[i].oninput = book;
        });
    }
    
    function book(){
       let elem = this.value;
        let name = this.className;
        let daysCount = GetDaysCount(elem);
        if (daysCount <= 1) {
            myLables.textContent = '';
            return;    
        }
        if (name == "Arrive") {
            result1 = daysCount;
        }
        else
        {
            result2 = daysCount;
        }
          let result = result2 - result1;
          totalResult = result * +currentRes;

         if (result > 1) {
             ChangeValue(myLables, totalResult);    
         }
    }
   
    function GetDaysCount(value){       
        let date = new Date(value);
        if (date.getDate() > 1) {
        return date.getDate(); 
        }
        else{
            return 0;
        }
    }
}