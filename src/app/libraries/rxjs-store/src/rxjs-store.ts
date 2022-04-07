import { BehaviorSubject, Observable } from 'rxjs';
import { stringify } from 'flatted';
import { distinctUntilChanged, map } from 'rxjs/operators';

//https://georgebyte.com/state-management-in-angular-with-observable-store-services/
export class RxjsStore<StateType = any> {
  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters

  // private readonly _store = new BehaviorSubject<VariablesExecutionForm>(initialState);

  state$: Observable<StateType>;
  private _state: BehaviorSubject<StateType>;

  // I initialize the simple store with the given initial state value.
  protected constructor(initialState: StateType) {
    this._state = new BehaviorSubject(initialState);
    this.state$ = this._state.asObservable();
  }

  // the getter will return the last value emitted in _todos subject
  // I get the current state snapshot.
  get state(): StateType {
    return this._state.getValue();
  }

  // assigning a value to this._store will push it onto the observable
  // and down to all of its subsribers (ex: this.store = [])
  private set state(val: StateType) {
    this._state.next(val);
  }

  //https://www.bennadel.com/blog/3522-creating-a-simple-setstate-store-using-an-rxjs-behaviorsubject-in-angular-6-1-10.htm
  // I get the current state snapshot.
  public getStateSnapshot(): StateType {
    return this._state.getValue();
  }

  //this.setState({ customer: newCustomer }, 'add_customer');
  //https://www.bennadel.com/blog/3522-creating-a-simple-setstate-store-using-an-rxjs-behaviorsubject-in-angular-6-1-10.htm
  // I move the store to a new state by merging the given partial state into the
  // existing state (creating a new state object).
  // --
  // CAUTION: Partial<T> does not currently project against "undefined" values. This is
  // a known type safety issue in TypeScript.
  public setStoreState(state: Partial<StateType>) {
    // console.log(`setStoreState : ${JSON.stringify(state)}`);
    // console.log(`setStoreState : ${stringify(state)}`);
    this.state = {
      ...this.state,
      ...state
    };
  }

  //https://www.bennadel.com/blog/3522-creating-a-simple-setstate-store-using-an-rxjs-behaviorsubject-in-angular-6-1-10.htm
  // I get the current state as a stream (will always emit the current state value as
  // the first item in the stream).
  public getStateAsStream(): Observable<StateType> {
    return this._state.pipe(distinctUntilChanged());
  }

  //https://www.bennadel.com/blog/3522-creating-a-simple-setstate-store-using-an-rxjs-behaviorsubject-in-angular-6-1-10.htm
  // I return the given top-level state key as a stream
  // (will always emit the current
  // key value as the first item in the stream).
  public select<K extends keyof StateType>(key: K): Observable<StateType[K]> {
    return this._state.pipe(
      map((state: StateType) => {
        return state[key];
      }),
      distinctUntilChanged()
    );
  }

  //-----------------------
}
