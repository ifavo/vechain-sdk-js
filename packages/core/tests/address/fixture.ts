/**
 * Simple private key and public key pair with corresponding address
 */
const simplePrivateKey = Buffer.from(
    '7582be841ca040aa940fff6c05773129e135623e41acce3e0b8ba520dc1ae26a',
    'hex'
);
const simplePublicKey = Buffer.from(
    '04b90e9bb2617387eba4502c730de65a33878ef384a46f1096d86f2da19043304afa67d0ad09cf2bea0c6f2d1767a9e62a7a7ecc41facf18f2fa505d92243a658f',
    'hex'
);

const simpleAddress = '0xd989829d88B0eD1B06eDF5C50174eCfA64F14A64';

/**
 * Invalid private key
 */
const invalidPrivateKey = Buffer.from('INVALID_PRIVATE_KEY', 'hex');

/**
 * Checksumed and unchecksumed addresses
 */
const checksumedAndUnchecksumedAddresses = [
    {
        unchecksumed: '0x8617E340B3D01FA5F11F306F4090FD50E238070D',
        checksumed: '0x8617E340B3D01FA5F11F306F4090FD50E238070D'
    },
    {
        unchecksumed:
            '0x8617E340B3D01FA5F11F306F4090FD50E238070D'.toLowerCase(),
        checksumed: '0x8617E340B3D01FA5F11F306F4090FD50E238070D'
    },
    {
        unchecksumed: '0xde709f2102306220921060314715629080e2fb77',
        checksumed: '0xde709f2102306220921060314715629080e2fb77'
    },
    {
        unchecksumed: '0xde709f2102306220921060314715629080e2fb77',
        checksumed: '0xde709f2102306220921060314715629080e2fb77'
    },
    {
        unchecksumed: '0x27b1fdb04752bbc536007a920d24acb045561c26',
        checksumed: '0x27b1fdb04752bbc536007a920d24acb045561c26'
    },
    {
        unchecksumed: '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
        checksumed: '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed'
    },
    {
        unchecksumed: '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359',
        checksumed: '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
    },
    {
        unchecksumed: '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB',
        checksumed: '0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB'
    },
    {
        unchecksumed: '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb',
        checksumed: '0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb'
    }
];

export {
    simplePrivateKey,
    simplePublicKey,
    simpleAddress,
    invalidPrivateKey,
    checksumedAndUnchecksumedAddresses
};