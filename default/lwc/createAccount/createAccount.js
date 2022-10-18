import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import ANNUAL_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class CreateAccount extends LightningElement {
    objectApiName=ACCOUNT_OBJECT;
    
    fields=[NAME_FIELD,PHONE_FIELD,ANNUAL_FIELD];

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title:"Account has been created successfully.",
            message:"Account created "+event.detail.fields.Name.value,
            variant:'success'
        })
        this.dispatchEvent(toastEvent);
    }
}