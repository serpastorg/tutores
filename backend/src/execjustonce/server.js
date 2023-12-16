//const {Sequelize, DataTypes, Model}=require('sequelize')
const {Sequelize,DataTypes}=require('sequelize')
const express=require('express')
const app=express()
const port=3002
const connection= new Sequelize('tutorias','root','Pepp4p1g',{
    dialect:"postgres",
    host:'localhost'
})

app.listen(port,()=>{console.log('Servidor corriendo en el puerto '+port)})
const db={}
db.Sequelize= Sequelize
db.sequelize=connection
db.estudiantes=require('./Estudiantes')(connection,DataTypes)
db.profesores=require('./Profesores')(connection,DataTypes)
db.pagos=require('./Pagos')(connection,DataTypes)
db.DispEst=require('./DispEstudiantes')(connection,DataTypes)
db.DispProf=require('./DispProfesores')(connection,DataTypes)
db.clase=require('./Clases')(connection,DataTypes)
db.materias=require('./Materias')(connection,DataTypes)
//db.estudiantes.belongsTo(db.materias,{foreignKey:'CursoRequerido'})
//db.profesores.belongsTo(db.materias,{foreignKey:'CursoDictado'})
db.clase.belongsTo(db.materias,{foreignKey:'CursoDictado'})
db.clase.belongsTo(db.profesores,{foreignKey:'DadoPor'})
db.clase.belongsTo(db.estudiantes,{foreignKey:'RequeridoPor'})
db.DispEst.belongsTo(db.estudiantes,{foreignKey:'EstudianteDisp'})
db.DispEst.belongsTo(db.materias,{foreignKey:'MateriaRequerida'})
db.DispProf.belongsTo(db.profesores,{foreignKey:'ProfesorDisp'})
db.DispProf.belongsTo(db.materias,{foreignKey:'MateriaDada'})
db.pagos.belongsTo(db.clase,{foreignKey:'ClaseDada'})
connection.sync({force:true})