import {Context} from 'koa';

export const NewFakeContext: () => Context = () => {
    return {
        req: {
            socket: {
                setTimeout: jest.fn()
            },
            on: jest.fn()
        },
        res: {
            write: jest.fn(),
            end: jest.fn()
        }
    } as any;
};
