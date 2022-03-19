const navigationBar = document.querySelector("nav"),
	pageConstructor = (href, display) => { return { href: href, display: display } },
	pages = [
		pageConstructor("joining.html", "How to join"),
		pageConstructor("contact.html", "Contact Us!"),
		pageConstructor("", "Who are we?"),
		pageConstructor("members.html", "Members")
	];
var navigation = `<a class="name" href="/">The Forum Participators</a>
<ul>`;
for (let page of pages) {
	let link = `<li><a href="/${page.href}">${page.display}</a></li>`;
	navigation += link;
}
navigation += "</ul>"
navigationBar.innerHTML = navigation;