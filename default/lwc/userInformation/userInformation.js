import { LightningElement } from 'lwc';
import userId from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';

export default class UserInformation extends LightningElement {

    id = userId;
    isGuest=IS_GUEST;
}