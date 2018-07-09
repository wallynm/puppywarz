const dir = 'res';

const filenames = [
	'characters/cat01.jpg',
	'characters/dog01.jpg',
	'helloBG.png',
	'start_n.png',
	'start_s.png',
	'PlayBG.png',
	'running.png',
	'running.plist',
	'map.png',
	'map00.tmx',
	'map01.tmx',
	'background.png',
	'background.plist',
	'restart_n.png',
	'restart_s.png',
	'background.mp3',
	'jump.mp3',
	'pickup_coin.mp3'
];

const resources = filenames.reduce((collection, filename) => {
	return Object.assign({}, collection, { [ filename.replace(/\W/g,'_') ] : dir + '/' + filename });
}, {});

console.info(resources)

export default resources;