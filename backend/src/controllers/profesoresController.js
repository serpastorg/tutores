const db=require('../database/models')
const Profesor=db.Profesores
const DispProfesores=db.DispProfesores
const Materias=db.Materias
const ProfesorController={
    list(req,res){
        Profesor.findAll({raw:true})
        .then((lista)=>{
            res.status(200)
            res.render('lista.ejs',{lista,ruta:'profesores',letrero:'profesor'})
        })               
    },
    add(req,res){
        Profesor.findOne({raw:true})
        .then((dato)=>{
            res.render('add.ejs',{dato,ruta:'profesores',letrero:'profesor'})
        })
        .catch((error)=>res.send(error))
    },
    create(req,res){
        Profesor.create({
            Nombre: req.body.Nombre,
        })
        .then(()=>{
            res.status(200)
            res.redirect('/profesores')
        })
        .catch((error)=>res.status(400).send(error))
    },
    detail(req,res){
        const profId=req.params.id
        Profesor.findByPk(profId,
            {
                raw:true
            })
        .then((dato)=>{
            res.render('detail.ejs',{dato,ruta:'profesores',letrero:'profesor'})
        })        
    },
    update(req,res){
        const profId=req.params.id
        console.log(req.body)
        Profesor.update({
            Nombre: req.body.Nombre
        },
        {
            where:{id:profId}
        })
        .then(()=>{
            res.status(200)
            res.redirect('/profesores')
        })
        .catch((error)=>{
            res.status(400).send(error)
        })
    },
    destroy(req,res){
        const profId=req.params.id
        Profesor.destroy({where:{id:profId}})
        .then(()=>{
            res.status(200)
            res.redirect('/profesores')
        })
        .catch((error)=>{res.status(400).send(error)})
    }
}
module.exports = ProfesorController