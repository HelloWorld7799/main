import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToWebPage extends NavigationMixin(LightningElement) {
    handler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url: "https://www.gerent.com"
            }
        });
    }
    
}