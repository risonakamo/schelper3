// helper lib for tab level funcs

import _ from "lodash";

/** returns number of tabs that match url strings */
export async function numberTabsWithUrls(urls:string[]):Promise<number>
{
    const tabs:chrome.tabs.Tab[]=await chrome.tabs.query({
        currentWindow:true,
    });

    return _.sumBy(tabs,(tab:chrome.tabs.Tab):number=>{
        if (!tab.url)
        {
            console.warn("tab had no url",tab);
            return 0;
        }

        const matches:boolean=_.some(urls,(url:string):boolean=>{
            return !!tab.url?.includes(url);
        });

        if (matches)
        {
            return 1;
        }

        return 0;
    })
}

/** should execute function that triggers if there is 1 tab that matches url patterns. returns
 *  string or undefined as needed by should execute func */
export async function hasTabOneOf(urls:string[]):Promise<string|undefined>
{
    const numTabs:number=await numberTabsWithUrls(urls);

    if (numTabs<=0)
    {
        return undefined;
    }

    return `${numTabs}`;
}

/** run target cs script on all tabs, if the tab matches one of the urls
 *  (with includes) */
export async function runScriptOnAllTabs(
    script:CsScript,
    urlMatches:string[],
):Promise<void>
{
    const tabs:chrome.tabs.Tab[]=await chrome.tabs.query({
        currentWindow:true,
    });

    for (var tab of tabs)
    {
        // usually happens to disallowed tabs like extension pages
        if (!tab.id)
        {
            // console.error("tab had no id",tab);
            continue;
        }

        if (!tab.url)
        {
            continue;
        }

        // if the tab url matches one of the url matches
        const oneUrlMatches:boolean=_.some(urlMatches,(matchUrl:string):boolean=>{
            return !!tab.url?.includes(matchUrl);
        });

        if (!oneUrlMatches)
        {
            continue;
        }

        await chrome.scripting.executeScript({
            target:{tabId:tab.id},
            func:(scriptArg:CsScript)=>{
                console.log("running script:",scriptArg);
                window.localStorage.setItem("args",JSON.stringify({
                    runScript:scriptArg,
                } satisfies CsArgs));
            },
            args:[script],
        });

        chrome.scripting.executeScript({
            target:{tabId:tab.id},
            files:["build-cs/schelper.iife.js"],
        });
    }
}