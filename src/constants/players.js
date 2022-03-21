export const players = [
  {
    name: "Josh Cohen",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "Goal keeper",
    age: "29",
    shirtNumber: "44"
  }, {
    name: "Roei Mashpati",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "Goal keeper",
    age: "29",
    shirtNumber: "90"
  }, {
    name: "Bogdan Planitch'",

    team: "Maccabi Haifa",
    isIsraeli: false,
    position: "defender",
    age: "30",
    shirtNumber: "5"
  }, {
    name: "Ofri Arad",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "defender",
    age: "23",
    shirtNumber: "15"
  }, {
    name: "Ori Dahan",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "defender",
    age: "22",
    shirtNumber: "24"
  }, {
    name: "Rami Gershon",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "defender",
    age: "33",
    shirtNumber: "55"
  }, {
    name: "San Menachem",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "defender",
    age: "28",
    shirtNumber: "12"
  }, {
    name: "Shon Goldberg",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "defender",
    age: "26",
    shirtNumber: "3"
  }, {
    name: "Mohamad Abu Funny",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "midfielder",
    age: "23",
    shirtNumber: "16"
  }, {
    name: "Maor Levi",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "midfielder",
    age: "21",
    shirtNumber: "33"
  }, {
    name: "Dolev Haziza",

    team: "Maccabi Haifa",
    isIsraeli: true,
    position: "attacker",
    age: "26",
    shirtNumber: "8"
  },
  {
    name: "Daniel Peretz",

    team: "Maccabi Tel Aviv",
    isIsraeli: true,
    position: "Goal keeper",
    age: "21",
    shirtNumber: "1"
  }, {
    name: "Idan Nahmias",

    team: "Maccabi Tel Aviv",
    isIsraeli: true,
    position: "defender",
    age: "24",
    shirtNumber: "5"
  },
  {
    name: "Dan Biton",

    team: "Maccabi Tel Aviv",
    isIsraeli: true,
    position: "midfielder",
    age: "26",
    shirtNumber: "10"
  }, {
    name: "Eden Shamir",

    team: "Maccabi Tel Aviv",
    isIsraeli: true,
    position: "midfielder",
    age: "26",
    shirtNumber: "18"
  }, {
    name: "Stipe Periza",

    team: "Maccabi Tel Aviv",
    isIsraeli: false,
    position: "attacker",
    age: "26",
    shirtNumber: "9"
  },
  {
    name: "Doron Lidener",
    team: "Hapoel Tel Aviv",
    isIsraeli: true,
    position: "defender",
    age: "19",
    shirtNumber: "16"
  }, {
    name: "Shay Eizen",

    team: "Hapoel Tel Aviv",
    isIsraeli: true,
    position: "midfielder",
    age: "21",
    shirtNumber: "29"
  }, {
    name: "Idan Vered",

    team: "Hapoel Tel Aviv",
    isIsraeli: true,
    position: "midfielder",
    age: "32",
    shirtNumber: "10"
  }, {
    name: "Shay Elias",

    team: "Hapoel Tel Aviv",
    isIsraeli: true,
    position: "midfielder",
    age: "23",
    shirtNumber: "19"
  }, {
    name: "Omer Senior",

    team: "Hapoel Tel Aviv",
    isIsraeli: true,
    position: "attacker",
    age: "19",
    shirtNumber: "30"
  }, {
    name: "Offir Kriaff",
    playoff: "The bottom playoff",
    team: "Beitar Jerusalem F.C",
    isIsraeli: true,
    position: "midfielder",
    age: "31",
    shirtNumber: "24"
  }, {
    name: "Michael Ohana",
    playoff: "The bottom playoff",
    team: "Beitar Jerusalem F.C",
    isIsraeli: true,
    position: "midfielder",
    age: "26",
    shirtNumber: "10"
  }, {
    name: "Dan Azaria",
    playoff: "The bottom playoff",
    team: "Beitar Jerusalem F.C",
    isIsraeli: true,
    position: "midfielder",
    age: "26",
    shirtNumber: "8"
  }, {
    name: "Omer Lakao",
    playoff: "The bottom playoff",
    team: "Beitar Jerusalem F.C",
    isIsraeli: true,
    position: "midfielder",
    age: "24",
    shirtNumber: "25"
  }, {
    name: "Liran Rotman",
    playoff: "The bottom playoff",
    team: "Beitar Jerusalem F.C",
    isIsraeli: true,
    position: "midfielder",
    age: "25",
    shirtNumber: "15"
  }, {
    name: "Ihab Ganaim",
    team: "Bnei Sakhnin",
    isIsraeli: true,
    position: "midfielder",
    age: "25",
    shirtNumber: "6"
  }, {
    name: "Roei Shukrani",
    team: "Bnei Sakhnin",
    isIsraeli: true,
    position: "midfielder",
    age: "31",
    shirtNumber: "55"
  }, {
    name: "Ron Ashkenazi",
    team: "Maccabi Netanya",
    isIsraeli: true,
    position: "attacker",
    age: "23",
    shirtNumber: "29"
  }
]

export const playerNames = players.map((player, index) => ({id: index, name: player.name}));