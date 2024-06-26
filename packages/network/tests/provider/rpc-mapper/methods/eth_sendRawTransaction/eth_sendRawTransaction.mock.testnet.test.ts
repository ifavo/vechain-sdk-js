import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { testnetUrl } from '../../../../fixture';
import { RPC_METHODS, RPCMethodsMap, ThorClient } from '../../../../../src';
import { ProviderRpcError } from '@vechain/sdk-errors';

/**
 * RPC Mapper integration tests for 'eth_sendRawTransaction' method
 *
 * @group integration/rpc-mapper/methods/eth_sendRawTransaction
 */
describe('RPC Mapper - eth_sendRawTransaction method tests', () => {
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
     * eth_sendRawTransaction RPC call tests - Negative cases
     */
    describe('eth_sendRawTransaction - Negative cases', () => {
        /**
         *  Test case where request fails
         */
        test('Should throw `ProviderRpcError` when request fails', async () => {
            // Mock the getBlock method to throw error
            jest.spyOn(
                thorClient.transactions,
                'sendRawTransaction'
            ).mockRejectedValue(new Error());

            await expect(async () => {
                (await RPCMethodsMap(thorClient)[
                    RPC_METHODS.eth_sendRawTransaction
                ](['0x123456789'])) as string;
            }).rejects.toThrowError(ProviderRpcError);
        });
    });
});
