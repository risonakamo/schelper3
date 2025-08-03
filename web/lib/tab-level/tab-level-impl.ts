// contains implementations of tab level funcs

import {hasTabOneOf, runScriptOnAllTabs} from "@/lib/tab-level/tab-level-lib";

/** exh image page (displays 1 image) */
export const ExhImagePageUrls:string[]=["exhentai.org/s"];

/** sc image page (displays 1 image) */
export const ScImagePageUrls:string[]=[
    "chan.sankakucomplex.com/en/posts",
    "chan.sankakucomplex.com/posts",
];

/** matches exh gallery page */
export const ExhGalleryUrl="exhentai.org/g";

/** on all tabs, if it is an exh image tab, run exh open full size
 *  page script */
export async function exhOpenLargeImagesAll():Promise<void>
{
    return runScriptOnAllTabs(
        "open-exh-full-size",
        ExhImagePageUrls,
        0,
    );
}

/** returns true if there is 1 exh tab existing in the current window */
export function oneExhTab():Promise<string|undefined>
{
    return hasTabOneOf(ExhImagePageUrls);
}

/** on all sc tabs, run sc open */
export async function downloadScAll():Promise<void>
{
    return runScriptOnAllTabs(
        "open-sc-full-size",
        ScImagePageUrls,
        2000,
    );
}

/** finds 1 sc image tab */
export function oneScImageTab():Promise<string|undefined>
{
    return hasTabOneOf(ScImagePageUrls);
}