const $ = {};

function formatDate() {

    let d = new Date().getDate();
    if (d < 10) d = '0' + d;
  
    let m = new Date().getMonth() + 1;
    if (m < 10) m = '0' + m;

    let y = new Date().getFullYear();

    return d + '.' + m + '.' + y;
}