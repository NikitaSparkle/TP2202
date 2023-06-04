"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// 1 пара
/*let  a:number=5;
let  b:string ="Alex";

console.log(a+b);
let  s:string="5";
let  c:string="2";
console.log(s+c);
const array: number[] = Array(10)
.fill(undefined)
.map(() => 50 * Math.random());
for (let i = 0; i < 10; i++) {
    console.log(array[i]);
  }
  let result = array.reduce(function(sum, elem) {
    return sum + elem;
}, 0);
console.log("Summ:",result);

let result2 = array.reduce(function(sum, elem) {
    if (elem%2==0) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log("Summ chet:",result2);

function arraySum(array){
    var sum2 = 0;
    for(var i = 0; i < array.length; i++){
        if (i%2==0) {
        sum2 += array[i];
        }
        }
   console.log("Четные:",sum2);
}
arraySum(array);

function arraySum2(array){
    var sum3 = 0;
    for(var i = 0; i < array.length; i++){
        if (i%2!=0) {
        sum3 += array[i];
        }
        }
   console.log("Не четные:",sum3);
}
arraySum2(array);

function getMaxOfArray(array) {
    return Math.max.apply(null, array);
  }
  function getMinOfArray(array) {
    return Math.min.apply(null, array);
  }
  var steckmax = 0;
  var steckmin = 0;
  var summmaxmin = 0;
  for (let i = 0; i < 10; i++) {
    if(array[i]==getMaxOfArray(array))
    {
        steckmax=i;
    }
    if(array[i]==getMinOfArray(array))
    {
        steckmin=i;
    }
}
if(steckmax+1==steckmin||steckmin+1==steckmax)
{
    console.log("Summ or max and min:",0);
}
else{
    if(steckmax>steckmin)
    for (let i = steckmin+1; i < steckmax; i++) {
        summmaxmin+= array[i];
    }
    else{
        for (let i = steckmax+1; i < steckmin; i++) {
            summmaxmin+= array[i];
        }
    }
    console.log("Summ or max and min:",summmaxmin);
    console.log("min index:",steckmin,"max index",steckmax);
}*/
//2 пара
/*
let message: string = "TheQuick. BrownForJumpedOver. in TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog. TheLazyDogThe. Quick. JumpedOver. TheLazy. Dog";
console.log(message.length);
//2
console.log(message.substr(0,50));
//3
let reverseString: string = "";
for (let char of message) {   reverseString = char + reverseString;
}
console.log("Revers " + reverseString);

let splits :string [];
splits=message.split('');
var next=1;

//4
for (let i = 0; i < splits.length; i++) {
   if(splits[i]=='.'){next++;}
}
console.log("Количество точек",next);
var longstnext=0;
//5
function findLongestWord(str) {

     var strSplit = str.split(' ');
     var longestWord = 0;
for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
    longstnext=i;
     }
  }
  console.log("Длинное слово",strSplit[longstnext]);
    return longestWord;
}
findLongestWord(message);
//6
console.log(message.substr(0,message.length/2));
 //7
 
 var mes2new = "";
 var strSplit = message.split(' ');
 for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i] == "in"){
        continue;
     }
     mes2new+=strSplit[i]
  }
  console.log(mes2new);

  //8

  var mes3new = "";
  var strSplit3 = message.split('');
  for(var i = 0; i < strSplit3.length; i++){
     if(strSplit3[i] == "i"){
        mes3new+="m";
      }
      else{
      mes3new+=strSplit3[i]
      }
   }
   console.log(mes3new);
   //9
console.log(message.replace(message.split('.')[1]+'.', ''))
   //10
    function LongestWord(str) {
        let strSplit = str.split(' ');
        let longestWord = '';
        for(let i = 0; i < strSplit.length; i++){
            if(strSplit[i].length > longestWord.length){
                longestWord = strSplit[i];
            }
        }
        return longestWord;
    }
   function ShortestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < strSplit.length; i++){
        if(strSplit[i].length < longestWord.length){
            longestWord = strSplit[i];
        }
    }
    return longestWord;
}
console.log(message.replace(LongestWord(message), ShortestWord(message)))
//11
console.log(message.replace(/\./g, '.\n\t'))*/
// 3 пара
/*abstract class Shape {
  abstract getArea(): number;
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  getArea(): number {
    return this.side*2;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius*2;
  }
}

class Triangle extends Shape {
  constructor(private base: number, private height: number) {
    super();
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

const square = new Square(5);
console.log(square.getArea());

const circle = new Circle(3);
console.log(circle.getArea());

const triangle = new Triangle(4, 6);
console.log(triangle.getArea()); */
//-----
var Nogka = /** @class */ (function () {
    function Nogka(dina, visota) {
        this.Dina = dina;
        this.Visota = visota;
    }
    Nogka.prototype.setDina = function (dina) {
        this.Dina = dina;
    };
    Nogka.prototype.getDina = function () {
        return this.Dina;
    };
    Nogka.prototype.retInfo = function () {
        return "\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043D\u043E\u0436\u043A\u0438: ".concat(this.Dina, "\t \u0432\u0432\u044B\u0441\u043E\u0442\u0430 \u043D\u043E\u0436\u043A\u0438: ").concat(this.Dina);
    };
    return Nogka;
}());
var Kapeluyx = /** @class */ (function () {
    function Kapeluyx(diametr, visota, okras) {
        this.Diametr = diametr;
        this.Visota = visota;
        this.Okras = okras;
    }
    Kapeluyx.prototype.setDina = function (diametr) {
        this.Diametr = diametr;
    };
    Kapeluyx.prototype.getDina = function () {
        return this.Diametr;
    };
    Kapeluyx.prototype.retInfo = function () {
        return "\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u0448\u043B\u044F\u043F\u043A\u0438: ".concat(this.Diametr, "\t \u0412\u044B\u0441\u043E\u0442\u0430 \u0448\u043B\u044F\u043F\u043A\u0438: ").concat(this.Visota, "\t \u041E\u043A\u0440\u0430\u0441 \u0448\u043B\u044F\u043F\u043A\u0438: ").concat(this.Okras);
    };
    return Kapeluyx;
}());
var Grib = /** @class */ (function () {
    function Grib(nogka, kapeluyx, nmae, ranktoxic, gribnucha, areaObit) {
        this.Nogka = nogka;
        this.Kapeluyx = kapeluyx;
        this.Nmae = nmae;
        this.Ranktoxic = ranktoxic;
        this.Gribnucha = gribnucha;
        this.AreaObit = areaObit;
    }
    Grib.prototype.getKapeluyx = function () {
        return this.Kapeluyx.Diametr;
    };
    Grib.prototype.setNmae = function (nmae) {
        this.Nmae = nmae;
    };
    Grib.prototype.getNmae = function () {
        return this.Nmae;
    };
    Grib.prototype.setRanktoxic = function (ranktoxic) {
        this.Ranktoxic = ranktoxic;
    };
    Grib.prototype.getRanktoxic = function () {
        return this.Ranktoxic;
    };
    Grib.prototype.setGribnucha = function (gribnucha) {
        this.Gribnucha = gribnucha;
    };
    Grib.prototype.getGribnucha = function () {
        return this.Gribnucha;
    };
    Grib.prototype.setAreaObit = function (areaObit) {
        this.AreaObit = areaObit;
    };
    Grib.prototype.getAreaObit = function () {
        return this.AreaObit;
    };
    Grib.prototype.retInfo = function () {
        return " \t\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ".concat(this.Nmae, "  \t : ").concat(this.Nogka.retInfo(), "\t : ").concat(this.Kapeluyx.retInfo(), " \t\u0414\u043B\u0438\u043D\u0430 \u0433\u0440\u0438\u0431\u043D\u0438\u0446\u044B: ").concat(this.Gribnucha, "\t\u0440\u043E\u0432\u0435\u043D\u044C \u0442\u043E\u043A\u0441\u0438\u0447\u043D\u043E\u0441\u0442\u0438: ").concat(this.Ranktoxic, "\t\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u043E\u0431\u0438\u0442\u0430\u043D\u0438\u044F: ").concat(this.AreaObit);
    };
    return Grib;
}());
var Mexamor = /** @class */ (function (_super) {
    __extends(Mexamor, _super);
    function Mexamor(nogka, kapeluyx, nmae, ranktoxic, gribnucha, areaObit) {
        return _super.call(this, nogka, kapeluyx, nmae, ranktoxic, gribnucha, areaObit) || this;
    }
    Mexamor.prototype.retInfo = function () {
        return _super.prototype.retInfo.call(this);
    };
    return Mexamor;
}(Grib));
var CirShpanka = /** @class */ (function (_super) {
    __extends(CirShpanka, _super);
    function CirShpanka(nogka, kapeluyx, nmae, ranktoxic, gribnucha, areaObit) {
        return _super.call(this, nogka, kapeluyx, nmae, ranktoxic, gribnucha, areaObit) || this;
    }
    CirShpanka.prototype.retInfo = function () {
        return _super.prototype.retInfo.call(this);
    };
    return CirShpanka;
}(Grib));
var Lisichka = /** @class */ (function (_super) {
    __extends(Lisichka, _super);
    function Lisichka(nogka, kapeluyx, nmae, ranktoxic, gribnucha, areaObit) {
        return _super.call(this, nogka, kapeluyx, nmae, ranktoxic, gribnucha, areaObit) || this;
    }
    Lisichka.prototype.retInfo = function () {
        return _super.prototype.retInfo.call(this);
    };
    return Lisichka;
}(Grib));
var mexamor = new Mexamor(new Nogka(11, 15), new Kapeluyx(11, 15, "Red"), "Мухаморчик Жорчик", 11, 22, "Весь Мир");
console.log(mexamor.retInfo());
var cirShpanka = new CirShpanka(new Nogka(11, 15), new Kapeluyx(11, 15, "MultiOrkras"), "Шпанка Акаянка", 11, 22, "Авганистан");
console.log(cirShpanka.retInfo());
var lisichka = new Lisichka(new Nogka(11, 15), new Kapeluyx(11, 15, "White"), "Лисички жарят Птички", 11, 22, "Джони они на деревья");
console.log(lisichka.retInfo());
var grib = [];
grib.push(new Mexamor(new Nogka(11, 15), new Kapeluyx(11, 15, "Red"), "Мухаморчик Жорчик", 11, 22, "Весь Мир"));
grib.push(new CirShpanka(new Nogka(11, 15), new Kapeluyx(41, 15, "MultiOrkras"), "Шпанка Акаянка", 11, 22, "Авганистан"));
grib.push(new Lisichka(new Nogka(11, 15), new Kapeluyx(13, 15, "White"), "Лисички жарят Птички", 11, 22, "Джони они на деревья"));
grib.push(new Mexamor(new Nogka(11, 15), new Kapeluyx(51, 15, "Red"), "Мухаморчик Жорчик", 11, 22, "Весь Мир"));
grib.push(new CirShpanka(new Nogka(11, 15), new Kapeluyx(111, 15, "MultiOrkras"), "Шпанка Акаянка", 11, 22, "Авганистан"));
grib.push(new Lisichka(new Nogka(11, 15), new Kapeluyx(14, 15, "White"), "Лисички жарят Птички", 11, 22, "Джони они на деревья"));
grib.push(new Mexamor(new Nogka(11, 15), new Kapeluyx(10, 15, "Red"), "Мухаморчик Жорчик", 11, 22, "Весь Мир"));
grib.push(new CirShpanka(new Nogka(11, 15), new Kapeluyx(111, 15, "MultiOrkras"), "Шпанка Акаянка", 11, 22, "Авганистан"));
grib.push(new Lisichka(new Nogka(11, 15), new Kapeluyx(64, 15, "White"), "Лисички жарят Птички", 11, 22, "Джони они на деревья"));
for (var _i = 0, grib_1 = grib; _i < grib_1.length; _i++) {
    var gribs = grib_1[_i];
    console.log(gribs.retInfo());
}
var ControllerThaGribami = /** @class */ (function () {
    function ControllerThaGribami(grib) {
        if (grib === void 0) { grib = []; }
        this.Gribs = grib;
    }
    ControllerThaGribami.prototype.popap = function (Grib) {
        this.Gribs.push();
    };
    ControllerThaGribami.prototype.prints = function () {
        for (var _i = 0, grib_2 = grib; _i < grib_2.length; _i++) {
            var gribs = grib_2[_i];
            console.log(gribs.retInfo());
        }
    };
    ControllerThaGribami.prototype.getBigTITS = function () {
        var numberses = 0;
        for (var i = 0; i < this.Gribs.length; i++) {
            if (this.Gribs[i].getKapeluyx.length > 0) {
                numberses = i;
            }
        }
        var gribBig = this.Gribs[numberses];
        return gribBig;
    };
    return ControllerThaGribami;
}());
var mexamors = new ControllerThaGribami();
console.log('BIG TIGS', mexamors.getBigTITS());
