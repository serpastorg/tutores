module.exports=(sequelize,DataTypes)=>
{
    const Profesor=sequelize.define('Profesores',
    {
        id:{
            type:DataTypes.BIGINT,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        Usuario:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        timestamps: true,
        createdAt: "Creado",
        updatedAt: "Actualizado",
        deletedAt: false
    }
)/*
Profesor.associate=function(models){
    Profesor.belongsTo(models.Materias,{foreignKey:'CursoDictado'})
}*/
return Profesor
}