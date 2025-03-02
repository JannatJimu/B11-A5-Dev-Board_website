const buttons = document.querySelectorAll('.complete-btn');

for (const btn of buttons) {
    btn.addEventListener('click', function () {
        const title = this.closest('.text-start').querySelector('h4').innerText;
        const log = document.createElement('p');
        log.innerText = `You have completed the task "${title}" at ${new Date().toLocaleTimeString()}`;
        log.classList.add('text-gray-700', 'p-2','m-3', 'bg-gray-100', 'rounded-md'); 
        document.getElementById('activelogContainer').appendChild(log);
    });
    
}
document.getElementById('btn-clear').addEventListener('click', function() {
    document.getElementById('activelogContainer').innerHTML = ''; 
});


