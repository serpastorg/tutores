module.exports=(sequelize,DataTypes)=>{
    const DispEstudiantes=sequelize.define('DispEstudiantes',
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
        },/*
        HoraInicioDisponible:{
            type:DataTypes.BIGINT
        },
        HoraFinDisponible:{
            type:DataTypes.BIGINT
        }*/
    },
    {timestamps: false})
    DispEstudiantes.associate=function(models){
        DispEstudiantes.belongsTo(models.Estudiantes,{foreignKey:'EstudianteDisp'})
        DispEstudiantes.belongsTo(models.Materias,{foreignKey:'MateriaRequerida'})
    }
    return DispEstudiantes
}