import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToLwc extends NavigationMixin(LightningElement) {
    handler(){
        const defination={
            componentDef:'c:navigateToTarget',
            attributes:{
                recordId:'00G464748920009'
            }
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url:'/one/one.app#'+btoa(JSON.stringify(defination))
            }
        });
    }
}