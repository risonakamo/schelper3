/** high level generic function container for custom script */
interface TabLevelFunc
{
    // unique name
    name:string
    // what category to place into ui
    category:string
    // clickable link text to run this tab level func
    displayText:string

    // function that decides if this tab level function should execute.
    // return undefined to not execute
    // returns text to display next to the clickable link. to not display message,
    // return empty string
    shouldExecute():Promise<string|undefined>

    // the tab level function logic itself
    actionFunc():Promise<void>
}