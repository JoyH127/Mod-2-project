const db = require("../db");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      First_Name: "Mellie",
      Last_Name: "Moulsdale",
      nickname: "mmoulsdale0",
      email: "mmoulsdale0@yellowpages.com",
      address: "9711 Sauthoff Junction",
    },
    {
      First_Name: "Nolie",
      Last_Name: "Conley",
      nickname: "nconley1",
      email: "nconley1@howstuffworks.com",
      address: "85 5th Circle",
    },
    {
      First_Name: "Jdavie",
      Last_Name: "Spridgeon",
      nickname: "jspridgeon2",
      email: "jspridgeon2@google.ca",
      address: "609 Veith Lane",
    },
    {
      First_Name: "Judy",
      Last_Name: "Royce",
      nickname: "jroyce3",
      email: "jroyce3@domainmarket.com",
      address: "6 Bultman Lane",
    },
    {
      First_Name: "Dona",
      Last_Name: "Nobriga",
      nickname: "dnobriga4",
      email: "dnobriga4@loc.gov",
      address: "9725 Delaware Trail",
    },
    {
      First_Name: "Chrissie",
      Last_Name: "Olander",
      nickname: "colander5",
      email: "colander5@google.fr",
      address: "45 Forest Dale Court",
    },
    {
      First_Name: "Kermie",
      Last_Name: "Jager",
      nickname: "kjager6",
      email: "kjager6@blogtalkradio.com",
      address: "08516 Swallow Hill",
    },
    {
      First_Name: "Edgard",
      Last_Name: "Beisley",
      nickname: "ebeisley7",
      email: "ebeisley7@51.la",
      address: "1467 Bayside Street",
    },
    {
      First_Name: "Jilly",
      Last_Name: "Castri",
      nickname: "jcastri8",
      email: "jcastri8@google.ca",
      address: "01197 Talmadge Plaza",
    },
    {
      First_Name: "Farlie",
      Last_Name: "Grinvalds",
      nickname: "fgrinvalds9",
      email: "fgrinvalds9@telegraph.co.uk",
      address: "464 John Wall Plaza",
    },
    {
      First_Name: "Amalea",
      Last_Name: "Birdis",
      nickname: "abirdisa",
      email: "abirdisa@1688.com",
      address: "6 Duke Place",
    },
    {
      First_Name: "Eliza",
      Last_Name: "Alecock",
      nickname: "ealecockb",
      email: "ealecockb@ow.ly",
      address: "91812 Butterfield Alley",
    },
    {
      First_Name: "Chiarra",
      Last_Name: "Domenicone",
      nickname: "cdomeniconec",
      email: "cdomeniconec@ox.ac.uk",
      address: "1208 Kings Parkway",
    },
    {
      First_Name: "Raphaela",
      Last_Name: "Denyakin",
      nickname: "rdenyakind",
      email: "rdenyakind@whitehouse.gov",
      address: "973 Forest Dale Place",
    },
    {
      First_Name: "Clair",
      Last_Name: "Locksley",
      nickname: "clocksleye",
      email: "clocksleye@google.it",
      address: "7 Mallory Parkway",
    },
    {
      First_Name: "Elysee",
      Last_Name: "Gilmartin",
      nickname: "egilmartinf",
      email: "egilmartinf@netvibes.com",
      address: "029 Mcbride Parkway",
    },
    {
      First_Name: "Raffarty",
      Last_Name: "Venmore",
      nickname: "rvenmoreg",
      email: "rvenmoreg@icio.us",
      address: "20 Northwestern Park",
    },
    {
      First_Name: "Tripp",
      Last_Name: "Kornacki",
      nickname: "tkornackih",
      email: "tkornackih@illinois.edu",
      address: "70 Mockingbird Plaza",
    },
    {
      First_Name: "Zoe",
      Last_Name: "Siemantel",
      nickname: "zsiemanteli",
      email: "zsiemanteli@usnews.com",
      address: "15496 Porter Alley",
    },
    {
      First_Name: "Jedd",
      Last_Name: "Raitt",
      nickname: "jraittj",
      email: "jraittj@e-recht24.de",
      address: "10 Hayes Alley",
    },
  ];

  await User.insertMany(users);
  console.log("Created users");
};

//excute it everything
const run = async () => {
  await main();
  db.close();
};

run();
