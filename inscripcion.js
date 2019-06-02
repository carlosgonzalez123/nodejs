const datos = {
    idCurso:{
        demand:true,
        alias: 'i',
    },
    nombre:{
        demand:true,
        alias: 'n',
    },
    cedula:{
        demand:true,
        alias: 'c',
    },
}

const argv = require('yargs')
            .command('inscribirme','Inscribirme a un curso ',datos)
            .argv
const cursos = require('./cursos');
const fs = require('fs');

let crearArchivo = () =>{
       let cr=cursos.buscarCurso(argv.idCurso);
       text='El estudiante : '+argv.nombre+'\n';
       text+='Se ha inscrito a el curso : '+cr.id+'\n';
       text+='Nombre del curso : '+cr.nombre+'\n';
       text+='Duracion : '+cr.duracion+'\n';
       text+='Costo : '+cr.costo;
       fs.writeFile('inscripcion.txt',text,(err)=>{
           if(err) {
               throw(err);
           }else{
           console.log('se ha registrado correctamente');
        }
       }); 
}

if(!cursos.buscarCurso(argv.idCurso)){
cursos.verCursos();
}else{
crearArchivo();
} 


