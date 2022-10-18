import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import Name_Field from '@salesforce/schema/User.Name';
import Email_Field from '@salesforce/schema/User.Email';
 const fields=[Name_Field,Email_Field];
export default class WireDemoUserDetails extends LightningElement {
    userId = Id

    userDetail
    @wire(getRecord, {recordId:'$userId', fields:fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }   
    }

    @wire(getRecord, {recordId:'$userId', fields})
    userDetailProperty

}