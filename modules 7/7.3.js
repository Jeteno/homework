class ElectricalAppliances {
   constructor (name) {
      this.description = 'Electrical Appliance',
      this.name = name,
      this.model = String();
      this.state = false;
   }

   turnOn() {
      this.state = true;
   }
   turnOff() {
      this.state = false;
   }
}

class Lamp extends ElectricalAppliances  {
   constructor (model, power) {
      super(model),
      this.power = power,
      this.quantity = 3
   }

   setPower(quantity) {
      this.quantity = quantity,
      this.power *= quantity
   }
}

class Computer extends ElectricalAppliances  {
   constructor (model, power) {
      super(model),
      this.power = power,
      this.quantity = 3
   }

   setPower(quantity) {
      this.quantity = quantity,
      this.power *= quantity
   }
}

const lamp = new Lamp('Xiaomi Mi LED', 15);
const computer = new Computer('MacBook', 45);

lamp.turnOn();
lamp.setPower(3);
computer.turnOn();
computer.setPower(1);

function getState(devices) {
   let answer = "В розетку включены: \n";
   let power = 0;

   devices.forEach((item) => {
      if(item.state) {
         answer += item.name + " " + item.model + " " + item.power + " Вт " + "в количесвте " + item.quantity + " Шт \n";
         power += item.power;
      }
   });

   answer += "Потребляемая мощность:" + " " + power + " " + "Вт.";

   return answer;
}

console.log(getState([lamp, computer]));