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
export function deployExPageControls():void
{
    console.log("deploying ex page controls");

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
    console.log("sc image download");

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

/** open all pixiv images in new tabs */
export function pixOpenAllNewTab():void
{
    const openButton:HTMLElement|null=document.querySelector(".sc-e3cb8b83-2.dGIVWG");

    if (openButton)
    {
        openButton.click();
    }

    setTimeout(()=>{
        const imageList:NodeListOf<HTMLAnchorElement>=document.querySelectorAll(".sc-440d5b2c-0 a");
        const openDelay:number=1000;

        imageList.forEach((imageEl:HTMLAnchorElement,i:number):void=>{
            setTimeout(()=>{
                console.log("opening:",imageEl.href);
                window.open(imageEl.href,"_blank");
            },openDelay*i);
        });
    },2000);
}