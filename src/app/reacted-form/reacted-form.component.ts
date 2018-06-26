import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-reacted-form',
	templateUrl: './reacted-form.component.html',
	styleUrls: ['./reacted-form.component.css']
})
export class ReactedFormComponent implements OnInit {

	// tom 用来初始FormControl的初始值
	// FormGroup 有key属性、 FormArray没有 key属性

	// private nickName = new FormControl("tom");

	// private passwordInfo = new FormGroup({
	// 	psw: new FormControl(),
	// 	pswconform: new FormControl()
	// });

	// private emials = new FormArray([
	// 	new FormControl("a@a.com"),
	// 	new FormControl("b@b.com"),
	// 	new FormControl("c@c.com"),
	// 	new FormControl("d@d.com")
	// ])


	// private xxxxx: FormControl;

	// 响应式标单校验 AbstractControl为group、array、control的父类

	mobileValid(mobile: FormControl): any {
		let value = (mobile.value || '') + '';
		var mvreg = /^ \d{6} $/
		let valid  = mvreg.test(value)
		console.log("mobile" + valid)
		return valid ? null : {mobile:true};
	}

    passwordValid(info: FormGroup) :any{
		let psw = info.get("psw") as FormControl
		let okpsw = info.get("okpsw") as FormControl
		let valid:boolean = psw.value === okpsw.value;
		console.log(valid + "密码");
		return valid ? null : {password:true};
	}

	private formModel: FormGroup;

	private fb: FormBuilder = new FormBuilder()

	constructor() {
		// Validators  预定义的校验器  Validators.maxLength

		this.formModel = this.fb.group({
			nickname: ['xxx', [Validators.required,Validators.minLength(6)]],
			phoneinfo: ['',this.mobileValid],

			emailinfo: this.fb.array([
				['']
			]),

			passwordInfo: this.fb.group({
				psw: [''],
				okpsw: ['']
			},{ validator:this.passwordValid})
		})

		// 表单数据模型
		// this.formModel = new FormGroup({

		// 	nickname: new FormControl(),
		// 	phoneinfo: new FormControl(),

		// 	emailinfo: new FormArray([
		// 		new FormControl()
		// 	]),

		// 	passwordInfo: new FormGroup({
		// 		psw: new FormControl(),
		// 		okpsw: new FormControl()
		// 	})

		// });

	}
	addEmail() {
		let emails = this.formModel.get('emailinfo') as FormArray; // 强转成FormArray类型
		emails.push(new FormControl())
	}
	createUser() {
		let nicknameValid:boolean = this.formModel.get('nickname').valid;
		let error:any = this.formModel.get('nickname').errors;

		console.log(JSON.stringify(error));
		console.log(nicknameValid)

		console.log(this.formModel.value)
	}

	ngOnInit() {

	}

}
