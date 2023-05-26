function ElectricalAppliances(name) {
   this.description = 'Electrical Appliance',
   this.name = name,
   this.model = String();
   this.state = false;
   this.power = 0
}

ElectricalAppliances.prototype.turnOn = function () {
   this.state = true;
}
ElectricalAppliances.prototype.turnOff = function () {
   this.state = false;
}

// ElectricalAppliances.prototype.stateIn = function() {
//    this.state === 'on' ? this.state = 'off' : this.state = 'on';
// }

// function sumPowerConsumption(array) {
//    let sumPower = 0;
   
//    array.forEach(item => {
//       if (item.state === 'on') {
//          sumPower += item.power;

//          console.log(`Общая потребляемая мощность подключенных приборов равана ${sumPower} Вт`);   
//       } else {
//          console.log(`Общая потребляемая мощность подключенных приборов равана ${sumPower} Вт`);
//       }
//    });
// }

Lamp.prototype = new ElectricalAppliances("Лампа");
function Lamp(model, power) {
   this.model = model,
   this.quantity = 3,
   this.power = power
}
Lamp.prototype.setPower = function (quantity) {
   this.quantity = quantity,
   this.power *= quantity
}

Computer.prototype = new ElectricalAppliances("Компьютер");
function Computer(model, power) {
   this.model = model,
   this.quantity = 1,
   this.power = power
}
Computer.prototype.setPower = function (quantity) {
   this.quantity = quantity,
   this.power *= quantity
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