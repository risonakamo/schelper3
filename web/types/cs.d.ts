// types for content scripts

/** possible names of page level scripts to run */
type CsScript=
    "open-exh-full-size"|
    "open-sc-full-size"

/** args to cs script */
interface CsArgs
{
    // target page level script to run
    runScript:CsScript
}