import Fastify from 'fastify';
import { appRoutes } from './routes';

export function init() {

    // Instantiate Fastify with some config
    const app = Fastify({
        logger: true,
    });

    // Require the routes for the app
    app.register(appRoutes)

    return app;    
}

// Execute the app when called directly( ex.: "npm run dev")
if( require.main === module ) {
    init().listen({
        port: 3333
    }).then( () => {
        console.log("Running on port 3333");
    })
}





