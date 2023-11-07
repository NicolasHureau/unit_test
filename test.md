# Cahier de tests "TODO-LIST"



## Actions

    - receive a text
    - confirm data is a string (text) & not more 255 characteres
    - add a status todo (false) to the done status
    - send a item (object) with label content and done status
    - change item status
    - remove item
    - remove list


### Test

    Name : addTextTest
    ID : 1.1
    Objectif : is text is added
    Ref : user input some text
    Condition : input text and validate button
    Config : version 1.0
    Steps : 1.text added into input
            2.validate button is press
            3.text is register
    Result : text is register in database and show in app
.

    Name : addNoTextTest
    ID : 1.2
    Objectif : nothing added
    Ref : user input nothing
    Condition : validate without input text
    Config : version 1.0
    Steps : 1.validate button is press
    Result : nothing append
.

    Name : addFileTest
    ID : 1.3
    Objectif : show error message if a file added into input
    Ref : user input file
    Condition : input file and validate
    Config : version 1.0
    Steps : 1.file added into input
            2.validate button is press
    Result : error message is show to prevent error
.

    Name : addInjectionTest
    ID : 1.4
    Objectif : show error message if code injection added into input
    Ref : user try to crack app
    Condition : input injection and validate
    Config : version 1.0
    Steps : 1.injection is added into input
            2.validate button is press
    Result : error message is show to prevent error
.

    Name : addToMuchTextTest
    ID : 1.5
    Objectif : show error message if the text is too long
    Ref : user try to input too long text
    Condition : input text more than limit character and validate
    Config : version 1.0
    Steps : 1.input text more than limit character
            2.validate button is press
    Result : error message is show to prevent error
.

    Name : additemAlreadyExistTest
    ID : 1.6
    Objectif : show warning message if an item with same text exist
    Ref : user want to create an item who already exist
    Condition : input text already exist in an other item
    Config : version 1.0
    Steps : 1.input same text as an other item
            2.validate button is pressed
    Result : show warning message to prevent item already exist
.

    Name : addDoneStatusTest
    ID : 2.1
    Objectif : done status is set false on item creation 
    Ref : user input todo item 
    Condition : item is added to bdd
    Config : version 1.0
    Steps : 1.item is create
            2.done status is set false
    Result : item is added to list with todo status
.

    Name : showTodoListTest
    ID : 3.1
    Objectif : show todo list
    Ref : user want see his todo list
    Condition : items are present  in bdd
    Config : version 1.0
    Steps : 1.items are load from bdd
            2.list of item is create
    Result : all items are display in list view
.

    Name : editTextItemTest
    ID : 4.1
    Objectif : item text is change
    Ref : user want to change text of item
    Condition : item exist
    Config : version 1.0
    Steps : 1.select text item
            2.change text item
            3.validate button is pressed
    Result : text item is changed
.

    Name : changeDoneStatusTest
    ID : 4.2
    Objectif : done status is change
    Ref : user change item status
    Condition : item exist
    Config : version 1.0
    Steps : 1.item status button is pressed
    Result : item status is changed
.

    Name : changeMultipleItemsDoneStatusTest
    ID : 4.3
    Objectif : done status is change for multiple items
    Ref : user select multiple items and change status
    Condition : multiple items exist and done status are the same
    Config : version 1.0
    Steps : 1.select multiple items
            2.status button is pressed
    Result : items status is changed
.

    Name : changeMultipleItemsNotSameDoneStatusTest
    ID : 4.4
    Objectif : 
    Ref : 
    Condition : 
    Config : version 1.0
    Steps : 
            
            
    Result : 
.

    Name : removetextItemTest
    ID : 5.1
    Objectif : item text is remove
    Ref : user remove text from item
    Condition : item exist
    Config : version 1.0
    Steps : 1.select text item
            2.remove text item
            3.validate button is pressed
    Result : show error message to prevent empty item
.

    Name : removeTodoItemTest
    ID : 5.2
    Objectif : item is remove while is todo
    Ref : user want to remove an item not done
    Condition : item exist and his status is todo (false)
    Config : version 1.0
    Steps : 1.select item
            2.remove button is pressed
    Result : show message to validate remove while item status is not done
.

    Name : removeDoneItemTest
    ID : 5.3
    Objectif : done item is remove
    Ref : user want to remove a done item
    Condition : item exist and his status is done (true)
    Config : version 1.0
    Steps : 1.select item
            2.remove button is pressed
    Result : item is remove
.

    Name : removeMultipleDoneItemsTest
    ID : 5.4
    Objectif : multiple done items are remove
    Ref : user want to remove multiple done items
    Condition : items exist and them done status are true
    Config : version 1.0
    Steps : 1.select multiple items
            2.remove button is pressed
    Result : selected items are remove
.

    Name : removeMultipleItemsWithNotSameStatusTest
    ID : 5.5
    Objectif : prevent remove multiple items with not same status
    Ref : user want to remove multiples items with not same status
    Condition : 
    Config : version 1.0
    Steps : 
            
            
    Result : 
.

    Name : removeDoneItemsListTest
    ID : 5.6
    Objectif : remove list with all items done
    Ref : user want to remove a list with all items done
    Condition : all items of the list is done
    Config : version 1.0
    Steps : 1.remove button of the list is pressed
    Result : list is remove
.

    Name : removeTodoItemsListTest
    ID : 5.7
    Objectif : remove list with all/some items todo
    Ref : user want to remove a list with all/some items todo
    Condition : all items of the list is todo
    Config : version 1.0
    Steps : 1.remove button of the list is pressed
    Result : show message to prevent user some items are not done
