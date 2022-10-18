import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationToNavItemPage extends NavigationMixin(LightningElement) {
    handler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: "Salesforce_Image_Content"
            }
        });
    }
}