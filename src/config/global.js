import {toast} from 'react-toastify';
window.getRandomId=()=>Math.random().toString(36).slice(2);

window.toastify=(msg,type)=>{
    switch(type){
        case "success": 
        toast.success(msg)
        return
        
        case "error":
            toast.error(msg)
            return

            case "warning":
                toast.warning(msg)
                return

                default:
                    toast(msg)
    }
}