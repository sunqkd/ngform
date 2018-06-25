import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder } from '@angular/forms';

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
	
	private formModel:FormGroup;

	private fb:FormBuilder = new FormBuilder()

	constructor() { 
		
		this.formModel = this.fb.group({
			nickname: [''],
			phoneinfo: [''],

			emailinfo: this.fb.array([
				['']
			]),

			passwordInfo: this.fb.group({
				psw:  [''],
				okpsw:  ['']
			})
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
    addEmail(){
		let emails = this.formModel.get('emailinfo') as FormArray;
		emails.push( new FormControl() )
	}
	createUser(){
		console.log(this.formModel.value)
	}

	ngOnInit() {

	}

}
