const curatorEl = document.getElementById("curators");
const managerEl = document.getElementById("managers");

function createMemberElement(data) {
  const div = document.createElement("div");
  div.classList.add("member");
  const el = document.createElement("a");
  el.href = "https://scratch.mit.edu/users/" + data.username;

  const img = document.createElement("img");
  img.src = data.profile.images["90x90"];
  img.classList.add("avatar");
  el.appendChild(img);

  el.appendChild(document.createElement("br"));

  const span = document.createElement("span");
  span.classList.add("name");
  span.innerText = data.username;
  el.appendChild(span);

  div.appendChild(el);
  return div;
}

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    // Curators
    const curators = data.curators;
    for (let index of curators) {
      curatorEl.appendChild(createMemberElement(index));
    }

    // Managers
    const managers = data.managers;
    const creator = managers[0];
    managers.shift();
    for (let index of managers) {
      managerEl.appendChild(createMemberElement(index));
    }

    const creatorEl = createMemberElement(creator);
    creatorEl.classList.add("creator");
    creatorEl.innerHTML = creatorEl.innerHTML + "<br>Creator";
    document.getElementById("creator").appendChild(creatorEl);
  });
