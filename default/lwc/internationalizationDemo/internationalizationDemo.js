import { LightningElement } from 'lwc';
import LOCAL from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';

export default class InternationalizationDemo extends LightningElement {

    number = 67889888.889;

    formatted = new Intl.NumberFormat(LOCAL,{
        style:'currency',
        currency:CURRENCY,
        currencyDisplay:'symbol'
    }).format(this.number);
}