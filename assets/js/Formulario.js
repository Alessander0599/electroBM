document.getElementById('Formulario').addEventListener('submit',submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var correo = getInputVal('email');
    var message = getInputVal('message');
    var cont_email = getInputVal('mail');

    sendEmail(name, phone, correo, message,cont_email);

  }

  function getInputVal(id) {
   return document.getElementById(id).value;
 }

 function sendEmail(name, phone, correo, message,cont_email){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "confecclucky19@gmail.com",
    Password: "qqxrkvpzybxtysho",
    To: "confecclucky19@gmail.com",
    From: "confecclucky19@gmail.com",
    Subject: `${name} Te envio un mensaje - ELECTROBOMBAS MONTERO`,
    Body: `Nombre del Representante: ${name} <br/>
    Correo Electronico: ${correo} <br/> Telefono: ${phone} <br/>
    Mensaje: ${message} <br/> <b>Medio de Contacto:</b> <br/> Email: ${cont_email}`,
  })
  .then((message)=>{
    Swal.fire({
      icon: 'success',
      text: 'Su mensaje se envio correctamente. Nosotros nos pondremos en contacto',
      timer: 1800
    })
    document.getElementById('Formulario').reset();
   });
}
