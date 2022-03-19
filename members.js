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

fetch("/data.json")
	.then((res) => res.json())
	.then((data) => {
		// Curators
		let curators = data.curators;
		for (let index of curators) {
			curatorEl.appendChild(createMemberElement(index));
		}

		// Managers
		let managers = data.managers,
			creator = managers[0];
		managers.shift();
		for (let index of managers) {
			managerEl.appendChild(createMemberElement(index));
		}

		const creatorEl = createMemberElement(creator);
		creatorEl.classList.add("creator");
		creatorEl.innerHTML = creatorEl.innerHTML + "<br>Creator";
		document.getElementById("creator").appendChild(creatorEl);
	});