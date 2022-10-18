import { LightningElement } from 'lwc';

export default class AccessElements extends LightningElement {
    fruits=['Apple','Mango','Guava','Orange','Pineapple','Grapes'];
    clickHandler(){

        // querySelector
        const ele = this.template.querySelector('h1');
        ele.style.border='5px solid green';
        console.log(ele.innerText);


        // querySelectorAll
        const ele2 =this.template.querySelectorAll('.name');
        Array.from(ele2).forEach(element => {
            element.setAttribute('title',element.innerText);
            console.log(element.innerText);

        });

        const ele3=this.template.querySelector('.child');
        ele3.innerText='Hero Honda';
    }
}