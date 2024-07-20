

 const inputValue = document.querySelector("#input-box");
 console.log(inputValue);
 let taskHolder = document.querySelector("#task-container");
 const now = new Date();
 const setData = function() {
    localStorage.setItem("data", taskHolder.innerHTML);
  };
  
// const when = now.getHours() + '/' + now.getMinutes() + '/' + now.getSeconds();
//   let hasRun = false;
  
  const newTask = document.querySelector("#btn");
  console.log(newTask);
  newTask.addEventListener('click', function() {
    if (inputValue.value === ""){
      alert("Text field should not empty");
    }
    else
    {
      // for (let i = 0; i < 1; i++) {
      //     if(!hasRun){
      // // code to run once
      // var time = document.createElement("small");
      // time.innerHTML = when;
      // taskHolder.appendChild(time);
      //   hasRun = true;
      let li = document.createElement("li");
      li.innerHTML = inputValue.value;
      taskHolder.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      inputValue.value = '';
      
    }
     setData();
  });
 
 taskHolder.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      setData();
    } else if (e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      setData();
    }
  }, false);
  const ac = document.querySelector("#ac");
  console.log(ac);
  ac.addEventListener('click', function() {
    taskHolder.innerHTML = null;
    setData();
  });
   const getTask = function() {
     taskHolder.innerHTML = localStorage.getItem("data");
   };
   getTask();