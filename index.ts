
abstract class Shape {
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
console.log(triangle.getArea()); 



   class Nogka{
    public Dina: number;
    public Visota: number;

    constructor(dina:number,visota:number){
        this.Dina = dina;
        this.Visota = visota;
    }
    setDina(dina: number): void{
        this.Dina = dina;
    }
    getDina(): number{
        return this.Dina;
    }
    retInfo(): string{
        return `Диаметр ножки: ${this.Dina}\t ввысота ножки: ${this.Dina}`;
    }
  } 
   class Kapeluyx{
    public Diametr: number;
    public Visota: number;
    public Okras: string;

    constructor(diametr:number,visota:number,okras:string){
        this.Diametr = diametr;
        this.Visota = visota;
        this.Okras = okras;
    }
    setDina(diametr: number): void{
        this.Diametr = diametr;
    }
    getDina(): number{
        return this.Diametr;
    }
    retInfo(): string{
        return `Диаметр шляпки: ${this.Diametr}\t Высота шляпки: ${this.Visota}\t Окрас шляпки: ${this.Okras}`;
    }
  }

  abstract class Grib {
    private Nogka:Nogka;
    private Kapeluyx:Kapeluyx;
    public Nmae: string;
    public Ranktoxic: number;
    private Gribnucha:  number;
    private AreaObit:string;

    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        this.Nogka= nogka;
        this.Kapeluyx= kapeluyx;
        this.Nmae = nmae;
        this.Ranktoxic = ranktoxic;
        this.Gribnucha = gribnucha;
        this.AreaObit = areaObit;
    }

    getKapeluyx(): number{
        return this.Kapeluyx.Diametr;
    }


    setNmae(nmae: string): void{
        this.Nmae = nmae;
    }
    getNmae(): string{
        return this.Nmae;
    }
    setRanktoxic(ranktoxic: number): void{
        this.Ranktoxic = ranktoxic;
    }
    getRanktoxic(): number{
        return this.Ranktoxic;
    }
    setGribnucha(gribnucha: number): void{
        this.Gribnucha = gribnucha;
    }
    getGribnucha(): number{
        return this.Gribnucha;
    }
    setAreaObit(areaObit: string): void{
        this.AreaObit = areaObit;
    }
    getAreaObit(): string{
        return this.AreaObit;
    }
    retInfo(): string{
        return ` \tНазвание: ${this.Nmae}  \t : ${this.Nogka.retInfo()}\t : ${this.Kapeluyx.retInfo()} \tДлина грибницы: ${this.Gribnucha}\tровень токсичности: ${this.Ranktoxic}\tОбласть обитания: ${this.AreaObit}`;
    }
  }

class Mexamor extends Grib{
    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        super(nogka,kapeluyx,nmae,ranktoxic, gribnucha,areaObit);
    }

    retInfo(): string{
        return super.retInfo();
    }
}
class CirShpanka extends Grib{
    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        super(nogka,kapeluyx,nmae,ranktoxic, gribnucha,areaObit);
    }

    retInfo(): string{
        return super.retInfo();
    }
}
class Lisichka extends Grib{
    constructor(nogka:Nogka,kapeluyx:Kapeluyx,nmae:string,ranktoxic:number, gribnucha: number,areaObit:string){
        super(nogka,kapeluyx,nmae,ranktoxic, gribnucha,areaObit);
    }

    retInfo(): string{
        return super.retInfo();
    }
}

const mexamor = new Mexamor(new Nogka(11,15),new Kapeluyx(11,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир");
console.log(mexamor.retInfo());


const cirShpanka = new CirShpanka(new Nogka(11,15),new Kapeluyx(11,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан");
console.log(cirShpanka.retInfo());

const lisichka = new Lisichka(new Nogka(11,15),new Kapeluyx(11,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья");
console.log(lisichka.retInfo());

let grib:Grib[]=[];
grib.push(new Mexamor(new Nogka(11,15),new Kapeluyx(11,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир"));
grib.push(new CirShpanka(new Nogka(11,15),new Kapeluyx(41,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан"));
grib.push(new Lisichka(new Nogka(11,15),new Kapeluyx(13,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья"));
grib.push(new Mexamor(new Nogka(11,15),new Kapeluyx(51,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир"));
grib.push(new CirShpanka(new Nogka(11,15),new Kapeluyx(111,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан"));
grib.push(new Lisichka(new Nogka(11,15),new Kapeluyx(14,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья"));
grib.push(new Mexamor(new Nogka(11,15),new Kapeluyx(10,15,"Red"),"Мухаморчик Жорчик",11,22,"Весь Мир"));
grib.push(new CirShpanka(new Nogka(11,15),new Kapeluyx(111,15,"MultiOrkras"),"Шпанка Акаянка",11,22,"Авганистан"));
grib.push(new Lisichka(new Nogka(11,15),new Kapeluyx(64,15,"White"),"Лисички жарят Птички",11,22,"Джони они на деревья"));
for(let gribs of grib){
    console.log(gribs.retInfo());
}


class ControllerThaGribami{
    public index: number;
    private Gribs: Grib[];
    constructor(grib: Grib[]=[]){
        this.Gribs=grib;
    }
    popap(Grib:Grib):void{
        this.Gribs.push();
    }
    prints():void{
        for(let gribs of grib){
            console.log(gribs.retInfo());
        }
    }
    getBigTITS():Grib{
        let numberses=0;
        for(let i = 0; i < this.Gribs.length; i++){
           if(this.Gribs[i].getKapeluyx.length>0){
             numberses=i;
           }
        }
        let gribBig:Grib=this.Gribs[numberses];
       return gribBig
    }
}
const mexamors = new ControllerThaGribami();
console.log('BIG TIGS',mexamors.getBigTITS())