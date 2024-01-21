import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items!: Observable<any[]>;

  constructor(firestore: AngularFirestore){
    this.items = firestore.collection('items').valueChanges();

    console.log(this.items);
    console.log(this.items);

  }
  title = 'open-lib';
}
