import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationModel } from './registration.model';

export default class RegistrationForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: RegistrationModel;

  constructor(model: RegistrationModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      username: new FormControl(this.model.username, {validators: [Validators.required]}),
      password: new FormControl(this.model.password, {validators: [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]}),
      confirmPassword: new FormControl(this.model.confirmPassword, {validators: [Validators.required]})
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.username = data.username;
      this.model.password = data.password;
      this.model.confirmPassword = data.confirmPassword;
    });
  }

  public getControl(name: string) {
    return this.formGroup.get(name);
  }

}
