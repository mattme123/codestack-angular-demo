import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      created: { value: new Date(), disabled: true }
    });
    this.setForm();
    this.patchForm();
  }

  setForm() {
    setTimeout(() => {
      this.userForm.setValue({
        firstName: 'Matthew',
        lastName: 'Hicks',
        email: 'csa_mhicks@sjcoe.net',
        phone: '',
        created: new Date()
      });
    }, 2000);
  }

  patchForm() {
    setTimeout(() => {
      this.userForm.patchValue({
        firstName: 'Kevin'
      });
    }, 4000);
  }

  submit() {
    if (this.userForm.invalid) {
      alert('invalid');
      this.userForm.markAsDirty();
      return;
    }
  }

  getValue(form: string, value: string) {
    return this[form].get(value).value;
  }

  test() {
    alert('this is working');
  }


}
