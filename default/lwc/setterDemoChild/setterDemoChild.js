import { LightningElement,api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
 
 userInfo;
  @api 
  
  get myData(){
return this.userInfo;
  }

  set myData(data){
    let newAge = data.Age *2
this.userInfo={...data,Age:newAge,"Job" :'Indian Cricketer'};
  }
}