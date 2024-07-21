

const inputValue: HTMLInputElement | null = document.querySelector("#input-box"); console.log(inputValue);
 let taskHolder = document.querySelector("#task-container");
 const now = new Date();
 const setData = function() {
    localStorage.setItem("data", taskHolder!.innerHTML);
  };
  
  
  const newTask = document.querySelector("#btn");
  console.log(newTask);
  newTask!.addEventListener('click', function() {
    if(inputValue){
      if (inputValue.value === ""){
        alert("Text field should not empty");
      }
      else
      {
  
        let li = document.createElement("li");
        li.innerHTML = inputValue.value;
        taskHolder!.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputValue.value = '';
        
      }
       setData();
    }
  
  });
 
 taskHolder!.addEventListener('click', function(e){
	if(e.target instanceof HTMLElement ){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      setData();
    } else if (e.target.tagName === "SPAN"){
      e.target.parentElement!.remove();
      setData();
    }
   
  }
  }, false);

  const ac = document.querySelector("#ac");
  if(ac) {
    ac.addEventListener('click', function() {
      if (taskHolder) {
        taskHolder.innerHTML = '';
        setData();
      }
    });
  } 
  const getTask = function() {
		if (taskHolder) {
			let data = localStorage.getItem("data");
			if (data) {
				taskHolder.innerHTML = data;
			}
		}
     };
   getTask();