import { Component } from '@angular/core';

@Component ({
templateUrl: 'home.component.html',
selector: 'home'
})
export class HomeComponent {
// Built-in pipe: LowerCasePipe
title: string = "yum";

// Custom pipe
slide1 = { text: 'Are you interested in cooking and would like to delight your family with various delicious dishes? Every day you think about what to cook for breakfast, lunch, dinner and you have no ideas left? Then join us!'};
slide2 = { text: 'who want to eat deliciously from own hands. It is available wherever and whenever to find recipes for different dishes.' };
slide3 = { text: 'finds recipes of savory dishes according to user criteria: type of dish, for breakfast, lunch or dinner, how many calories should the dish contain, cooking time, etc.'};
}
