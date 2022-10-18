import { LightningElement } from 'lwc';

export default class LifeCycleHookParent extends LightningElement {
    isChildVisible = false
    constructor(){
        super();
        console.log('Parent Constructor Called ');
    }

    connectedCallback(){
        console.log('Parent ConnectedCallBack Called ');
    }

    renderedCallback(){
        console.log('Parent RenderedCallBack Called ');
    }
    handleClick(){ 
        this.isChildVisible = !this.isChildVisible
    }

    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }

}