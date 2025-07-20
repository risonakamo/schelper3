import {mount} from "svelte";
import Popup from "./popup.svelte";

window.onload=()=>{
    mount(Popup,{target:document.body});
};