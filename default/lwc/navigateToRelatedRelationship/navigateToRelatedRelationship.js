import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    handler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                actionName: "view",
                recordId: "001N0000025vzmbIAA",
                objectApiName: "Account",
                relationshipApiName: "Contacts"
            }
        });
    }
}