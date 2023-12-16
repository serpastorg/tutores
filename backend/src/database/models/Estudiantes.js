module.exports=(sequelize,DataTypes)=>
{const Estudiante=sequelize.define('Estudiantes',
    {
        id:{
            type:DataTypes.BIGINT,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        Nombre:{
            type:DataTypes.STRING,
            allowNull:false
        },
    },
    {
        timestamps: true,
        createdAt: "Creado",
        updatedAt: "Actualizado",
        deletedAt: false
    } 
)/*
Estudiante.associate=function(models){
    Estudiante.belongsTo(models.Materias,{foreignKey:'CursoRequerido'})
}*/
return Estudiante
}