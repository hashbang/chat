module.exports = {
	public: true,
	host: "0.0.0.0",
	port: 9000,
	bind: undefined,
	reverseProxy: true,
	theme: "themes/hashbang.css",
	autoload: true,
	prefetch: true,
	prefetchMaxImageSize: 512,
	displayNetwork: true,
	lockNetwork: true,
	webirc: null,
	logs: {
		format: "YYYY-MM-DD HH:mm:ss",
		timezone: "UTC+00:00"
	},
	maxHistory: -1,
	defaults: {
		name: "Hashbang",
		host: "irc.hashbang.sh",
		port: 6697,
		password: "",
		tls: true,
		nick: "somenick",
		username: "your-username",
		realname: "Your Real Name",
		join: "#!",
		auto: true
	},
	transports: ["polling", "websocket"],
	https: {
		enable: false,
		key: "",
		certificate: ""
	},
	identd: {
		enable: false,
		port: 113
	},
	oidentd: null,
};
