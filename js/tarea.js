class tarea{

    constructor(tareitas){

        this.tareitas = tareitas; 

    }

    degradar = () => {

        let estatus = this.tareitas.estatus;
        let id = this.tareitas.id; 

        database.ref('tareas/tareas'+estatus+'/'+id).set(null);

        if(estatus === "Doing") {
            let llave = this.tareitas.id; 
            let fecha = this.tareitas.fecha;
            let estado = 'ToDo';
            let descrip = this.tareitas.textotarea; 

            let nuevatareaToDo = {

                textotarea: descrip,
                fecha: fecha,
                estatus: estado, 
                id: llave,
    
            }

            database.ref('tareas/tareasToDo/'+llave).set(nuevatareaToDo);

        }else {
            let llave = this.tareitas.id; 
            let fecha = this.tareitas.fecha;
            let estado = 'Doing';
            let descrip = this.tareitas.textotarea; 

            let nuevatareaToDoing = {

                textotarea: descrip,
                fecha: fecha,
                estatus: estado, 
                id: llave,
    
            }

            database.ref('tareas/tareasDoing/'+llave).set(nuevatareaToDoing);

        }

    }

    aumentar = () => {

        let estatus = this.tareitas.estatus;
        let id = this.tareitas.id; 

        database.ref('tareas/tareas'+estatus+'/'+id).set(null);

        if(estatus === "ToDo") {
            let llave = this.tareitas.id; 
            let fecha = this.tareitas.fecha;
            let estado = 'Doing';
            let descrip = this.tareitas.textotarea; 

            let nuevatareaToDoing = {

                textotarea: descrip,
                fecha: fecha,
                estatus: estado, 
                id: llave,
    
            }

            database.ref('tareas/tareasDoing/'+llave).set(nuevatareaToDoing);

        }else {
            let llave = this.tareitas.id; 
            let fecha = this.tareitas.fecha;
            let estado = 'Done';
            let descrip = this.tareitas.textotarea; 

            let nuevatareaDone = {

                textotarea: descrip,
                fecha: fecha,
                estatus: estado, 
                id: llave,
    
            }

            database.ref('tareas/tareasDone/'+llave).set(nuevatareaDone);

        }

    }

    eliminar = () => {

        let estatus = this.tareitas.estatus;
        let id = this.tareitas.id; 

        database.ref('tareas/tareas'+estatus+'/'+id).set(null);
    }

    pintar = () => {

        let tareota = document.createElement('div'); 
        tareota.className = "tareota";

        let fechota = document.createElement('p');
        fechota.className = "fechota";
        fechota.innerHTML = this.tareitas.fecha;

        let textotareita = document.createElement('p');
        textotareita.className = "textotareita" ; 
        textotareita.innerHTML = this.tareitas.textotarea; 

        let botonbajar = document.createElement('button'); 
        botonbajar.className = "botonbajar button";

        let botonsubir = document.createElement('button'); 
        botonsubir.className = "botonsubir button" ;

        let botoneliminar = document.createElement('button'); 
        botoneliminar.className = "botoneliminar button";


        switch (this.tareitas.estatus){

            case "ToDo":
                tareota.appendChild(fechota);
                tareota.appendChild(textotareita); 
                tareota.appendChild(botoneliminar);
                tareota.appendChild(botonsubir);
                break; 


            case "Doing":
                tareota.appendChild(fechota);
                tareota.appendChild(textotareita); 
                tareota.appendChild(botoneliminar);
                tareota.appendChild(botonsubir);
                tareota.appendChild(botonbajar);
                break; 


            case "Done":
                tareota.appendChild(fechota);
                tareota.appendChild(textotareita); 
                tareota.appendChild(botoneliminar);
                tareota.appendChild(botonbajar);
                break;
        }

        botonbajar.addEventListener('click', this.degradar);
        botonsubir.addEventListener('click', this.aumentar);
        botoneliminar.addEventListener('click', this.eliminar);

        return tareota;
    }

   
}