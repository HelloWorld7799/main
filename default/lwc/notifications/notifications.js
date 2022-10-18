import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Notifications extends LightningElement {

    handler1(){

        this.showToast('Success!!',' {0} This is Success Message {1}','success')
       
    }

    handler2(){
       this.showToast('Error','This is Error Message','error')
    }

    handler3(){
        this.showToast('Warning','This is Warning Message','warning')
     }

     handler4(){
        this.showToast('Info','This is Info Message','info')
     }



    showToast(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'UFC',{
                    url:'https://www.ufc.com/',
                    label:'Click Here'
                }
            ],
            mode:'sticky'
        }));
    }
}