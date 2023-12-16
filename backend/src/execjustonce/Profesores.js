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
        Nombre:{
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
)
return Profesor
}