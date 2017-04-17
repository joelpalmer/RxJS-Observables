import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btn');
const input = $('#input');
const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
btnStream$.subscribe(
    (e) => {
        console.log(e);
    },
     (err) => {
        console.log(err);
    },
    () => {
        console.log('Completed');
    }
);

const inputStream$ =  Rx.Observable.fromEvent(input, 'keyup');
inputStream$.subscribe(
    (e) => {
        console.log(e);
    },
     (err) => {
        console.log(err);
    },
    () => {
        console.log('Completed');
    }
);

