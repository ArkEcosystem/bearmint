[@bearmint/bep-013 - v0.0.0](../README.md) / TendermintConfiguration

# Interface: TendermintConfiguration

## Table of contents

### Properties

- [abci](TendermintConfiguration.md#abci)
- [consensus](TendermintConfiguration.md#consensus)
- [db\_backend](TendermintConfiguration.md#db_backend)
- [db\_dir](TendermintConfiguration.md#db_dir)
- [fast\_sync](TendermintConfiguration.md#fast_sync)
- [fastsync](TendermintConfiguration.md#fastsync)
- [filter\_peers](TendermintConfiguration.md#filter_peers)
- [genesis\_file](TendermintConfiguration.md#genesis_file)
- [instrumentation](TendermintConfiguration.md#instrumentation)
- [log\_format](TendermintConfiguration.md#log_format)
- [log\_level](TendermintConfiguration.md#log_level)
- [mempool](TendermintConfiguration.md#mempool)
- [moniker](TendermintConfiguration.md#moniker)
- [node\_key\_file](TendermintConfiguration.md#node_key_file)
- [p2p](TendermintConfiguration.md#p2p)
- [priv\_validator\_key\_file](TendermintConfiguration.md#priv_validator_key_file)
- [priv\_validator\_laddr](TendermintConfiguration.md#priv_validator_laddr)
- [priv\_validator\_state\_file](TendermintConfiguration.md#priv_validator_state_file)
- [proxy\_app](TendermintConfiguration.md#proxy_app)
- [rpc](TendermintConfiguration.md#rpc)
- [statesync](TendermintConfiguration.md#statesync)
- [tx\_index](TendermintConfiguration.md#tx_index)

## Properties

### abci

• **abci**: `string`

#### Defined in

[packages/bep-013/source/config.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L39)

___

### consensus

• **consensus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create_empty_blocks` | `boolean` |
| `create_empty_blocks_interval` | `string` |
| `double_sign_check_height` | `number` |
| `peer_gossip_sleep_duration` | `string` |
| `peer_query_maj23_sleep_duration` | `string` |
| `skip_timeout_commit` | `boolean` |
| `timeout_commit` | `string` |
| `timeout_precommit` | `string` |
| `timeout_precommit_delta` | `string` |
| `timeout_prevote` | `string` |
| `timeout_prevote_delta` | `string` |
| `timeout_propose` | `string` |
| `timeout_propose_delta` | `string` |
| `wal_file` | `string` |

#### Defined in

[packages/bep-013/source/config.ts:113](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L113)

___

### db\_backend

• **db\_backend**: `string`

#### Defined in

[packages/bep-013/source/config.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L30)

___

### db\_dir

• **db\_dir**: `string`

#### Defined in

[packages/bep-013/source/config.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L31)

___

### fast\_sync

• **fast\_sync**: `boolean`

#### Defined in

[packages/bep-013/source/config.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L29)

___

### fastsync

• **fastsync**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Defined in

[packages/bep-013/source/config.ts:110](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L110)

___

### filter\_peers

• **filter\_peers**: `boolean`

#### Defined in

[packages/bep-013/source/config.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L40)

___

### genesis\_file

• **genesis\_file**: `string`

#### Defined in

[packages/bep-013/source/config.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L34)

___

### instrumentation

• **instrumentation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `max_open_connections` | `number` |
| `namespace` | `string` |
| `prometheus` | `boolean` |
| `prometheus_listen_addr` | `string` |

#### Defined in

[packages/bep-013/source/config.ts:133](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L133)

___

### log\_format

• **log\_format**: `string`

#### Defined in

[packages/bep-013/source/config.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L33)

___

### log\_level

• **log\_level**: `string`

#### Defined in

[packages/bep-013/source/config.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L32)

___

### mempool

• **mempool**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `broadcast` | `boolean` |
| `cache_size` | `number` |
| `keep-invalid-txs-in-cache` | `boolean` |
| `max_batch_bytes` | `number` |
| `max_tx_bytes` | `number` |
| `max_txs_bytes` | `number` |
| `recheck` | `boolean` |
| `size` | `number` |
| `ttl-duration` | `string` |
| `ttl-num-blocks` | `number` |
| `version` | `string` |
| `wal_dir` | `string` |

#### Defined in

[packages/bep-013/source/config.ts:85](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L85)

___

### moniker

• **moniker**: `string`

#### Defined in

[packages/bep-013/source/config.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L28)

___

### node\_key\_file

• **node\_key\_file**: `string`

#### Defined in

[packages/bep-013/source/config.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L38)

___

### p2p

• **p2p**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `addr_book_file` | `string` |
| `addr_book_strict` | `boolean` |
| `allow_duplicate_ip` | `boolean` |
| `dial_timeout` | `string` |
| `external_address` | `string` |
| `flush_throttle_timeout` | `string` |
| `handshake_timeout` | `string` |
| `laddr` | `string` |
| `max_num_inbound_peers` | `number` |
| `max_num_outbound_peers` | `number` |
| `max_packet_msg_payload_size` | `number` |
| `persistent_peers` | `string` |
| `persistent_peers_max_dial_period` | `string` |
| `pex` | `boolean` |
| `private_peer_ids` | `string` |
| `recv_rate` | `number` |
| `seed_mode` | `boolean` |
| `seeds` | `string` |
| `send_rate` | `number` |
| `unconditional_peer_ids` | `string` |
| `upnp` | `boolean` |

#### Defined in

[packages/bep-013/source/config.ts:62](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L62)

___

### priv\_validator\_key\_file

• **priv\_validator\_key\_file**: `string`

#### Defined in

[packages/bep-013/source/config.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L35)

___

### priv\_validator\_laddr

• **priv\_validator\_laddr**: `string`

#### Defined in

[packages/bep-013/source/config.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L37)

___

### priv\_validator\_state\_file

• **priv\_validator\_state\_file**: `string`

#### Defined in

[packages/bep-013/source/config.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L36)

___

### proxy\_app

• **proxy\_app**: `string`

#### Defined in

[packages/bep-013/source/config.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L27)

___

### rpc

• **rpc**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cors_allowed_headers` | `string`[] |
| `cors_allowed_methods` | `string`[] |
| `cors_allowed_origins` | `string`[] |
| `experimental_close_on_slow_client` | `boolean` |
| `experimental_subscription_buffer_size` | `number` |
| `experimental_websocket_write_buffer_size` | `number` |
| `grpc_laddr` | `string` |
| `grpc_max_open_connections` | `number` |
| `laddr` | `string` |
| `max_body_bytes` | `number` |
| `max_header_bytes` | `number` |
| `max_open_connections` | `number` |
| `max_subscription_clients` | `number` |
| `max_subscriptions_per_client` | `number` |
| `pprof_laddr` | `string` |
| `timeout_broadcast_tx_commit` | `string` |
| `tls_cert_file` | `string` |
| `tls_key_file` | `string` |
| `unsafe` | `boolean` |

#### Defined in

[packages/bep-013/source/config.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L41)

___

### statesync

• **statesync**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chunk_fetchers` | `string` |
| `chunk_request_timeout` | `string` |
| `discovery_time` | `string` |
| `enable` | `boolean` |
| `rpc_servers` | `string` |
| `temp_dir` | `string` |
| `trust_hash` | `string` |
| `trust_height` | `number` |
| `trust_period` | `string` |

#### Defined in

[packages/bep-013/source/config.ts:99](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L99)

___

### tx\_index

• **tx\_index**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `indexer` | `string` |
| `psql-conn` | `string` |

#### Defined in

[packages/bep-013/source/config.ts:129](https://github.com/bearmint/bearmint/blob/main/packages/bep-013/source/config.ts#L129)
