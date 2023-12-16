/*const Scripts={
    ExtaerFecha:function(Hora){
        var intervalos=Hora.split(',')
        var fechas=[]
        for(let i=0;i<intervalos.length;i++){
            const ini=intervalos[i].split('--')
            let elemento=[]
            const tiempoinf=Date.parse(ini[0])
            const tiemposup=Date.parse(ini[1])
            if(tiemposup<tiempoinf){
                throw "Horario Inconsistente"
            }
            elemento.push(tiempoinf)
            elemento.push(tiemposup)
            fechas.push(elemento)
            if(i>=1 && tiempoinf<fechas[i-1][1]){
                throw "Horario Inconsistente"
            }
        }
        return fechas
    }
}
module.exports=Scripts*/

const btnCrearHorario=document.getElementById('CrearHorario')
btnCrearHorario.addEventListener('click',crearhorario)
function crearhorario(){
    console.log('boton oprimido')
}