import {Context} from 'koa';

export const NewFakeContext: () => Context = () => {
    return {
        req: {
            socket: {
                setTimeout: jest.fn()
            }
        },
        res: {
            write: jest.fn()
        }
    } as any;
};
