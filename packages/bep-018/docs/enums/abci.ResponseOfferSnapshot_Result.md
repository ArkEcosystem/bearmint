[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseOfferSnapshot\_Result

# Enumeration: ResponseOfferSnapshot\_Result

[abci](../modules/abci.md).ResponseOfferSnapshot_Result

**`Generated`**

from enum tendermint.abci.ResponseOfferSnapshot.Result

## Table of contents

### Enumeration Members

- [ABORT](abci.ResponseOfferSnapshot_Result.md#abort)
- [ACCEPT](abci.ResponseOfferSnapshot_Result.md#accept)
- [REJECT](abci.ResponseOfferSnapshot_Result.md#reject)
- [REJECT\_FORMAT](abci.ResponseOfferSnapshot_Result.md#reject_format)
- [REJECT\_SENDER](abci.ResponseOfferSnapshot_Result.md#reject_sender)
- [UNKNOWN](abci.ResponseOfferSnapshot_Result.md#unknown)

## Enumeration Members

### ABORT

• **ABORT** = ``2``

Abort all snapshot restoration

**`Generated`**

from enum value: ABORT = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1888](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1888)

___

### ACCEPT

• **ACCEPT** = ``1``

Snapshot accepted, apply chunks

**`Generated`**

from enum value: ACCEPT = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1881](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1881)

___

### REJECT

• **REJECT** = ``3``

Reject this specific snapshot, try others

**`Generated`**

from enum value: REJECT = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1895](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1895)

___

### REJECT\_FORMAT

• **REJECT\_FORMAT** = ``4``

Reject all snapshots of this format, try others

**`Generated`**

from enum value: REJECT_FORMAT = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1902](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1902)

___

### REJECT\_SENDER

• **REJECT\_SENDER** = ``5``

Reject all snapshots from the sender(s), try others

**`Generated`**

from enum value: REJECT_SENDER = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1909](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1909)

___

### UNKNOWN

• **UNKNOWN** = ``0``

Unknown result, abort all snapshot restoration

**`Generated`**

from enum value: UNKNOWN = 0;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:1874](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L1874)
