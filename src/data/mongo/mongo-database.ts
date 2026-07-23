import mongoose from 'mongoose';

interface Options {
    dbUrl: string,
    dbName: string 
}

export class MongoDB {

    static async connection(options: Options){
        const { dbUrl,  dbName } = options;

        try{
            mongoose.connect(dbUrl, { dbName })
        } catch(error){
            console.log(`Database connection failed: ${error}`);            
        }
    }
}