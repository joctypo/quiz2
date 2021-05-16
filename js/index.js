const nuevatarea = document.getElementById("guardar");
const ingresardatos = document.getElementById("descripcion")
const to_do= document.getElementById("to-do");
const doing= document.getElementById("doing");
const done= document.getElementById("done");

agregartarea = () => {

    if(ingresardatos.value === ""){

        alert("Digite su tarea en el cuadro de texto, esta vacía"); 

    }else {

        let textotarea = ingresardatos.value;
        let estado = 'ToDo'; 

        let date = new Date();
        let day = date.getUTCDate();
        let mounth = date.getUTCMonth() + 1;
        let year = date.getUTCFullYear();

        let fechita = day + "-" + mounth + "-" + year;

        let tipo = database.ref('tareas/tareasToDo').push();

        let nuevatarea = {

            textotarea: textotarea,
            fecha: fechita,
            estatus: estado, 
            id: tipo.key,

        }

        ingresardatos.value= "";

        tipo.set(nuevatarea);
    }
}

database.ref('tareas/tareasToDo').on('value',function(data){

    to_do.innerHTML = '';
    data.forEach(
        tareanumero =>{
                let tareainfo = tareanumero.val();
                let tareaDo = new tarea(tareainfo);
                to_do.appendChild(tareaDo.pintar());
        });

});

database.ref('tareas/tareasDoing').on('value',function(data){

    doing.innerHTML = '';
    data.forEach(
        tareanumero =>{
                let tareainfo = tareanumero.val();
                let tareaDoing = new tarea(tareainfo);
                doing.appendChild(tareaDoing.pintar());
        });

});

database.ref('tareas/tareasDone').on('value',function(data){

    done.innerHTML = '';
    data.forEach(
        tareanumero =>{
                let tareainfo = tareanumero.val();
                let tareaDone = new tarea(tareainfo);
                done.appendChild(tareaDone.pintar());
        });

});

nuevatarea.addEventListener('click',agregartarea);
