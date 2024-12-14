import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    postsList:[
      {   "id": 1,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 08:05",
          "text": "Nädal algab hästi... Kõne reklaamiosakonnast, nad ei suuda ühte faili leida. Soovitan neile otsinguprogrammi Fdisk. Loodan, et nad on mõnda aega hõivatud.",
          "image": "https://m.media-amazon.com/images/M/MV5BMTcwMjEwODM1OF5BMl5BanBnXkFtZTgwMTk0MjYyMjE@._V1_.jpg",
          "likes": 0},
      {   "id": 2,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 08:25",
          "text": "Laenuosakond kaebab, et nende võrguühendus ei tööta. Lubasin kohe asjaga tegeleda. Tõmban kohvimasina seinast välja ja lülitan nende serveri tagasi. Miks keegi mind ei kuula, kui ma räägin, et siin on liiga vähe pistikupesasid? Laenuosakond tänab kiire tegutsemise eest. Jälle paar õnnelikku kasutajat!",
          "image": "",
          "likes": 0},
        { "id": 3,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 08:45",
          "text": "Laojobud tahavad teada, kuidas nad oma tekstiredaktoris kirjastiili muuta saavad. Küsin neilt, millise kiibikomplektiga emaplaat neil on. Lubasid tagasi helistada, kui välja on uurinud.",
          "image": "",
          "likes": 0},
      {   "id": 4,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 09:20",
          "text": "Kõne harukontorist: nad ei suuda Lotus Notes'ist mingeid andmeid leida. Suunan kõne keldrikorrusele valvuriruumi.",
          "image": "",
          "likes": 0},
      {   "id": 5,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 09:35",
          "text": "Reklaamiosakonnast teatatakse, et nende PC ei tööta enam ja näitab \"ERROR IN DRIVE O.\" Ütlen neile, et viga on operatsioonisüsteemis ja annan Microsofti hotline-numbri.",
          "image": "",
          "likes": 0},
      {   "id": 6,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 09:40",
          "text": "Laotegelased väidavad, et said teada, et kirjastiilis pole kiibikomplektiga mingit pistmist. Vastan, et ütlesin enne bitikomplekt, mitte kiibikomplekt. Nad lubavad edasi otsida. Mis kuradi moodi nad juhiload on saanud?!",
          "image": "",
          "likes": 0},
      {   "id": 7,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 10:05",
          "text": "Koolitusjuht helistab, ta vajab uuele praktikandile koodi. Ütlen, et ta peab esitama taotluse formularil 7A96GFTR4567LPHT. Väidab, et pole sellisest formularist midagi kuulnud. Suunan ta keldrikorrusele valvuri juurde.",
          "image": "",
          "likes": 0},
      {   "id": 8,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 10:20",
          "text": "Tüübid laost ei anna rahu. Nad on ebasõbralikud ja väidavad, et ma lollitan neid. Olevat nüüd ise välja uurinud, kuidas kirjastiili muuta. Tahavad minu peale personalijuhile kaevata. Lülitan personalijuhi \"hõivatud\" peale. Siis login ennast nende serverisse ja annan neile ühe õppetunni.",
          "image": "",
          "likes": 0},
      {   "id": 9,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 10:30",
          "text": "Tüdruksõber helistab. Tema vanemad tulevad nädalavahetusel külla ja ta on põhjaliku programmi nende jaoks ette valmistanud. Ei lõpeta lobisemist. Ühendan ta valvuriruumiga.",
          "image": "",
          "likes": 0},
      {   "id": 10,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 10:40",
          "text": "Jälle ladu! Teatavad, et kõik nende failid on tühjad. Ütlen neile, et see tuleb sellest, kui üritatakse administraatorist targemad olla. Olen armuline ja luban probleemiga tegeleda. Ootan 15 minutit ja muudan nende serveris fondivärvi valge pealt mustale tagasi. Nad tänavad ülevoolavalt ja kinnitavad, et kaebamise ähvardus oli lihtsalt nali. Alates tänasest söövad nad mul peost!",
          "image": "",
          "likes": 0},
      {   "id": 11,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 10:55",
          "text": "Valvur tuleb minu juurde ja räägib, et saab imelikke kõnesid. Tahab kindlasti arvutitega tuttavaks saada. Luban tal kohe pihta hakata ja annan esimeseks ülesandeks tähelepanelikult kuvarit jälgida. Lähen lõunat sööma.",
          "image": "",
          "likes": 0},
      {   "id": 12,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 14:30",
          "text": "Saabun lõunasöögilt tagasi. Valvur räägib, et personaliülem käis kohal ja seletas midagi telefoniprobleemist. Lülitan ta telefoni uuesti liinile. Mida need inimesed küll ilma minuta teeksid???",
          "image": "https://m.media-amazon.com/images/M/MV5BNDJjNzJlOTYtY2U0MC00MDE4LWIxNDgtMGIxMDcyODg0NTE1XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UX500_CR0,1,500,281_.jpg",
          "likes": 0},
      {   "id": 13,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 14:35",
          "text": "Lülitan teenusetelefoni uuesti sisse. See heliseb kohe. Helen (paistab uus töötaja olema) logistikast helistab. Ütleb, et vajab kohe uut koodi, kuna unustas vana ära. Seletan talle, et uue koodi genereerib programm, kui sellele tema juuksevärv, vanus, mõõdud ja perekonnaseis ette anda. Andmed on paljutõotavad. Ütlen, et kood saab alles õhtuks valmis, aga kuna asjaga on kiire, toon selle talle koju ära.",
          "image": "",
          "likes": 0},
      {   "id": 14,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 14:40",
          "text": "Lehitsen veidi personalijuhi märkmikus. Kustutan kolmapäeva alt sissekande \"HOMME PULMA-AASTAPÄEV!!!\" ja neljapäeva alt \"PULMA-AASTAPÄEV! KODUTEEL LILLI OSTA!!!\" Mõtlen, kas ta reedel ikka nii rahulolev välja näeb.",
          "image": "",
          "likes": 0},
      {   "id": 15,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 14:45",
          "text": "Valvur ütleb, et pilt tundub talle kuidagi tume. Lülitan kuvari sisse ja käivitan screensaveri. Valvur teeb hoolega märkmeid. Kui oleks vaid võimalik kõiki nii kergesti õnnelikuks teha...",
          "image": "",
          "likes": 0},
      {   "id": 16,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 14:55",
          "text": "Tõstan mõned sissekanded kataloogist \"Parandatud vead\" peaserverisse tagasi, et öisel vahetusel igav ei hakkaks.",
          "image": "",
          "likes": 0},
      {   "id": 17,
          "username": "Kristjan",
          "datetime": "Nov 1, 2024, 15:00",
          "text": "Lõpuks on tööpäev läbi! Otsin personaliosakonna serverist Heleni aadressi ja võtan ülemuste ruumi külmkapist pudeli šampust. Märgin veel kiiruga üles tema uue koodi (123456) ja asun teele. Pärast sellist päeva vajab inimene veidi lõõgastumist!!!",
          "image": "",
          "likes": 0}
    ]
  },
  getters: {
    getPostsList: state => {
      var getPostsList = state.postsList.map(post => {
        return {
          id: post.id,
          username: post.username,
          datetime: post.datetime,
          text: post.text,
          image: post.image,
          likes: post.likes
        }
      });
      return getPostsList
    },
  },
  mutations: {
    INCREMENT_LIKES(state, postId) { 
        const post = state.postsList.find(post => post.id === postId); 
        if (post) {
            post.likes++; 
        } 
    },
    RESET_LIKES(state) { 
        for (const post of state.postsList) {
            post.likes = 0; 
        }
     },
  },
  actions: {
    incrementLikes({ commit }, postId) { 
        commit('INCREMENT_LIKES', postId); 
    },
    resetLikes({ commit }) { 
        commit('RESET_LIKES'); 
    },
  },
  modules: {
  }
})
