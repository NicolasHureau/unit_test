import { expect, it, describe, vi, expectTypeOf } from 'vitest'
import { TodoList } from './TodoList'

let todoList = new TodoList()


describe("Add new item to TodoList", () => {

    it("should throw an error if label is empty", ()=>{
        const label = '';
        expect(() => todoList.addNewItem(label)).toThrowError("label is empty");
    });

    it("should throw an error if label is too long", ()=>{
        const label = 'a'.repeat(256);
        expect(()=> todoList.addNewItem(label)).toThrowError("label is too long");
    });

    it("should throw an error if label is not a string", () => {
        expect(() => todoList.addNewItem({})).toThrowError("label must be a text");
    });

    // it("should throw an error if label is an injection", () => {
    //     const label = `<script>alert('Injection')</script>`;
    //     expect(() => todoList.addNewItem(label)).toThrowError("Invalid label");
    // });

    // it("should ask confirmation if label already exist", () => {
    //     todoList.addNewItem('task to be duplicate');
    //     const label = todoList.getItems()[todoList.getItems().lenght-1].label;
    //     const warning = vi.spyOn(SecurityController, 'warnLabelAlreadyExist')
    //     todoList.addNewItem(label)
    //     expect(warning).toHaveBeenCalledOnce
    // });

    it("should add a new task in todoList", () => {
        todoList.addNewItem('new task');
        expect(todoList.getItems()[todoList.getItems().length-1].label).toEqual('new task');
    })
})


describe("new item done status set at creation", () => {

    it("should be false", () => {
        todoList.addNewItem('new task');
        expect(todoList.getItems()[todoList.getItems().length - 1].done).toBeFalsy
    })
})


describe("show TodoList", () => {

    it("should show list of tasks", () => {
        expectTypeOf(todoList.getItems()).toEqualTypeOf([]);
    })
})

describe("editing", () => {

    it("should edit item label", () => {
        todoList.editItemLabel(1,'edited task');
        expect(todoList.getItems()[1].label).toEqual('edited task');
    })

    it("should invert done status of an item", () => {
        const status = todoList.getItems()[0].done;
        todoList.toggleDoneStatus(0);
        expect(status).not.toEqual(todoList.getItems()[0].done);
    })

    // it("should change multiple items done status with same status", () => {
    //     todoList.addNewItem("some task")
    //     todoList.addNewItem("an other task")
    //     todoList.toggleDoneStatus([
    //         todoList.getItems().lenght - 2,
    //         todoList.getItems().lenght - 1
    //     ])
    //     expect(todoList.getItems()[todoList.getItems().lenght - 2].done).toBeTruth
    //     expect(todoList.getItems()[todoList.getItems().lenght - 1].done).toBeTruth
    // })

    // it("should throw an error if selected items done status to toggle is not the same", () => {
    //     todoList.addNewItem("done = false")
    //     todoList.addNewItem("done = true")
    //     todoList.getItems()[todoList.getItems().lenght - 1].toggleDoneStatus()
    //     expect(todoList.toggleDoneStatus(todoList.getSelectedItems())).toThrowError("selected items have not same status")
    // })
})

describe("deleting", () => {
    it("should delete an item", () => {
        const listLenght = todoList.getItems().length
        todoList.addNewItem("item to delete")
        todoList.deleteItemByIndex(todoList.getItems().length-1)
        expect(listLenght).toEqual(todoList.getItems().length)
    })
})

