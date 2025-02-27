document.addEventListener("DOMContentLoaded", () => {
    // Elementos de los botones
    const btnAdmin = document.getElementById("btn-admin")
    const btnApoderado = document.getElementById("btn-apoderado")
    const btnProfesor = document.getElementById("btn-profesor")
  
    // Elementos de los formularios
    const formAdmin = document.getElementById("form-admin")
    const formApoderado = document.getElementById("form-apoderado")
    const formProfesor = document.getElementById("form-profesor")
  
    // Función para mostrar el formulario seleccionado
    function showForm(formToShow) {
      // Ocultar todos los formularios
      ;[formAdmin, formApoderado, formProfesor].forEach((form) => {
        form.classList.add("d-none")
      })
  
      // Mostrar el formulario seleccionado
      formToShow.classList.remove("d-none")
    }
  
    // Función para activar el botón seleccionado
    function activateButton(buttonToActivate) {
      // Desactivar todos los botones
      ;[btnAdmin, btnApoderado, btnProfesor].forEach((btn) => {
        btn.classList.remove("active")
      })
  
      // Activar el botón seleccionado
      buttonToActivate.classList.add("active")
    }
  
    // Event listeners para los botones
    btnAdmin.addEventListener("click", () => {
      showForm(formAdmin)
      activateButton(btnAdmin)
    })
  
    btnApoderado.addEventListener("click", () => {
      showForm(formApoderado)
      activateButton(btnApoderado)
    })
  
    btnProfesor.addEventListener("click", () => {
      showForm(formProfesor)
      activateButton(btnProfesor)
    })
  
    // Validación de formularios
    ;[formAdmin, formApoderado, formProfesor].forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault()
  
        // Obtener los campos de email y password del formulario actual
        const emailInput = form.querySelector('input[type="email"]')
        const passwordInput = form.querySelector('input[type="password"]')
  
        // Validar email
        if (!validateEmail(emailInput.value)) {
          showError(emailInput, "Por favor, ingrese un correo electrónico válido")
          return
        } else {
          removeError(emailInput)
        }
  
        // Validar password
        if (passwordInput.value.length < 6) {
          showError(passwordInput, "La contraseña debe tener al menos 6 caracteres")
          return
        } else {
          removeError(passwordInput)
        }
  
        // Si todo está correcto, simular envío del formulario
        alert("Formulario enviado correctamente")
        form.reset()
      })
    })
  
    // Función para validar email
    function validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  
    // Función para mostrar error
    function showError(input, message) {
      const formFloating = input.parentElement
      let errorDiv = formFloating.nextElementSibling
  
      // Si no existe el div de error, crearlo
      if (!errorDiv || !errorDiv.classList.contains("invalid-feedback")) {
        errorDiv = document.createElement("div")
        errorDiv.className = "invalid-feedback"
        formFloating.parentNode.insertBefore(errorDiv, formFloating.nextSibling)
      }
  
      // Agregar mensaje y mostrar error
      errorDiv.textContent = message
      input.classList.add("is-invalid")
      errorDiv.style.display = "block"
    }
  
    // Función para quitar error
    function removeError(input) {
      input.classList.remove("is-invalid")
      const formFloating = input.parentElement
      const errorDiv = formFloating.nextElementSibling
  
      if (errorDiv && errorDiv.classList.contains("invalid-feedback")) {
        errorDiv.style.display = "none"
      }
    }
  })
  
  