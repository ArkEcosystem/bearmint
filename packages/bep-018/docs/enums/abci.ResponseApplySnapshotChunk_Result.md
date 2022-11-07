[@bearmint/bep-018 - v0.0.0](../README.md) / [abci](../modules/abci.md) / ResponseApplySnapshotChunk\_Result

# Enumeration: ResponseApplySnapshotChunk\_Result

[abci](../modules/abci.md).ResponseApplySnapshotChunk_Result

**`Generated`**

from enum tendermint.abci.ResponseApplySnapshotChunk.Result

## Table of contents

### Enumeration Members

- [ABORT](abci.ResponseApplySnapshotChunk_Result.md#abort)
- [ACCEPT](abci.ResponseApplySnapshotChunk_Result.md#accept)
- [REJECT\_SNAPSHOT](abci.ResponseApplySnapshotChunk_Result.md#reject_snapshot)
- [RETRY](abci.ResponseApplySnapshotChunk_Result.md#retry)
- [RETRY\_SNAPSHOT](abci.ResponseApplySnapshotChunk_Result.md#retry_snapshot)
- [UNKNOWN](abci.ResponseApplySnapshotChunk_Result.md#unknown)

## Enumeration Members

### ABORT

• **ABORT** = ``2``

Abort all snapshot restoration

**`Generated`**

from enum value: ABORT = 2;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2034](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2034)

___

### ACCEPT

• **ACCEPT** = ``1``

Chunk successfully accepted

**`Generated`**

from enum value: ACCEPT = 1;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2027](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2027)

___

### REJECT\_SNAPSHOT

• **REJECT\_SNAPSHOT** = ``5``

Reject this snapshot, try others

**`Generated`**

from enum value: REJECT_SNAPSHOT = 5;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2055](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2055)

___

### RETRY

• **RETRY** = ``3``

Retry chunk (combine with refetch and reject)

**`Generated`**

from enum value: RETRY = 3;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2041](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2041)

___

### RETRY\_SNAPSHOT

• **RETRY\_SNAPSHOT** = ``4``

Retry snapshot (combine with refetch and reject)

**`Generated`**

from enum value: RETRY_SNAPSHOT = 4;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2048](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2048)

___

### UNKNOWN

• **UNKNOWN** = ``0``

Unknown result, abort all snapshot restoration

**`Generated`**

from enum value: UNKNOWN = 0;

#### Defined in

[packages/bep-018/source/tendermint/abci/types_pb.ts:2020](https://github.com/bearmint/bearmint/blob/main/packages/bep-018/source/tendermint/abci/types_pb.ts#L2020)
