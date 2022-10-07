console.log("navbar");
let block = document.getElementById("block");
let course = document.getElementById("course-btn");
course.addEventListener("click",showCourse);
function showCourse(){
    if(block.style.display==="none"){
        block.style.display="block";
    }
    else{
        block.style.display="none";
    }
}