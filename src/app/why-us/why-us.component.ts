import { Component, Input } from '@angular/core';

@Component({
templateUrl: 'why-us.component.html',
selector: 'why-us'
})

export class WhyusComponent {
@Input() title: string;
// Custom pipe
reason1 = { number: "01", name: "Availability" , text: "We available wherever and whenever to find recipes for different dishes that use only existing food from your kitchen." }
reason2 = { number: "02", name: "Calorie interval" , text: "If you interested in right diet, then you can select the calorie interval of the dish and find the appropriate ones from list of recipes." }
reason3 = { number: "03", name: "Time management" , text: "If you are in a hurry, you can choose cooking time interval and find out instant dish or vice versa." }
}
