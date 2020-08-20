console.log("hello");
const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];
const makeChart =(games)=>{
  const ulPrent = document.createElement("ul");
  for (let game of games) {
    const { homeTeam, awayTeam } = game;
    const {team:hTeam, points:hPoints}= homeTeam;
    const {team:aTeam, points:aPoints}= awayTeam;
    const newLi = document.createElement("li");
    const teamName = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if(aPoints > hPoints){
      scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    }else{
      scoreLine = `${aPoints} - <b>${hPoints}</b>`;
    }
    newLi.innerHTML = `${teamName} ${scoreLine}`;
    const woriers = hTeam === 'Golden State' ? homeTeam : awayTeam;
    newLi.classList.add(woriers.isWinner ? 'win':'loss');
    // console.log(awayTeam.team,homeTeam.team);
    ulPrent.appendChild(newLi);
  }
  return ulPrent;
};

const chart1 = makeChart(warriorsGames)
document.body.prepend(chart1);
