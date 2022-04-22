function weeklyWage(band, weeklyHours){
   var totalPay=0;
    var total=0;
    var hours=weeklyHours.split(",");
    var count=0;
    
  let lessHours = hours.length
   
  if(lessHours < 7) {
    return "missing day"
  }
  
    for(var i = 0; i < hours.length; i++) { 
      if(band==="A"){
          total+= Number(hours[i]);
      totalPay = total * 23;

      }else if(band==="B"){
        total += Number(hours[i]);
        totalPay = total * 37;
        
  } else if(band==="C"){
    total += Number(hours[i]);
    totalPay = total * 51;
    
  } 
    }
    return totalPay;
    
    
  }