let Controller = require('./controller.js')
let ControllerTag = require('./controllerTag.js')


let command = process.argv.slice(2)

switch (command[0]) {
    case "author":
        switch (command[1]) {
            case "add":
                    let obj = {}
                    obj.first_name = command[2]
                    obj.last_name = command[3]
                    obj.religion = command[4]
                    obj.age = command[6]
                    obj.gender = command[5]
                    obj.createdAt = new Date()
                    obj.updatedAt = new Date()

            Controller.add(obj)
                    break;
           
            case "read_one" :
                    Controller.read(command[2])
                    break;
            case "read_all" :
                    Controller.readAll()
                    break;
            case "update" :
                let objUp = {}
                    objUp.first_name = command[2]
                    objUp.last_name = command[3]
                    objUp.religion = command[4]
                    objUp.gender = command[5]
                    objUp.age = command[6]
                    objUp.createdAt = new Date()
                    objUp.updatedAt = new Date()

                    Controller.update(objUp,command[7])
                    break;
            case "erase" :
                    Controller.delete(command[2])
            break;

            default:
            break;
        }
    
    case "tag" :
        
    switch (command[1]) {
                case "add":
                let objtag = {}
                objtag.name = command[2]
                objtag.createdAt = new Date()
                objtag.updatedAt = new Date()

                ControllerTag.add(objtag)
                        break;

                case "read_one" :
                        ControllerTag.read(command[2])
                        break;
                case "read_all" :
                        ControllerTag.readAll()
                        break;
                case "update" :
                        ControllerTag.update(command[2],command[3])
                        break;
                case "erase" :
                        ControllerTag.delete(command[2])
                break;
                
                default:
                break;
        }

        case "help":
            Controller.help()
        break;

        default:
        break;
    }
   

