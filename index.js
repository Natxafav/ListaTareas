const agregarTareas = document.getElementById("agregarTareas");

agregarTareas.addEventListener("click", () => {

    const divTareas = document.createElement("div");
    divTareas.className = "divTareas";
    const etiqueta = document.createElement("label");
    const nuevaTarea = document.createElement("input");
    const inputTarea = document.getElementById("agregarInput");
    const datos = document.getElementById("datos");
    nuevaTarea.id = inputTarea.value;
    etiqueta.htmlFor = nuevaTarea.id;
    etiqueta.innerHTML = inputTarea.value;
    etiqueta.style.fontSize = "22px";
    etiqueta.className = "etiquetaTarea";
    nuevaTarea.type = "checkbox";

    nuevaTarea.className = "check";
    etiqueta.htmlFor = inputTarea.id;

    divTareas.appendChild(nuevaTarea);
    divTareas.appendChild(etiqueta);
    datos.appendChild(divTareas);
    inputTarea.value = "";
    tareaCompletada();
});

function tareaCompletada() {
    const select = document.querySelectorAll(".check");
    const eliminar = document.getElementById("eliminarBtn");
    
    select.forEach(element => {
        element.addEventListener("change", () => {
            const eliminados = document.querySelector(".datosEliminados");
            const label = element.nextElementSibling;

            if (element.checked) {
                let divTareas1 = eliminados.querySelector(".divTareas1");

                if (!divTareas1) {
                    divTareas1 = document.createElement("div");
                    divTareas1.className = "divTareas1";
                    eliminados.appendChild(divTareas1);
                }
                
                divTareas1.appendChild(element);
                divTareas1.appendChild(label);
                label.style.textDecoration = "line-through";

                eliminar.addEventListener("click", () => {
                    element.remove();
                    label.remove();
                    divTareas1.remove();
                });
            } else {
                let divTareasPendientes = datos.querySelector(".divTareas");

                if (!divTareasPendientes) {
                    divTareasPendientes = document.createElement("div");
                    divTareasPendientes.className = "divTareas";
                    datos.appendChild(divTareasPendientes);
                }

                divTareasPendientes.appendChild(element);
                divTareasPendientes.appendChild(label);
                label.style.textDecoration = "none";
            }
        });
    });
}


/*
function tareaCompletada() {
    const select = document.querySelectorAll(".check");
    const eliminar = document.getElementById("eliminarBtn");
    select.forEach(element => {
        element.addEventListener("change", () => {

            const eliminados = document.querySelector(".datosEliminados");
            const label = element.nextElementSibling;
            if (element.checked) {
                const divTareas1 = document.createElement("div");
                divTareas1.className = "divTareas1";
                divTareas1.appendChild(element);
                divTareas1.appendChild(label);
                eliminados.appendChild(divTareas1);
                label.style.textDecoration = "line-through";
                eliminar.addEventListener("click", () => {
                    element.remove();
                    label.remove();
                    divTareas1.remove();
                })
            } else {
                label.style.textDecoration = "none";
            }
        })
    })

}
*/