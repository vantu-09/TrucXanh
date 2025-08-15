window.onload = function(){
                var dsten = JSON.parse(localStorage.getItem("dsten")) ;
                var dsdiem = JSON.parse(localStorage.getItem("dsdiem")) ;

                var bang = [];
                for (var i = 0; i < dsten.length; i++) {
                    bang.push({ ten: dsten[i], diem: dsdiem[i] });
                }

                let hangTen = document.getElementById("name");
                let hangDiem = document.getElementById("point");
                let hangThuTu = document.getElementById("thu_tu");

                hangTen.innerHTML = '<td id="main_name">Tên</td>';
                hangDiem.innerHTML = '<td id="main_point">Điểm</td>';
                hangThuTu.innerHTML = '<td id="main_thu_tu">Xếp hạng</td>';

                for (let i = 0; i < bang.length && i < 10; i++) {
                    hangTen.innerHTML += `<td>${bang[i].ten}</td>`;
                    hangDiem.innerHTML += `<td>${bang[i].diem}</td>`;
                    hangThuTu.innerHTML += `<td>${i + 1}</td>`;
                }
}


function on_level_menu() {
  var text = document.getElementById("level");
  var textmenu = document.getElementById("level_menu");
  var custome = document.getElementById("custome");

  text.style.display = "none";
  textmenu.style.display = "flex";
  custome.style.display = "none";
}

function of_level_menu(){
  var text = document.getElementById("level");
  var textmenu = document.getElementById("level_menu");
  var custome = document.getElementById("custome");

  text.style.display = "block";
  textmenu.style.display = "none";
  custome.style.display = "block";
}

function on_custome_menu(){
  var text = document.getElementById("level");
  var textmenu = document.getElementById("custome_menu");
  var custome = document.getElementById("custome");

  text.style.display = "none";
  textmenu.style.display = "flex";
  custome.style.display = "none";
}

function of_custome_menu(){
  var text = document.getElementById("level");
  var textmenu = document.getElementById("custome_menu");
  var custome = document.getElementById("custome");

  text.style.display = "block";
  textmenu.style.display = "none";
  custome.style.display = "block";
}

function batDauChoi() {
  var soHang = parseInt(document.getElementById("image_doc").value);
  var soCot = parseInt(document.getElementById("image_ngang").value);

  var soHinh = parseInt(document.getElementById("images").value);

  var mauNen = document.getElementById("mauNen").value;
  var mauVien = document.getElementById("mauVien").value;

  var time = parseInt(document.getElementById("time").value);



  localStorage.setItem("soHang", soHang);
  localStorage.setItem("soCot", soCot);

  localStorage.setItem("soHinh",soHinh);

  localStorage.setItem("mauNen", mauNen);
  localStorage.setItem("mauVien", mauVien);

  localStorage.setItem("time",time);


  window.location.href = "main_game.html";
}

function level1(){
  window.location.href = "level/level1.html";
}
function level2(){
  window.location.href = "level/level2.html";
}
function level3(){
  window.location.href = "level/level3.html";
}
function level4(){
  window.location.href = "level/level4.html";
}
function level5(){
  window.location.href = "level/level5.html";
}
function level6(){
  window.location.href = "level/level6.html";
}
function level7(){
  window.location.href = "level/level7.html";
}
function level8(){
  window.location.href = "level/level8.html";
}
function level9(){
  window.location.href = "level/level9.html";
}
function level10(){
  window.location.href = "level/level10.html";
}

