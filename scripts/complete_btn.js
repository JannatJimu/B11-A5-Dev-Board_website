const completeButtons = document.getElementsByClassName('complete-btn');


for (let button of completeButtons) {
    button.addEventListener('click', function () {
        const taskBtn = document.getElementById('taskCount'); 

        let currentCount = parseInt(taskBtn.innerText); 

        if (currentCount > 0) {
            currentCount--;  
            taskBtn.innerText = String(currentCount).padStart(2, '0'); 
            alert('board update successfully');
        }
        if (currentCount === 0) {
            alert('Congrats, you completed all your tasks!');
        }

       
        this.disabled = true;
        this.style.color = "#A0A0A0";
        this.style.backgroundColor = "#CFD4F7"; 
        this.style.cursor = "not-allowed"; 
    });
}

const completeButtonsAssign = document.getElementsByClassName('complete-btn');


for (let button of completeButtonsAssign) {
    button.addEventListener('click', function () {
        const taskBtnCount = document.getElementById('navCount'); 

        let currentCount = parseInt(taskBtnCount.innerText); 
       
        if (currentCount > 0) {
            currentCount++;  
            taskBtnCount.innerText = currentCount;
            // 
        }
    });
}



    

