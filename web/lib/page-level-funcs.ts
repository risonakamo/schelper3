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