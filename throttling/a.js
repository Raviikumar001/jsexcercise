
function throttle(func, delay)
{
    let wait = false;

    return (...args)=>{

        if(wait)
        {
            return;
        }

        func(...args);
        wait =true;

        setTimeout(()=>{
            wait = false;
        },delay)
    }
}

function display()
{
    console.log("hello");
}

document.getElementById("btn").addEventListener("click",throttle(display,2000))
;