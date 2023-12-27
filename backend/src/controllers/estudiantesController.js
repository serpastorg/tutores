const db=require('../database/models')
const Estudiante=db.Estudiantes
const bcrypt=require('bcrypt')
const saltrounds=9
const EstudianteController={
    async login(req,res){
        const {username}=req.query
        const {Password}=req.body
        await Estudiante.findOne({where:{Usuario:username},raw:true})
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
        await Estudiante.findAll({raw:true})
        .then((lista)=>{
            res.status(200)
            res.send(lista)
        })               
    },
    async create(req,res){
        var disp=false
        const Estud=req.body
        await Estudiante.findAll({where:{Usuario:Estud.Usuario}, raw:true})
        .then((dato)=>{
            const length=Object.keys(dato).length
            if(length>0){
            res.status(400).send('Usuario no disponible')
            }
            else {disp=true}
        })
        if(disp){
        bcrypt.hash(Estud.Password,saltrounds,function(err,hash){
            if(err) throw err
            else{
            Estudiante.create({
                Usuario:Estud.Usuario,
                Nombre: Estud.Nombre,
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
        await Estudiante.findAll(
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
                Estudiante.update({
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
        await Estudiante.destroy({where:{Usuario:username}})
        .then(()=>{
            res.status(200).send('Registro eliminado con éxito')
        })
    }
}
module.exports = EstudianteController