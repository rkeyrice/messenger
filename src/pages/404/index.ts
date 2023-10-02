import { root} from "../../../index";
import {Error} from "../../components/Error";
import {goTo} from "../../utils";

document.addEventListener('DOMContentLoaded', ()=> {
    if(root){
        root.innerHTML = Error({number:404, text: 'Не туда попали'})
    }
    goTo('go_back', '/src/pages/chat/index.html')
})