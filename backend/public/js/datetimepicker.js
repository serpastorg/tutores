const Tempus=require('@eonasdan/tempus-dominus')
const dat=new Date()
module.exports=function(elemento){
    new Tempus.TempusDominus(document.getElementById(elemento))
}
