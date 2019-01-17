dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("mydivheader")) {
    /* VARSA BAŞLIKTAN TUTARAK HAREKET ETTİR*/
    document.getElementById("mydivheader").onmousedown = dragMouseDown;
  } else {
    /* YOKSA DİV İÇERİSİNDE HERHANGİ BİR YERDEN TUTARAK HAREKET ETTİR*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // BAŞLARKEN MOUSE İMLEÇ KONUMUNU AL
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // İMLEÇ HAREKET EDİNCE HAREKET ETTİRMEK
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // İMLECİN YENİ KONUMUNU HESAPLAMA
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //  İMLECE GÖRE ÖĞRENİN KONUMUNU AYARLAMA
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* İMLEÇ SERBEST KALDIĞINDA, HEREKET ETTİRMEYİ BIRAKTIRMA*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
