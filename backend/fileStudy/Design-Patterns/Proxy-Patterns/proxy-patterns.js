class Leader {
  receiveRequest(offer) {
    // console.log(`Boss said: Ok ::${offer}`);
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader();
  }
  receiveRequest(offer) {
    this.leader.receiveRequest(offer);
  }
}

class Developer {
  constructor(offer) {
    this.offer = offer;
  }
  applyFor(target) {
    target.receiveRequest(this.offer);
  }
}

const dev = new Developer("Tien Tai upto 15k USD");
dev.applyFor(new Secretary());
