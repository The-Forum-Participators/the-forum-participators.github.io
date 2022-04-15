/* RUNS IN NODEJS ONLY! */

const fetch = require("cross-fetch");
const fs = require("fs");

function trimUserData(data) {
  return {
    username: data.username,
    profile: {
      images: {
        "90x90": data.profile.images["90x90"],
      },
    },
  };
}

async function loopMembers(initURL) {
  let data = [];
  let offset = 0;
  let shouldEnd = false;
  while(!shouldEnd) {
    const fetchRequest = await fetch(initURL + "?offset=" + offset.toString());
    const response = await fetchRequest.json();
    for(let i of response) {
      data.push(i);
    }
    offset += 20;
    if(response.length < 20) {
      shouldEnd = true;
    }
  }
  return data;
}

(async() => {
  const managers = await loopMembers("https://api.scratch.mit.edu/studios/31153550/managers");
  const curators = await loopMembers("https://api.scratch.mit.edu/studios/31153550/curators");
  console.log(`${managers.length} managers, ${curators.length} curators`);
  
  const data = JSON.stringify({
    managers: managers.map(trimUserData),
    curators: curators.map(trimUserData)
  });

  fs.writeFileSync("./data.json", data);
  console.log("written");
})();
