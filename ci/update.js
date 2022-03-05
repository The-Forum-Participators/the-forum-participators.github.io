/* RUNS IN NODEJS ONLY! */

const fetch = require("cross-fetch");
const fs = require("fs");
(async() => {
  let managers = [];
  let curators = [];
  const managerReq = await fetch("https://api.scratch.mit.edu/studios/31153550/managers");
  managers = await managerReq.json();
  const curatorReq = await fetch("https://api.scratch.mit.edu/studios/31153550/curators");
  curators = await curatorReq.json();

  const data = JSON.stringify({
    managers: managers,
    curators: curators
  });

  fs.writeFileSync("./data.json", data);
})();
