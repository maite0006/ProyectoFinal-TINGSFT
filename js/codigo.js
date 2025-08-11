
//interacción con el HTML DV
function eventos() {
    document.querySelector("#btnLoginInicio").addEventListener("click", mostrarFormLogin);
    document.querySelector("#btnReservarInicio").addEventListener("click", mostrarFormReservas);
    document.querySelector("#btnLogin").addEventListener("click", loginUI);
    document.querySelector("#divTablaListaReservas").innerHTML = mostrarReservasDelDia();
    document.querySelector("#btnHome").addEventListener("click", mostrarInicio)
}

eventos();
cargarPaginaInicio();

function cargarPaginaInicio() {
    mostrarDiv("main");
    ocultarDiv("listaReservas");
    ocultarDiv("reservasSeccion");
    ocultarDiv("login");
}
//dv ocultar secciones que no aplica

function mostrarFormLogin() {
    ocultarDiv("main");
    ocultarDiv("listaReservas");
    ocultarDiv("reservasSeccion");
    mostrarDiv("login");
 
}

function mostrarFormReservas(){
    ocultarDiv("main");
    ocultarDiv("listaReservas");
    ocultarDiv("login");
    mostrarDiv("reservasSeccion");

}

function mostrarInicio(){
    ocultarDiv("reservasSeccion");
    ocultarDiv("listaReservas");
    ocultarDiv("login");
    mostrarDiv("main");
    limpiarCajas("usuarioLoginId");
    limpiarCajas("passwordLoginId");
}

//funciones mostrar-ocultar

function mostrarDiv(pDiv) {
    document.querySelector(`#${pDiv}`).style.display = "flex";
}


function ocultarDiv(pDiv) {
    document.querySelector(`#${pDiv}`).style.display = "none";
}

function limpiarCajas(pTxt) {
    document.querySelector(`#${pTxt}`).value = "";
}

function loginUI(){
    let mensaje = "";
    let nomUsuario = document.querySelector("#usuarioLoginId").value;
    let pass = document.querySelector("#passwordLoginId").value;
    if (validarIngresoAlgo(nomUsuario) && validarIngresoAlgo(pass)) {
        let nomUsuarioLow = nomUsuario.toLowerCase();
        if (nomUsuarioLow =='admin' && pass=='barberia') {
                        
            mostrarDiv("listaReservas");
            ocultarDiv("reservasSeccion");
            ocultarDiv("login");
            

        } else {
            mensaje = `Verifique usuario y/o contraseña.`;
        }
    } else {
        mensaje = ` Debe ingresar usuario y contraseña.`;
        
    }
    document.querySelector("#mensajeLogin").innerHTML = mensaje;
}

function validarIngresoAlgo(pAlgo) {
        return pAlgo.trim().length > 0;
}

function mostrarReservasDelDia() {
    let tablaHTML = `<table style="width: 100%; border-collapse: collapse;">`;
    tablaHTML += `<thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Nombre</th>
                      <th>Teléfono</th>
                      <th>Email</th>
                      <th>Especialidad</th>
                      <th>Barbero</th>
                    </tr>
                  </thead>
                  <tbody>`;

    const fechaActual = new Date();
    const año = fechaActual.getFullYear();
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const dia = fechaActual.getDate().toString().padStart(2, '0');
    const hoy = `${año}-${mes}-${dia}`;

    for (let reserva of listaReservas) {
        if (reserva.fecha === hoy) {
            tablaHTML += `<tr>
                <td data-label="Fecha">${reserva.fecha}</td>
                <td data-label="Hora">${reserva.hora}</td>
                <td data-label="Nombre">${reserva.nombreCliente}</td>
                <td data-label="Teléfono">${reserva.telCliente}</td>
                <td data-label="Email">${reserva.emailCliente}</td>
                <td data-label="Especialidad">${reserva.especialidad}</td>
                <td data-label="Barbero">${reserva.barbero}</td>
              </tr>`;
        }
    }

    tablaHTML += `</tbody></table>`;
    return tablaHTML;
}

reservar();

