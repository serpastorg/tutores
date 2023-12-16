const {Op}=require('sequelize')
const db=require('../database/models')
const Estudiantes=db.Estudiantes
const Materias=db.Materias
const Profesores=db.Profesores
const Horas=db.Horas
const Clases=db.Clases

const ClaseController={
    list(req,res){
        Clases.findAll({
            attributes:['id','HoraInicio','HoraFinal','CursoDictado','DadoPor','RequeridoPor'],
            include:[{model:Materias},{model:Estudiantes},{model:Profesores}]
        })
        .then((clases)=>{
            res.status(200)
            res.render('clases/clases.ejs',{clases})
        })
        .catch((error)=>res.status(400).send(error))
    },
    detail(req,res){
        const claseId=req.params.include
        Clases.findByPk(claseId,{
            attributes:['id','HoraInicio','HoraFinal','CursoDictado','DadoPor','RequeridoPor'],
            include:[{model:Materias},{model:Estudiantes},{model:Profesores}]
        })
        .then((clase)=>{
            res.render('clases/clasesDetail.ejs',{clase})
        })
        .catch((error)=>res.status(400).send(error))
    },
    add(req,res){
        const PromMaterias=Materias.findAll()
        Promise.all([PromMaterias])
        .then(([materias])=>{
            res.render('clases/clasesAdd.ejs',{materias})
        })
        .catch((error)=>{res.send(error)})
    },
    

}
    