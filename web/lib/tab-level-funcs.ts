// lib implementing tab level function collections and helpers for tab level funcs

import _ from "lodash";
import async from "async";

import {ExhImagePageUrl,exhOpenLargeImagesAll} from "@/lib/tab-level-funcs-actual";

/** collection of tab level funcs */
const TabLevelFuncs:TabLevelFunc[]=[
    {
        name:"exh-open-all",
        category:"EXH",
        displayText:"Open All Images",

        shouldExecute:oneTabWithUrl(ExhImagePageUrl),
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

/** returns true if there is 1 tab in the window with a certain
 *  url pattern. curried function to work with shouldExecute */
function oneTabWithUrl(url:string)
{
    async function inner():Promise<boolean>
    {
        const tabs:chrome.tabs.Tab[]=await chrome.tabs.query({
            currentWindow:true,
        });

        return _.some(tabs,(tab:chrome.tabs.Tab):boolean=>{
            if (!tab.url)
            {
                console.warn("tab had no url",tab);
                return false;
            }

            return tab.url.includes(url);
        });
    }

    return inner;
}