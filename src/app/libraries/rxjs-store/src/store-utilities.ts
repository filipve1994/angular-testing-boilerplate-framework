//https://levelup.gitconnected.com/master-rxjs-data-stores-in-services-c1f553e5d48b
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';

export function naiveObjectComparison(objOne, objTwo): boolean {
  return JSON.stringify(objOne) === JSON.stringify(objTwo);
}

//https://levelup.gitconnected.com/master-rxjs-data-stores-in-services-c1f553e5d48b
type MappingFunction<T, R> = (mappable: T) => R;
type MemoizationFunction<R> = (previousResult: R, currentResult: R) => boolean;

//https://levelup.gitconnected.com/master-rxjs-data-stores-in-services-c1f553e5d48b
export function defaultMemoization(previousValue, currentValue): boolean {
  if (typeof previousValue === 'object' && typeof currentValue === 'object') {
    return naiveObjectComparison(previousValue, currentValue);
  }
  return previousValue === currentValue;
}

//https://levelup.gitconnected.com/master-rxjs-data-stores-in-services-c1f553e5d48b
/**
 * We introduce a new function called select$.
 * This function will return an Observable that includes all the operators
 * we currently use in our selector pipes.
 * It takes a source stream and a mapping function as obligatory parameters
 * and accepts a memoizationFunction as an optional parameter.
 *
 * @param source$ - is the source stream and will usually be our Store object; in this specific case userData$.
 * @param mappingFunction - The mapping function will be the parameter to the map operator.
 *                          In other words it is a function that describes how we extract
 *                          the prop we want to emit from the source emission.
 *                          An example for age$ would be userData => userData.age.
 * @param memoizationFunction - Finally the memoizationFunction is the function for determining
 *                              whether or not our previous and current emissions are equal.
 *                              This is optional, and if not given, we use a default memoization
 *                              function that runs naiveObjectComparison for objects
 *                              and a === comparison otherwise.
 */
export function select$<T, R>(
  source$: Observable<T>,
  mappingFunction: MappingFunction<T, R>,
  memoizationFunction?: MemoizationFunction<R>
): Observable<R> {
  return source$.pipe(
    map(mappingFunction),
    distinctUntilChanged(memoizationFunction || defaultMemoization),
    shareReplay(1)
  );
}

export function selectNoMapping$<T, R>(
  source$: Observable<T>,
  memoizationFunction?: MemoizationFunction<R>
): Observable<R> {
  return source$.pipe(distinctUntilChanged(memoizationFunction || defaultMemoization), shareReplay(1));
}

//https://levelup.gitconnected.com/master-rxjs-data-stores-in-services-c1f553e5d48b
export function deepFreeze<T>(inObj: T): T {
  Object.freeze(inObj);

  Object.getOwnPropertyNames(inObj).forEach(function (prop) {
    if (
      inObj.hasOwnProperty(prop) &&
      inObj[prop] != null &&
      typeof inObj[prop] === 'object' &&
      !Object.isFrozen(inObj[prop])
    ) {
      deepFreeze(inObj[prop]);
    }
  });
  return inObj;
}
