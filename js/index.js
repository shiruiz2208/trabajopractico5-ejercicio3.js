/*

3 - Crea una web con bootstrap y js, 
que contenga un botón input donde se pueda 
cargar una tarea y un botón que al ser presionado 
agregue dicha tarea a una lista, 
cada elemento ingresado en la lista debe poder 
ser eliminado con un botón creado para ese fin. 

*/

let d = document
let inputTarea =  d.getElementById('valorTarea')
let añadirBtn = d.getElementById('añadirBtn')
let contador = 0

let tareas = d.getElementById('tareas')


añadirBtn.addEventListener('click',(e)=>{
    createTarea(inputTarea.value)
})


let createTarea = (inputValue) => {
    let btnEliminar = d.createElement('button')
    btnEliminar.innerHTML = 'Eliminar'
    let parrafoTarea = d.createElement('p')
    let valueInput = d.createTextNode(inputValue)
    parrafoTarea.appendChild(valueInput)
    
    let newContainerTarea = d.createElement('div')

    newContainerTarea.appendChild(parrafoTarea)
    newContainerTarea.appendChild(btnEliminar)
    newContainerTarea.classList.add('containerTarea')
    btnEliminar.classList.add(`${contador}`)
    contador++

    tareas.appendChild(newContainerTarea)

    //Eliminar tarea

    btnEliminar.addEventListener('click',(e) =>{
       e.target.parentElement.remove()
    })
}