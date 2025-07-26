// tab level funcs collection

import async from "async";

import {oneExhTab,exhOpenLargeImagesAll} from "@/lib/tab-level-funcs-impl";

/** collection of tab level funcs */
export const TabLevelFuncs:TabLevelFunc[]=[
    {
        name:"exh-open-all",
        category:"EXH",
        displayText:"Open All Images",

        shouldExecute:oneExhTab,
        actionFunc:exhOpenLargeImagesAll,
    }
];

/** return list of tab level funcs which report they are able to execute */
export async function getAllRunnableTabFuncs():Promise<TabLevelFunc[]>
{
    return async.filter(TabLevelFuncs,async (tabFunc:TabLevelFunc):Promise<boolean>=>{
        return tabFunc.shouldExecute();
    });
}