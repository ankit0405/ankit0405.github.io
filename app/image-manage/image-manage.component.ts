import { Component, OnInit, ChangeDetectorRef, ViewChild, TemplateRef } from '@angular/core';
import { imageService } from '../image.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-image-manage',
  templateUrl: './image-manage.component.html',
  styleUrls: ['./image-manage.component.css'],
  providers: [imageService]
})
export class ImageManageComponent implements OnInit {

  @ViewChild('exampleModal')
  private modalRef: TemplateRef<any>;


  constructor(private imageService:imageService, private cdRef:ChangeDetectorRef, private modalService:NgbModal) { 
    this.getGalleryImages();
    this.getTestimonials();
  }
  items:any = [];
  appreciations:any = [];

  ngOnInit() {
    
  }

  getGalleryImages(){
    this.imageService.getGalleryImages().subscribe((res) => {
      this.items = res;
      this.cdRef.detectChanges();
    })
  }

  getTestimonials(){
    this.imageService.getTestimonials().subscribe((res) => {
      this.appreciations = res;
      this.cdRef.detectChanges();
    })
  }

  deleteImage($event, item){
    this.items = this.items.filter(obj => {
      return (obj.title != item.title && obj.path != item.path);
    })
    this.imageService.RemoveOrAddGalleryImage(this.items).subscribe((obj) => {
      this.cdRef.detectChanges();
    })
  }

  deleteTestimonial($event, item){
    this.appreciations = this.appreciations.filter(obj => {
      return (obj.title != item.title && obj.path != item.path);
    })
    this.imageService.RemoveOrAddTestimonial(this.appreciations).subscribe((obj) => {
      this.cdRef.detectChanges();
    })
  }

  addImage(){
    console.log("added")
    const modalRef = this.modalService.open(ModalComponent); //Added Modal Component here

        //  modalRef.componentInstance.src = link;//anything u wish to pass to modal component @Input 

 modalRef.result.then((result) => {
      console.log(result);
      if(result.title && result.addTo && result.path){
        let self = this;
        let arr:any = []
          let image = {
            'path': result.path,
            'title': result.title
          }
        if(result.addTo == "Gallery"){
          
          this.imageService.getGalleryImages().subscribe((res) => {
            arr = res;
            arr.push(image);
            self.imageService.RemoveOrAddGalleryImage(arr).subscribe(res => {
              console.log("Image added");
              self.getGalleryImages();
            })
          })
        }
        else if(result.addTo == "Testimonials"){
          this.imageService.getTestimonials().subscribe((res) => {
            arr = res;
            arr.push(image);
            self.imageService.RemoveOrAddTestimonial(arr).subscribe(res => {
              console.log("Testimonial added");
              self.getTestimonials();
            })
          })
        }
      }
      console.log('closed');
    }).catch( (result) => {
      console.log(result);
      console.log('cancelling');
    });

  }
}
