window.onload = function(){

    var prePatchDate = new Date(2020, 9, 13);
    var now = Date.now();
    var deltaDays = Math.max(date_diff_in_days(now, prePatchDate), 0);

    var prereleaseText = document.getElementById('prepatch-text');
    prereleaseText.innerText = 'Pre-patch releases in ' + deltaDays + ' days ('  + prePatchDate.toDateString() + ')';
}

var date_diff_in_days = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}