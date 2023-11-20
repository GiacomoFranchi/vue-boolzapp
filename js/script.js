const { createApp } = Vue;
const dt = luxon.DateTime;
const app = createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Bianca',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Bianca, hai ancora la febbre?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'si :(',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            aI: 0,
            text:"",
            srcUser:"",
            newMessages: {
                date: "dt.now('it')" ,
                message: "",
                status: "sent",
            },
            newMessagesAns: {
                date:"date()",
                message: "",
                status: "sent",
            }
        }
    },

    methods: {
        show(clickindex) {
            this.aI = clickindex
            console.log(this.aI);
        },
        ansTimer: function()  {
            this.newMessagesAns.message = "OK";
            this.newMessagesAns.status = "received"

            this.contacts[this.aI].messages.push(this.newMessagesAns)
        },
        prendiDaInput(aI){
            this.newMessages.message = this.text;
            this.newMessages.status = "sent"

            this.contacts[aI].messages.push({...this.newMessages})
            this.text= ""
            setTimeout(() => {
                this.ansTimer()
            },2000)
        },
      // eliminaMsg(index, aI){
       //     this.contact[index].message[index].splice(this.messages[index])
       // },
        cerca: function(index){
            for(let i = 0; i < this.contacts.length - 1; i++){
                if(this.contacts[i].name.includes(this.srcUser)){
                    console.log("presente", this.contacts[i].name);
                }else{
                    console.log("assente", this.contacts[i].name);
                }
            }
        },
        toHourM(date){
            const luxonDate = dt.fromFormat(date, "dd/MM/yyyy HH:mm:ss");
            return luxonDate.toFormat("HH:mm");
        },
        toDayHourM(date){
            const luxonDate = dt.fromFormat(date, "dd/MM/yyyy HH:mm:ss");
            return luxonDate.toFormat("HH:mm  il  dd/MM");
        },
    }
})
app.mount("#app")


//function date(){
    //const today = new Date()
    //const f = new Intl.DateTimeFormat("it", {dateStyle: "full"})
    //return 
//}