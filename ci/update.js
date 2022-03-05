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

(async() => {
  let managers = [];
  let curators = [];
  const managerReq = await fetch("https://api.scratch.mit.edu/studios/31153550/managers");
  managers = await managerReq.json();
  const curatorReq = await fetch("https://api.scratch.mit.edu/studios/31153550/curators");
  curators = await curatorReq.json();

  const data = JSON.stringify({
    managers: managers.map(trimUserData),
    curators: curators.map(trimUserData)
  });

  fs.writeFileSync("./data.json", data);
})();
