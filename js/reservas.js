class Reserva {
    static idReserva = 0;
    constructor() {
        this.idReserva = Reserva.idReserva++;
        this.fecha = "";
        this.hora = "";
        this.telCliente = "";
        this.nombreCliente = "";
        this.emailCliente = "";
        this.barbero = "";
        this.especialidad = "";
    }
}

const listaReservas = [];

// 4 reservas a la misma hora, una por cada barbero (09:00, 2025-08-01)
const r1 = new Reserva();
r1.fecha = "2025-08-18";
r1.hora = "09:30";
r1.barbero = "Carlos Gomez";
r1.nombreCliente = "Juan Pérez";
r1.telCliente = "099111111";
r1.emailCliente = "cliente1@mail.com";
r1.especialidad = "Corte clásico";
listaReservas.push(r1);

const r2 = new Reserva();
r2.fecha = "2025-08-05";
r2.hora = "09:00";
r2.barbero = "Diego Rodriguez";
r2.nombreCliente = "Luis González";
r2.telCliente = "099222222";
r2.emailCliente = "cliente2@mail.com";
r2.especialidad = "Corte degradé";
listaReservas.push(r2);

const r3 = new Reserva();
r3.fecha = "2025-08-05";
r3.hora = "09:00";
r3.barbero = "Martin Silva";
r3.nombreCliente = "Carlos Ramírez";
r3.telCliente = "099333333";
r3.emailCliente = "cliente3@mail.com";
r3.especialidad = "Recorte de barba";
listaReservas.push(r3);

const r4 = new Reserva();
r4.fecha = "2025-08-05";
r4.hora = "09:00";
r4.barbero = "Sebastian Duarte";
r4.nombreCliente = "Ricardo Fernández";
r4.telCliente = "099444444";
r4.emailCliente = "cliente4@mail.com";
r4.especialidad = "Color";
listaReservas.push(r4);

const r5 = new Reserva();
r5.fecha = "2025-08-04";
r5.hora = "09:00";
r5.barbero = "NBS";
r5.nombreCliente = "Mateo López";
r5.telCliente = "099555555";
r5.emailCliente = "cliente5@mail.com";
r5.especialidad = "Corte clásico";
listaReservas.push(r5);

const r6 = new Reserva();
r6.fecha = "2025-08-04";
r6.hora = "09:00";
r6.barbero = "NBS";
r6.nombreCliente = "Diego Torres";
r6.telCliente = "099666666";
r6.emailCliente = "cliente6@mail.com";
r6.especialidad = "Corte degradé";
listaReservas.push(r6);

const r7 = new Reserva();
r7.fecha = "2025-08-04";
r7.hora = "09:00";
r7.barbero = "Cualquier barbero";
r7.nombreCliente = "Julián Martínez";
r7.telCliente = "099777777";
r7.emailCliente = "cliente7@mail.com";
r7.especialidad = "Recorte de barba";
listaReservas.push(r7);

const r8 = new Reserva();
r8.fecha = "2025-08-04";
r8.hora = "09:00";
r8.barbero = "Cualquier barbero";
r8.nombreCliente = "Santiago Herrera";
r8.telCliente = "099888888";
r8.emailCliente = "cliente8@mail.com";
r8.especialidad = "Color";
listaReservas.push(r8);

const r9 = new Reserva();
r9.fecha = "2025-08-02";
r9.hora = "10:30";
r9.barbero = "Carlos Gomez";
r9.nombreCliente = "Tomás Díaz";
r9.telCliente = "098111111";
r9.emailCliente = "cliente9@mail.com";
r9.especialidad = "Corte clásico";
listaReservas.push(r9);

const r10 = new Reserva();
r10.fecha = "2025-08-02";
r10.hora = "11:00";
r10.barbero = "Diego Rodriguez";
r10.nombreCliente = "Valentín Ruiz";
r10.telCliente = "098222222";
r10.emailCliente = "cliente10@mail.com";
r10.especialidad = "Color";
listaReservas.push(r10);

