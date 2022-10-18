import { LightningElement, wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import AccountObj from '@salesforce/schema/Account';
import Industry_Field from '@salesforce/schema/Account.Industry';
export default class GetPicklistValuesDemo extends LightningElement {
    selectedIndustry = '';
    industryOptions=[];
   
    @wire(getObjectInfo,{objectApiName:AccountObj})
    accObj

    @wire(getPicklistValues,{recordTypeId:'$accObj.data.defaultRecordTypeId',fieldApiName:Industry_Field})
    objData({data,error}){
        if(data){
            console.log(data);
            this.industryOptions=[...this.generatePicklist(data)]
        }
        if(error){
            console.log(error);
        }

    }

   

    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}