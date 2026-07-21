import express, {Router, json, urlencoded} from 'express';

interface Options{
    port: number,
    publicPath? : string,
    routes: Router,
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;
    private readonly routes: Router;

    constructor(options: Options){
        const {port, publicPath='public', routes} = options;
        this.port = port;
        this.publicPath = publicPath;
        this.routes = routes;
    }


    async run( ){ 
        
        this.app.use(json());
        this.app.use(urlencoded({ extended: true}));

        this.app.use(this.routes);

        this.app.listen(this.port);

     }
}
