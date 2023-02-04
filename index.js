const express = require('express')
const axios = require('axios');
const app = express()
const PORT= 9001;
app.use(express.json())
app.use(express.urlencoded({extended : true}))
 
app.get('/getcountry',async (req,res,next)=>{
    try{       
        let response= await axios.get('https://restcountries.com/v2/all');
        let responseArray = response.data;
        let regionlist = {};       
        /*for (var i=0; i<responseArray.length; i++) {
            let subregion = responseArray[i].subregion;
            let name = responseArray[i].name;
            /*if(!regionlist.hasOwnProperty(subregion)){
                regionlist[subregion]= [];
            }
            if(!regionlist[subregion]){
                regionlist[subregion]= [];
            }
            regionlist[subregion].push(name)           
        }*/
       /* responseArray.forEach((element) => {
            let subregion = element.subregion;
            let name = element.name;
            if(!regionlist[subregion]){
                regionlist[subregion]= [];
            }
            regionlist[subregion].push(name)  
        })*/
        responseArray.map((element) => {
            let subregion = element.subregion;
            let name = element.name;
            if(!regionlist[subregion]){
                regionlist[subregion]= [];
            }
            regionlist[subregion].push(name) 
        }); 
        return res.status(200).json(regionlist);

        
       // let result = await axios.get('https://restcountries.com/v2/all')
       /*axios({
		    url: "https://restcountries.com/v2/all",
		    method: "get",
	    })
        .then(function(responseArray){
           //console.log(response);    
           let regionlist = {};       
           for (var i=0; i<responseArray.length; i++) {
               let subregion = responseArray[i].subregion;
               let name = responseArray[i].name;
               if(!regionlist.hasOwnProperty(subregion)){
                   regionlist[subregion]= [];
               }
               regionlist[subregion].push(name)           
           }
           res.status(200).json(regionlist);
        }) */
    }catch(err){
        console.log(err)
    }
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500)
})


app.listen(PORT, ()=>{
    console.log(`Server listn on PORT ${PORT}`)
})