import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../entities';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  person:Person = {
    name:'',
    age: 1,
    address: {
      number:'',
      street: '',
      city:'',
      country:'France'
    }
  }
  constructor(private router:Router, private personService:PersonService, private notificationService:NotificationService){}

  handleSubmit() {
    this.personService.add(this.person).subscribe(() => {
      this.notificationService.notify('Person add success');
      this.router.navigate(['/'])
    });
  }
}