function reservar(){
    let valorFecha="";
    let valorHora="";
    let valorServicio="";
    let valorBarbero="";
    let valorNombre="";
    let valorTel = "";
    let valorEmail="";
    
    let fechaValida = false;
    let horaValida = false;
    let servicioValido = false;
    let barberoValido=false;
    let telefonoValido=false;
    let emailValido=false;

    // validación fecha
    const fechaImput=document.getElementById("fechaReserva");
    fechaImput.addEventListener("change", function(){
        valorFecha=this.value;
        const mensajeF= document.getElementById("mensajeFecha");

        if(!valorFecha){
            mensajeF.textContent="Debe seleccionar una fecha";
            fechaValida = false;
            return;
        }
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const limiteSuperior = new Date(hoy);
        limiteSuperior.setDate(limiteSuperior.getDate() + 28); // 4 semanas
        const limiteInferior=new Date(hoy)
        limiteInferior.setHours(0, 0, 0, 0);
        const fecha=new Date(valorFecha);
        const dia= fecha.getDay();
        
        if(fecha<=limiteInferior){
            mensajeF.textContent = "Las reservas requieren un mínimo de un día de anticipación.";
             fechaValida = false;
            return;
        }
        if (fecha> limiteSuperior) {
            mensajeF.textContent = "Solo se permiten reservas dentro de las próximas 4 semanas.";
             fechaValida = false;
            return;
        }
        if(dia===5||dia===6){
            mensajeF.textContent="Día inválido. Los horarios son de Lunes a Viernes de 09:00 a 18:00 hrs.";
             fechaValida = false;
            return;
        }
        mensajeF.textContent=""
        fechaValida = true;
        
    })

     // validación hora
    const horaImput=document.getElementById("horaReserva");
    horaImput.addEventListener("change", function(){
        valorHora=this.value;
        const mensajeH=document.getElementById("mensajeHora");
        
        if(!valorHora|| valorHora=="NH"){
            mensajeH.textContent="Debe seleccionar una hora";
            horaValida = false;
            return;
        }

        let contadorH=0;

        for(const reserva of listaReservas){
            if(reserva.hora==valorHora&&reserva.fecha === valorFecha){
                contadorH++;
            }
        }
        if (contadorH >= 4) {
            mensajeH.textContent = "No hay disponibilidad en este horario para el día seleccionado.";
            horaValida = false;
            return;
        }
        mensajeH.textContent = "";
        horaValida=true;
        


    })

    // validación especialidad
    const especialidadInput=document.getElementById("especialidadReserva");
    especialidadInput.addEventListener("change", function(){
         valorServicio=this.value;
        const mensajeE=document.getElementById("mensajeEspecialidad");
        if(!valorServicio|| valorServicio=="NE"){
            mensajeE.textContent="Debe seleccionar un servicio.";
            servicioValido=false;
            return;
        }
        mensajeE.textContent="";
        servicioValido=true;
    })

   

    // validación barbero
    let barberoInput=document.getElementById("barberoReserva");
    function validarBarbero(){
        valorBarbero=barberoInput.value;
        const mensajeB=document.getElementById("mensajeBarbero");

        for(const reserva of listaReservas){
            if(valorBarbero!="NBS"){
                if(reserva.fecha===valorFecha&&reserva.hora===valorHora&&reserva.barbero===valorBarbero){
                    mensajeB.textContent="El barbero no esta disponible para este turno.";
                    barberoValido=false;
                    return;
                }

            }
        }
        barberoValido=true;
        mensajeB.textContent="";
    }
    barberoInput.addEventListener("change", validarBarbero);
    
    //validacion tel
    const telInput = document.getElementById("telefonoReserva");
    telInput.addEventListener("input", function () {
        valorTel = this.value.trim();
        const mensajeTel = document.getElementById("mensajeTel");
        const prefijo = valorTel.substring(0, 3);
        const longitud = valorTel.length;
        
        const prefijosValidos = ["099", "098", "097", "096", "095", "094", "093", "092", "091"];

        if(!valorTel){
            mensajeTel.textContent = "Debe de ingresar un teléfono.";
            telefonoValido = false;
            return;
        }
        if (longitud !== 9 || !prefijosValidos.includes(prefijo)) {
            mensajeTel.textContent = "Formato de teléfono inválido.";
            telefonoValido = false;
            return;
        }
        mensajeTel.textContent = "";
        telefonoValido = true;
    
    });

    //validación email
    const emailInput = document.getElementById("emailReserva");
    emailInput.addEventListener("input", function () {
        valorEmail = this.value.trim();
        const mensajeEmail = document.getElementById("mensajeEmail");
        
        const tieneArroba = valorEmail.includes("@");
        const partes = valorEmail.split("@");
        if(!valorEmail){
            mensajeEmail.textContent = "Debe de ingresar un correo.";
            emailValido = false;
            return;
        }
        if (!tieneArroba || partes.length !== 2 || partes[0] === "" || partes[1] === "") {
            mensajeEmail.textContent = "Ingrese un correo válido.";
            emailValido = false;
            return;
        } 
        mensajeEmail.textContent = "";
        emailValido = true;
        
    });
    const nombreInput=document.getElementById("nombreReserva");
    nombreInput.addEventListener("input", function () {
        const mensajeNombre=document.getElementById("mensajeNombre");
        valorNombre = nombreInput.value;
        if(!valorNombre){
            mensajeNombre.textContent = "Debe de ingresar su nombre.";
            return;
        }
        mensajeNombre.textContent="";
    });

    //funcionamiento boton
    const btnReserva=document.getElementById("botonReserva");
    btnReserva.addEventListener("click", function(){
        event.preventDefault();
        const mensajeGeneral = document.getElementById("mensajeGeneral");
        validarBarbero();
        if(!valorFecha||!valorHora||valorHora=="NH"||!valorServicio||valorServicio=="NE"||!valorEmail||!valorTel||!valorNombre){
            mensajeGeneral.textContent="Hay campos sin completar."
            return;
        }
        if(!fechaValida||!horaValida||!servicioValido||!barberoValido||!telefonoValido||!emailValido){
            mensajeGeneral.textContent="Los datos ingresados para la reserva son inválidos."
            return;
        }
        if(fechaValida&&horaValida&&servicioValido&&barberoValido&&telefonoValido&&emailValido){
            var r= new Reserva();
            r.fecha=valorFecha;
            r.hora=valorHora;
            r.barbero=valorBarbero;
            r.especialidad=valorServicio;
            r.nombreCliente=valorNombre;
            r.telCliente=valorTel;
            r.emailCliente=valorEmail;
            listaReservas.push(r);
            mostrarPopupReserva(valorFecha, valorHora, valorServicio,valorBarbero, valorNombre);

            document.getElementById("fechaReserva").value = "";
            document.getElementById("horaReserva").value = "NH";
            document.getElementById("especialidadReserva").value = "NE";
            document.getElementById("barberoReserva").value = "NBS";
            document.getElementById("nombreReserva").value = "";
            document.getElementById("telefonoReserva").value = "";
            document.getElementById("emailReserva").value = "";
            mensajeGeneral.textContent="";
            fechaValida = false;
            horaValida = false;
            servicioValido = false;
            barberoValido=false;
            telefonoValido=false;
            emailValido=false;


        }

    })


}

function mostrarPopupReserva(fecha, hora, servicio, barbero, nombre) {
    const popup = document.getElementById("popupReserva");
    const contenido = document.getElementById("popupContenido");
    if(barbero!="NBS"){
     contenido.textContent = `Estimado/a ${nombre}, tu reserva para el servicio de ${servicio} con ${barbero} ha sido registrada para el día ${fecha} a las ${hora}.`;
    }
    else{
        contenido.textContent = `Estimado/a ${nombre}, tu reserva para el servicio de ${servicio}  ha sido registrada para el día ${fecha} a las ${hora}.`;
    }

    popup.style.display = "block";
}

function cerrarPopup() {
    document.getElementById("popupReserva").style.display = "none";
}



