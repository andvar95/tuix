


export const handleTroops = (number,max) =>{
    let  varr = []
    let acc = 0

    function getRandomArbitrary(min, max) {
        return  Math.round(Math.random() * (max - min) + min);
      }

      function calculateNumber(total_numbers,total,t_global){
    
        if(total_numbers>1){
        let number =getRandomArbitrary(Math.round(total*0.2),Math.round(total*0.8))
        varr.push(number)
        acc += number;
        calculateNumber(total_numbers-1,t_global-acc,t_global)
        }
        else{
             varr.push(total)
        }

}

calculateNumber(number,max,max)
return varr;
}