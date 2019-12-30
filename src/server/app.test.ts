import {App, RoutingFactoryInterface, ServerConfiguration} from './app';
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
        const config: ServerConfiguration = {} as any;
        const routes: Router.IMiddleware = {} as any;
        newApplication(config, routes);

        app.start();

        expect(koaApp.use).toBeCalledWith(routes);
        expect(koaApp.listen).toBeCalledWith(config.port);
    });

    function newApplication(config: ServerConfiguration, routes: Router.IMiddleware) {
        const router = {
            routes: jest.fn().mockReturnValue(routes)
        } as any;
        routingFactory.getRouter = jest.fn().mockReturnValue(router);
        app = new App(config, koaApp, routingFactory);
    }
});
