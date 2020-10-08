import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'task-test-form';
  form: FormGroup;

  ngOnInit(): void{
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern(/^[0-9]+(?!.)/)
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ])
    });
  }

  submit(): void {
    console.log('Form: ', this.form);
    const formData = {...this.form.value};
    console.log('Form data: ', formData);
  }
}
