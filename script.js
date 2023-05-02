/*var canvas = document.getElementById("friendCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle="#000000";
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', stop);*/

var jsonFriends = [
  {
    'name': 'Your Profile',
    'caption': "Sorry! Looks like you don't exist when no one's watching"
  },
];

function displaySelf(jason) {
  var friends = document.getElementById('seeFriendsDiv');
  const friendDiv = document.createElement('div');
  friendDiv.classList.add('friend');
  friends.appendChild(friendDiv);
  const profilePic = document.createElement('img');
  //const profilePic = document.createElement('img');
  profilePic.src = 'placeholder.jpg';
  profilePic.classList.add('profPic');
  friendDiv.appendChild(profilePic);
  const friendName = document.createElement('p');
  friendName.classList.add("profName");
  friendName.textContent = "Name: " + jason['name'];
  friendDiv.appendChild(friendName);
  const caption = document.createElement('p');
  caption.textContent = jason['caption'];
  friendDiv.appendChild(caption);
  //for (let i = 0; i < jsonFriends.length; i++) {
}
function displayFriends(jason) {
  var friends = document.getElementById('seeFriendsDiv');
  const friendDiv = document.createElement('div');
  friendDiv.classList.add('friend');
  friends.appendChild(friendDiv);
  const profilePic = document.createElement('img');
  profilePic.src = 'placeholder.jpg';
  profilePic.classList.add('profPic');
  friendDiv.appendChild(profilePic);
  const friendName = document.createElement('p');
  friendName.classList.add("profName");
  friendName.textContent = "Name: " + jason['name'];
  friendDiv.appendChild(friendName);
  const friendBirthday = document.createElement('p');
  friendBirthday.textContent = "Birthday: " + jason['birthday'];
  friendDiv.appendChild(friendBirthday);
  const friendTraits = document.createElement('p');
  friendTraits.textContent = "Traits: " + "\n" + jason['traits'];  
  //};
  friendDiv.appendChild(friendTraits);
};
function callFriendDisplay() {
  for (let i = 1; i <jsonFriends.length; i++) {
    displayFriends(jsonFriends[i]);
  }
}
function storeFriend() {
 // var newFriend = jsonFriends[newName] = {}
  var newFriend = {};
  var friendNameField= document.querySelector('#name');
  var friendDOBField = document.querySelector('#birthday');
  var friendTraitsField = document.querySelector('#traits');
  var friendNatureField = document.querySelector('#nature');
  var newName = friendNameField.value;
  newFriend['name'] = newName;
  newFriend['birthday'] = String(friendDOBField.value);
  newFriend['traits'] = friendTraitsField.value;
  newFriend['nature'] = friendNatureField.value;
  jsonFriends.push(newFriend);
  //jsonFriends.newFriend['name'] = newName;
  /*jsonFriends.newFriend['birthday'] = friendDOBField.value;
  jsonFriends.newFriend['traits'] = friendTraitsField.value;
  jsonFriends.newFriend['nature'] = friendNatureField.value;*/

  //console.log("friend added");
  //console.log(String(jsonFriends));
  callFriendDisplay();
  //var index = jsonFriends.length;
  //displayFriends(jsonFriends[index-1]);

 // displayFriends(jsonFriends);
};

 // friends.innerHTML = ' ';
  /*var friendDOB = friendDOBField.value;
  var friendTraits = friendTraitsField.value;
  var friendNature = friendNatureField.value;*/
 // const friendDiv = document.createElement('div');
  //friendDiv.classList.add('friend');
 // friendDiv.innerHTML = friendNameField.value;

  //const newProfile = document.createElement("div");
  //newProfile.classList.add("profile");
  //friends.appendChild(newProfile);

  //var friendName = document.createElement('p');
  //friendName.innerHTML = friendNameField.value;
  //friends.appendChild(friendDiv);
  //console.log("rfiendAdded");
  //friends.appendChild(newProfile);
  /*newProfile.textContent = friendName + "\n" + friendDOB + "\n" + friendTraits + "\n" + friendNature;*/
  //friends.appendChild(newProfile);
