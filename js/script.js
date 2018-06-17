console.log("You are using The Force...");
// grab the item you'll be manipulating from the document.
let music = document.querySelector(".music");
console.log(music);
let testParagraph = document.createElement("p");

// song information will have a nice black or white background (A box with a slight opacity alteration).
let playlist = [
  {
    title: "Lay It On Me",
    artist: "Vance Joy",
    album: "Nation of Two",
    released: "2018",
    addedBy: "Alex"
  },
  {
    title: "That's Life",
    artist: "Rob Curly",
    album: "Knowledge Is Pain",
    released: "2016",
    addedBy: "Alex"
  },
  {
    title: "That's Life",
    artist: "Frank Sinatra",
    album: "That's Life",
    released: "1966",
    addedBy: "Alex"
  },
  {
    title: "Flight",
    artist: "Hans Zimmer",
    album: "Man of Steel",
    released: "2013",
    addedBy: "Alex"
  },
  {
    title: "Traveller",
    artist: "Chris Stapleton",
    album: "Traveller",
    released: "2015",
    addedBy: "Alex"
  },
  {
    title: "Move Along",
    artist: "The All-American Rejects",
    album: "Move Along",
    released: "2005",
    addedBy: "Alex"
  },
  {
    title: "I Gotta Feeling",
    artist: "The Black Eyed Peas",
    album: "The E.N.D.",
    released: "2009",
    addedBy: "Alex"
  },
  {
    title: "Take Me Home, Country Roads",
    artist: "John Denver",
    album: "Poems, Prayers ad Promises",
    released: "1971",
    addedBy: "Alex"
  },
  {
    title: "Numb",
    artist: "Linkin Park",
    album: "Meteora",
    released: "2003",
    addedBy: "Alex"
  },
  {
    title: "do re mi",
    artist: "Blackbear",
    album: "digital druglord",
    released: "2017",
    addedBy: "Alex"
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    album: "Hotel California",
    released: "1976",
    addedBy: "Alex"
  },
  {
    title: "Hungarian Dance No. 5 in G minor",
    artist: "Johannes Brahams",
    album: "Hungarian Dances (Book 1)",
    released: "1869",
    addedBy: "Alex"
  },
  {
    title: "Mr.Brightside",
    artist: "The Killers",
    album: "Hot Fuss",
    released: "2004",
    addedBy: "Alex"
  },
  {
    title: "Mr. Blue Sky",
    artist: "Electric Light Orchestra",
    album: "Out of the Blue",
    released: "1977",
    addedBy: "Alex"
  },
  {
    title: "Space Oddity",
    artist: "David Bowie",
    album: "David Bowie",
    released: "1969",
    addedBy: "Alex"
  },
  {
    title: "All The Small Things",
    artist: "blink-182",
    album: "Enema Of The State",
    released: "1999",
    addedBy: "Alex"
  },
  {
    title: "Brown Paper Bag",
    artist: "Migos",
    album: "Culture",
    released: "2017",
    addedBy: "Alex"
  },
  {
    title: "Still Got Time ft. PARTYNEXTDOOR",
    artist: "Zayn",
    album: "Still Got Time",
    released: "2017",
    addedBy: "Alex"
  },
  {
    title: "Atlantis (demo taped Remix)",
    artist: "Bridgit Mendler",
    album: "Nemesis",
    released: "2016",
    addedBy: "Alex"
  },
  {
    title: "Home Alone",
    artist: "Ansel Elgort",
    album: "Home Alone",
    released: "2016",
    addedBy: "Alex"
  },
  {
    title: "***flawless",
    artist: "Beyoncé",
    album: "Beyoncé",
    released: "2013",
    addedBy: "Alex"
  },
  {
    title: "Jumpman",
    artist: "Drake, Future",
    album: "What A Time To Be Alive",
    released: "2015",
    addedBy: "Alex"
  },
  {
    title: "Set Fire to the Rain",
    artist: "Adel",
    album: "21",
    released: "2011",
    addedBy: "Alex"
  },
  {
    title: "Make You Feel My Love",
    artist: "Bob Dylan",
    album: "Time Out Of Mind",
    released: "1997",
    addedBy: "Alex"
  },
  {
    title: "Blackbird",
    artist: "The Beatles",
    album: "The Beatles",
    released: "1968",
    addedBy: "Alex"
  },
  {
    title: "Someone New",
    artist: "Hoizer",
    album: "Hoizer",
    released: "2014",
    addedBy: "Alex"
  }
];

let songs = Object.values(playlist).map(song => {
  // create the elements
  let songContainer = document.createElement("div");
  let songTitle = document.createElement("h2");
  let songArtist = document.createElement("h2");
  let songAlbum = document.createElement("h2");
  let songReleased = document.createElement("h2");
  let songLover = document.createElement("p");
  // give the parent a key
  songContainer.key = song.id;
  // give the parent a class name.
  songContainer.className = "song";
  // give the kids something to eat.
  songTitle.innerHTML = song.title;
  songArtist.innerHTML = "By " + song.artist;
  songAlbum.innerHTML = "Album: " + song.album;
  songReleased.innerHTML = "Released: " + song.released;
  songLover.innerHTML = "Added by " + song.addedBy;
  // append the kids to the song container.
  songContainer.appendChild(songTitle);
  songContainer.appendChild(songArtist);
  songContainer.appendChild(songAlbum);
  songContainer.appendChild(songReleased);
  songContainer.appendChild(songLover);
  music.appendChild(songContainer);
  return songContainer;
});

music.appendChild(songs);
