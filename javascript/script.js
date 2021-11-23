let container = document.querySelector(".container");
let row = document.createElement("div");
row.classList.add("row", "justify-content-center");
let element;
let col;
let insidetext

for(let i = 1; i <= 100; i++)
{
    col = document.createElement("div");
    col.classList.add("box","mx-2","my-2");

    switch(true)
    {
        case i % 3 == 0 && i % 5 == 0:
            element = "FizzBuzz";
            col.classList.add("my-bg-red");
        break;
        case i % 3 == 0:
            element = "Fizz";
            col.classList.add("my-bg-green");
        break;
        case i % 5 == 0:
            element = "Buzz";
            col.classList.add("my-bg-yellow");
        break;
        default: 
            element = i;
            col.classList.add("my-bg-blue");
    }

    insidetext = `<span> ${element} </span>`;
    col.innerHTML = insidetext;
    row.append(col);
}

container.append(row);