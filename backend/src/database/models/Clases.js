module.exports=(sequelize,DataTypes)=>{
    const Clase=sequelize.define('Clases',
    {   
        HoraInicio: {
            type:DataTypes.DATE,
            allowNull:true
        },
        HoraFinal: {
            type:DataTypes.DATE,
            allowNull:true
        }
    },
    {
        timestamps: true,
        createdAt: "Creado",
        updatedAt: "Actualizado",
        deletedAt: false    
    }
    )
    Clase.associate=function(models){
        Clase.belongsTo(models.Materias,{foreignKey:'ClaseDictado'})
        Clase.belongsTo(models.Profesores,{foreignKey:'DadoPor'})
        Clase.belongsTo(models.Estudiantes,{foreignKey:'RequeridoPor'})
    }
    return Clase
}