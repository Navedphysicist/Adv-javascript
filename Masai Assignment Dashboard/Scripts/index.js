
let assignmentsData = JSON.parse(localStorage.getItem("assignments")) || [];

document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData(this);
  
    let formObject = {}
    console.log(formData)
    formData.forEach((value, key ) => {
        formObject[key] = value;
    })
    assignmentsData.push(formObject)

    localStorage.setItem("assignments", JSON.stringify(assignmentsData));

})
