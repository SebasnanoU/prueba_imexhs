import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  imgFile: string;
  average_area: number;

   uploadForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    imgSrc: new FormControl('', [Validators.required])
  });

  constructor(private httpClient: HttpClient) { }

  get uf(){
    return this.uploadForm.controls;
  }

  onImageChange(e) {
    const reader = new FileReader();

    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imgFile = reader.result as string;
        this.uploadForm.patchValue({
          imgSrc: reader.result as string
        });

      };
    }
  }

  upload(){
    console.log(this.uploadForm.value);
    this.httpClient.post('http://localhost:8888/file-upload.php', this.uploadForm.value)
      .subscribe(response => {
        alert('Image has been uploaded.');
      })
  }

  getImageDimensions(file) {
    return new Promise (function (resolved, rejected) {
      var i = new Image()
      i.onload = function(){
        resolved({w: i.width, h: i.height})
      };
      i.src = file
    })
  }

  getRandomInt(min, max) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onSave(){

    console.log("Hey")

    var dimensions = this.getImageDimensions(this.imgFile)

    console.log(dimensions)

    //Convert base64 to file
    let arr = this.imgFile.split(","),
    //mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
    while (n--) {
      if (bstr.charCodeAt(n) >= 64){
        u8arr[n] = 1
      } else {
        u8arr[n] = 0
      }
    }

    var repeat = 10
    this.average_area = 0
    for (let r = 0; r < repeat; r++){
        let area = 0
        let n_random = this.getRandomInt(0, bstr.length)

        for (let seed = 0; seed < n_random; seed++ ){
            let pixel = this.getRandomInt(0, bstr.length)
            if (u8arr[pixel] == 1) {
              area = area + 1
            }
          }
        area = area/bstr.length
        this.average_area = this.average_area + area
    }
    this.average_area = 100.0*this.average_area/repeat*1.0

    console.log(this.average_area)


  }



}
