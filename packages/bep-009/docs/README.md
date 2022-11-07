@bearmint/bep-009 - v0.0.0

# @bearmint/bep-009 - v0.0.0

## Table of contents

### Namespaces

- [Paths](modules/Paths.md)
- [RLP](modules/RLP.md)

### Classes

- [NonNullableMap](classes/NonNullableMap.md)

### Type Aliases

- [Falsy](README.md#falsy)

### Variables

- [BN](README.md#bn)
- [algorithms](README.md#algorithms)
- [assert](README.md#assert)
- [dot](README.md#dot)
- [file](README.md#file)
- [semver](README.md#semver)
- [zeit](README.md#zeit)

### Functions

- [base64ToBytes](README.md#base64tobytes)
- [base64ToHex](README.md#base64tohex)
- [base64ToJson](README.md#base64tojson)
- [base64ToString](README.md#base64tostring)
- [blake2b](README.md#blake2b)
- [blake2s](README.md#blake2s)
- [blake3](README.md#blake3)
- [bytesConcat](README.md#bytesconcat)
- [bytesToBase64](README.md#bytestobase64)
- [bytesToHex](README.md#bytestohex)
- [bytesToHexMany](README.md#bytestohexmany)
- [bytesToJson](README.md#bytestojson)
- [bytesToNumber](README.md#bytestonumber)
- [bytesToString](README.md#bytestostring)
- [camelCase](README.md#camelcase)
- [camelCaseKeys](README.md#camelcasekeys)
- [canonicalizeJson](README.md#canonicalizejson)
- [dirname](README.md#dirname)
- [environmentPaths](README.md#environmentpaths)
- [glob](README.md#glob)
- [hexToBytes](README.md#hextobytes)
- [hexToJson](README.md#hextojson)
- [hexToNumber](README.md#hextonumber)
- [hexToString](README.md#hextostring)
- [inRange](README.md#inrange)
- [isBigInt](README.md#isbigint)
- [isBuffer](README.md#isbuffer)
- [isCryptography](README.md#iscryptography)
- [isFalsy](README.md#isfalsy)
- [isFunction](README.md#isfunction)
- [isHex](README.md#ishex)
- [isMap](README.md#ismap)
- [isNumber](README.md#isnumber)
- [isPrime](README.md#isprime)
- [isSameBytes](README.md#issamebytes)
- [isSet](README.md#isset)
- [isString](README.md#isstring)
- [isTruthy](README.md#istruthy)
- [isURL](README.md#isurl)
- [isUint8Array](README.md#isuint8array)
- [jsonToBase64](README.md#jsontobase64)
- [jsonToBytes](README.md#jsontobytes)
- [jsonToHex](README.md#jsontohex)
- [keccak\_224](README.md#keccak_224)
- [keccak\_256](README.md#keccak_256)
- [keccak\_384](README.md#keccak_384)
- [keccak\_512](README.md#keccak_512)
- [numberToHex](README.md#numbertohex)
- [readPackageJson](README.md#readpackagejson)
- [regexMatch](README.md#regexmatch)
- [regexMismatch](README.md#regexmismatch)
- [regexReplace](README.md#regexreplace)
- [ripemd160](README.md#ripemd160)
- [sha1](README.md#sha1)
- [sha256](README.md#sha256)
- [sha384](README.md#sha384)
- [sha3\_224](README.md#sha3_224)
- [sha3\_256](README.md#sha3_256)
- [sha3\_384](README.md#sha3_384)
- [sha3\_512](README.md#sha3_512)
- [sha512](README.md#sha512)
- [shake128](README.md#shake128)
- [shake256](README.md#shake256)
- [snakeCase](README.md#snakecase)
- [stringToBytes](README.md#stringtobytes)
- [stringToHex](README.md#stringtohex)
- [uniq](README.md#uniq)
- [uniqBy](README.md#uniqby)
- [upperSnakeCase](README.md#uppersnakecase)

## Type Aliases

### Falsy

Ƭ **Falsy**: ``false`` \| ``""`` \| ``0`` \| ``null`` \| `undefined` \| `0n`

#### Defined in

[packages/bep-009/source/is.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L39)

## Variables

### BN

• `Const` **BN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `difference` | (`a`: `bigint`, `b`: `bigint`) => `bigint` |
| `isBetween` | (`value`: `bigint`, `min`: `bigint`, `max`: `bigint`) => `boolean` |
| `isForbidden` | (`value`: `bigint`) => `boolean` |
| `absolute` | (`value`: `bigint`) => `bigint` |
| `comparedTo` | (`a`: `bigint`, `b`: `bigint`) => ``0`` \| ``1`` \| ``-1`` |
| `sum` | (`values`: (`string` \| `number` \| `bigint`)[]) => `bigint` |
| `sumBy` | (`values`: `object`[], `property`: `string`) => `bigint` |
| `toBytes` | (`value`: `bigint`) => `Buffer` |
| `toFixed` | (`value`: `bigint`) => `string` |
| `toJSON` | (`value`: `bigint`) => `string` |
| `toString` | (`value`: `bigint`, `base`: `number`) => `string` |

#### Defined in

[packages/bep-009/source/big-number.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/big-number.ts#L38)

___

### algorithms

• `Const` **algorithms**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blake2b` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `blake2s` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `blake3` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `keccak_224` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `keccak_256` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `keccak_384` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `keccak_512` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `ripemd160` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha1` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha256` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha384` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha3_224` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha3_256` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha3_384` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha3_512` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `sha512` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `shake128` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |
| `shake256` | `Moized`<(`data`: `string` \| `Uint8Array`) => `Uint8Array`, `Partial`<{ `isDeepEqual`: `boolean` ; `isPromise`: `boolean` ; `isReact`: `boolean` ; `isSerialized`: `boolean` ; `isShallowEqual`: `boolean` ; `matchesArg`: `IsEqual` ; `matchesKey`: `IsMatchingKey` ; `maxAge`: `number` ; `maxArgs`: `number` ; `maxSize`: `number` ; `onCacheAdd`: `OnCacheOperation` ; `onCacheChange`: `OnCacheOperation` ; `onCacheHit`: `OnCacheOperation` ; `onExpire`: `OnExpire` ; `profileName`: `string` ; `serializer`: `Serialize` ; `transformArgs`: `TransformKey` ; `updateCacheForKey`: `UpdateCacheForKey` ; `updateExpire`: `boolean`  }\> & { `isDeepEqual`: `boolean` = true; `maxAge`: `number` = 5000 }\> |

#### Defined in

[packages/bep-009/source/hash.ts:50](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L50)

___

### assert

• `Const` **assert**: `Assert`

#### Defined in

[packages/bep-009/source/assert.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/assert.ts#L38)

___

### dot

• `Const` **dot**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `forget` | (`object`: `object`, `path`: `string`) => `void` |
| `get` | <T\>(`object`: `object`, `path`: `string`, `defaultValue?`: `T`) => `T` |
| `has` | (`object`: `object`, `path`: `string`) => `boolean` |
| `missing` | (`object`: `object`, `path`: `string`) => `boolean` |
| `set` | (`object`: `object`, `path`: `string`, `value`: `unknown`) => `void` |

#### Defined in

[packages/bep-009/source/dot-property.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/dot-property.ts#L20)

___

### file

• `Const` **file**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ensure` | (`paths`: `string` \| `string`[]) => `void` |
| `exists` | (`path`: `string`) => `boolean` |
| `read` | (`path`: `string`) => `string` |
| `readJson` | <T\>(`path`: `string`) => `undefined` \| `T` |
| `readJsonSafe` | <T\>(`path`: `string`) => `T` |
| `remove` | (`path`: `string`) => `void` |
| `write` | (`path`: `string`, `data`: `string`) => `void` |
| `writeJson` | (`path`: `string`, `data`: `object`) => `void` |

#### Defined in

[packages/bep-009/source/file.ts:79](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/file.ts#L79)

___

### semver

• `Const` **semver**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `badRange` | (`range`: `string`) => `boolean` |
| `dissatisfies` | (`version`: `string`, `range`: `string`) => `boolean` |
| `eq` | (`a`: `string`, `b`: `string`) => `boolean` |
| `gt` | (`a`: `string`, `b`: `string`) => `boolean` |
| `gte` | (`a`: `string`, `b`: `string`) => `boolean` |
| `lt` | (`a`: `string`, `b`: `string`) => `boolean` |
| `lte` | (`a`: `string`, `b`: `string`) => `boolean` |
| `satisfies` | (`version`: `string`, `range`: `string`) => `boolean` |
| `toNumber` | (`version`: `string`) => `number` |
| `valid` | (`version`: `string`) => `boolean` |

#### Defined in

[packages/bep-009/source/semver.ts:83](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/semver.ts#L83)

___

### zeit

• `Const` **zeit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `diffInHours` | (`a`: `number`, `b?`: `number`) => `number` |
| `diffInMinutes` | (`a`: `number`, `b?`: `number`) => `number` |
| `diffInSeconds` | (`a`: `number`, `b?`: `number`) => `number` |
| `isFuture` | (`value`: `number`) => `boolean` |
| `isPast` | (`value`: `number`) => `boolean` |
| `toUnix` | () => `number` |

#### Defined in

[packages/bep-009/source/zeit.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/zeit.ts#L21)

## Functions

### base64ToBytes

▸ **base64ToBytes**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/base64.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/base64.ts#L25)

___

### base64ToHex

▸ **base64ToHex**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/base64.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/base64.ts#L29)

___

### base64ToJson

▸ **base64ToJson**<`T`\>(`value`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`T`

#### Defined in

[packages/bep-009/source/base64.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/base64.ts#L21)

___

### base64ToString

▸ **base64ToString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/base64.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/base64.ts#L33)

___

### blake2b

▸ **blake2b**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L31)

___

### blake2s

▸ **blake2s**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:32](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L32)

___

### blake3

▸ **blake3**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L33)

___

### bytesConcat

▸ **bytesConcat**(`values`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Uint8Array`[] |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/bytes.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/bytes.ts#L43)

___

### bytesToBase64

▸ **bytesToBase64**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/bytes.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/bytes.ts#L35)

___

### bytesToHex

▸ **bytesToHex**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/bytes.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/bytes.ts#L23)

___

### bytesToHexMany

▸ **bytesToHexMany**(`values`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Uint8Array`[] |

#### Returns

`string`[]

#### Defined in

[packages/bep-009/source/bytes.ts:27](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/bytes.ts#L27)

___

### bytesToJson

▸ **bytesToJson**<`T`\>(`value`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`T`

#### Defined in

[packages/bep-009/source/bytes.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/bytes.ts#L39)

___

### bytesToNumber

▸ **bytesToNumber**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`number`

#### Defined in

[packages/bep-009/source/bytes.ts:31](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/bytes.ts#L31)

___

### bytesToString

▸ **bytesToString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/bytes.ts:53](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/bytes.ts#L53)

___

### camelCase

▸ **camelCase**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/camel-case.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/camel-case.ts#L21)

___

### camelCaseKeys

▸ **camelCaseKeys**(`object`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `object` |

#### Returns

`object`

#### Defined in

[packages/bep-009/source/camel-case.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/camel-case.ts#L25)

___

### canonicalizeJson

▸ **canonicalizeJson**<`T`\>(`input`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `object` \| `JsonValue` |

#### Returns

`T`

#### Defined in

[packages/bep-009/source/json.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/json.ts#L37)

___

### dirname

▸ **dirname**(`path?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/directory.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/directory.ts#L20)

___

### environmentPaths

▸ **environmentPaths**(`name`, `suffix?`): `Paths`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `suffix?` | `string` |

#### Returns

`Paths`

#### Defined in

[packages/bep-009/source/environment-paths.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/environment-paths.ts#L21)

___

### glob

▸ **glob**(`inputs`, `patterns`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | `string` \| readonly `string`[] |
| `patterns` | `string` \| readonly `string`[] |

#### Returns

`string`[]

#### Defined in

[packages/bep-009/source/glob.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/glob.ts#L20)

___

### hexToBytes

▸ **hexToBytes**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hex.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hex.ts#L25)

___

### hexToJson

▸ **hexToJson**<`T`\>(`value`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`T`

#### Defined in

[packages/bep-009/source/hex.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hex.ts#L33)

___

### hexToNumber

▸ **hexToNumber**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`number`

#### Defined in

[packages/bep-009/source/hex.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hex.ts#L21)

___

### hexToString

▸ **hexToString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/hex.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hex.ts#L37)

___

### inRange

▸ **inRange**(`actual`, `min`, `max`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/numbers.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/numbers.ts#L18)

___

### isBigInt

▸ **isBigInt**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:69](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L69)

___

### isBuffer

▸ **isBuffer**(`value?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `Object` |
| `value.type` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L41)

___

### isCryptography

▸ **isCryptography**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Object` |
| `value.verify` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:73](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L73)

___

### isFalsy

▸ **isFalsy**(`value`): value is Falsy

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Falsy

#### Defined in

[packages/bep-009/source/is.ts:93](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L93)

___

### isFunction

▸ **isFunction**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:89](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L89)

___

### isHex

▸ **isHex**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:123](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L123)

___

### isMap

▸ **isMap**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:61](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L61)

___

### isNumber

▸ **isNumber**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:81](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L81)

___

### isPrime

▸ **isPrime**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/numbers.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/numbers.ts#L22)

___

### isSameBytes

▸ **isSameBytes**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Uint8Array` |
| `b` | `Uint8Array` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:131](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L131)

___

### isSet

▸ **isSet**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:65](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L65)

___

### isString

▸ **isString**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:85](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L85)

___

### isTruthy

▸ **isTruthy**<`T`\>(`value`): value is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Falsy`](README.md#falsy) \| `T` |

#### Returns

value is T

#### Defined in

[packages/bep-009/source/is.ts:105](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L105)

___

### isURL

▸ **isURL**(`value?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:109](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L109)

___

### isUint8Array

▸ **isUint8Array**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/is.ts:57](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/is.ts#L57)

___

### jsonToBase64

▸ **jsonToBase64**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` \| `JsonValue` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/json.ts:33](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/json.ts#L33)

___

### jsonToBytes

▸ **jsonToBytes**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` \| `JsonValue` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/json.ts:25](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/json.ts#L25)

___

### jsonToHex

▸ **jsonToHex**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` \| `JsonValue` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/json.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/json.ts#L29)

___

### keccak\_224

▸ **keccak_224**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L34)

___

### keccak\_256

▸ **keccak_256**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:35](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L35)

___

### keccak\_384

▸ **keccak_384**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:36](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L36)

___

### keccak\_512

▸ **keccak_512**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:37](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L37)

___

### numberToHex

▸ **numberToHex**(`value`, `padding?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `undefined` |
| `padding` | `number` | `2` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/number.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/number.ts#L18)

___

### readPackageJson

▸ **readPackageJson**(`path`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `string` |

#### Defined in

[packages/bep-009/source/package.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/package.ts#L24)

___

### regexMatch

▸ **regexMatch**(`value`, `pattern`, `flags?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `pattern` | `string` \| `RegExp` |
| `flags?` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/regex.ts:34](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/regex.ts#L34)

___

### regexMismatch

▸ **regexMismatch**(`value`, `pattern`, `flags?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `pattern` | `string` \| `RegExp` |
| `flags?` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/bep-009/source/regex.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/regex.ts#L39)

___

### regexReplace

▸ **regexReplace**(`value`, `search`, `replace`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `search` | `RegExp` |
| `replace` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/regex.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/regex.ts#L22)

___

### ripemd160

▸ **ripemd160**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:38](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L38)

___

### sha1

▸ **sha1**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:39](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L39)

___

### sha256

▸ **sha256**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:40](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L40)

___

### sha384

▸ **sha384**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:45](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L45)

___

### sha3\_224

▸ **sha3_224**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:41](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L41)

___

### sha3\_256

▸ **sha3_256**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:42](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L42)

___

### sha3\_384

▸ **sha3_384**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:43](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L43)

___

### sha3\_512

▸ **sha3_512**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:44](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L44)

___

### sha512

▸ **sha512**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:46](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L46)

___

### shake128

▸ **shake128**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:47](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L47)

___

### shake256

▸ **shake256**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Uint8Array` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/hash.ts:48](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/hash.ts#L48)

___

### snakeCase

▸ **snakeCase**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/snake-case.ts:20](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/snake-case.ts#L20)

___

### stringToBytes

▸ **stringToBytes**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Uint8Array`

#### Defined in

[packages/bep-009/source/string.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/string.ts#L22)

___

### stringToHex

▸ **stringToHex**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/string.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/string.ts#L26)

___

### uniq

▸ **uniq**<`T`\>(`items`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `T`[] |

#### Returns

`T`[]

#### Defined in

[packages/bep-009/source/uniq.ts:18](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/uniq.ts#L18)

___

### uniqBy

▸ **uniqBy**<`T`\>(`array`, `iteratee`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `iteratee` | `CallableFunction` |

#### Returns

`T`[]

#### Defined in

[packages/bep-009/source/uniq.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/uniq.ts#L22)

___

### upperSnakeCase

▸ **upperSnakeCase**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[packages/bep-009/source/snake-case.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-009/source/snake-case.ts#L24)
