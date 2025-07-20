// deploys arrow key page control on EXH pages
(()=>{
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
})();