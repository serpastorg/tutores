module.exports=(sequelize,DataTypes)=>{
    const Materias=sequelize.define('Materias',
        {
            Materia:{
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue:""
            }
        },
        { timestamps: false}
    )
    return Materias
}