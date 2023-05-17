import { Component ,ElementRef,OnInit, ViewChild} from '@angular/core';
import { DietServiceService } from '../diet-service.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent implements OnInit{
 
  diets: any;
  cartItems: any[] = [];
  showForm: boolean = false;
  newDiet: any = {};
selectedDiet: any;
diet_types:any;


is_admin:any;
userData: any;

extractUserData(): void {
  this.is_admin = this.userData.is_admin
}




  constructor(private dietService: DietServiceService,private sharedService: SharedService) { 
    
  }
  ngOnInit(): void {

    this.userData = this.sharedService['loggeduserdata'];
  
    this.extractUserData();
    this.dietService.getDietInfo().subscribe((data: any) => {
      this.diets = data;
  });

}
getImageUrl(dietType: string): string {
  let imageUrl = '';

  switch (dietType) {
    case 'Vegan':
      imageUrl = 'assets/trainer/Vegan.jpg';
      break;
    case 'Paleo':
      imageUrl = 'assets/trainer/Paleo.jpg';
      break;
    case 'Low Carb':
      imageUrl = 'assets/trainer/LowCarb.jpg';
      break;
      case 'Gluten-Free':
      imageUrl = 'assets/trainer/Gluten-Free.jpg';
      break;
   
    default:
      imageUrl = 'assets/trainer/default_Diet.png';
      break;
  }

  return imageUrl;
}
addToCart(diet: any): void {
  this.cartItems.push(diet);
}
delDiet(id: any): void {
  if (window.confirm('Are you sure you want to delete this Diet?')) {
    this.dietService.deleteDiet(id).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
 addDiet(){
  this.showForm=true;
}

addNewDiet() {
  return this.dietService.addDiet(this.newDiet).subscribe((data: any) => {
    console.log(data);
    this.newDiet= {};
    this.ngOnInit();
  });
}

editDiet(diet: any) {
  this.selectedDiet = diet;
  

}

updateDiet() {
  return this.dietService.updateDiet(this.selectedDiet).subscribe((data: any) => {
    console.log(data);
    this.selectedDiet = null;
    this.ngOnInit();
    
  });
}
cancelUpdate() {
  this.selectedDiet = null;
}
getLearnMoreUrl(dietType: string): string {
  if (dietType === 'Paleo') {
    return 'https://en.wikipedia.org/wiki/Paleolithic_diet';
  } else if (dietType === 'Vegan') {
    return 'https://en.wikipedia.org/wiki/Veganism';
  } else if (dietType === 'Low Carb') {
    return 'https://en.wikipedia.org/wiki/Low-carbohydrate_diet';
  }else if (dietType === 'Gluten-Free') {
    return 'https://en.wikipedia.org/wiki/Gluten-free_diet';
  }
 
  return 'https://en.wikipedia.org/wiki/List_of_diets';
}



getDietByType(diet_types: any): void {
  this.dietService.getDietByType(diet_types)
    .subscribe((data: any) => {
      this.diets = data;
    });
}

}
