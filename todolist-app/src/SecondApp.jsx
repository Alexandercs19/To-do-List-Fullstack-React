export const SecondApp = () => {
  return (
    <>
    <h1>Hello Alexander 2.0</h1>
    <p>{<code>{ getResult(1,2)}</code>}</p>
    </>
  );
}

// const sumado = {
//     message: 'Hola Mami',
//     title: 'Hola Papi',
// };

// const getsumado2 = {
//     nombre:'Alexander',
//     apellido:'Serrata',
//     edad:23,
//     ciudad:'Santo Domingo',
//     pais:'República Dominicana',
//     estadoCivil:'Soltero',
//     profesion:'Desarrollador Web',
//     hobbies:['Programar','Salir a correr']
// };

const getResult =(a, b) =>{
    return a + b;
};