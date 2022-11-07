@bearmint/bep-091 - v0.0.0

# @bearmint/bep-091 - v0.0.0

## Table of contents

### Interfaces

- [JsonRpcOptions](interfaces/JsonRpcOptions.md)
- [RequestParameters](interfaces/RequestParameters.md)
- [Response](interfaces/Response.md)
- [ResponseError](interfaces/ResponseError.md)

### Type Aliases

- [JsonRpcMethodList](README.md#jsonrpcmethodlist)

### Variables

- [DEFAULT\_OPTIONS](README.md#default_options)
- [HEADERS](README.md#headers)

### Functions

- [injectRawRequest](README.md#injectrawrequest)
- [injectRequest](README.md#injectrequest)
- [makeServer](README.md#makeserver)
- [writeResponseWithError](README.md#writeresponsewitherror)
- [writeResponseWithStatusCode](README.md#writeresponsewithstatuscode)

## Type Aliases

### JsonRpcMethodList

Ƭ **JsonRpcMethodList**: `Record`<`string`, { `execute`: `FunctionReturning`<`Promise`<`unknown`\>\> ; `schema?`: `SchemaObject`  }\>

#### Defined in

[types.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/types.ts#L44)

## Variables

### DEFAULT\_OPTIONS

• `Const` **DEFAULT\_OPTIONS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `maxBodySize` | `number` |
| `timeout` | `number` |

#### Defined in

[constants.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/constants.ts#L21)

___

### HEADERS

• `Const` **HEADERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Accept` | `string` |
| `Content-Type` | `string` |

#### Defined in

[constants.ts:19](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/constants.ts#L19)

## Functions

### injectRawRequest

▸ **injectRawRequest**(`body`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[inject.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/inject.ts#L39)

___

### injectRequest

▸ **injectRequest**(`method`, `parameters?`, `headers?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `parameters?` | `object` |
| `headers?` | `HeadersInit` |

#### Returns

`Promise`<`any`\>

#### Defined in

[inject.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/inject.ts#L20)

___

### makeServer

▸ **makeServer**(`methods`, `options?`): `Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `methods` | [`JsonRpcMethodList`](README.md#jsonrpcmethodlist) | `undefined` |
| `options` | [`JsonRpcOptions`](interfaces/JsonRpcOptions.md) | `DEFAULT_OPTIONS` |

#### Returns

`Promise`<`Server`<typeof `IncomingMessage`, typeof `ServerResponse`\>\>

#### Defined in

[server.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/server.ts#L40)

___

### writeResponseWithError

▸ **writeResponseWithError**(`id`, `code`, `response`, `error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | ``null`` \| `string` |
| `code` | `number` |
| `response` | `ServerResponse`<`IncomingMessage`\> |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

[response.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/response.ts#L28)

___

### writeResponseWithStatusCode

▸ **writeResponseWithStatusCode**(`response`, `code`, `body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `ServerResponse`<`IncomingMessage`\> |
| `code` | `number` |
| `body` | `object` |

#### Returns

`void`

#### Defined in

[response.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-091/source/response.ts#L22)
