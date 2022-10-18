import { LightningElement,api } from 'lwc';

export default class RecordIdAndObjName extends LightningElement {
    @api recordId;
    @api objectApiName;
}