const r11 = new Reserva();
r11.fecha = "2025-08-02";
r11.hora = "15:30";
r11.barbero = "Sebastian Duarte";
r11.nombreCliente = "Agustín Castro";
r11.telCliente = "098333333";
r11.emailCliente = "cliente11@mail.com";
r11.especialidad = "Corte degradé";
listaReservas.push(r11);

const r12 = new Reserva();
r12.fecha = "2025-08-04";
r12.hora = "12:00";
r12.barbero = "Martin Silva";
r12.nombreCliente = "Martín Morales";
r12.telCliente = "098444444";
r12.emailCliente = "cliente12@mail.com";
r12.especialidad = "Recorte de barba";
listaReservas.push(r12);

const r13 = new Reserva();
r13.fecha = "2025-08-08";
r13.hora = "09:30";
r13.barbero = "NBS";
r13.nombreCliente = "Facundo Vega";
r13.telCliente = "098555555";
r13.emailCliente = "cliente13@mail.com";
r13.especialidad = "Corte clásico";
listaReservas.push(r13);

const r14 = new Reserva();
r14.fecha = "2025-08-07";
r14.hora = "16:00";
r14.barbero = "Carlos Gomez";
r14.nombreCliente = "Emiliano Méndez";
r14.telCliente = "098666666";
r14.emailCliente = "cliente14@mail.com";
r14.especialidad = "Color";
listaReservas.push(r14);

const r15 = new Reserva();
r15.fecha = "2025-08-07";
r15.hora = "14:30";
r15.barbero = "NBS";
r15.nombreCliente = "Nicolás Cabrera";
r15.telCliente = "098777777";
r15.emailCliente = "cliente15@mail.com";
r15.especialidad = "Recorte de barba";
listaReservas.push(r15);

const r16 = new Reserva();
r16.fecha = "2025-08-08";
r16.hora = "10:00";
r16.barbero = "NBS";
r16.nombreCliente = "Pedro Gómez";
r16.telCliente = "099123123";
r16.emailCliente = "pedro@mail.com";
r16.especialidad = "Corte";
listaReservas.push(r16);

const r17 = new Reserva();
r17.fecha = "2025-08-08";
r17.hora = "10:00";
r17.barbero = "NBS";
r17.nombreCliente = "Ana Ruiz";
r17.telCliente = "098456456";
r17.emailCliente = "ana@mail.com";
r17.especialidad = "Afeitado";
listaReservas.push(r17);

const r18 = new Reserva();
r18.fecha = "2025-08-08";
r18.hora = "10:00";
r18.barbero = "NBS";
r18.nombreCliente = "Luis Torres";
r18.telCliente = "097789789";
r18.emailCliente = "luis@mail.com";
r18.especialidad = "Color";
listaReservas.push(r18);

const r19 = new Reserva();
r19.fecha = "2025-08-08";
r19.hora = "11:30";
r19.barbero = "Martin Silva";
r19.nombreCliente = "Sofía Acosta";
r19.telCliente = "092111111";
r19.emailCliente = "sofia@mail.com";
r19.especialidad = "Corte";
listaReservas.push(r19);

const r20 = new Reserva();
r20.fecha = "2025-08-08";
r20.hora = "11:30";
r20.barbero = "NBS";
r20.nombreCliente = "Emilio Fernández";
r20.telCliente = "091222222";
r20.emailCliente = "emilio@mail.com";
r20.especialidad = "Lavado";
listaReservas.push(r20);

const r21 = new Reserva();
r21.fecha = "2025-08-08";
r21.hora = "11:30";
r21.barbero = "NBS";
r21.nombreCliente = "Laura Pereira";
r21.telCliente = "093333333";
r21.emailCliente = "laura@mail.com";
r21.especialidad = "Afeitado";
listaReservas.push(r21);

