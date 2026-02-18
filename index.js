const nama = document.getElementById("nama");
// jika di dalam input field nama mengetik apapun selama namanya kurang dari 3 karakter maka paragraph yang awalnya kosong akan muncul tulisan validasi
nama.addEventListener("keyup", function () {
  // mengecek apakah panjang nama < 3
  if (nama.value.length < 3) {
    let namaErr = document.getElementById("namaErr");
    namaErr.innerHTML = "nama harus berisi 3 karakter atau lebih";
  } else {
    namaErr.innerHTML = ""; // mengembalikan ke kondisi awal jika panjang nama sudah >= 3
  }
});

const email = document.getElementById("email");
email.addEventListener("keyup", function () {
  // inisialisasi bool ada = false
  let ada = false;
  // mengiterasi seluruh karakter di email apakah terdapat @
  for (i = 0; i < email.value.length; i++) {
    if (email.value[i] == "@") {
      ada = true;
      break;
    }
  }
  // jika tidak terdapat @ maka muncul validasi
  if (!ada) {
    let emailErr = document.getElementById("emailErr");
    emailErr.innerHTML = "Email harus mengandung @";
  } else {
    emailErr.innerHTML = ""; //mengembalikan ke kondisi awal jika sudah ada @
  }
});
