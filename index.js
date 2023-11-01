const agregarTareas = document.getElementById("agregarTareas");
agregarTareas.addEventListener("click", () =>{

    const divTareas = document.createElement("div");  
    divTareas.className = "divTareas";
    const etiqueta = document.createElement("label");
    const nuevaTarea = document.createElement("input");
    const inputTarea = document.getElementById("agregar");
    const datos = document.getElementById("datos");
    
    etiqueta.htmlFor = nuevaTarea;
    const textoEtiqueta = document.getElementById("agregar").value;
    etiqueta.innerHTML = textoEtiqueta; 
    etiqueta.style.fontSize ="22px";  
    etiqueta.className = "etiquetaTarea";
    nuevaTarea.type = "checkbox";
    nuevaTarea.id = inputTarea.value;
    nuevaTarea.className = "check"

    divTareas.appendChild(nuevaTarea);
    divTareas.appendChild(etiqueta);

    
    datos.appendChild(divTareas);
   inputTarea.value = "";

   tareaCompletada(); 
});

function tareaCompletada (){
    const select = document.querySelectorAll(".check");
    const eliminar = document.getElementById("eliminarBtn");
    select.forEach(element =>{
        element.addEventListener("change", () =>{
            
            const label = element.nextElementSibling;
            if(element.checked){
                label.style.textDecoration = "line-through";
                eliminar.addEventListener("click",()=>{
                    element.remove();
                    label.remove();
                })
            } else {
                label.style.textDecoration = "none";
            }
        })
    })

}
