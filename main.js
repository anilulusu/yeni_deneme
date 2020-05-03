function saat() {
    var dp = 'AM'
    var zaman = new Date();
    var st = zaman.getHours();
    var dk = zaman.getMinutes();
    var sn = zaman.getSeconds();

    if (st > 12) {st = st-12; dp='PM';}
    if (st == 0) {st = 12;}
    st = (st < 10) ? '0' + st : st;
    dk = (dk < 10) ? '0' + dk : dk;
    sn = (sn < 10) ? '0' + sn : sn;

    var zmn = st + ':' + dk + ':' + sn + dp;
    document.getElementsByClassName("saat")[0].innerHTML = zmn;

}
setInterval(saat,500);