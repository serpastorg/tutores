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
        },
        HoraFinDisponible:{
            type:DataTypes.DATE,
        },/*
        HoraInicioDisponible:{
            type:DataTypes.BIGINT
        },
        HoraFinDisponible:{
            type:DataTypes.BIGINT
        }*/
    },
    {timestamps: false})
    return DispEstudiantes
}