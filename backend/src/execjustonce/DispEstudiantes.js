module.exports=(sequelize,DataTypes)=>{
    const DispEstudiantes=sequelize.define('DispEstudiantes',
    {
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        HoraInicioDisponible:{
            type:DataTypes.DATE,
            allowNull:false
        },
        HoraFinDisponible:{
            type:DataTypes.DATE,
            allowNull:false
        },
    },
    {timestamps: false})
    return DispEstudiantes
}