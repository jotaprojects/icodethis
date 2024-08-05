const SIZE = 100;

const data = [
  {
    id: 1,
    image: `https://picsum.photos/id/10/${SIZE}/${SIZE}`,
    title: "The Greatest Showman A Cappella",
    artist: "Peter Hollens",
    plays: 2089766,
  },
  {
    id: 2,
    image: `https://picsum.photos/id/11/${SIZE}/${SIZE}`,
    title: "Disney Classics",
    artist: "Alex G, Peter Hollens",
    plays: 1864874,
  },
  {
    id: 3,
    image: `https://picsum.photos/id/12/${SIZE}/${SIZE}`,
    title: "Crazy Life",
    artist: "Home Free",
    plays: 1543632,
  },
  {
    id: 4,
    image: `https://picsum.photos/id/13/${SIZE}/${SIZE}`,
    title: "DCappella",
    artist: "DCappella",
    plays: 1234877,
  },
  {
    id: 5,
    image: `https://picsum.photos/id/14/${SIZE}/${SIZE}`,
    title: "Mandy Moore",
    artist: "Mandy Moore",
    plays: 1122879,
  },
  {
    id: 6,
    image: `https://picsum.photos/id/15/${SIZE}/${SIZE}`,
    title: "Pitch Perfect Soundtrack",
    artist: "The Barden Bellas, The Treblemakers",
    plays: 986884,
  },
  {
    id: 7,
    image: `https://picsum.photos/id/16/${SIZE}/${SIZE}`,
    title: "A Little Louder",
    artist: "Signature A Cappella",
    plays: 765864,
  },
  {
    id: 8,
    image: `https://picsum.photos/id/17/${SIZE}/${SIZE}`,
    title: "Wellerman",
    artist: "VoicePlay, Anthony Gargiula",
    plays: 732771,
  },
];

const template = document.querySelector("#list-item");
const list = document.querySelector("#list");

function render() {
  list.innerHTML = "";

  data.forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    const imgEl = clone.querySelector("img");
    imgEl.src = item.image;
    imgEl.alt = `Album Cover for ${item.title}`;
    clone.querySelector("h2").textContent = item.title;
    clone.querySelector("p").textContent = item.artist;
    clone.querySelector(".album__stats").textContent = formatNumber(item.plays);
    list.appendChild(clone);
  });
}

function formatNumber(number) {
  return new Intl.NumberFormat("en-US").format(number);
}

render();
