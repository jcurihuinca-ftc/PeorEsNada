import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoticeService } from '../../services/notice.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonHeader, IonInput, IonToolbar } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-create-notice-form',
  templateUrl: './create-notice-form.component.html',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class CreateNoticeFormComponent {
  noticeForm: FormGroup;
  photo: string | null | undefined = null;

  constructor(private fb: FormBuilder, private noticeService: NoticeService, private router: Router) {
    this.noticeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
  
      this.photo = image.dataUrl;
      console.log('Foto capturada:', this.photo);
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }


  async onSubmit() {
    if (this.noticeForm.valid) {
      const newNotice = {
        ...this.noticeForm.value,
        photo: this.photo,
        date: new Date(),
      };
  
      try {
        await this.noticeService.addNotice(newNotice);
        this.router.navigate(['/']);
      } catch (error) {
        console.error('Error al guardar el aviso:', error);
      }
    } else {
      console.warn('Formulario inválido.');
    }
  }
  
}
