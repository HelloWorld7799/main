import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showData=false;
    msg;
    clickHandler(){
        this.showData=true;
    }

    closeHandler(event){
        this.msg = event.detail
        this.showData=false;
    }
}