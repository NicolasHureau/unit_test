export class Item {
    
    constructor(label){
        this.label = label
        this.done = false
    }

    setLabel(label){
        this.label = label;
    }
  
    toggleDone() {
        this.done = !this.done;
    }

}
    
