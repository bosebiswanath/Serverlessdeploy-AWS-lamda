const experssapp= require('./app')
const PORT= 9001;
experssapp.listen(PORT, ()=>{
    console.log(`Server listn on PORT ${PORT}`)
})