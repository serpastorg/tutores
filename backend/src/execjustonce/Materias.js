module.exports=(sequelize,DataTypes)=>{
    const Materia=sequelize.define('Materias',
        {
            Materia:{
                type:DataTypes.STRING,
                allowNull:false,
                defaultValue:""
            }
        },
        { timestamps: false}
    )
    return Materia
}