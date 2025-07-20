// open full size image of a target EXH image page
(()=>{
    const downloadLinks:NodeListOf<HTMLAnchorElement>=document.querySelectorAll("#i6 > div > a");

    if (downloadLinks.length==3)
    {
        window.location.href=downloadLinks[2].href;
    }

    else
    {
        console.error("could not find download link");
    }
})()