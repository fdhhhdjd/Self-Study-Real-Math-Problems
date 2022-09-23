class Observer {
  constructor(name) {
    this.namePick = name;
  }
  updateStatus(location) {
    this.gotoHelp(location);
  }
  gotoHelp(location) {
    // console.log(`${this.namePick}:::::Ping::: ${JSON.stringify(location)}`);
  }
}
class Subject {
  constructor() {
    this.observerList = [];
  }
  addObserver(observer) {
    this.observerList.push(observer);
  }
  notify(location) {
    this.observerList.forEach((observer) => observer.updateStatus(location));
  }
}
const subject = new Subject();

//your pick
const riki = new Observer("Riki");
const sniper = new Observer("Sniper");
const Leesin = new Observer("Leesin");
//add riki and sniper to team
subject.addObserver(riki);
subject.addObserver(sniper);
subject.addObserver(Leesin);

//push location
subject.notify({ long: 456, lat: 123 });
