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
            ],
            current: {
              
            },
        })
    }
}
export default new myStore()
