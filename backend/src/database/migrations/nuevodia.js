const scripts=require('../../scripts/scripts')

module.exports={
    up: async (queryInterface,Sequelize)=>{
         await queryInterface.bulkInsert('Horarios',scripts.convertir(scripts.dia()))
    },
    down: async(queryInterface,Sequelize)=>{
        console.log('Volver a hacer horario')
    }
}