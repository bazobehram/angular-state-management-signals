import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';

export interface PersonInfo {
  fullName: string;
  employer: string;
  location: string;
  [key: string]: string;
}

@Injectable()
export class PersonInfoService {
  state = signal<PersonInfo>({
    fullName: 'Jane Smith',
    employer: 'XYZ Ltd.',
    location: '456 Main Street',
  });
  constructor() {}

  getInfo() {
    return this.state;
  }

  setInfo(newInfo: PersonInfo) {
    this.state.set(newInfo);
  }

  deleteItem(key: string) {
    this.state.mutate((info:PersonInfo) => {
      delete info[key];
      return info;
    });
  }


  updateInfo(newInfo: PersonInfo) {
    this.state.update(() => ({
      ...newInfo
    }));
  }
}
