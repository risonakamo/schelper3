// tab level funcs collection

import async from "async";

import {oneExhTab,exhOpenLargeImagesAll, oneScImageTab,
    downloadScAll} from "@/lib/tab-level/tab-level-impl";

/** collection of tab level funcs */
export const TabLevelFuncs:TabLevelFunc[]=[
    {
        name:"exh-open-all",
        category:"EXH",
        displayText:"Open All Images",

        shouldExecute:oneExhTab,
        actionFunc:exhOpenLargeImagesAll,
    },
    {
        name:"sc-open-all",
        category:"SC",
        displayText:"Open All Images",

        shouldExecute:oneScImageTab,
        actionFunc:downloadScAll,
    }
];

/** return list of tab level funcs which report they are able to execute */
export async function getAllRunnableTabFuncs():Promise<TabLevelFunc[]>
{
    return async.filter(TabLevelFuncs,async (tabFunc:TabLevelFunc):Promise<boolean>=>{
        return await tabFunc.shouldExecute()!=undefined;
    });
}