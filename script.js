document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById("item");
    const addButton = document.getElementById("agregar");
    const lista = document.getElementById("lista");

    addButton.addEventListener("click", () => {
        const itemText = itemInput.value.trim();

        if (itemText !== "") {
            // Crear un nuevo elemento de lista
            const newItem = document.createElement("li");
            newItem.innerHTML = `
                ${itemText}
                <button class="eliminar">Eliminar</button>
            `;

            lista.appendChild(newItem);

            //Limpiar campo de entrada
            itemInput.value = "";

            //Agregar evento de eliminación al boton
            const deleteButton = newItem.querySelector(".eliminar");
            deleteButton.addEventListener("click", () => {
                lista.removeChild(newItem);
            });
        }
    });

    itemInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
}); 