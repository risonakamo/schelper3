import {defineConfig} from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import {LogLevel,RollupLog,LogHandler} from "rollup";

declare const __dirname:string;

interface TargetSettings
{
    name:string
    path:string
}

export default defineConfig({
    mode:"development",

    plugins:[
        checker({
            typescript:true
        }),
        tsconfigPaths()
    ],

    resolve:{
        alias:{
            "@":`${__dirname}/web`,
        }
    },

    build:{
        lib:{
            name:"schelper",
            fileName:"open-exh-full-size",
            entry:{
                e1:`${__dirname}/web/content-scripts/open-exh-full-size.ts`,
            },
            formats:["iife"]
        },

        outDir:`${__dirname}/build`,
        target:["esnext"],
        sourcemap:true,
        // emptyOutDir:true,
        minify:false,

        rollupOptions:{
            onLog(level:LogLevel,log:RollupLog,handler:LogHandler):void
            {
                if (log.message.includes("Error when using sourcemap for reporting"))
                {
                    return;
                }

                handler(level,log);
            }
        }
    },
});