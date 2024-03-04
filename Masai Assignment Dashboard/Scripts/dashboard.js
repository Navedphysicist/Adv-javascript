// Write code related to Dashboard page here

let data = JSON.parse(localStorage.getItem('assignments')) || []
let sprint1 = document.getElementById("sprint-1");
let sprint2 = document.getElementById("sprint-2");
let sprint3 = document.getElementById("sprint-3");
let sprint4 = document.getElementById("sprint-4");

let courseTag = document.getElementById("course");


function display (formData) {
    sprint1.innerHTML = null;
    sprint2.innerHTML = null;
    sprint3.innerHTML = null;
    sprint4.innerHTML = null;

    formData.map((ele,ind) => {
        let card = document.createElement("div");
        let nameTag = document.createElement('p');
        nameTag.innerHTML = ele.name;
        let descTag = document.createElement('p');
        descTag.innerHTML = ele.description
        let courseType = document.createElement('p');
        courseType.innerHTML = ele.type
        let course = document.createElement('p');
        course.innerHTML = ele.course;
        let schedule = document.createElement('p');
        schedule.innerHTML = ele.date;
        let sprint = document.createElement('p');
        sprint.innerHTML = ele.sprint;
        let selectTag = document.createElement('select');
        let options = ["sprint-1", "sprint-2", "sprint-3", "sprint-4"];
        options.forEach((el, ind) => {
            let option = document.createElement('option')
            option.value = el;
            option.innerHTML = el;
            selectTag.append(option)
        })

        let buttonTag = document.createElement('button');
        buttonTag.innerHTML = 'Delete'
        buttonTag.addEventListener('click', () => {
            formData.splice(ind, 1);

            localStorage.setItem("assignments", JSON.stringify(formData));
            display(formData);
        })
        card.append(
            nameTag,
            descTag,
            courseType,
            course,
            schedule,
            sprint,
            selectTag,
            buttonTag
        );
        if (ele.sprint == "sprint-1") sprint1.append(card);
        else if (ele.sprint == "sprint-2") sprint2.append(card);
        else if (ele.sprint == "sprint-3") sprint3.append(card);
        else sprint4.append(card);
    

    })
}
let js101Data = data.filter(el => el.course == 'JS101');
display(js101Data)



courseTag.addEventListener('change', () => {
   let newData =  data.filter((el) => el.course == courseTag.value)
    display(newData);

})

