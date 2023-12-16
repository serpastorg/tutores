const db=require('../database/models')
const Materia=db.Materias
const DispProfesores=db.DispProfesores
const Materias=db.Materias
const ProfesorController={
    list(req,res){
        Materia.findAll({raw:true})
        .then((lista)=>{
            res.status(200)
            res.render('lista.ejs',{lista,ruta:'materias',letrero:'materia'})
        })               
    },
    add(req,res){
        Materia.findOne({raw:true})
        .then((dato)=>{
            res.render('add.ejs',{dato,ruta:'materias',letrero:'materia'})
        })
        .catch((error)=>res.send(error))
    },
    create(req,res){
        Materia.create({
            Materia: req.body.Materia,
        })
        .then(()=>{
            res.status(200)
            res.redirect('/materias')
        })
        .catch((error)=>res.status(400).send(error))
    },
    detail(req,res){
        const matId=req.params.id
        Materia.findByPk(matId,
            {
                raw:true
            })
        .then((dato)=>{
            res.render('detail.ejs',{dato,ruta:'materias',letrero:'materia'})
        })        
    },
    update(req,res){
        const matId=req.params.id
        console.log(req.body)
        Materia.update({
            Materia: req.body.Materia
        },
        {
            where:{id:matId}
        })
        .then(()=>{
            res.status(200)
            res.redirect('/materias')
        })
        .catch((error)=>{
            res.status(400).send(error)
        })
    },
    destroy(req,res){
        const matId=req.params.id
        Materia.destroy({where:{id:matId}})
        .then(()=>{
            res.status(200)
            res.redirect('/materias')
        })
        .catch((error)=>{res.status(400).send(error)})
    }
}
module.exports = ProfesorController