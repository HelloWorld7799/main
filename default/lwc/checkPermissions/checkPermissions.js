import { LightningElement } from 'lwc';
import HAS_VIEW_ALL  from '@salesforce/userPermission/ViewAllData';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_get_permissions */
import CUSTOM_PERMISSION from '@salesforce/customPermission/showData';
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules */

export default class CheckPermissions extends LightningElement {

    get hasPermission(){
        return HAS_VIEW_ALL;
    }

    get hasCustomPermission(){
        return CUSTOM_PERMISSION
    }
}