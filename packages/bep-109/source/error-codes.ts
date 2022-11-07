export enum ErrorCode {
	// The requested query ran into an unexpected error during execution.
	TM_QUERY_FAULTY = 'ERR_TM_QUERY_FAULTY',
	// An account was requested, but no identifier was provided.
	TM_QUERY_MISSING_ACCOUNT_IDENTIFIER = 'ERR_TM_QUERY_MISSING_ACCOUNT_IDENTIFIER',
	// An application state query was sent without details on what state is being requested.
	TM_QUERY_MISSING_APP_ACTION = 'ERR_TM_QUERY_MISSING_APP_ACTION',
	// A P2P query was sent without details on what action should occur.
	TM_QUERY_MISSING_P2P_ACTION = 'ERR_TM_QUERY_MISSING_P2P_ACTION',
	// A transaction was requested, but no identifier was provided.
	TM_QUERY_MISSING_TRANSACTION_HASH = 'ERR_TM_QUERY_MISSING_TRANSACTION_HASH',
	// An unknown query was requested.
	TM_QUERY_UNKNOWN = 'ERR_TM_QUERY_UNKNOWN',
	// Attempted to perform an action but the array contained duplicates.
	TX_ARRAY_CONTAINS_DUPLICATES = 'ERR_TX_ARRAY_CONTAINS_DUPLICATES',
	// Failed to verify that the value satisfied the maximum byte-length.
	TX_BYTE_LENGTH_MAX_NOT_SATISFIED = 'ERR_TX_BYTE_LENGTH_MAX_NOT_SATISFIED',
	// Failed to verify that the value satisfied the minimum byte-length.
	TX_BYTE_LENGTH_MIN_NOT_SATISFIED = 'ERR_TX_BYTE_LENGTH_MIN_NOT_SATISFIED',
	// Attempted to register a value when no byte-length range is configured via milestones.
	TX_BYTE_LENGTH_UNDEFINED = 'ERR_TX_BYTE_LENGTH_UNDEFINED',
	// Failed to verify that the value satisfied the maximum char-length.
	TX_CHAR_LENGTH_MAX_NOT_SATISFIED = 'ERR_TX_CHAR_LENGTH_MAX_NOT_SATISFIED',
	// Failed to verify that the value satisfied the minimum char-length.
	TX_CHAR_LENGTH_MIN_NOT_SATISFIED = 'ERR_TX_CHAR_LENGTH_MIN_NOT_SATISFIED',
	// Attempted to register a value when no char-length range is configured via milestones.
	TX_CHAR_LENGTH_UNDEFINED = 'ERR_TX_CHAR_LENGTH_UNDEFINED',
	// Attempted to claim a Hashed Timelock Contract (HTLC) that is intended for another recipient.
	TX_CLAIMANT_DOES_NOT_MATCH_BENEFICIARY = 'ERR_TX_CLAIMANT_DOES_NOT_MATCH_BENEFICIARY',
	// Failed to verify that the value satisfied the maximum count.
	TX_COUNT_MAX_NOT_SATISFIED = 'ERR_TX_COUNT_MAX_NOT_SATISFIED',
	// Failed to verify that the value satisfied the minimum count.
	TX_COUNT_MIN_NOT_SATISFIED = 'ERR_TX_COUNT_MIN_NOT_SATISFIED',
	// Attempted to register a value when no count range is configured via milestones.
	TX_COUNT_UNDEFINED = 'ERR_TX_COUNT_UNDEFINED',
	// Attempted to register a value that already exists.
	TX_DUPLICATED_VALUE = 'ERR_TX_DUPLICATED_VALUE',
	// Failed to verify the ed25519 public key of the validator that is required for additional authentication.
	TX_ED25519_PUBLIC_KEY_DOES_NOT_VERIFY = 'ERR_TX_ED25519_PUBLIC_KEY_DOES_NOT_VERIFY',
	// Failed to verify the ed25519 signature of the validator that is required for additional authentication.
	TX_ED25519_SIGNATURE_DOES_NOT_VERIFY = 'ERR_TX_ED25519_SIGNATURE_DOES_NOT_VERIFY',
	// Attempted to access an expired resource.
	TX_EXPIRED = 'ERR_TX_EXPIRED',
	// Attempted to perform an action that is forbidden. (Note that this is distinct from being unauthorised!)
	TX_FORBIDDEN_ACTION = 'ERR_TX_FORBIDDEN_ACTION',
	// Attempted to modify the ownership of a resource without being authorized to do so.
	TX_FORBIDDEN_OWNERSHIP_MODIFICATION = 'ERR_TX_FORBIDDEN_OWNERSHIP_MODIFICATION',
	// Attempted to register a value that is forbidden.
	TX_FORBIDDEN_VALUE = 'ERR_TX_FORBIDDEN_VALUE',
	// Failed to verify that the amount of gas satisfied the maximum.
	TX_GAS_MAX_NOT_SATISFIED = 'ERR_TX_GAS_MAX_NOT_SATISFIED',
	// Failed to verify that the amount of gas satisfied the minimum.
	TX_GAS_MIN_NOT_SATISFIED = 'ERR_TX_GAS_MIN_NOT_SATISFIED',
	// Failed to verify that the amount of gas satisfied any condition.
	TX_GAS_UNDEFINED = 'ERR_TX_GAS_UNDEFINED',
	// Failed to verify the hash.
	TX_HASH_DOES_NOT_VERIFY = 'ERR_TX_HASH_DOES_NOT_VERIFY',
	// Attempted to submit a blockNumber-constrained transaction with a blockNumber that is too far in the future.
	TX_BLOCK_NUMBER_IS_FUTURE = 'ERR_TX_BLOCK_NUMBER_IS_FUTURE',
	// Attempted to submit a blockNumber-constrained transaction with a blockNumber that is too far in the past.
	TX_BLOCK_NUMBER_IS_PAST = 'ERR_TX_BLOCK_NUMBER_IS_PAST',
	// Attempted to consume more tokens than the sender account is able to access.
	TX_INSUFFICIENT_BALANCE = 'ERR_TX_INSUFFICIENT_BALANCE',
	// Failed to verify the structural integrity of the arguments.
	TX_INVALID_ARGUMENTS = 'ERR_TX_INVALID_ARGUMENTS',
	// Attempted to register a value that is not included in the respective allow-list.
	TX_LIST_DOES_NOT_CONTAIN = 'ERR_TX_LIST_DOES_NOT_CONTAIN',
	// Attempted to register a value when no allow-list is configured via milestones.
	TX_LIST_UNDEFINED = 'ERR_TX_LIST_UNDEFINED',
	// Failed to verify the structural integrity of an address.
	TX_MALFORMED_ADDRESS = 'ERR_TX_MALFORMED_ADDRESS',
	// Failed to verify the structural integrity of a public key.
	TX_MALFORMED_PUBLIC_KEY = 'ERR_TX_MALFORMED_PUBLIC_KEY',
	// Failed to verify the structural integrity of an arbitrary value.
	TX_MALFORMED_VALUE = 'ERR_TX_MALFORMED_VALUE',
	// Attempted to access or perform an action involving a resource or value that does not exist.
	TX_NOT_FOUND = 'ERR_TX_NOT_FOUND',
	// Failed to verify the transaction as the the nonce is out of order.
	TX_OUT_OF_ORDER_NONCE = 'ERR_TX_OUT_OF_ORDER_NONCE',
	// Failed to verify that the value satisfied the maximum of the range.
	TX_RANGE_MAX_NOT_SATISFIED = 'ERR_TX_RANGE_MAX_NOT_SATISFIED',
	// Failed to verify that the value satisfied the minimum of the range.
	TX_RANGE_MIN_NOT_SATISFIED = 'ERR_TX_RANGE_MIN_NOT_SATISFIED',
	// Attempted to register a value when no range is configured via milestones.
	TX_RANGE_UNDEFINED = 'ERR_TX_RANGE_UNDEFINED',
	// Failed to verify the secp256k1 public key of the validator that is required for additional authentication.
	TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY = 'ERR_TX_SECP256K1_PUBLIC_KEY_DOES_NOT_VERIFY',
	// Failed to verify the secp256k1 signature of the validator that is required for additional authentication.
	TX_SECP256K1_SIGNATURE_DOES_NOT_VERIFY = 'ERR_TX_SECP256K1_SIGNATURE_DOES_NOT_VERIFY',
	// Failed to verify the signature of the transaction.
	TX_SIGNATURE_DOES_NOT_VERIFY = 'ERR_TX_SIGNATURE_DOES_NOT_VERIFY',
	// Attempted to access a resource without being authorized to do so.
	TX_UNAUTHORIZED_ACCESS = 'ERR_TX_UNAUTHORIZED_ACCESS',
	// Transaction recipient did match the sender when it actually should not.
	TX_UNEXPECTED_LOOPBACK_DIRECTION = 'ERR_TX_UNEXPECTED_LOOPBACK_DIRECTION',
	// Transaction recipient did not match the sender when it actually should.
	TX_UNEXPECTED_RELATIONAL_DIRECTION = 'ERR_TX_UNEXPECTED_RELATIONAL_DIRECTION',
	// Failed to verify the version of the transaction handler.
	TX_UNEXPECTED_TRANSACTION_HASH = 'ERR_TX_UNEXPECTED_TRANSACTION_HASH',
	// Failed to verify the version of the transaction.
	TX_UNEXPECTED_TRANSACTION_NETWORK = 'ERR_TX_UNEXPECTED_TRANSACTION_NETWORK',
	// Attempted to perform an action that is unknown.
	TX_UNKNOWN_ACTION = 'ERR_TX_UNKNOWN_ACTION',
	// Attempted to assign a permission that is unknown.
	TX_UNKNOWN_PERMISSION = 'ERR_TX_UNKNOWN_PERMISSION',
	// Attempted to assign a policy that is unknown.
	TX_UNKNOWN_POLICY = 'ERR_TX_UNKNOWN_POLICY',
	// Attempted to assign a strategy that is unknown.
	TX_UNKNOWN_STRATEGY = 'ERR_TX_UNKNOWN_STRATEGY',
	// Attempted to process a transaction that has an unknown handler version.
	TX_UNKNOWN_TRANSACTION_HANDLER_VERSION = 'ERR_TX_UNKNOWN_TRANSACTION_HANDLER_VERSION',
	// Attempted to process a transaction that has an unknown version.
	TX_UNKNOWN_TRANSACTION_VERSION = 'ERR_TX_UNKNOWN_TRANSACTION_VERSION',
	// Attempted to assign a value that is unknown.
	TX_UNKNOWN_VALUE = 'ERR_TX_UNKNOWN_VALUE',
	// Attempted to perform an action on a validator that is jailed when it should not have this status.
	TX_VALIDATOR_JAILED = 'ERR_TX_VALIDATOR_JAILED',
	// Attempted to perform an action on a validator that is not jailed when it should have this status.
	TX_VALIDATOR_NOT_JAILED = 'ERR_TX_VALIDATOR_NOT_JAILED',
	// Attempted to perform an action on a validator that is resigned when it should not have this status.
	TX_VALIDATOR_RESIGNED = 'ERR_TX_VALIDATOR_RESIGNED',
	// Attempted to perform an action on a validator that is tombstoned when it should not have this status.
	TX_VALIDATOR_TOMBSTONED = 'ERR_TX_VALIDATOR_TOMBSTONED',
}
