import { LightningElement } from 'lwc';
import Contact_Object from '@salesforce/schema/Contact';
import Field_AccountId from '@salesforce/schema/Contact.AccountId';
import Field_Name from '@salesforce/schema/Contact.Name';
import Field_Phone from '@salesforce/schema/Contact.Phone';
import Field_Email from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditForm extends LightningElement {
    objectName =Contact_Object
    fields={
        accountId:Field_AccountId,
        name:Field_Name,
        phone:Field_Phone,
        email:Field_Email
    }

    

    resetHandler(){
        const inputFields=this.template.querySelectorAll('lightning-input-field');
        if(inputFields){
            Array.from(inputFields).forEach(element => {

                element.reset();
            });
        }
    }
}