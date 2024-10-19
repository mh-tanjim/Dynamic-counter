let result = document.querySelectorAll('.result')

result.forEach((item)=>{
    let number = 0 
    let countNumber = ()=>{
        number++
        item.innerHTML = number
        if(number == item.dataset.alu){
            clearInterval(start)
        }
    }
    
    
    let start = setInterval(()=>{
                      countNumber()    
                   } , 100);
     
})