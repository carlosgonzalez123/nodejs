let cursos = [
	{id: 1, nombre: 'Analisis De Algoritmos', duracion: '100 Horas',costo: 56000 },
	{id: 2, nombre: 'Matematicas Discretas', duracion: '50 Horas',costo: 30000 },
	{id: 3, nombre: 'Estructuras de Datos', duracion: '120 Horas',costo: 43000 }
	];
	
	let buscarCurso = (idCurso) => cursos.find( cursoABuscar => cursoABuscar.id == idCurso);
	
	let mostrarCurso = (curso,callback) => {
			setTimeout(function(){
			let resultado=(
						'Id: '+curso.id+'\n'+
						'Nombre del curso: '+curso.nombre+'\n'+
						'Duracion: '+curso.duracion+'\n'+
						'Costo: $'+curso.costo +'\n'	
					   );
				callback(resultado);	   	
			},2000 * cursos.indexOf(curso));			   	   
	}
	
	
	let verCursos = () => {
		console.log('Oferta de Cursos:');
		for (i=0;i<cursos.length;i++){
			mostrarCurso(cursos[i],function(resultado){
				console.log(resultado)
			});
		}
	}
	module.exports={
		buscarCurso,
		verCursos,
	};