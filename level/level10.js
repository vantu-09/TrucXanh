
  var khung = document.getElementById("khung");
  var soHang = 7;
  var tongThe = soHang * 10;
  var capHinh = Math.floor(tongThe / 2);
  var demLat = 0;

  khung.innerHTML = "";
  daLat = [];
  khoaClick = false;

  khung.style.display = "grid";
  khung.style.gridTemplateRows = "repeat(" + soHang + ", 1fr)";
  khung.style.gridAutoFlow = "column";

   var hinhGoc = [
      "../images/drink1.png",
      "../images/drink2.png",
      "../images/drink3.png",
      "../images/drink4.png",
      "../images/drink5.png",
      "../images/drink6.png",
      "../images/drink7.png",
      "../images/drink8.png",
      "../images/drink9.png",
      "../images/drink10.png",
      "../images/drink11.png",
      "../images/drink12.png",
      "../images/drink13.png",
      "../images/drink14.png",
      "../images/drink15.png",
      "../images/drink16.png",
      "../images/drink17.png",
      "../images/drink18.png",
      "../images/drink19.png",
      "../images/drink20.png",
      "../images/drink21.png",
      "../images/drink22.png",
      "../images/drink23.png",
      "../images/drink24.png",
      "../images/drink25.png",
      "../images/drink26.png",
      "../images/drink27.png",
      "../images/drink28.png",
      "../images/drink29.png",
      "../images/drink30.png",
      "../images/drink31.png",
      "../images/drink32.png",
      "../images/drink33.png",
      "../images/drink34.png",
      "../images/drink35.png",
      "../images/drink36.png",
      "../images/drink37.png",
      "../images/drink38.png",
      "../images/drink39.png",
      "../images/drink40.png",
      "../images/food1.png",
      "../images/food2.png",
      "../images/food3.png",
      "../images/food4.png",
      "../images/food5.png",
      "../images/food6.png",
      "../images/food7.png",
      "../images/food8.png",
      "../images/food9.png",
      "../images/food10.png",
      "../images/food11.png",
      "../images/food12.png",
      "../images/food13.png",
      "../images/food14.png",
      "../images/food15.png",
      "../images/food16.png",
      "../images/food17.png",
      "../images/food18.png",
      "../images/food19.png",
      "../images/food20.png",
      "../images/food21.png",
      "../images/food22.png",
      "../images/food23.png",
      "../images/food24.png",
      "../images/food25.png",
      "../images/fruit1.png",
      "../images/fruit2.png",
      "../images/fruit3.png",
      "../images/fruit4.png",
      "../images/fruit5.png",
      "../images/fruit6.png",
      "../images/fruit7.png",
      "../images/fruit8.png",
      "../images/fruit9.png",
      "../images/fruit10.png",
      "../images/fruit11.png",
      "../images/fruit12.png",
      "../images/fruit13.png",
      "../images/fruit14.png",
      "../images/fruit15.png",
      "../images/fruit16.png",
      "../images/fruit17.png",
      "../images/fruit18.png",
      "../images/fruit19.png",
      "../images/fruit20.png",
      "../images/fruit21.png"
  ];

  var danhSach = [];


  for (var i = 0; i < capHinh; i++) {
    var vt = Math.floor(Math.random() * hinhGoc.length)
    var hinh = hinhGoc[vt];

    danhSach.push(hinh);
    danhSach.push(hinh);

  }

  danhSach.sort(function() {
    return Math.random() - 0.5;
  });

  for (var j = 0; j < danhSach.length; j++) {
    var the = document.createElement("div");
    the.className = "the";
    the.style.backgroundColor = '#8bc34a';
    the.style.border = "2px solid " + '#fff8dc';

    var mat = document.createElement("div");
    mat.className = "mat";

    var truoc = document.createElement("div");
    truoc.className = "truoc";
    truoc.style.backgroundColor = '#8bc34a';
    truoc.style.border = "2px solid " + '#fff8dc';

    var sau = document.createElement("div");
    sau.className = "sau";

    var img = document.createElement("img");
    img.setAttribute("src", danhSach[j]);
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.borderRadius = "8px";

    sau.appendChild(img);
    mat.appendChild(truoc);
    mat.appendChild(sau);
    the.appendChild(mat);
    khung.appendChild(the);

    the.dataset.hinh = danhSach[j];

    the.onclick = function() {
      if (khoaClick || this.classList.contains("lat")) {
        return;
      }

      this.classList.add("lat");
      daLat.push(this);

      if (daLat.length == 2) {
        khoaClick = true;
        var the1 = daLat[0];
        var the2 = daLat[1];

        if (the1.dataset.hinh == the2.dataset.hinh) {
          daLat = [];
          khoaClick = false;
          demLat += 2;
        } else {
          setTimeout(function() {
            the1.classList.remove("lat");
            the2.classList.remove("lat");
            daLat = [];
            khoaClick = false;
          }, 1000);
        }
      }
      if(demLat == soHang * 10){

        var diem = parseInt(localStorage.getItem("diem"));
        localStorage.removeItem("diem");
        diem+= parseInt(score);
        localStorage.setItem("diem",diem);

        var dsdiem = localStorage.getItem("dsdiem");
        dsdiem = JSON.parse(dsdiem);
        dsdiem.push(diem);
        
        var dsten = localStorage.getItem("dsten");
        var ten = localStorage.getItem("ten");
        dsten = JSON.parse(dsten);
        dsten.push(ten);

        if(dsten.length >= 2){
            for(var i = 0; i < dsdiem.length; i++){
              for(var j = i + 1; j < dsdiem.length; j++){
              if (dsten[j] == dsten[i]) {
                if (parseInt(dsdiem[i]) >= parseInt(dsdiem[j])) {
                  dsten.splice(j, 1);
                  dsdiem.splice(j, 1);
                  j--; 
                } else {
                  dsten.splice(i, 1);
                  dsdiem.splice(i, 1);
                  i--; 
                  break; 
                }
              }
            }
            }

            for(var i = 1; i < dsdiem.length; i++){
              for(var j = 0; j < i; j++){
                if(dsdiem[j] < dsdiem[i]){
                  [dsdiem[j] ,dsdiem[i]] = [dsdiem[i], dsdiem[j]];
                  [dsten[j] ,dsten[i]] = [dsten[i], dsten[j]];
                }
              }
            }

        }

        localStorage.removeItem("dsdiem");
        localStorage.removeItem("dsten");
        localStorage.setItem("dsdiem",JSON.stringify(dsdiem));
        localStorage.setItem("dsten",JSON.stringify(dsten));
        


        window.location.href = "congra10.html";
      }
    };
    

   
  }

