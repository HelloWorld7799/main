import { LightningElement } from 'lwc';
import FIGHTER from '@salesforce/resourceUrl/fighter';
import MY_CAR from '@salesforce/resourceUrl/my_car';

export default class StaticImagesDemo extends LightningElement {

    car =MY_CAR;
    fighter=FIGHTER;
}