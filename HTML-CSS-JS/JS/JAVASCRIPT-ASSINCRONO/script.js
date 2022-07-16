const BASE_URL = `https://rickandmortyapi.com/api/character/${Math.floor(Math.random()*826)}`;

const getCats = async () => {
	
    const data = await fetch(BASE_URL);
    const json = await data.json();
    
    return json.image;
    
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();
