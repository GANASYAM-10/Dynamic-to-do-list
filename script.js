document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        
        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.style.marginRight = '8px';
        completeButton.addEventListener('click', function() {
            li.classList.add('completed');
            // Show animation
            const anim = document.createElement('span');
            anim.className = 'success-anim';
            anim.textContent = '✔ Task Completed!';
            li.appendChild(anim);
            setTimeout(() => {
                if (li.contains(anim)) li.removeChild(anim);
            }, 1200);
        });

        // Insert buttons
        li.textContent = taskInput.value;
        li.appendChild(completeButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        taskInput.value = '';
    }
});
