import { Item } from './Item'

export class TodoList {

    items = []

    addNewItem(label){
        
        if(!label || label.length > 255 || typeof(label) !== "string"){
            return this.securityLabel(label)
        }

        const item = new Item(label)
        this.items.push(item);
    }

    getItems(){
        return this.items
    }

    editItemLabel(index, newLabel){
        return this.items[index].setLabel(newLabel)
    }

    toggleDoneStatus (index) {
        return this.items[index].toggleDone()
    }

    deleteItemByIndex(index){
        return this.items.splice(index,1)
    }

    securityLabel(label){

        if(!label){
            throw new Error('label is empty')
        }
        
        if(label.length > 255){
            throw new Error('label is too long')
        }

        if(typeof(label) !== "string"){
            throw new Error('label must be a text')
        }
    }

}