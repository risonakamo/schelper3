// top level of schelper content script

import {openExhFullSize} from "@/lib/page-level-funcs";

function main():void
{
    const argsStr:string|null=window.localStorage.getItem("args");

    if (!argsStr)
    {
        console.error("failed to get args");
        return;
    }

    const args:CsArgs=JSON.parse(argsStr);

    switch (args.runScript)
    {
        case "open-exh-full-size":
        openExhFullSize();
        break;

        default:
        console.log("unknown script:",args.runScript);
        break;
    }
}

main();