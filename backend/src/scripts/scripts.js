const intervalo=5
const mañana=86400000
const {Sequelize,DataTypes}=require('sequelize')
const connection= new Sequelize('tutorias','root','Pepp4p1g',{
    dialect:"postgres",
    host:'localhost'
})
const queryInterface=connection.getQueryInterface()

function lista(fechaparam){
    const diaSemana=fechaparam.getDay()
    const fecha=fechaparam.getDate()
    const mes=fechaparam.getMonth()+1
    const año=fechaparam.getFullYear()
    const cadena=String(diaSemana)+'**'+String(fecha)+'/'+String(mes)+'/'+String(año)+'**'
    var salida=[]
    var minutos=0
    for(var j=0;j<24*60;j++){
        var horascad=''
        const horas=Math.floor(minutos/60)
        if(horas<10){horascad+='0'+String(horas)+':'}
        else{horascad+=String(horas)+':'}       
        var minscad=''
        if(j%intervalo==0){
            if(minutos%60<10){
                minscad+='0'+String(minutos%60)
            }
            else{ minscad+=String(minutos%60)}
            salida.push(cadena+horascad+minscad)        
        }
        minutos++
    }
    return salida
}
function dia(dias=35){
    const fecha=new Date(+new Date()+dias*mañana)
    return lista(fecha)
}
function mes(){
    var salida=[]
        for(var i=0;i<=34;i++){
            salida.push(dia(i))  
        }
        return salida
}
function convertir(arreglo){
    var salida=[]
    if(arreglo[0][0].length>1){
    for (var j=0;j<arreglo.length;j++){
        for (var i=0;i<arreglo[j].length;i++){
            salida.push({Horario:arreglo[j][i]})
        }
    }
    }
    else{
        for(var j=0;j<arreglo.length;j++){
            salida.push({Horario:arreglo[j]})
        }
    }
    return salida

}
module.exports = {
    async adddia(){
        const diah=convertir(dia())
        await queryInterface.bulkInsert('Horarios',diah,{})
        return 0
    },
    async creartablas(){
        const db={}
        db.sequelize=connection
        db.horario=require('./definiciones/Horarios')(connection,DataTypes)
        db.estudiantes=require('./definiciones/Estudiantes')(connection,DataTypes)
        db.profesores=require('./definiciones/Profesores')(connection,DataTypes)
        db.DispEst=require('./definiciones/DispEstudiantes')(connection,DataTypes)
        db.DispProf=require('./definiciones/DispProfesores')(connection,DataTypes)
        db.clase=require('./definiciones/Clases')(connection,DataTypes)
        db.materias=require('./definiciones/Materias')(connection,DataTypes)
        db.pagos=require('./definiciones/Pagos')(connection,DataTypes)
        db.clase.belongsTo(db.materias,{foreignKey:'CursoDictado'})
        db.clase.belongsTo(db.profesores,{foreignKey:'DadoPor'})
        db.clase.belongsTo(db.estudiantes,{foreignKey:'RequeridoPor'})
        db.DispEst.belongsTo(db.estudiantes,{foreignKey:'EstudianteDisp'})
        db.DispEst.belongsTo(db.materias,{foreignKey:'MateriaRequerida'})
        db.DispProf.belongsTo(db.profesores,{foreignKey:'ProfesorDisp'})
        db.DispProf.belongsTo(db.materias,{foreignKey:'MateriaDada'})
        db.pagos.belongsTo(db.clase,{foreignKey:'ClaseDada'})
        await connection.sync({force:true})
        await queryInterface.bulkInsert('Materias',
        [
            {
                Materia:'Cálculo Integral'
            },
            {
                Materia:'Cálculo Diferencial'
            },
            {
                Materia:'Cálculo Vectorial'
            }
        ])
        await queryInterface.bulkInsert('Horarios',convertir(mes()),{})
        await this.adddia()
        return
    }
}