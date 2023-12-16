module.exports=(sequelize,DataTypes)=>{
    const DispProfesores=sequelize.define('DispProfesores',
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
    DispProfesores.associate=function(models){
        DispProfesores.belongsTo(models.Profesores,{foreignKey:'ProfesorDisp'})
        DispProfesores.belongsTo(models.Materias,{foreignKey:'MateriaDadaPor'})
    }
    return DispProfesores
}