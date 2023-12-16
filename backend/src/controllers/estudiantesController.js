const db=require('../database/models')
const Estudiante=db.Estudiantes
const DispEstudiantes=db.DispEstudiantes
const Materias=db.Materias
const EstudianteController={
    list(req,res){
        Estudiante.findAll({raw:true})
        .then((lista)=>{
            res.status(200)
            res.render('lista.ejs',{lista,ruta:'estudiantes',letrero:'estudiante'})
        })               
    },
    add(req,res){
        Estudiante.findOne({raw:true})
        .then((dato)=>{
            res.render('add.ejs',{dato,ruta:'estudiantes',letrero:'estudiante'})
        })
        .catch((error)=>res.send(error))
    },
    create(req,res){
        Estudiante.create({
            Nombre: req.body.Nombre,
        })
        .then(()=>{
            res.status(200)
            res.redirect('/estudiantes')
        })
        .catch((error)=>res.status(400).send(error))
    },
    detail(req,res){
        const estId=req.params.id
        Estudiante.findByPk(estId,
            {
                raw:true
            })
        .then((dato)=>{
            res.render('detail.ejs',{dato,ruta:'estudiantes',letrero:'estudiante'})
        })        
    },
    update(req,res){
        const estId=req.params.id
        console.log(req.body)
        Estudiante.update({
            Nombre: req.body.Nombre
        },
        {
            where:{id:estId}
        })
        .then(()=>{
            res.status(200)
            res.redirect('/estudiantes')
        })
        .catch((error)=>{
            res.status(400).send(error)
        })
    },
    destroy(req,res){
        const estId=req.params.id
        Estudiante.destroy({where:{id:estId}})
        .then(()=>{
            res.status(200)
            res.redirect('/estudiantes')
        })
        .catch((error)=>{res.status(400).send(error)})
    }
}
module.exports = EstudianteController