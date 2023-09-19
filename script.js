
        
         // Obtener el botón de menú y el menú desplegable por su id
         var menuButton = document.getElementById("menu-button");
         var dropdownMenu = document.getElementById("dropdown-menu");

         // Agregar un evento al botón de menú para que al hacer clic cambie su clase a activo o inactivo
         menuButton.addEventListener("click", function() {
             menuButton.classList.toggle("active");
             
             // Si el botón de menú está activo, mostrar el menú desplegable y cambiar las líneas del botón
             if (menuButton.classList.contains("active")) {
                 dropdownMenu.classList.add("active");
             } else { // Si el botón de menú está inactivo, ocultar el menú desplegable y restaurar las líneas del botón
                 dropdownMenu.classList.remove("active");
             }
         });