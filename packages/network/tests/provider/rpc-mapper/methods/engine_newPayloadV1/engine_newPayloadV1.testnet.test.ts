import { beforeEach, describe, expect, test } from '@jest/globals';
import { NotImplementedError } from '@vechain/sdk-errors';
import { RPC_METHODS, RPCMethodsMap, ThorClient } from '../../../../../src';
import { testnetUrl } from '../../../../fixture';

/**
 * RPC Mapper integration tests for 'engine_newPayloadV1' method
 *
 * @group integration/rpc-mapper/methods/engine_newPayloadV1
 */
describe('RPC Mapper - engine_newPayloadV1 method tests', () => {
    /**
     * Thor client instance
     */
    let thorClient: ThorClient;

    /**
     * Init thor client before each test
     */
    beforeEach(() => {
        // Init thor client
        thorClient = ThorClient.fromUrl(testnetUrl);
    });

    /**
     * engine_newPayloadV1 RPC call tests - Positive cases
     */
    describe('engine_newPayloadV1 - Positive cases', () => {
        /**
         * Positive case 1 - ... Description ...
         */
        test('engine_newPayloadV1 - positive case 1', async () => {
            // NOT IMPLEMENTED YET!
            await expect(
                async () =>
                    await RPCMethodsMap(thorClient)[
                        RPC_METHODS.engine_newPayloadV1
                    ]([-1])
            ).rejects.toThrowError(NotImplementedError);
        });
    });

    /**
     * engine_newPayloadV1 RPC call tests - Negative cases
     */
    describe('engine_newPayloadV1 - Negative cases', () => {
        /**
         * Negative case 1 - ... Description ...
         */
        test('engine_newPayloadV1 - negative case 1', async () => {
            // NOT IMPLEMENTED YET!
            await expect(
                async () =>
                    await RPCMethodsMap(thorClient)[
                        RPC_METHODS.engine_newPayloadV1
                    ](['SOME_RANDOM_PARAM'])
            ).rejects.toThrowError(NotImplementedError);
        });
    });
});
