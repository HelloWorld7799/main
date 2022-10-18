import { LightningElement, wire,api } from 'lwc';
import { getRecord,getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';
import Account_Obj from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';
import Phone_Field from '@salesforce/schema/Account.Phone';


export default class GetRecordDemo extends LightningElement {
    name
    phone
    owner

    @api recordId
     @wire(getRecord,{recordId:'$recordId',objectApiName:Account_Obj,fields:[Name_Field,Phone_Field]})
    // @wire(getRecord,{recordId:'$recordId',objectApiName:Account_Obj,layoutTypes:['Full'],mode:['View']})
    accHandler({data,error}){
        if(data){
            this.name=getFieldValue(data,Name_Field);
            this.phone=getFieldValue(data,Phone_Field)
        }
        if(error){
            console.log(error);
        }
    }
}