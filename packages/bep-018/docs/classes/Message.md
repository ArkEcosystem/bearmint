[@bearmint/bep-018 - v0.0.0](../README.md) / Message

# Class: Message<T\>

Message is the base class of every message, generated, or created at
runtime.

It is _not_ safe to extend this class. If you want to create a message at
run time, use proto3.makeMessageType().

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Message`](Message.md)<`T`\> = [`AnyMessage`](../interfaces/AnyMessage.md) |

## Hierarchy

- **`Message`**

  ↳ [`AnyMessage`](../interfaces/AnyMessage.md)

  ↳ [`BEP22Validator`](BEP22Validator.md)

  ↳ [`BEP22Account`](BEP22Account.md)

  ↳ [`BEP101Misbehavior`](BEP101Misbehavior.md)

  ↳ [`BEP118Punishment`](BEP118Punishment.md)

  ↳ [`BEP118Record`](BEP118Record.md)

  ↳ [`BEP118File`](BEP118File.md)

  ↳ [`BEP119Punishment`](BEP119Punishment.md)

  ↳ [`BEP119Record`](BEP119Record.md)

  ↳ [`BEP119File`](BEP119File.md)

  ↳ [`BEP120Sentence`](BEP120Sentence.md)

  ↳ [`BEP120Record`](BEP120Record.md)

  ↳ [`BEP120File`](BEP120File.md)

  ↳ [`BEP88Validator`](BEP88Validator.md)

  ↳ [`BEP21MilestoneParameters`](BEP21MilestoneParameters.md)

  ↳ [`BEP21Milestone`](BEP21Milestone.md)

  ↳ [`Request`](abci.Request.md)

  ↳ [`RequestEcho`](abci.RequestEcho.md)

  ↳ [`RequestFlush`](abci.RequestFlush.md)

  ↳ [`RequestInfo`](abci.RequestInfo.md)

  ↳ [`RequestInitChain`](abci.RequestInitChain.md)

  ↳ [`RequestQuery`](abci.RequestQuery.md)

  ↳ [`RequestBeginBlock`](abci.RequestBeginBlock.md)

  ↳ [`RequestCheckTx`](abci.RequestCheckTx.md)

  ↳ [`RequestDeliverTx`](abci.RequestDeliverTx.md)

  ↳ [`RequestEndBlock`](abci.RequestEndBlock.md)

  ↳ [`RequestCommit`](abci.RequestCommit.md)

  ↳ [`RequestListSnapshots`](abci.RequestListSnapshots.md)

  ↳ [`RequestOfferSnapshot`](abci.RequestOfferSnapshot.md)

  ↳ [`RequestLoadSnapshotChunk`](abci.RequestLoadSnapshotChunk.md)

  ↳ [`RequestApplySnapshotChunk`](abci.RequestApplySnapshotChunk.md)

  ↳ [`RequestPrepareProposal`](abci.RequestPrepareProposal.md)

  ↳ [`RequestProcessProposal`](abci.RequestProcessProposal.md)

  ↳ [`Response`](abci.Response.md)

  ↳ [`ResponseException`](abci.ResponseException.md)

  ↳ [`ResponseEcho`](abci.ResponseEcho.md)

  ↳ [`ResponseFlush`](abci.ResponseFlush.md)

  ↳ [`ResponseInfo`](abci.ResponseInfo.md)

  ↳ [`ResponseInitChain`](abci.ResponseInitChain.md)

  ↳ [`ResponseQuery`](abci.ResponseQuery.md)

  ↳ [`ResponseBeginBlock`](abci.ResponseBeginBlock.md)

  ↳ [`ResponseCheckTx`](abci.ResponseCheckTx.md)

  ↳ [`ResponseDeliverTx`](abci.ResponseDeliverTx.md)

  ↳ [`ResponseEndBlock`](abci.ResponseEndBlock.md)

  ↳ [`ResponseCommit`](abci.ResponseCommit.md)

  ↳ [`ResponseListSnapshots`](abci.ResponseListSnapshots.md)

  ↳ [`ResponseOfferSnapshot`](abci.ResponseOfferSnapshot.md)

  ↳ [`ResponseLoadSnapshotChunk`](abci.ResponseLoadSnapshotChunk.md)

  ↳ [`ResponseApplySnapshotChunk`](abci.ResponseApplySnapshotChunk.md)

  ↳ [`ResponsePrepareProposal`](abci.ResponsePrepareProposal.md)

  ↳ [`ResponseProcessProposal`](abci.ResponseProcessProposal.md)

  ↳ [`CommitInfo`](abci.CommitInfo.md)

  ↳ [`ExtendedCommitInfo`](abci.ExtendedCommitInfo.md)

  ↳ [`Event`](abci.Event.md)

  ↳ [`EventAttribute`](abci.EventAttribute.md)

  ↳ [`TxResult`](abci.TxResult.md)

  ↳ [`Validator`](abci.Validator.md)

  ↳ [`ValidatorUpdate`](abci.ValidatorUpdate.md)

  ↳ [`VoteInfo`](abci.VoteInfo.md)

  ↳ [`ExtendedVoteInfo`](abci.ExtendedVoteInfo.md)

  ↳ [`Misbehavior`](abci.Misbehavior.md)

  ↳ [`Snapshot`](abci.Snapshot.md)

  ↳ [`PublicKey`](crypto.PublicKey.md)

  ↳ [`ConsensusParams`](params.ConsensusParams.md)

  ↳ [`BlockParams`](params.BlockParams.md)

  ↳ [`EvidenceParams`](params.EvidenceParams.md)

  ↳ [`ValidatorParams`](params.ValidatorParams.md)

  ↳ [`VersionParams`](params.VersionParams.md)

  ↳ [`HashedParams`](params.HashedParams.md)

  ↳ [`PartSetHeader`](types.PartSetHeader.md)

  ↳ [`Part`](types.Part.md)

  ↳ [`BlockID`](types.BlockID.md)

  ↳ [`Header`](types.Header.md)

  ↳ [`Data`](types.Data.md)

  ↳ [`Vote`](types.Vote.md)

  ↳ [`Commit`](types.Commit.md)

  ↳ [`CommitSig`](types.CommitSig.md)

  ↳ [`Proposal`](types.Proposal.md)

  ↳ [`SignedHeader`](types.SignedHeader.md)

  ↳ [`LightBlock`](types.LightBlock.md)

  ↳ [`BlockMeta`](types.BlockMeta.md)

  ↳ [`TxProof`](types.TxProof.md)

  ↳ [`TxChecksum`](TxChecksum.md)

  ↳ [`TxMsg`](TxMsg.md)

  ↳ [`TxBody`](TxBody.md)

  ↳ [`SignedTx`](SignedTx.md)

  ↳ [`TxReceipt`](TxReceipt.md)

  ↳ [`TxReceiptLog`](TxReceiptLog.md)

  ↳ [`BEP55MsgOp`](BEP55MsgOp.md)

  ↳ [`BEP55Msg`](BEP55Msg.md)

  ↳ [`BEP56MsgOp`](BEP56MsgOp.md)

  ↳ [`BEP56Msg`](BEP56Msg.md)

  ↳ [`BEP57Msg`](BEP57Msg.md)

  ↳ [`BEP57MsgHash`](BEP57MsgHash.md)

  ↳ [`BEP58Msg`](BEP58Msg.md)

  ↳ [`BEP58MsgHash`](BEP58MsgHash.md)

  ↳ [`BEP59Msg`](BEP59Msg.md)

  ↳ [`BEP59MsgHash`](BEP59MsgHash.md)

  ↳ [`BEP59Strategy`](BEP59Strategy.md)

  ↳ [`BEP64MsgOp`](BEP64MsgOp.md)

  ↳ [`BEP64Msg`](BEP64Msg.md)

  ↳ [`BEP64Lock`](BEP64Lock.md)

  ↳ [`BEP65MsgOp`](BEP65MsgOp.md)

  ↳ [`BEP65Msg`](BEP65Msg.md)

  ↳ [`BEP66MsgOp`](BEP66MsgOp.md)

  ↳ [`BEP66Msg`](BEP66Msg.md)

  ↳ [`BEP67MsgOp`](BEP67MsgOp.md)

  ↳ [`BEP67Msg`](BEP67Msg.md)

  ↳ [`BEP68MsgOp`](BEP68MsgOp.md)

  ↳ [`BEP68Msg`](BEP68Msg.md)

  ↳ [`BEP104MsgOp`](BEP104MsgOp.md)

  ↳ [`BEP104Msg`](BEP104Msg.md)

  ↳ [`BEP110Msg`](BEP110Msg.md)

  ↳ [`BEP122Msg`](BEP122Msg.md)

  ↳ [`BEP122MsgHash`](BEP122MsgHash.md)

  ↳ [`BEP126User`](BEP126User.md)

  ↳ [`BEP126Policy`](BEP126Policy.md)

  ↳ [`BEP126Collection`](BEP126Collection.md)

  ↳ [`BEP126MsgOp`](BEP126MsgOp.md)

  ↳ [`BEP126Msg`](BEP126Msg.md)

  ↳ [`BEP127MsgOp`](BEP127MsgOp.md)

  ↳ [`BEP127Msg`](BEP127Msg.md)

  ↳ [`BEP128MsgOp`](BEP128MsgOp.md)

  ↳ [`BEP128Msg`](BEP128Msg.md)

  ↳ [`BEP129MsgOp`](BEP129MsgOp.md)

  ↳ [`BEP129Msg`](BEP129Msg.md)

  ↳ [`BEP130MsgOp`](BEP130MsgOp.md)

  ↳ [`BEP130Msg`](BEP130Msg.md)

  ↳ [`BEP131MsgOp`](BEP131MsgOp.md)

  ↳ [`BEP131Msg`](BEP131Msg.md)

  ↳ [`BEP131Token`](BEP131Token.md)

  ↳ [`BEP132MsgOp`](BEP132MsgOp.md)

  ↳ [`BEP132Msg`](BEP132Msg.md)

  ↳ [`BEP133MsgOp`](BEP133MsgOp.md)

  ↳ [`BEP133Msg`](BEP133Msg.md)

  ↳ [`BEP134Policy`](BEP134Policy.md)

  ↳ [`BEP134Token`](BEP134Token.md)

  ↳ [`BEP134MsgOp`](BEP134MsgOp.md)

  ↳ [`BEP134Msg`](BEP134Msg.md)

  ↳ [`BEP135MsgOp`](BEP135MsgOp.md)

  ↳ [`BEP135Msg`](BEP135Msg.md)

  ↳ [`BEP136MsgOp`](BEP136MsgOp.md)

  ↳ [`BEP136Msg`](BEP136Msg.md)

  ↳ [`BEP137MsgOp`](BEP137MsgOp.md)

  ↳ [`BEP137Msg`](BEP137Msg.md)

## Table of contents

### Constructors

- [constructor](Message.md#constructor)

### Methods

- [clone](Message.md#clone)
- [equals](Message.md#equals)
- [fromBinary](Message.md#frombinary)
- [fromJson](Message.md#fromjson)
- [fromJsonString](Message.md#fromjsonstring)
- [getType](Message.md#gettype)
- [toBinary](Message.md#tobinary)
- [toJson](Message.md#tojson)
- [toJsonString](Message.md#tojsonstring)

## Constructors

### constructor

• **new Message**<`T`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Message`](Message.md)<`T`, `T`\> = [`AnyMessage`](../interfaces/AnyMessage.md) |

## Methods

### clone

▸ **clone**(): `T`

Create a deep copy.

#### Returns

`T`

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:27

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| `T` \| [`PlainMessage`](../README.md#plainmessage)<`T`\> |

#### Returns

`boolean`

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:23

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Message`](Message.md)<`T`\>

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`<`BinaryReadOptions`\> |

#### Returns

[`Message`](Message.md)<`T`\>

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:37

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Message`](Message.md)<`T`\>

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Message`](Message.md)<`T`\>

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:41

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Message`](Message.md)<`T`\>

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`<`JsonReadOptions`\> |

#### Returns

[`Message`](Message.md)<`T`\>

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:45

___

### getType

▸ **getType**(): `MessageType`<`T`\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`<`T`\>

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:64

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:49

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:54

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Defined in

node_modules/.pnpm/@bufbuild+protobuf@0.2.0/node_modules/@bufbuild/protobuf/dist/types/message.d.ts:58
