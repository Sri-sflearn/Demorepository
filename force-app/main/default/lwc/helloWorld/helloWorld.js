import { LightningElement, track } from 'lwc';
    export default class HelloWorld extends LightningElement {
        @track greeting = 'America';
        changeHandler(event) {
            this.greeting = event.target.value;
        }
    }