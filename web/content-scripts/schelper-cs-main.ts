// top level of schelper content script

import {deployExPageControls, openExhFullSize, scImageDownload} from "@/lib/page-level-funcs";
import {ExhGalleryUrl} from "@/lib/tab-level/tab-level-impl";

function main():void
{
    const argsStr:string|null=window.localStorage.getItem("args");

    if (!argsStr)
    {
        console.log("failed to get args");
        runAutoFuncs();
        return;
    }

    const args:CsArgs=JSON.parse(argsStr);

    switch (args.runScript)
    {
        case "open-exh-full-size":
        openExhFullSize();
        break;

        case "open-sc-full-size":
        scImageDownload();
        break;

        default:
        console.log("unknown script:",args.runScript);
        break;
    }

    window.localStorage.removeItem("args");
}

/** if failed to get args, it might be a func that should run as long as url matches certain pattern */
function runAutoFuncs():void
{
    if (window.location.href.includes(ExhGalleryUrl))
    {
        deployExPageControls();
    }
}

main();