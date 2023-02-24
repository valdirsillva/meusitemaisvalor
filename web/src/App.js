import React from 'react';
import Routes from "./routes";
import { Modal } from 'bootstrap'


export default function App() {
    document.addEventListener('mouseout', function(e){
        const modal = Modal.getOrCreateInstance(document.querySelector('#modal_mensagem_saida'))
        const modal_mostrado = sessionStorage.getItem('modal_mostrado')
        const from = e.relatedTarget || e.toElement
    
        if((!from || from.nodeName == 'HTML') && !modal_mostrado){
            sessionStorage.setItem('modal_mostrado',true)
            modal.show()
            
        }
    })
   return (
       <Routes/>
   );
}