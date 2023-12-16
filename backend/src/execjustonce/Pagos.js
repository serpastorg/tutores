module.exports=(sequelize,DataTypes)=>{
const Pagos=sequelize.define('Pagos',
    {
        id:{
            type:DataTypes.BIGINT,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        Hora: {
            type:DataTypes.DATE,
            allowNull:false
        },
        Transaccion: {
            type:DataTypes.STRING,
            allowNull:false
        }
    }, 
    {
        timestamps: false
    }
    )
    return Pagos
}
