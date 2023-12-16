module.exports=(sequelize,DataTypes)=>{
    const Pago=sequelize.define('Pagos',
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
    Pago.associate=function(models){
        Pago.belongsTo(models.Clases,{foreignKey:'ClaseDada'})
    }
    return Pago
}
    