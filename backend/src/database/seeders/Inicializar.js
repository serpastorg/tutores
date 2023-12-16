
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
        
      await queryInterface.bulkInsert('Estudiantes',[
        {
          Nombre:'Alejandro Niño',
          Creado: new Date(),
          Actualizado: new Date(),
        },
        {
            Nombre:'Gabriel Hernández',
            Creado: new Date(),
            Actualizado: new Date(),
        },
        {
            Nombre:'Kakaroto',
            Creado: new Date(),
            Actualizado: new Date(),
        },
        {
            Nombre:'Esteban Carrillo',
            Creado: new Date(),
            Actualizado: new Date(),
        }
      ],{})
      await queryInterface.bulkInsert('Profesores',[
        {
          Nombre:'Perenceno Núñez',
          Creado: new Date(),
          Actualizado: new Date(),
        },
        {
            Nombre:'Rocky Balboa',
            Creado: new Date(),
            Actualizado: new Date(),
        },
        {
            Nombre:'Cuautemoc Blanco',
            Creado: new Date(),
            Actualizado: new Date(),
        },
        {
            Nombre:'Andrés Solano',
            Creado: new Date(),
            Actualizado: new Date(),
        }
      ],{})
      await queryInterface.bulkInsert('DispEstudiantes',[
        {
          HoraInicioDisponible:new Date("October 30, 2023 08:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 10:00:00"),
          EstudianteDisp:1,
          MateriaRequerida:1
        },
        {
          HoraInicioDisponible:new Date("October 30, 2023 08:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 09:00:00"),
          EstudianteDisp:2,
          MateriaRequerida:2
        },
        {
          HoraInicioDisponible:new Date("October 30, 2023 09:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 10:00:00"),
          EstudianteDisp:3,
          MateriaRequerida:2
        },
        {
          HoraInicioDisponible:new Date("October 30, 2023 09:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 10:00:00"),
          EstudianteDisp:4,
          MateriaRequerida:3
        }
      ],{})
      await queryInterface.bulkInsert('DispProfesores',[
        {
          HoraInicioDisponible:new Date("October 30, 2023 08:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 10:00:00"),
          ProfesorDisp:1,
          MateriaDada:1
        },
        {
          HoraInicioDisponible:new Date("October 30, 2023 08:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 09:00:00"),
          ProfesorDisp:2,
          MateriaDada:1
        },
        {
          HoraInicioDisponible:new Date("October 30, 2023 09:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 10:00:00"),
          ProfesorDisp:3,
          MateriaDada:2
        },
        {
          HoraInicioDisponible:new Date("October 30, 2023 09:00:00"),
          HoraFinDisponible:new Date("October 30, 2023 10:00:00"),
          ProfesorDisp:4,
          MateriaDada:3
        }
      ],{})/*
      const nummin=1
      let horas=[]
      let fracciones=[]
         for(let i=0;i<Math.trunc(60/nummin);i++){
           var cadena
           if(Math.trunc(i*nummin/10)<1){
             cadena=":0"+String(i*nummin)
           }
           else{cadena=":"+String(i*nummin)}
           fracciones.push(cadena)
         }
        for(let i=0;i<(24*fracciones.length);i++){
           var cadena
           if(Math.trunc(i/(10*fracciones.length))<1){
             cadena="0"+String(Math.trunc(i/fracciones.length))
           }
           else{cadena=String(Math.trunc(i/fracciones.length))}
           cadena+=fracciones[i%fracciones.length]
           horas.push({Hora:cadena})
         }
         await queryInterface.bulkInsert('Horas',horas,{})
*/
    },
  
    async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Estudiantes', null,{})
      await queryInterface.bulkDelete('Profesores', null,{})
      await queryInterface.bulkDelete('Materias', null,{})
      await queryInterface.bulkDelete('DispProfesores', null,{})
      await queryInterface.bulkDelete('DispEstudiantes', null,{})
    }
  };