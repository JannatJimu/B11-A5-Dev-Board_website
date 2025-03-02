function updateDateTime() {
    const date = new Date().toDateString().split(' ');
    document.getElementById('dayContainer').innerText = date[0] + ',';
    document.getElementById('timeContainer').innerText = `${date[1]} ${date[2]}, ${date[3]}`;
}
updateDateTime();
setInterval(updateDateTime, 3600000);
