import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private itemDoc: AngularFirestoreDocument<any>;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  exercise = {
    date: '',
    name: '',
    description: '',
    score: ''
  };

  constructor(db: AngularFirestore) {
    // this.itemDoc = db.doc<any>('items/1');
    // this.items = this.itemDoc.valueChanges();
    this.itemsCollection = db.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    console.log(this.items);
  }

  addItem() {
    this.itemsCollection.add(this.exercise);
    this.exercise = {
      date: '',
      name: '',
      description: '',
      score: ''
    };
  }

  update(item) {
    this.itemDoc.update(item);
  }

}
