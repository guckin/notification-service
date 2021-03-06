import {App, RoutingFactoryInterface, ServerConfigurationInterface} from './app';
import {RoutingFactoryMock} from './routing.factory.mock';
import Application = require('koa');
import * as Router from 'koa-router';

describe('App', () => {

    let routingFactory: RoutingFactoryInterface;
    let app: App;
    let koaApp: Application;

    beforeEach(() => {
        koaApp = {
            use: jest.fn(),
            listen: jest.fn()
        } as any;

        routingFactory = new RoutingFactoryMock();
    });

    it('provides an instance of the server', () => {
        const config: ServerConfigurationInterface = {} as any;
        const routes: Router.IMiddleware = {} as any;
        const parser: Application.Middleware = {} as any;
        newApplication(config, routes, parser);

        app.start();

        expect(koaApp.use).toBeCalledWith(routes);
        expect(koaApp.listen).toBeCalledWith(config.port);
        expect(koaApp.use).toHaveBeenCalledWith(parser);
    });

    function newApplication(config: ServerConfigurationInterface,
                            routes: Router.IMiddleware,
                            parser: Application.Middleware) {
        const router = {
            routes: jest.fn().mockReturnValue(routes)
        } as any;
        routingFactory.getRouter = jest.fn().mockReturnValue(router);
        app = new App(config, koaApp, routingFactory, parser);
    }
});