//};
displaySelf(jsonFriends[0]);
var form = document.querySelector('#addFriendForm');
function handleForm(event) { event.preventDefault(); };
form.addEventListener('submit', handleForm);
form.addEventListener('submit', storeFriend);
//console.log("function called");

/*if (jsonFriends.length > 1) {
  //callFriendDisplay();
}
else {
  const friends = document.getElementById('seeFriendsDiv');
  const friendDiv = document.createElement('div');
  friendDiv.classList.add('noFriends');
  friends.appendChild(friendDiv);
  const emptyFriendTxt = document.createElement('p');
  emptyFriendTxt.textContent = "Looks like you don't have any friends yet :(. Dont Worry, You can create them";
  friendDiv.appendChild(emptyFriendTxt);
};*/
//callFriendDisplay();

/*const friends = [];

function addFriend() {
  const name = document.getElementById('name').value;
  const birthday = document.getElementById('birthday').value;
  const bio = document.getElementById('bio').value;

  const friend = {
    name,
    birthday,
    bio,
  };

  friends.push(friend);

  displayFriends();
}

function displayFriends() {
  const container = document.getElementById('friends-container');

  container.innerHTML = '';

  friends.forEach(friend => {
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
      <h2>${friend.name}</h2>
      <p>Birthday: ${friend.birthday}</p>
      <p>${friend.bio}</p>
    `;
    container.appendChild(friendDiv);
  });
}

const addFriendButton = document.getElementById('add-friend');
addFriendButton.addEventListener('click', () => {
  const friendForm = document.getElementById('friend-form');
  friendForm.style.display = 'block';
});

const friendForm = document.getElementById('friend-form');
friendForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addFriend();
  friendForm.style.display = 'none';
});*/

// /*var canvas = document.getElementById("friendCanvas");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle="#000000";
// let coord = {x: 0, y: 0};


// function reposition(event) {
//   coord.x = event.clientX - canvas.offsetLeft;
//   coord.y = event.clientY = canvas.offsetTop;
// }
// function draw(event) {
//   ctx.beginPath();
//   ctx.lineWidth = 5;
//   ctx.lineCap = 'round';
//   ctx.strokeStyle = '#ACD3ED';
//   ctx.moveTo(coord.x, coord.y);
//   reposition(event);
//   ctx.lineTo(coord.x, coord.y);
//   ctx.stroke();
// }
// function start(event) {
//   document.addEventListener('mousemove', draw);
//   reposition(event);
// }
// function stop() {
//   document.removeEventListener('mousemove', draw);
// }
// canvas.addEventListener('mousedown', start);
// canvas.addEventListener('mouseup', stop);*/
// /*var loadProfPic = function(event){
//   imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ");
// }*/
// var jsonFriends = [];

// var form = document.querySelector('#addFriendForm');
// if (jsonFriends.length > 1) {
//   //callFriendDisplay();
//   emptyFriendTxt.style.display = "none";
//   emptyFriendDiv.style.display = "none";

// }
// else {
//   const friends = document.getElementById('seeFriendsDiv');
//   const emptyFriendDiv = document.createElement('div');
//   emptyFriendDiv.classList.add('noFriends');
//   friends.appendChild(emptyFriendDiv);
//   const emptyFriendTxt = document.createElement('p');
//   emptyFriendTxt.textContent = "Looks like you don't have any friends yet :(. Dont Worry, You can create them";
//   emptyFriendDiv.appendChild(emptyFriendTxt);
// }
// function stopEmptyDisplay() {
//   emptyFriendTxt.style.display = "none";
//   emptyFriendDiv.style.display = "none";
// }

