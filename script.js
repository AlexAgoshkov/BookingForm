let myRadio = document.querySelectorAll('.myRadio');
let myText = document.querySelectorAll('.myText');
let myLables = document.querySelector('.totalPrice');
let myTextSecond = document.querySelectorAll('.myText2');

function Start(){
    let a;
    let result1 = 0;
    let result2 = 0;
     for (let i = 0; i < myRadio.length; i++) {
        const element = myRadio[i];
        element.addEventListener('click', function(){
            myText[i].oninput = book;
            myTextSecond[i].oninput = book;  
        });
    }
    
    function book(){
        a = this.value;
        let one = GetDaysCount(a);
        if (one <= 1) {
            myLables.textContent = '';
            return;    
        }
        if (a.className = 'myText') {
            result1 = one * 1;
        }
        else
        {
            result2 = one * 1;
        }
       
        let abc = result2 - result1; 
        console.log(abc);   
        
        
        // if (abc > 1) {
        //     myLables.textContent = abc;    
        // }
        
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

Start();

//console.dir(myText);

