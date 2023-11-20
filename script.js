var text = "$A$b ^biaaaaan.  4$$FAB.F*$$$✞$$✵00000000000000000";
setInterval(function() {
    var title = "";
    for (var i = 0; i < 16; i++) {
        var r = Math.round(Math.random() * (text.length - 1));
        title += text[r];
    }
    document.title = title;
}, 60)

var ligh_btn = document.getElementById('light');
var dark_btn = document.getElementById('dark');

var r = document.querySelector(':root');

function setLightTheme() {
    r.style.setProperty('--col-3', '#ffffff');
    r.style.setProperty('--col-2', '#ff9999');
    r.style.setProperty('--col-1', '#c8d0da');
}

function setDarkTheme() {
    r.style.setProperty('--col-3', '#000000');
    r.style.setProperty('--col-2', '#c8d0da');
    r.style.setProperty('--col-1', '#333333');
}

ligh_btn.addEventListener('click', function() {
    setLightTheme()
})

dark_btn.addEventListener('click', () => {
    setDarkTheme()
});
