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
    return Clase
}