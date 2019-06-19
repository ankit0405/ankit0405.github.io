import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { imageService } from '../image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [imageService]
})
export class GalleryComponent implements OnInit {

  constructor(private imageService:imageService, private activatedRoute:ActivatedRoute, private http:HttpClient, private cdRef:ChangeDetectorRef) { 
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if(this.id == 'ourwork'){
        this.getGalleryImages();
      }
      else if(this.id == 'loveweget'){
        this.getTestimonials();
      }
    })
  }

  id:any = 'ourwork';
  public items:any = [];
  public appreciations:any = [];
  ngOnInit() {
    // this.getGalleryImages();ll
//     this.items = [
//       {
//         'title':'Simple and elegant Digital Invite and Thank You Card!
// Check now!
// Just @solidsandpastels',
//         'path':'../../assets/images/1.jpg'
//       },
//             {
//         'title':'Looking for quirky invites?🙄
// Connect with us now and get one customised as per your requirement😁',
//         'path':'../../assets/images/2.jpg'
//       },
//             {
//         'title':'Social Media Creatives for @sevnindia 😁😇',
//         'path':'../../assets/images/3.jpg'
//       },
//             {
//         'title':'Social media creatives for EsperanzaaOfficial! @esperanzaaofficial .',
//         'path':'../../assets/images/4.jpg'
//       },
//             {
//         'title':'Logo for our recent favorite!
// Do check there girls for trendy and classy women’s wear!',
//         'path':'../../assets/images/5.jpg'
//       },
//       {
//         'title':'Merry Christmas🌲💫',
//         'path':'../../assets/images/6.jpg'
//       }

//     ]

    



    // this.appreciations = [
      
    //   {
    //     'title':'Merry Christmas🌲💫',
    //     'path':'../../assets/images/6.jpg'
    //   },
    //         {
    //     'title':'Looking for quirky invites?🙄Connect with us now and get one customised as per your requirement😁',
    //     'path':'../../assets/images/2.jpg'
    //   },
    //         {
    //     'title':'Social Media Creatives for @sevnindia 😁😇',
    //     'path':'../../assets/images/3.jpg'
    //   },
    //         {
    //     'title':'Social media creatives for EsperanzaaOfficial! @esperanzaaofficial .',
    //     'path':'../../assets/images/4.jpg'
    //   },
    //         {
    //     'title':'Logo for our recent favorite!Do check there girls for trendy and classy women’s wear!',
    //     'path':'../../assets/images/5.jpg'
    //   }

    // ]
  }

  getGalleryImages(){
    this.imageService.getGalleryImages().subscribe((res) => {
      this.items = res;
      console.log(this.items)
      this.cdRef.detectChanges();  
    })
  }

  putGalleryImages(){
    let newImage = {
      'title': 'Your new image',
      'path': '../../assets/images/7.jpg'
    }
    this.items.push(newImage);
    this.imageService.RemoveOrAddGalleryImage(this.items).subscribe((res)=>{
      this.getGalleryImages();
    });

  }

  getTestimonials(){
    this.imageService.getTestimonials().subscribe((res) => {
      this.appreciations = res;
      this.cdRef.detectChanges();
    })
  }

}
