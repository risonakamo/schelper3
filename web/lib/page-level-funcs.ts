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
    const topNavbar:HTMLElement|null=document.querySelector(".ptt");

    if (!topNavbar)
    {
        return;
    }

    const leftArrow:HTMLElement|null=topNavbar.querySelector("td");
    const rightArrow:HTMLElement|null=topNavbar.querySelector("td:last-child");

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

/** trigger download button on sc image page */
export function scImageDownload():void
{
    const buttonsList:NodeListOf<HTMLElement>=document.querySelectorAll("#stats a");

    if (!buttonsList.length)
    {
        console.error("failed to find buttons");
        return;
    }

    const downloadButton:HTMLElement=buttonsList[buttonsList.length-1];

    if (downloadButton.textContent!="Original")
    {
        console.error("button text mismatch");
        return;
    }

    downloadButton.click();
}