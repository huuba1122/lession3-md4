
import {Component} from "@angular/core";

@Component ({
    selector: "Student",
    templateUrl: "./student.component.html",
    styleUrls:["./student.component.css"]
})

export class StudentComponent{

    name: string = 'Iron man';
    age:number = 30;
    languages:string[] = ['vietnamese', 'english','japanese'];
    image:string = 'http://game8.vn/media/201908/images/iron-man-endgame%20(1).jpg'
}