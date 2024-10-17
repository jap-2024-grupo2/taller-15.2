// Arrays para almacenar los Usuarios y Productos
let users = []
let products = []

// Listener para el formulario de Usuarios
document
  .getElementById('userForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    // Usamos el operador REST para recolectar múltiples valores del formulario
    const addUser = (...userData) => {
      const [name, email, age] = userData
      const newUser = { name, email, age }
      users.push(newUser)
    }

    // Obtenemos los valores del formulario
    const name = document.getElementById('userName').value
    const email = document.getElementById('userEmail').value
    const age = document.getElementById('userAge').value

    // Llamamos a la función addUser usando REST
    addUser(name, email, age)

    // Limpiamos el formulario
    document.getElementById('userForm').reset()

    // Actualizamos el listado en vivo
    updateList()
  })

// Listener para el formulario de Productos
document
  .getElementById('productForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    // Usamos el operador REST para recolectar múltiples valores del formulario
    const addProduct = (...productData) => {
      const [name, price, category] = productData
      const newProduct = { name, price, category }
      products.push(newProduct)
    }

    // Obtenemos los valores del formulario
    const name = document.getElementById('productName').value
    const price = document.getElementById('productPrice').value
    const category = document.getElementById('productCategory').value

    // Llamamos a la función addProduct usando REST
    addProduct(name, price, category)

    // Limpiamos el formulario
    document.getElementById('productForm').reset()

    // Actualizamos el listado en vivo
    updateList()
  })

// Función para actualizar el listado de usuarios y productos (usando SPREAD)
function updateList() {
  const listSection = document.getElementById('listSection')
  listSection.innerHTML = '' // Limpiamos la sección de listado

  // Creamos una lista combinada de usuarios y productos usando SPREAD
  const combinedList = [...users, ...products]

  // Mostramos los usuarios y productos combinados
  if (combinedList.length > 0) {
    combinedList.forEach((item, index) => {
      if (item.email) {
        // Si tiene email, es un usuario
        listSection.innerHTML += `<li><strong>${index + 1}. Usuario:</strong> ${item.name} - <i>Email:</i> ${item.email} - <i>Edad:</i> ${item.age}</li>`
      } else {
        // Si no tiene email, es un producto
        listSection.innerHTML += `<li><strong>${index + 1}. Producto:</strong> ${item.name} - <i>Precio:</i> $${item.price} - <i>Categoría:</i> ${item.category}</li>`
      }
    })
  }
}
