module.exports=(sequelize,DataTypes)=>{
    const Horario=sequelize.define('Horarios',
        {
            Horario:{
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue:""
            }
        },
        { timestamps: false}
    )
    return Horario
}