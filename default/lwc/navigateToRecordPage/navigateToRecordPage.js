import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    viewMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: "view",
                recordId: "001N0000025vzmbIAA",
                objectApiName: "Contact"
            }
        });
    }

    editMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                actionName: "edit",
                recordId: "001N0000025vzmbIAA",
                objectApiName: "Contact"
            }
        });
    }
}