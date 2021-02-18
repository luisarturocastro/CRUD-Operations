'use strict'

var operation = 0;

try {
   while (operation >= 0 || operation <= 8) {
       process.stdout.write("Elija la operación que desea realizar:\n" +
           "1. Ingresar\n" +
           "2. Eliminar\n" +
           "3. Editar\n" +
           "4. Buscar\n" +
           "5. Imprimir un indice\n" +
           "6. Imprimir arreglo\n" +
           "7. Imprimir suma y promedio\n" +
           "8. Salir\n");

       process.stdin.on('data', function (data) {
           if (data != "") {

           } else {
               print()
           }
           operation = data.toString().trim();
           process.stdout.write(operation + "\n");
       });
       break;

   }
}catch (error) {

}