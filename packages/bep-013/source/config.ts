/* eslint-disable @typescript-eslint/naming-convention */
export interface BearmintConfiguration {
	p2p: {
		blacklist_by_addr?: string | undefined
		blacklist_by_id?: string | undefined
	}
}

export interface TendermintConfiguration {
	proxy_app: string
	moniker: string
	fast_sync: boolean
	db_backend: string
	db_dir: string
	log_level: string
	log_format: string
	genesis_file: string
	priv_validator_key_file: string
	priv_validator_state_file: string
	priv_validator_laddr: string
	node_key_file: string
	abci: string
	filter_peers: boolean
	rpc: {
		laddr: string
		cors_allowed_origins: string[]
		cors_allowed_methods: string[]
		cors_allowed_headers: string[]
		grpc_laddr: string
		grpc_max_open_connections: number
		unsafe: boolean
		max_open_connections: number
		max_subscription_clients: number
		max_subscriptions_per_client: number
		experimental_subscription_buffer_size: number
		experimental_websocket_write_buffer_size: number
		experimental_close_on_slow_client: boolean
		timeout_broadcast_tx_commit: string
		max_body_bytes: number
		max_header_bytes: number
		tls_cert_file: string
		tls_key_file: string
		pprof_laddr: string
	}
	p2p: {
		laddr: string
		external_address: string
		seeds: string
		persistent_peers: string
		upnp: boolean
		addr_book_file: string
		addr_book_strict: boolean
		max_num_inbound_peers: number
		max_num_outbound_peers: number
		unconditional_peer_ids: string
		persistent_peers_max_dial_period: string
		flush_throttle_timeout: string
		max_packet_msg_payload_size: number
		send_rate: number
		recv_rate: number
		pex: boolean
		seed_mode: boolean
		private_peer_ids: string
		allow_duplicate_ip: boolean
		handshake_timeout: string
		dial_timeout: string
	}
	mempool: {
		version: string
		recheck: boolean
		broadcast: boolean
		wal_dir: string
		size: number
		max_txs_bytes: number
		cache_size: number
		'keep-invalid-txs-in-cache': boolean
		max_tx_bytes: number
		max_batch_bytes: number
		'ttl-duration': string
		'ttl-num-blocks': number
	}
	statesync: {
		enable: boolean
		rpc_servers: string
		trust_height: number
		trust_hash: string
		trust_period: string
		discovery_time: string
		temp_dir: string
		chunk_request_timeout: string
		chunk_fetchers: string
	}
	fastsync: {
		version: string
	}
	consensus: {
		wal_file: string
		timeout_propose: string
		timeout_propose_delta: string
		timeout_prevote: string
		timeout_prevote_delta: string
		timeout_precommit: string
		timeout_precommit_delta: string
		timeout_commit: string
		double_sign_check_height: number
		skip_timeout_commit: boolean
		create_empty_blocks: boolean
		create_empty_blocks_interval: string
		peer_gossip_sleep_duration: string
		peer_query_maj23_sleep_duration: string
	}
	tx_index: {
		indexer: string
		'psql-conn': string
	}
	instrumentation: {
		prometheus: boolean
		prometheus_listen_addr: string
		max_open_connections: number
		namespace: string
	}
}
