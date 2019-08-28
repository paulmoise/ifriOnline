import { Information } from './../models/info';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  informations: Information[] = [];
  subject = new Subject<Information[]>();

  constructor() { }

  emit() {
    this.subject.next(this.informations);
  }

  getAll() {
    this.emit();
    return this.informations;
  }

  getById(id) {
    return this.informations.find((info) => {
      return info.id === id;
    });
  }

  save(info) {
    this.informations.push(info);
    this.emit();
  }

  delete(id) {
    const index = this.informations.findIndex((info) => {
      return info.id === id;
    });
    this.informations.splice(index, 1);
  }
}
