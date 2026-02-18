const nama = document.getElementById("nama");
nama.addEventListener("keyup", function () {
  if (nama.value.length < 3) {
    let namaErr = document.getElementById("namaErr");
    namaErr.innerHTML = "nama harus berisi 3 karakter atau lebih";
  } else {
    namaErr.innerHTML = "";
  }
});

const email = document.getElementById("email");
email.addEventListener("keyup", function () {
  let ada = false;
  for (i = 0; i < email.value.length; i++) {
    if (email.value[i] == "@") {
      ada = true;
      break;
    }
  }
  if (!ada) {
    let emailErr = document.getElementById("emailErr");
    emailErr.innerHTML = "Email harus mengandung @";
  } else {
    emailErr.innerHTML = "";
  }
});
// function validasinama() {
//   let nama = document.getElementById("nama").value;
//   if (nama == )
//   if (nama == "") {
//     let namaErr = document.getElementById("namaErr");
//     namaErr.innerHTML = "Nama harus diisi"
//     return false;
//   }
// }
