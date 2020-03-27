import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('form: ', this.form);
      const formData = { ...this.form.value };
      console.log('Form data: ', formData);
    }
  }

  setCapital() {
    const cityMap = {
      ua: 'Kiev',
      by: 'Minsk',
      kz: 'Astana'
    }

    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];

    this.form.patchValue({
      address: { city }
    });
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills'))
    (this.form.get('skills') as FormArray).push(control);
  }
}
