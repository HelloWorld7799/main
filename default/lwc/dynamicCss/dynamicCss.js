import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percent= 10;
    keyHandler(event){
        this.percent=event.target.value;
    }

    get percentage(){
        return `width:${this.percent}%`
    }
}