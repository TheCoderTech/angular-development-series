import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `<div class="first-container">
  <h2>this is first component</h2>
</div>`,
  styles: [`.first-container {
    border: 1px solid; 
   }`]
})
export class FirstComponent {

}