// function displayFriends(jason) {
//   //console.log("inthefunction");
//   //var friends = document.querySelector('#seeFriendsDiv');
//   const friends = document.getElementById('seeFriendsDiv');
//   //for (let i = 0; i < jsonFriends.length; i++) {
//   const friendDiv = document.createElement('div');
//   friendDiv.classList.add('friend');
//   friends.appendChild(friendDiv);
//   const profilePic = document.createElement('img');
//   profilePic.src = 'placeholder.jpg';
//   profilePic.classList.add('profPic');
//   friendDiv.appendChild(profilePic);
//   const friendName = document.createElement('p');
//   friendName.textContent = "Name: " + jason['name'];
//   friendDiv.appendChild(friendName);
//   const friendBirthday = document.createElement('p');
//   friendBirthday.textContent = "Birthday: " + jason['birthday'];
//   friendDiv.appendChild(friendBirthday);
//   const friendTraits = document.createElement('p');
//   friendTraits.textContent = "Traits: " + "\n" + jason['traits'];  
//   friendDiv.appendChild(friendTraits);
//   //};
// };
// function callFriendDisplay() {
//   for (let i = 0; i <jsonFriends.length; i++) {
//     displayFriends(jsonFriends[i]);
//   }
// }
// function storeFriend() {
//  // var newFriend = jsonFriends[newName] = {}
//   var newFriend = {};
//   var friendNameField= document.querySelector('#name');
//   var friendDOBField = document.querySelector('#birthday');
//   var friendTraitsField = document.querySelector('#traits');
//   var friendNatureField = document.querySelector('#nature');
//   var newName = friendNameField.value;
//   newFriend['name'] = newName;
//   newFriend['birthday'] = String(friendDOBField.value);
//   newFriend['traits'] = friendTraitsField.value;
//   newFriend['nature'] = friendNatureField.value;
//   jsonFriends.push(newFriend);
//   //jsonFriends.newFriend['name'] = newName;
//   /*jsonFriends.newFriend['birthday'] = friendDOBField.value;
//   jsonFriends.newFriend['traits'] = friendTraitsField.value;
//   jsonFriends.newFriend['nature'] = friendNatureField.value;*/

//   console.log("friend added");
//   console.log(String(jsonFriends));
//   //callFriendDisplay();
//   var index = jsonFriends.length;
//   stopEmptyDisplay();
//   displayFriends(jsonFriends[index-1]);

//  // displayFriends(jsonFriends);
// };

//  // friends.innerHTML = ' ';
//   /*var friendDOB = friendDOBField.value;
//   var friendTraits = friendTraitsField.value;
//   var friendNature = friendNatureField.value;*/
//  // const friendDiv = document.createElement('div');
//   //friendDiv.classList.add('friend');
//  // friendDiv.innerHTML = friendNameField.value;

//   //const newProfile = document.createElement("div");
//   //newProfile.classList.add("profile");
//   //friends.appendChild(newProfile);

//   //var friendName = document.createElement('p');
//   //friendName.innerHTML = friendNameField.value;
//   //friends.appendChild(friendDiv);
//   //console.log("rfiendAdded");
//   //friends.appendChild(newProfile);
//   /*newProfile.textContent = friendName + "\n" + friendDOB + "\n" + friendTraits + "\n" + friendNature;*/
//   //friends.appendChild(newProfile);
// //};

// function handleForm(event) { event.preventDefault(); };
// form.addEventListener('submit', handleForm);
// form.addEventListener('submit', storeFriend);
// //console.log("function called");


// //callFriendDisplay();

// /*const friends = [];

// function addFriend() {
//   const name = document.getElementById('name').value;
//   const birthday = document.getElementById('birthday').value;
//   const bio = document.getElementById('bio').value;

//   const friend = {
//     name,
//     birthday,
//     bio,
//   };

//   friends.push(friend);

//   displayFriends();
// }

// function displayFriends() {
//   const container = document.getElementById('friends-container');

//   container.innerHTML = '';

//   friends.forEach(friend => {
//     const friendDiv = document.createElement('div');
//     friendDiv.classList.add('friend');
//     friendDiv.innerHTML = `
//       <h2>${friend.name}</h2>
//       <p>Birthday: ${friend.birthday}</p>
//       <p>${friend.bio}</p>
//     `;
//     container.appendChild(friendDiv);
//   });
// }

// const addFriendButton = document.getElementById('add-friend');
// addFriendButton.addEventListener('click', () => {
//   const friendForm = document.getElementById('friend-form');
//   friendForm.style.display = 'block';
// });

// const friendForm = document.getElementById('friend-form');
// friendForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   addFriend();
//   friendForm.style.display = 'none';
// });*/
