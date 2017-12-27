import { extendObservable } from "mobx";
import uuid from 'uuid';
class myStore {
    constructor() {
        extendObservable(this, {
            restaurants: [
              {
                name: "Johnny Rockets",
                description: "awesome",
                cuisine: "Burgers",
                id: uuid.v4()
              },
              {
                name: "Marhaba",
                description: "blah",
                cuisine: "Indian Food",
                id: uuid.v4()
              },
              {
                name: "Marhaba3",
                description: "blah",
                cuisine: "Indian Food",
                id: uuid.v4()
              },
              {
                name: "Marhaba4",
                description: "blah",
                cuisine: "Indian Food",
                id: uuid.v4()
              },
              {
                name: "Marhaba5",
                description: "blah",
                cuisine: "Indian Food",
                id: uuid.v4()
              },
            ],
            cuisines: [],
            currentcuisine: "",
            current: {

            },
        })
    }
}
export default new myStore()
