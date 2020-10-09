let url;
let number;
GetHeads();

function GetHeads() {
  if (number != null) {
    ClearHeads();
  }
  number = document.getElementById("howManyHeads").value;

  if (number == null || number == "" || (number > 0 && number < 5000)) {
    number = document.getElementById("howManyHeads").value;
    url = `https://randomuser.me/api/?results=${number}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let user = data.results;

        for (i = 0; i < user.length; i++) {
          let div = document.createElement("div");
          div.className = "userObj";
          let firstName = user[i].name.first;
          let lastName = user[i].name.last;
          let image = document.createElement("img");
          let p = document.createElement("p");
          let a = document.createElement("a");
          a.href = user[i].picture.large;
          p.id = "userName";
          p.textContent = firstName + " " + lastName;
          image.src = user[i].picture.thumbnail;
          a.appendChild(image);
          div.appendChild(a);
          div.appendChild(p);
          document.querySelector(".headContainer").appendChild(div);
        }
      });
  } else if (number == 0) {
    alert("Why?");
  } else {
    alert("Number must be a positive number below 5000");
  }
}

function ClearHeads() {
  document.querySelector(".headContainer").innerHTML = "";
}
