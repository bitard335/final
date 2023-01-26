let titleRow = document.querySelectorAll('.repair-pricelist__col-title');
let row = document.querySelectorAll('.repair-pricelist__category')[1];
let col = row.querySelectorAll('.repair-pricelist__text');
let width;

function getTitleWidth(){
  for (i = 0; i < col.length; i++){
    width = window.getComputedStyle(col[i]).width;
    titleRow[i].style.width = width;
  }
}

getTitleWidth();

window.addEventListener('resize', function() {
  getTitleWidth();
})
