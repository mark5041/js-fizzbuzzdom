let container = document.querySelector(".container");
let row = document.createElement("div");
row.classList.add("row", "justify-content-center");
let element;
let col;
let insidetext
let max = 20;
let i;

for(i = 1; i <= 100; i++)
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

    if(i > max) 
    {
        col.classList.add("none");
    }

    insidetext = `<span> ${element} </span>`;
    col.innerHTML = insidetext;
    row.append(col);
}

container.append(row);


let see_more = document.querySelector(".my-btn-plus");
let see_less = document.querySelector(".my-btn-minus");


see_more.addEventListener('click', 
    function()
    {
        let box;
        for(i = max; i <= max + 10; i++)
        {
            box = document.querySelector(`.box:nth-child(${i})`)
            box.classList.remove("none")
        }
        max += 10;
        see_less.classList.remove("none");
    }
);

see_less.addEventListener('click', 
    function()
    {
        if(max > 20)
        {
            let box;
            for(i = max; i > max - 10; i--)
            {
                box = document.querySelector(`.box:nth-child(${i})`);
                box.classList.add("none");
            }
            max -= 10;
            if(max <= 20)
            {
                see_less.classList.add("none");
            }
        }
    }
);