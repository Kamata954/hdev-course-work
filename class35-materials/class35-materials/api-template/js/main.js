//Make an api request using async await

document.querySelector("button").addEventListener('click', getImage);

async function getImage() {
    try{
        const res = await fetch("https://api.waifu.im/search?included_tags=maid");
        if(!res.ok){
            throw new Error(`Response status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);

        document.querySelector("img").src = data.images[0].url;
    } catch (error) {
        console.error(error.message)
    }

}
