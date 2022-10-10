console.log("Employee Page");
class employee{
    constructor(){
    }
    getEmployees(page){
      async function fetchEmp(page){
    let req =  await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&orderBy=asc`);
        let data = await req.json();
        return data;
      };   
      return fetchEmp(page);
    }
}
let navCon = document.getElementById("pages");

// rendering page navigation

function createPageNav(totalPages){
    for(let i=1;i<=totalPages;i++){
        let box = document.createElement("div");
        let NavBtn = document.createElement("button");
        NavBtn.textContent=i;
        box.setAttribute("id","navBtn");
        box.append(NavBtn);
        navCon.append(box);
        NavBtn.addEventListener("click",()=>{
            navigate(NavBtn.textContent);
        });
    }
}
const empContainer = document.getElementById("employees");
const emp = new employee();

// page navigation
function navigate(n){
    emp.getEmployees(n).then((res)=>{
        empContainer.innerHTML =  null;
        createEmployees(res.data);
    })
}


// fetching employees

emp.getEmployees(1).then((res)=>{
    createPageNav(res.totalPages);
    createEmployees(res.data);
});


//rendering employees on page

function createEmployees(data){
    data.forEach((el)=>{
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let image = document.createElement("img");
        let gender = document.createElement("h4");
        let dept = document.createElement("p");
        name.textContent = "Name : "+el.name;
        image.src = `https://cdn-icons-png.flaticon.com/512/21/21104.png`;
        image.style.width="15%";
        card.setAttribute("id","card")
        dept.textContent = "Department : "+el.department;
        gender.textContent = "Gender : "+el.gender;
        card.append(image,name,gender,dept);
        empContainer.append(card);
        console.log(el.image)
    })
}
