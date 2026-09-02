class Battery {
  constructor(maxCapacity = 100){
    this.maxCapacity = maxCapacity;
    this.level = maxCapacity;
  }
  drain(amount){
    this.level = Math.max(0, this.level - amount);
  }

  charge(amount){
    this.level = Math.min(this.maxCapacity, this.level + amount);
  }

  isDepleted(){
    this.level === 0;
  }
  getPercentage(){
    return (this.level / this.maxCapacity) * 100;
  }
}
