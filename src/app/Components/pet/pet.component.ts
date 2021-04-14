
import {Component} from "@angular/core";

@Component({
    selector: "div-pet",
    templateUrl: './pet.component.html',
    styleUrls:["./pet.component.css"]
})

export class PetComponent{
    fontColor = 'red';
    petName = 'puppie';
    petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

    updateName(name:any){
        this.petName = name;
        this.fontColor = 'blue';
    }

    updateImage(image:any){
        this.petImage = image;
    }
}
