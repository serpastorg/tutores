const db=require('../database/models')
const Profesor=db.Profesores
const Materia=db.Materias
const bcrypt=require('bcrypt')
const saltrounds=9
const ProfesorController={
    async login(req,res){
        const {username}=req.query
        const {Password}=req.body
        await Profesor.findOne({where:{Usuario:username},raw:true})
        .then((dato)=>{
            var hash=dato.Password
            bcrypt.compare(Password,hash,function(err,result){
                if(err) throw err
                if(result){
                    res.status(200).send('Acceso garantizado')
                }
                else{
                    res.status(400).send('Acceso denegado')
                }
            })
        })
        .catch(()=>{res.status(400).send('Usuario no existente.')})
    },
    async list(req,res){
        await Profesor.findAll({raw:true})
        .then((lista)=>{
            res.status(200)
            res.send(lista)
        })               
    },
    async create(req,res){
        var disp=false
        const Profe=req.body
        await Profesor.findAll({where:{Usuario:Profe.Usuario}, raw:true})
        .then((dato)=>{
            const length=Object.keys(dato).length
            if(length>0){
            res.status(400).send('Usuario no disponible')
            }
            else {disp=true}
        })
        if(disp){
        bcrypt.hash(Profe.Password,saltrounds,function(err,hash){
            if(err) throw err
            else{
            Profesor.create({
                Usuario:Profe.Usuario,
                Nombre: Profe.Nombre,
                Password:hash
            })
            .then(()=>{
                res.status(200).send('Usuario creado con éxito')
            })
        }
        })}
    },
    async detail(req,res){
        const {username}=req.query
        await Profesor.findAll(
            {
                attributes:['Usuario','Nombre'],
                where:{Usuario:username},
                raw:true
            })
        .then((dato)=>{
            if(Object.keys(dato).length>0){res.status(200).send(dato[0])}
            else throw 'Estudiante no existente'
        })
        .catch((err)=>{res.status(400).send(err)})        
    },
    async update(req,res){
        const {Nombre,Password}=req.body
        const {username}=req.query
        bcrypt.hash(Password,saltrounds,function(err,hash){
            if(err) throw err
            else{
                Profesor.update({
                    Nombre:Nombre,
                    Password:hash
                },
                {
                    where:
                    {
                        Usuario:username
                    }
                })
                .then(()=>res.status(200).send('Éxito al actualizar'))
            }
        })
    },
    async delete(req,res){
        const {username}=req.query
        await Profesor.destroy({where:{Usuario:username}})
        .then(()=>{
            res.status(200).send('Registro eliminado con éxito')
        })
    }
}
module.exports = ProfesorController