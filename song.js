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
function deleteSong() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      for (i = 0; i < playlist.length; i++) {
        if (document.getElementById("deletesong").value == playlist[i].id) {
          console.log(document.getElementById("deletesong").value)
          console.log(playlist[i].id)
          playlist.splice(i, 1);
          console.log(playlist);
          printPlaylist();
        }
        else {
          console.error('please reenter');
        }
      }
    }
    else {
      console.error('error');
      console.log(this.status)
    }
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function addSong() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var addsong1 = document.getElementById("addsong").value;
      var addsongarray = addsong1.split(",");
      console.log(addsongarray);
      if (addsongarray.length == 5) {
        var songTemp = new Song(parseInt(addsongarray[0]), addsongarray[1], addsongarray[2], parseInt(addsongarray[3]), parseFloat(addsongarray[4]));
        playlist.push(songTemp);
        printPlaylist();
      }
      else {
        console.error("please reenter. Check that you entered all 5 elements.");
      }
    }
    else {
      console.error('error');
      console.log(this.status)
    }
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function editSong() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var editsong1 = document.getElementById("editsong").value;
      alert("value inside of textbox is " + editsong1)
      var editsongarray = editsong1.split(",");
      console.log(editsongarray);

      for (i = 0; i < playlist.length; i++) {
        if (editsongarray[0] == playlist[i].id) {
          console.log(playlist[i].id)
          console.log(editsongarray[1])
          if (editsongarray[1] == 'id') {
            playlist[i].id = parseFloat(editsongarray[2]);
          }
          else if (editsongarray[1] == 'title') {
            playlist[i].title = editsongarray[2];
          }
          else if (editsongarray[1] == 'artist') {
            playlist[i].artist = editsongarray[2];
          }
          else if (editsongarray[1] == 'releasedate') {
            playlist[i].releasedate = parseInt(editsongarray[2]);
          }
          else if (editsongarray[1] == 'price') {
            playlist[i].price = parseFloat(editsongarray[2]);
          }
          else {
            console.error('please reenter');
            alert("Error. Please reenter.");
          }
        }
        else {
          console.error('please reenter');
          alert("Error. Check that ID matches the song. Please reenter.");
        }
      }
      printPlaylist();
    }
    else {
      console.error('error');
      console.log(this.status)
    }
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function sortByTitle() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var sortedlist = playlist.sort((a, b) => (a.title > b.title) ? 1 : -1);
      printPlaylist();
    }
    console.log(sortedlist);
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function sortByArtist() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var sortedartist = playlist.sort((a, b) => (a.artist > b.artist) ? 1 : -1);
      printPlaylist();
    }
    else {
      console.error('error');
      console.log(this.status)
    }
    console.log(sortedartist);
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function sortById() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var sortedid = playlist.sort((a, b) => (a.id > b.id) ? 1 : -1);
      printPlaylist();
    }
    else {
      console.error('error');
      console.log(this.status)
    }
    console.log(sortedid);
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function sortByPrice() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var sortedprice = playlist.sort((a, b) => (a.price > b.price) ? 1 : -1);
      printPlaylist();
    }
    else {
      console.error('error');
      console.log(this.status)
    }
    console.log(sortedprice);
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function filterByDate() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var sorteddate = playlist.sort((a, b) => (a.releasedate > b.releasedate) ? 1 : -1);
      printPlaylist();
    }
    else {
      console.error('error');
      console.log(this.status)
    }
    console.log(sorteddate);
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function savePlaylist() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //makes it fail approx. 1/5 times. 
      fail = 4;
      randomnum = parseInt(Math.random() * 6);
      if (randomnum != fail) {
        alert("playlist saved")
        printPlaylist();
      }
      else {
        alert("Error. Playlist could not be saved.")
      }
    }
    else {
      console.error('error');
      console.log(this.status)
    }
  };
  xhttp.open('GET', 'http://127.0.0.1:5500/index.html');
  xhttp.send();
}

function printPlaylist() {
  document.getElementById("demo").innerHTML = JSON.stringify(playlist);
}

//Create hardcoded playlist
var songOne = new Song(0, "here comes the sun", "the Beatles", 1970, 100.00);
var songTwo = new Song(1, "electric feel", "mgmt", 2005, 990.00);
var songThree = new Song(2, "back to the shack", "weezer", 2014, 1000.00);
var songFour = new Song(3, "doin time", "sublime", 1996, 10000.00);
var songFive = new Song(4, "dont worry be happy", "bobby mcferrin", 5970, 80.00);
var playlist = [songOne, songTwo, songThree, songFour, songFive];