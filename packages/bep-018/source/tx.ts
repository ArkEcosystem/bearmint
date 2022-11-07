import type {
	BEP55Msg,
	BEP55MsgOp,
	BEP56Msg,
	BEP56MsgOp,
	BEP57Msg,
	BEP57MsgHash,
	BEP58Msg,
	BEP58MsgHash,
	BEP59Msg,
	BEP59MsgHash,
	BEP64Lock,
	BEP64Msg,
	BEP64MsgOp,
	BEP65Msg,
	BEP65MsgOp,
	BEP66Msg,
	BEP66MsgOp,
	BEP67Msg,
	BEP67MsgOp,
	BEP68Msg,
	BEP68MsgOp,
	BEP104Msg,
	BEP104MsgOp,
	BEP110Msg,
	BEP122Msg,
	BEP122MsgHash,
	BEP126Collection,
	BEP126Msg,
	BEP126MsgOp,
	BEP126Policy,
	BEP126User,
	BEP127Msg,
	BEP127MsgOp,
	BEP128Msg,
	BEP128MsgOp,
	BEP129Msg,
	BEP129MsgOp,
	BEP130Msg,
	BEP130MsgOp,
	BEP131Msg,
	BEP131MsgOp,
	BEP131Token,
	BEP132Msg,
	BEP132MsgOp,
	BEP133Msg,
	BEP133MsgOp,
	BEP134Msg,
	BEP134MsgOp,
	BEP134Policy,
	BEP134Token,
	BEP135Msg,
	BEP135MsgOp,
	BEP136Msg,
	BEP136MsgOp,
	BEP137Msg,
	BEP137MsgOp,
	SignedTx,
	TxBody,
	TxChecksum,
	TxMsg,
} from './tx_pb.js'
import type { Plain } from './types.js'

export type PlainBEP55Msg = Plain<BEP55Msg>
export type PlainBEP55MsgOp = Plain<BEP55MsgOp>
export type PlainBEP56Msg = Plain<BEP56Msg>
export type PlainBEP56MsgOp = Plain<BEP56MsgOp>
export type PlainBEP57Msg = Plain<BEP57Msg>
export type PlainBEP57MsgHash = Plain<BEP57MsgHash>
export type PlainBEP58Msg = Plain<BEP58Msg>
export type PlainBEP58MsgHash = Plain<BEP58MsgHash>
export type PlainBEP59Msg = Plain<BEP59Msg>
export type PlainBEP59MsgHash = Plain<BEP59MsgHash>
export type PlainBEP64Lock = Plain<BEP64Lock>
export type PlainBEP64Msg = Plain<BEP64Msg>
export type PlainBEP64MsgOp = Plain<BEP64MsgOp>
export type PlainBEP65Msg = Plain<BEP65Msg>
export type PlainBEP65MsgOp = Plain<BEP65MsgOp>
export type PlainBEP66Msg = Plain<BEP66Msg>
export type PlainBEP66MsgOp = Plain<BEP66MsgOp>
export type PlainBEP67Msg = Plain<BEP67Msg>
export type PlainBEP67MsgOp = Plain<BEP67MsgOp>
export type PlainBEP68Msg = Plain<BEP68Msg>
export type PlainBEP68MsgOp = Plain<BEP68MsgOp>
export type PlainBEP104Msg = Plain<BEP104Msg>
export type PlainBEP104MsgOp = Plain<BEP104MsgOp>
export type PlainBEP110Msg = Plain<BEP110Msg>
export type PlainBEP122Msg = Plain<BEP122Msg>
export type PlainBEP122MsgHash = Plain<BEP122MsgHash>
export type PlainBEP126Collection = Plain<BEP126Collection>
export type PlainBEP126Msg = Plain<BEP126Msg>
export type PlainBEP126MsgOp = Plain<BEP126MsgOp>
export type PlainBEP126Policy = Plain<BEP126Policy>
export type PlainBEP131Token = Plain<BEP131Token>
export type PlainBEP126User = Plain<BEP126User>
export type PlainBEP127Msg = Plain<BEP127Msg>
export type PlainBEP127MsgOp = Plain<BEP127MsgOp>
export type PlainBEP128Msg = Plain<BEP128Msg>
export type PlainBEP128MsgOp = Plain<BEP128MsgOp>
export type PlainBEP129Msg = Plain<BEP129Msg>
export type PlainBEP129MsgOp = Plain<BEP129MsgOp>
export type PlainBEP130Msg = Plain<BEP130Msg>
export type PlainBEP130MsgOp = Plain<BEP130MsgOp>
export type PlainBEP131Msg = Plain<BEP131Msg>
export type PlainBEP131MsgOp = Plain<BEP131MsgOp>
export type PlainBEP132Msg = Plain<BEP132Msg>
export type PlainBEP132MsgOp = Plain<BEP132MsgOp>
export type PlainBEP133Msg = Plain<BEP133Msg>
export type PlainBEP133MsgOp = Plain<BEP133MsgOp>
export type PlainBEP134Msg = Plain<BEP134Msg>
export type PlainBEP134MsgOp = Plain<BEP134MsgOp>
export type PlainBEP134Policy = Plain<BEP134Policy>
export type PlainBEP134Token = Plain<BEP134Token>
export type PlainBEP135Msg = Plain<BEP135Msg>
export type PlainBEP135MsgOp = Plain<BEP135MsgOp>
export type PlainBEP136Msg = Plain<BEP136Msg>
export type PlainBEP136MsgOp = Plain<BEP136MsgOp>
export type PlainBEP137Msg = Plain<BEP137Msg>
export type PlainBEP137MsgOp = Plain<BEP137MsgOp>
export type PlainSignedTx = Plain<SignedTx>
export type PlainTxChecksum = Plain<TxChecksum>
export type PlainTxMsg = Plain<TxMsg>
export type PlainTxBody = Plain<TxBody>
