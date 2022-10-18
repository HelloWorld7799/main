import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Contact"
            }
        });
    }


    handleClick2(){

        const defaultValues = encodeDefaultFieldValues({
            FirstName :'Test ',
            LastName :'Record',
            Phone :'23456'
        })
        this[NavigationMixin.Navigate]({
             type: 'standard__objectPage',
            attributes: {
                actionName: "new",
                objectApiName: "Contact"
            },
            state:{
                defaultFieldValues :defaultValues
            }
        });
    }

    handleClick3(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "list",
                objectApiName: "Account"
            },
            state:{
                filterName:'Recent'
            }
        });
    }

    handleClick4(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                actionName: "home",
                objectApiName: "ContentDocument"
            }
        });
    }
}