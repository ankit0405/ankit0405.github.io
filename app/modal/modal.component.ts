import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  formEnabled:boolean = false;

  constructor(public activeModal:NgbActiveModal) { 
    this.user = {};
    this.formEnabled = false;
  }

  @ViewChild('title') title:ElementRef;
  @ViewChild('addTo') addTo:ElementRef;

  ngOnInit() {
  }

  localUrl: any[];
  user:any;

  showPreview(event: any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            console.log('reading')

            reader.onload = (event: any) => {
                this.localUrl = event.target.result;
                console.log(this.localUrl);
                this.formEnabled = true;

            }

        }
    }

   submitForm($event) {
    let caption = this.title.nativeElement.value;
    let addTo = this.addTo.nativeElement.value;

    this.user = {
      'addTo':addTo,
      'title': caption,
      'path': this.localUrl
    }
      console.log(this.user)
      this.activeModal.close(this.user);
    }

}
