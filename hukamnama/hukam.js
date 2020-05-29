$.getJSON(
    "https://api.gurbaninow.com/v2//hukamnama/today", function(data){
          console.log(data)
          
         var date =  data.date.gregorian.day + " " + data.date.gregorian.month + " " + data.date.gregorian.date + " " + data.date.gregorian.year;
        
        $('.date').append(date)
        
        var ndate = data.date.nanakshahi.punjabi.day + " " + data.date.nanakshahi.punjabi.date + " " + data.date.nanakshahi.punjabi.month + " "+ data.date.nanakshahi.punjabi.year;
          
        $('.ndate').append(ndate)
        
        $('.ang').append("Ang " + data.hukamnamainfo.pageno)
        $('.raag').append(data.hukamnamainfo.raag.akhar)
        $('.writer').append(data.hukamnamainfo.writer.akhar)

        
        
        
        
        var line0g = data.hukamnama[0].line.gurmukhi.akhar;
        
        console.log(line0g)
        
        
        
        for (i in data.hukamnama) {
            x = data.hukamnama[i];
                for (i in x) 
                    
                    y=x[i]
                   
            $('.gurbani').append(y.gurmukhi.akhar + " ");
                
            }
        
        
        for (i in data.hukamnama) {
            x = data.hukamnama[i];
                for (i in x) 
                    
                    y=x[i]
                   
            $('.punjabi').append(y.translation.punjabi.default.akhar + " ");
                
            }
        
        for (i in data.hukamnama) {
            x = data.hukamnama[i];
                for (i in x) 
                    
                    y=x[i]
                   
            $('.english').append(y.translation.english.default + " ");
                
            }
                
            })
            
            
            
        
            
            
    
        
           

        

