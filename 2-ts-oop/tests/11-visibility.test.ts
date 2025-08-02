/*
    Visibility :
    - Di JavaScript dan TypeScript, secara default setiap membuat properties atau method, maka sifatnya adalah bisa diakses di dalam class, atau diluar class (public)
    - Di JavaScript, kita mengenal private properties atau method, dimana menggunakan prefix #, yang secara otomatis hanya bisa diakses di dalam class
    - Di TypeScript, visibility ini dipermudah, dengan mengenalkan tiga kata kunci, public, private dan protected

    Visibility (bisa ditempatkan baik di Properties & Method) Dan Keterangan :
    - public : Bisa diakses dimanapun, secara default jika tidak menyebutkan visibility, maka akan menggunakan visibility public
    - private : Hanya bisa diakses oleh class nya sendiri
    - protected : Sama seperti private, tapi bisa juga diakses oleh class turunannya
*/

describe("Visibility", () => {
  class Counter {
    private counter: number = 0;
    protected counter2: number = 0;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }

    public getCounter2(): number {
      return this.counter2;
    }
  }

  class DoubleCounter extends Counter {
    // override public method increment
    public increment(): void {
      this.counter2 += 2; // bisa diakses karena counter2 protected
    }
  }

  it("should support private", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });

  it("should support protected", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter2());
  });
});
