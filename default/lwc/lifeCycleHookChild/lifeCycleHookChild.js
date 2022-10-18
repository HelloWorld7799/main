import { LightningElement } from 'lwc';

export default class LifeCycleHookChild extends LightningElement {
    constructor(){
        super();
        console.log('Child Constructor Called ');
    }

    connectedCallback(){
        console.log('Child ConnectedCallBack Called ');
        throw new Error('Error From Child Component');
    }

    renderedCallback(){
        console.log('Child RenderedCallBack Called ');
    }

    disconnectedCallback(){
        console.log('Child disconnectedCallback called !!') 
     }
}