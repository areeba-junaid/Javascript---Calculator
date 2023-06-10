let display=document.getElementById("calculator-screen");
console.log(display.value)
let button=Array.from(document.getElementsByTagName("button"))
console.log(button[0].innerText);
button.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText)
        {
            case 'AC':
                display.value="";
                break;
            case '=':
                try{display.value=eval(display.value)}
                catch{
                    display.value="Error!"
                }
                break;

            default:
                display.value+= e.target.innerText;
        }
    })
})