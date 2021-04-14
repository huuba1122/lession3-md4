
import {Component} from "@angular/core";

@Component ({
    selector: "font-size",
    templateUrl: "./fontsize.component.html",
    styleUrls: ["./fontsize.component.css"]
})

export class FontsizeComponent {
    fontSize = 14;

    onChange(value:any){
        this.fontSize = value;
    }
}