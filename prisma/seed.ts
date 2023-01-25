import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();

async function main(){
  await prisma.servicesStatus.createMany({
    data: [
      {name: 'Aberto'},
      {name: 'Em andamento'},
      {name: 'Em análise'},
      {name: 'Fechado'},
    ],
    skipDuplicates: true
  });
  await prisma.userTypes.createMany({
    data: [
      {name: 'Ajudante'},
      {name: 'Ajudado'},
      {name: 'Ajudada'}
    ],
    skipDuplicates: true
  });
  await prisma.messageStatus.createMany({
    data: [
      {name: 'Lida'},
      {name: 'Não lida'}
    ],
    skipDuplicates: true
  });
  await prisma.usersStatus.createMany({
    data: [
      {name: 'Disponível'},
      {name: 'Ocupado(a)'},
      {name: 'Ausente'}
    ],
    skipDuplicates: true
  });
  
  await prisma.users.createMany({
    data: [
      {
        name: 'Andre',
        surname: 'Alves',
        birthday: dayjs('2000-01-01').toDate(),
        email: 'andre@gmail.com',
        password: '123456',
        typeId: 1,
        statusId: 3
      },
      {
        name: 'Bernardo',
        surname: 'Bastos',
        birthday: dayjs('2000-02-01').toDate(),
        email: 'bernardo@gmail.com',
        password: '123456',
        typeId: 1,
        statusId: 3
      },
      {
        name: 'Carolina',
        surname: 'Castro',
        birthday: dayjs('2000-03-01').toDate(),
        email: 'carol@gmail.com',
        password: '123456',
        typeId: 1,
        statusId: 3
      },
      {
        name: 'Daniela',
        surname: 'Dourado',
        birthday: dayjs('2000-04-01').toDate(),
        email: 'dani@gmail.com',
        password: '123456',
        typeId: 1,
        statusId: 3
      },
      {
        name: 'Eduardo',
        surname: 'Estrella',
        birthday: dayjs('1970-05-01').toDate(),
        email: 'eduardo@gmail.com',
        password: '123456',
        typeId: 2,
        statusId: 3
      },
      {
        name: 'Fernanda',
        surname: 'Farias',
        birthday: dayjs('1970-06-01').toDate(),
        email: 'fernanda@gmail.com',
        password: '123456',
        typeId: 3,
        statusId: 3
      },
      {
        name: 'Gabriela',
        surname: 'Goes',
        birthday: dayjs('1970-07-01').toDate(),
        email: 'fernanda@gmail.com',
        password: '123456',
        typeId: 3,
        statusId: 3
      },
      {
        name: 'Hugo',
        surname: 'Horta',
        birthday: dayjs('1970-08-01').toDate(),
        email: 'hugo@gmail.com',
        password: '123456',
        typeId: 2,
        statusId: 3
      }
    ]
  });
  
  await prisma.addresses.createMany({
    data: [
      {
        userId: 1,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
      {
        userId: 2,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
      {
        userId: 3,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
      {
        userId: 4,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
      {
        userId: 5,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
      {
        userId: 6,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
      {
        userId: 7,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
      {
        userId: 8,
        name: 'Casa',
        country: 'Brasil',
        state: 'Rio de Janeiro',
        city: 'Rio de Janeiro',
        district: 'São Conrado'
      },
    ]
  });

  await prisma.services.createMany({
    data: [
      {
        name: 'Meu monitor não está ligando',
        description: 'Meu monitor ta na tomada mas não funciona',
        statusId: 2,
        requesterId: 5,
        helperId: 1,
        price: 200
      },
      {
        name: 'Meu monitor não está ligando',
        description: 'Meu monitor ta na tomada mas não funciona',
        statusId: 1,
        requesterId: 6,
        helperId: 6,
        price: 200
      },
      {
        name: 'Meu monitor não está ligando',
        description: 'Meu monitor ta na tomada mas não funciona',
        statusId: 1,
        requesterId: 7,
        helperId: 7,
        price: 200
      },
      {
        name: 'Meu monitor não está ligando',
        description: 'Meu monitor ta na tomada mas não funciona',
        statusId: 1,
        requesterId: 8,
        helperId: 8,
        price: 200
      },
      {
        name: 'Meus videos do youtube demoram muito pra carregar',
        description: 'Quando coloco pra ver meus videos no youtube, eles demoram mais de 1 minuto pra carregar.',
        statusId: 1,
        requesterId: 7,
        helperId: 7,
        price: 500
      },
      {
        name: 'Meu monitor não está ligando',
        description: 'Meu monitor ta na tomada mas não funciona',
        statusId: 1,
        requesterId: 4,
        helperId: 4,
        price: 500
      }
    ]
  });

  await prisma.conversations.createMany({
    data: [
      {
        requesterId: 5,
        helperId: 1,
        serviceId: 1
      },
      {
        requesterId: 5,
        helperId: 2,
        serviceId: 1
      },
      {
        requesterId: 7,
        helperId: 3,
        serviceId: 5
      },
      {
        requesterId: 7,
        helperId: 4,
        serviceId: 5
      }
    ]
  });

  await prisma.messages.createMany({
    data: [
      {
        senderId: 1,
        recipientId: 5,
        conversationId: 1,
        statusId: 1,
        text: 'Olá Eduardo, me chamo André. Posso te ajudar com a sua dúvida, pode aceitar minha solicitação?'
      },
      {
        senderId: 1,
        recipientId: 5,
        conversationId: 2,
        statusId: 1,
        text: 'Olá Eduardo, me chamo Bernardo. Posso te ajudar com a sua dúvida, pode aceitar minha solicitação?'
      },
      {
        senderId: 5,
        recipientId: 1,
        conversationId: 1,
        statusId: 1,
        text: 'Oi André, acabei de aceitar. Obrigado pela ajuda'
      },
      {
        senderId: 1,
        recipientId: 5,
        conversationId: 1,
        statusId: 1,
        text: 'Pode me passar o seu número de celular, de preferência um que tenha Whatsapp?'
      },
      {
        senderId: 5,
        recipientId: 1,
        conversationId: 1,
        statusId: 1,
        text: 'Posso sim, é (21) 99999-9999'
      },
      {
        senderId: 3,
        recipientId: 7,
        conversationId: 3,
        statusId: 2,
        text: 'Olá Gabriela, me chamo Carol. Posso te ajudar com a sua dúvida, pode aceitar minha solicitação?'
      },
      {
        senderId: 4,
        recipientId: 7,
        conversationId: 4,
        statusId: 2,
        text: 'Olá Gabriela, me chamo Daniela. Posso te ajudar com a sua dúvida, pode aceitar minha solicitação?'
      }
    ]
  });

  await prisma.sessions.createMany({
    data: [
      {
        userId: 1,
        token: 'abcd1234'
      },
      {
        userId: 5,
        token: 'ab12'
      }
    ]
  });


  /* 
    let ticketTypes = await prisma.ticketType.findFirst();
    if (!ticketTypes) {
    await prisma.ticketType.create({
      data: {
        name: 'Online',
        price: 10000,
        isRemote: true,
        includesHotel: false
      },
    });
    await prisma.ticketType.create({
      data: {
        name: 'Presencial + Sem Hotel',
        price: 25000,
        isRemote: false,
        includesHotel: false
      },
    });
    await prisma.ticketType.create({
      data: {
        name: 'Presencial + Com Hotel',
        price: 60000,
        isRemote: false,
        includesHotel: true
      },
    });
  };

  let hotel = await prisma.hotel.findFirst();
   if(!hotel){
     await prisma.hotel.createMany({
      data:[
        {
         id:1,  
         name: 'Driven Resort',
         image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_871,h_581/https://blog.hotelpontaverde.com.br/wp-content/uploads/2019/09/Resort-ou-Hotel-Hotel-Ponta-Verde-France%CC%82s.png',
        },
        { 
          id:2,
          name: 'Driven Palace',
          image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_871,h_581/https://blog.hotelpontaverde.com.br/wp-content/uploads/2019/09/Resort-ou-Hotel-Hotel-Ponta-Verde-France%CC%82s.png',
         },
         { 
          id:3,
          name: 'Driven World',
          image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_871,h_581/https://blog.hotelpontaverde.com.br/wp-content/uploads/2019/09/Resort-ou-Hotel-Hotel-Ponta-Verde-France%CC%82s.png',
         },]
    });
  }

  let roomsInHotel = await prisma.room.findFirst();
  if(!roomsInHotel){
     await prisma.room.createMany({
      data : [
        {  name: '101', capacity: 1, hotelId: 1 },
        {  name: '102', capacity: 2, hotelId: 1 },
        {  name: '103', capacity: 3, hotelId: 1 },
        {  name: '201', capacity: 1, hotelId: 1 },
        {  name: '202', capacity: 2, hotelId: 1 },
        {  name: '203', capacity: 3, hotelId: 1 },
        {  name: '101', capacity: 1, hotelId: 2 },
        {  name: '102', capacity: 2, hotelId: 2 },
        {  name: '103', capacity: 3, hotelId: 2 },
        {  name: '201', capacity: 1, hotelId: 2 },
        {  name: '202', capacity: 2, hotelId: 2 },
        {  name: '203', capacity: 3, hotelId: 2 },
        {  name: '101', capacity: 1, hotelId: 3 },
        {  name: '102', capacity: 2, hotelId: 3 },
        {  name: '103', capacity: 3, hotelId: 3 },
        {  name: '201', capacity: 1, hotelId: 3 },
        {  name: '202', capacity: 2, hotelId: 3 },
        {  name: '203', capacity: 3, hotelId: 3 },
        {  name: '301', capacity: 1, hotelId: 3 },
        {  name: '302', capacity: 2, hotelId: 3 },
        {  name: '303', capacity: 3, hotelId: 3 },
      ]
    });
  }

  let activityLocation = await prisma.activityLocation.findFirst();
  if (!activityLocation) {
    await prisma.activityLocation.createMany({
      data: [{
        name: 'Auditório Principal'
      },{
        name: 'Auditório Lateral'
      },{
        name: 'Sala de Workshop'
      }]
    })};

  let activity = await prisma.activity.findFirst();
  if (!activity) {
    await prisma.activity.createMany({
      data: [{
        name: 'Minecraft: montando o PC ideal',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 1,
        startTime: dayjs('2022-10-22 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-22 10:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'LoL: montando o PC ideal',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 1,
        startTime: dayjs('2022-10-22 10:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-22 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra x',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 2,
        startTime: dayjs('2022-10-22 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-22 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra y',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 3,
        startTime: dayjs('2022-10-22 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-22 10:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra z',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 3,
        startTime: dayjs('2022-10-22 10:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-22 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Minecraft: montando o PC ideal',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 1,
        startTime: dayjs('2022-10-23 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-23 10:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'LoL: montando o PC ideal',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 1,
        startTime: dayjs('2022-10-23 10:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-23 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra x',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 2,
        startTime: dayjs('2022-10-23 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-23 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra y',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 3,
        startTime: dayjs('2022-10-23 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-23 10:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra z',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 3,
        startTime: dayjs('2022-10-23 10:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-23 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Minecraft: montando o PC ideal',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 1,
        startTime: dayjs('2022-10-24 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-24 10:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'LoL: montando o PC ideal',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 1,
        startTime: dayjs('2022-10-24 10:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-24 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra x',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 2,
        startTime: dayjs('2022-10-24 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-24 11:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra y',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 3,
        startTime: dayjs('2022-10-24 09:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-24 10:00:00.000').add(-3, 'h').toDate()
      },{
        name: 'Palestra z',
        capacity: 30,
        remainingVacancies: 30,
        activityLocationId: 3,
        startTime: dayjs('2022-10-24 10:00:00.000').add(-3, 'h').toDate(),
        endTime: dayjs('2022-10-24 11:00:00.000').add(-3, 'h').toDate()
      }]
    })}; */
    
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });