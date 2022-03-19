const curatorEl = document.getElementById("curators"),
	managerEl = document.getElementById("managers");

function createMemberElement(data) {
	let div = document.createElement("div"),
		el = document.createElement("a"),
		img = document.createElement("img"),
		span = document.createElement("span");
	div.classList.add("member")
	el.href = "https://scratch.mit.edu/users/" + data.username;
	
	img.src = data.profile.images["90x90"];
	img.classList.add("avatar");
	el.appendChild(img);
	
	el.appendChild(document.createElement("br"));

	span.classList.add("name");
	span.innerText = data.username;
	el.appendChild(span);
	div.appendChild(el);
	return div;
}

fetch("/members.json")
	.then(res => res.json())
	.then(data => {
		let curators = data.curators;
		for (let i of curators) {
			curatorEl.appendChild(createMemberElement(i));
		}

		let managers = data.managers,
			creator = managers.shift();
		for (let i of managers) {
			managerEl.appendChild(createMemberElement(i));
		}

		const creatorEl = createMemberElement(creator),
			creatorElPlace = document.getElementById("creator");
		creatorEl.classList.add("creator");
		creatorEl.innerHTML += "<br>Creator";
		creatorElPlace.appendChild(creatorEl);
	});