// 9 de agosto
const r22 = new Reserva();
r22.fecha = "2025-08-09";
r22.hora = "10:00";
r22.barbero = "Martin Silva";
r22.nombreCliente = "Pedro López";
r22.telCliente = "091111111";
r22.emailCliente = "pedro@mail.com";
r22.especialidad = "Corte clásico";
listaReservas.push(r22);

const r23 = new Reserva();
r23.fecha = "2025-08-09";
r23.hora = "15:30";
r23.barbero = "Carlos Gomez";
r23.nombreCliente = "Juan Fernández";
r23.telCliente = "092222222";
r23.emailCliente = "juan@mail.com";
r23.especialidad = "Recorte de barba";
listaReservas.push(r23);

// 14 de agosto - solo 5 reservas
const r24 = new Reserva();
r24.fecha = "2025-08-14";
r24.hora = "09:00";
r24.barbero = "Martin Silva";
r24.nombreCliente = "Luis Pérez";
r24.telCliente = "091234567";
r24.emailCliente = "luis@mail.com";
r24.especialidad = "Corte clásico";
listaReservas.push(r24);

const r25 = new Reserva();
r25.fecha = "2025-08-14";
r25.hora = "10:30";
r25.barbero = "Carlos Gomez";
r25.nombreCliente = "Andrés Castro";
r25.telCliente = "092345678";
r25.emailCliente = "andres@mail.com";
r25.especialidad = "Corte degrade";
listaReservas.push(r25);

const r26 = new Reserva();
r26.fecha = "2025-08-14";
r26.hora = "12:00";
r26.barbero = "Sebastian Duarte";
r26.nombreCliente = "Fernando Morales";
r26.telCliente = "093456789";
r26.emailCliente = "fernando@mail.com";
r26.especialidad = "Color";
listaReservas.push(r26);

const r27 = new Reserva();
r27.fecha = "2025-08-14";
r27.hora = "15:00";
r27.barbero = "Diego Rodriguez";
r27.nombreCliente = "Ricardo Silva";
r27.telCliente = "094567890";
r27.emailCliente = "ricardo@mail.com";
r27.especialidad = "Recorte de barba";
listaReservas.push(r27);

const r28 = new Reserva();
r28.fecha = "2025-08-14";
r28.hora = "17:30";
r28.barbero = "Martin Silva";
r28.nombreCliente = "Jorge González";
r28.telCliente = "095678901";
r28.emailCliente = "jorge@mail.com";
r28.especialidad = "Corte clásico";
listaReservas.push(r28);

// 18 de agosto - 4 reservas a las 09:00 con barberos distintos
const r29 = new Reserva();
r29.fecha = "2025-08-18";
r29.hora = "09:00";
r29.barbero = "Martin Silva";
r29.nombreCliente = "Andrés Castro";
r29.telCliente = "096789012";
r29.emailCliente = "andres@mail.com";
r29.especialidad = "Corte clásico";
listaReservas.push(r29);

const r30 = new Reserva();
r30.fecha = "2025-08-18";
r30.hora = "09:00";
r30.barbero = "Carlos Gomez";
r30.nombreCliente = "Pablo Martínez";
r30.telCliente = "097890123";
r30.emailCliente = "pablo@mail.com";
r30.especialidad = "Corte degrade";
listaReservas.push(r30);

const r31 = new Reserva();
r31.fecha = "2025-08-18";
r31.hora = "09:00";
r31.barbero = "Sebastian Duarte";
r31.nombreCliente = "Rodrigo Silva";
r31.telCliente = "098901234";
r31.emailCliente = "rodrigo@mail.com";
r31.especialidad = "Color";
listaReservas.push(r31);

const r32 = new Reserva();
r32.fecha = "2025-08-18";
r32.hora = "09:00";
r32.barbero = "Diego Rodriguez";
r32.nombreCliente = "Valentín Ramos";
r32.telCliente = "099012345";
r32.emailCliente = "valentin@mail.com";
r32.especialidad = "Recorte de barba";
listaReservas.push(r32);
