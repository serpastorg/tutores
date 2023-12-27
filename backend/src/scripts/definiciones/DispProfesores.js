module.exports=(sequelize,DataTypes)=>{
    const DispProfesores=sequelize.define('DispProfesores',
    {
        id:{
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        HoraInicioDisponibleAbsoluto:{
            type:DataTypes.DATE,
        },
        HoraFinDisponibleAbsoluto:{
            type:DataTypes.DATE,
        },
        HoraInicioDisponible:{
            type:DataTypes.BIGINT
        },
        HoraFinDisponible:{
            type:DataTypes.BIGINT
        }
    },
    {timestamps: false})
    return DispProfesores
}