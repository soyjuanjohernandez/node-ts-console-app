import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base        : number;
    limit       : number;
    showTable   : boolean;
    name        : string;
    destination : string;
}

export class ServerApp {

    static run({ base, limit, showTable, name, destination }: RunOptions) {
        console.log("server runing...");

        const table = new CreateTable().execute({ base, limit });
        //    
        const created = new SaveFile().execute({
            fileContent: table,
            destination: destination,
            fileName: name
        });

        if (showTable) console.log(table);

        created ? console.log('File created') : console.log('Error creating file');

    }
}