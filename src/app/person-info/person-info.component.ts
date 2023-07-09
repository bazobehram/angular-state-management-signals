import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonInfo, PersonInfoService } from '../services/person-info-service';

@Component({
  selector: 'app-person',
  template: `
    <form [formGroup]="personForm" (ngSubmit)="onSave()">
      <label for="fullName">Full Name: </label>
      <input id="fullName" type="text" formControlName="fullName" />

      <label for="employer">Employer: </label>
      <input id="employer" type="text" formControlName="employer" />

      <label for="location">Location: </label>
      <input id="location" type="text" formControlName="location" />

      <button type="submit" [disabled]="!personForm.valid">Save</button>
    </form>
    <p>
      Full Name: {{ person().fullName }}
      <span
        *ngIf="person().fullName"
        (click)="onDelete('fullName')"
        style="cursor: pointer; color: red; font-size: 22px"
      >
        &#9746;
      </span>
    </p>
    <p>
      Employer: {{ person().employer }}
      <span
        *ngIf="person().employer"
        (click)="onDelete('employer')"
        style="cursor: pointer; color: red; font-size: 22px"
      >
        &#9746;
      </span>
    </p>
    <p>
      Location: {{ person().location }}
      <span
        *ngIf="person().location"
        (click)="onDelete('location')"
        style="cursor: pointer; color: red; font-size: 22px"
      >
        &#9746;
      </span>
    </p>
  `,
})
export class PersonInfoComponent {
  person = this.personInfoService.getInfo();

  constructor(private personInfoService: PersonInfoService) {}
  personForm = new FormGroup({
    fullName: new FormControl(''),
    employer: new FormControl(''),
    location: new FormControl(''),
  });

  onDelete(key: string) {
    this.personInfoService.deleteItem(key);
  }

  onSave() {
    if (this.personForm.valid) {
      this.personInfoService.setInfo(this.personForm.value as PersonInfo);
      this.personForm.reset();
    }
  }
}
