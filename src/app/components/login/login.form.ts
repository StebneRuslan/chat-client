import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from './login.model';

export default class LoginForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: LoginModel;

  constructor(model: LoginModel) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      username: new FormControl(this.model.username, {validators: [Validators.required]}),
      password: new FormControl(this.model.password, {validators: [Validators.required]}),
    });

    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.username = data.username;
      this.model.password = data.password;
    });
  }

  public getControl(name: string) {
    return this.formGroup.get(name);
  }

}
