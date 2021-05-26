var sinon = require("sinon");

class Song {
    constructor(id, title, artist, releasedate, price) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.releasedate = releasedate;
        this.price = price;
    }
}

//Functions
function deleteSong(idToDelete) {
    this.server = sinon.createFakeServer();
    //var idToDelete;
    for (i = 0; i < playlist.length; i++) {
        if (idToDelete == i) {
            playlist.splice(i, 1);
        }
    }
    editedplaylist = JSON.stringify(playlist);
    console.log("Playlist after deleting song ID: ", idToDelete, "\n", editedplaylist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            editedplaylist]);
    this.server.respond();
}

function addSong(id, title, artist, releasedate, price) {
    this.server = sinon.createFakeServer();
    var songTemp = new Song(id, title, artist, releasedate, price);
    playlist.push(songTemp);
    editedplaylist = JSON.stringify(playlist);
    console.log("Playlist after adding song ID: ", id, "\n", editedplaylist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            editedplaylist]);
    this.server.respond();
}

function editSong(playlistid, elementchange, newelement) {
    this.server = sinon.createFakeServer();
    //var playlistid, elementchange, newelement
    var changedsong;

    for (i = 0; i < playlist.length; i++) {
        if (playlistid == playlist[i].id) {
            if (elementchange == 'id') {
                playlist[i].id = newelement;
            }
            else if (elementchange == 'title') {
                playlist[i].title = newelement;
            }
            else if (elementchange == 'artist') {
                playlist[i].artist = newelement;
            }
            else if (elementchange == 'releasedate') {
                playlist[i].releasedate = newelement;
            }
            else if (elementchange == 'price') {
                playlist[i].price = newelement;
            }
            else {
                console.error('please reenter');
            }
        }
    }

    editedplaylist = JSON.stringify(playlist);
    console.log("Playlist after changing song ID ", playlistid, "'s ", elementchange, " to ", newelement, ":\n", editedplaylist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            editedplaylist]);
    this.server.respond();
}

function sortByTitle() {
    this.server = sinon.createFakeServer();
    var sortedlist = playlist.sort((a, b) => (a.title > b.title) ? 1 : -1);
    jsonlist = JSON.stringify(sortedlist);
    console.log("Playlist sorted by title:\n", jsonlist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            jsonlist]);
    this.server.respond();
}

function sortByArtist() {
    this.server = sinon.createFakeServer();
    var sortedartist = playlist.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
    var jsonlist = JSON.stringify(sortedartist);
    console.log("Playlist sorted by artist:\n", jsonlist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            jsonlist]);
    this.server.respond();
}

function sortById() {
    this.server = sinon.createFakeServer();
    var sortedid = playlist.sort((a, b) => (a.id > b.id) ? 1 : -1);
    var jsonlist = JSON.stringify(sortedid);
    console.log("Playlist sorted by ID:\n", jsonlist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            jsonlist]);
    this.server.respond();
}

function sortByPrice() {
    this.server = sinon.createFakeServer();
    var sortedprice = playlist.sort((a, b) => (a.price > b.price) ? 1 : -1);
    var jsonlist = JSON.stringify(sortedprice);
    console.log("Playlist sorted by price:\n", jsonlist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            jsonlist]);
    this.server.respond();
}

function filterByDate() {
    this.server = sinon.createFakeServer();
    var sorteddate = playlist.sort((a, b) => (a.releasedate > b.releasedate) ? 1 : -1);
    var jsonlist = JSON.stringify(sorteddate);
    console.log("Playlist sorted by date:\n", jsonlist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            jsonlist]);
    this.server.respond();
}

function savePlaylist() {
    this.server = sinon.createFakeServer();
    fail = 4;
    randomnum = parseInt(Math.random() * 6);
    if (randomnum != fail) {
        var jsonlist = JSON.stringify(playlist);
    console.log("Playlist saved sucessfully:\n", jsonlist, "\n");

    this.server.respondWith("GET", "song.json",
        [200, { "Content-Type": "application/json" },
            jsonlist]);this.server.respond();
    }
    else {
        console.log("Error. Playlist not saved\n");
        request.error();
    }
}

//Create hardcoded playlist and execute functions
var songOne = new Song(0, "here comes the sun", "the Beatles", 1970, 100.00);
var songTwo = new Song(1, "electric feel", "mgmt", 2005, 990.00);
var songThree = new Song(2, "back to the shack", "weezer", 2014, 1000.00);
var songFour = new Song(3, "doin time", "sublime", 1996, 10000.00);
var songFive = new Song(4, "dont worry be happy", "bobby mcferrin", 5970, 80.00);
var playlist = [songOne, songTwo, songThree, songFour, songFive];


editSong(0, "title", "hello");
sortByTitle();
filterByDate();
sortById();
addSong(5, "add song title", "add song artist", 2020, 500.00);
deleteSong(2);
savePlaylist();