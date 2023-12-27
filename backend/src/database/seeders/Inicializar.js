const scripts=require('../../scripts/scripts')
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up (queryInterface, Sequelize) {
         await queryInterface.bulkInsert('Materias',
        [
            {
                Materia:'Cálculo Integral'
            },
            {
                Materia:'Cálculo Diferencial'
            },
            {
                Materia:'Cálculo Vectorial'
            }
        ])
        
      await queryInterface.bulkInsert('Horarios',scripts.convertir(scripts.mes()),{})
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Estudiantes', null,{})
      await queryInterface.bulkDelete('Profesores', null,{})
      await queryInterface.bulkDelete('Materias', null,{})
      await queryInterface.bulkDelete('DispProfesores', null,{})
      await queryInterface.bulkDelete('DispEstudiantes', null,{})
    }
  };