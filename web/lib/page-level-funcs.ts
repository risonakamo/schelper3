// collection of page level action funcs

/** open full size image of a target EXH image page */
export function openExhFullSize():void
{
    console.log("open exh full size");

    const downloadLinks:NodeListOf<HTMLAnchorElement>=document.querySelectorAll("#i6 > div > a");

    if (downloadLinks.length==3)
    {
        window.location.href=downloadLinks[2].href;
    }

    else
    {
        console.error("could not find download link");
    }
}

/** adds key controls to ex gallery page */
function deployExPageControls():void
{
    var topNavbar:HTMLElement|null=document.querySelector(".ptt");

    if (!topNavbar)
    {
        return;
    }

    var leftArrow:HTMLElement|null=topNavbar.querySelector("td");
    var rightArrow:HTMLElement|null=topNavbar.querySelector("td:last-child");

    document.addEventListener("keydown",(e)=>{
        if (e.key=="a" || e.key=="A" || e.key=="ArrowLeft")
        {
            if (leftArrow)
            {
                leftArrow.click();
            }
        }

        else if (e.key=="d" || e.key=="D" || e.key=="ArrowRight")
        {
            if (rightArrow)
            {
                rightArrow.click();
            }
        }
    });
}