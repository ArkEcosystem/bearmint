@bearmint/bep-099 - v0.0.0

# @bearmint/bep-099 - v0.0.0

## Table of contents

### Enumerations

- [BEP126UserPermission](enums/BEP126UserPermission.md)
- [BEP126UserRole](enums/BEP126UserRole.md)

### Interfaces

- [Options](interfaces/Options.md)

### Variables

- [BUILDERS](README.md#builders)
- [FAKERS](README.md#fakers)

### Functions

- [BEP104](README.md#bep104)
- [BEP104Faker](README.md#bep104faker)
- [BEP110](README.md#bep110)
- [BEP110Faker](README.md#bep110faker)
- [BEP122](README.md#bep122)
- [BEP122Faker](README.md#bep122faker)
- [BEP126](README.md#bep126)
- [BEP126Faker](README.md#bep126faker)
- [BEP127](README.md#bep127)
- [BEP127Faker](README.md#bep127faker)
- [BEP128](README.md#bep128)
- [BEP128Faker](README.md#bep128faker)
- [BEP129](README.md#bep129)
- [BEP129Faker](README.md#bep129faker)
- [BEP130](README.md#bep130)
- [BEP130Faker](README.md#bep130faker)
- [BEP131](README.md#bep131)
- [BEP131Faker](README.md#bep131faker)
- [BEP132](README.md#bep132)
- [BEP132Faker](README.md#bep132faker)
- [BEP133](README.md#bep133)
- [BEP133Faker](README.md#bep133faker)
- [BEP134](README.md#bep134)
- [BEP134Faker](README.md#bep134faker)
- [BEP135](README.md#bep135)
- [BEP135Faker](README.md#bep135faker)
- [BEP136](README.md#bep136)
- [BEP136Faker](README.md#bep136faker)
- [BEP137](README.md#bep137)
- [BEP137Faker](README.md#bep137faker)
- [BEP55](README.md#bep55)
- [BEP55Faker](README.md#bep55faker)
- [BEP56](README.md#bep56)
- [BEP56Faker](README.md#bep56faker)
- [BEP57](README.md#bep57)
- [BEP57Faker](README.md#bep57faker)
- [BEP58](README.md#bep58)
- [BEP58Faker](README.md#bep58faker)
- [BEP59](README.md#bep59)
- [BEP59Faker](README.md#bep59faker)
- [BEP64](README.md#bep64)
- [BEP64Faker](README.md#bep64faker)
- [BEP65](README.md#bep65)
- [BEP65Faker](README.md#bep65faker)
- [BEP66](README.md#bep66)
- [BEP66Faker](README.md#bep66faker)
- [BEP67](README.md#bep67)
- [BEP67Faker](README.md#bep67faker)
- [BEP68](README.md#bep68)
- [BEP68Faker](README.md#bep68faker)
- [makeAccount](README.md#makeaccount)
- [makeInstance](README.md#makeinstance)
- [makeStockBuilderFactory](README.md#makestockbuilderfactory)
- [makeStockFakerFactory](README.md#makestockfakerfactory)
- [signTx](README.md#signtx)
- [wrapTxBuilder](README.md#wraptxbuilder)
- [wrapTxMsgFaker](README.md#wraptxmsgfaker)

## Variables

### BUILDERS

• `Const` **BUILDERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `@bearmint/bep-055` | () => `TxBuilder`<`BEP55Msg`\> |
| `@bearmint/bep-056` | () => `TxBuilder`<`BEP56Msg`\> |
| `@bearmint/bep-057` | () => `TxBuilder`<`BEP57Msg`\> |
| `@bearmint/bep-058` | () => `TxBuilder`<`BEP58Msg`\> |
| `@bearmint/bep-059` | () => `TxBuilder`<`BEP59Msg`\> |
| `@bearmint/bep-064` | () => `TxBuilder`<`BEP64Msg`\> |
| `@bearmint/bep-065` | () => `TxBuilder`<`BEP65Msg`\> |
| `@bearmint/bep-066` | () => `TxBuilder`<`BEP66Msg`\> |
| `@bearmint/bep-067` | () => `TxBuilder`<`BEP67Msg`\> |
| `@bearmint/bep-068` | () => `TxBuilder`<`BEP68Msg`\> |
| `@bearmint/bep-104` | () => `TxBuilder`<`BEP104Msg`\> |
| `@bearmint/bep-110` | () => `TxBuilder`<`BEP110Msg`\> |
| `@bearmint/bep-122` | () => `TxBuilder`<`BEP122Msg`\> |
| `@bearmint/bep-126` | () => `TxBuilder`<`BEP126Msg`\> |
| `@bearmint/bep-127` | () => `TxBuilder`<`BEP127Msg`\> |
| `@bearmint/bep-128` | () => `TxBuilder`<`BEP128Msg`\> |
| `@bearmint/bep-129` | () => `TxBuilder`<`BEP129Msg`\> |
| `@bearmint/bep-130` | () => `TxBuilder`<`BEP130Msg`\> |
| `@bearmint/bep-131` | () => `TxBuilder`<`BEP131Msg`\> |
| `@bearmint/bep-132` | () => `TxBuilder`<`BEP132Msg`\> |
| `@bearmint/bep-133` | () => `TxBuilder`<`BEP133Msg`\> |
| `@bearmint/bep-134` | () => `TxBuilder`<`BEP134Msg`\> |
| `@bearmint/bep-135` | () => `TxBuilder`<`BEP135Msg`\> |
| `@bearmint/bep-136` | () => `TxBuilder`<`BEP136Msg`\> |
| `@bearmint/bep-137` | () => `TxBuilder`<`BEP137Msg`\> |

#### Defined in

[builder/factory.ts:58](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/factory.ts#L58)

___

### FAKERS

• `Const` **FAKERS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `@bearmint/bep-055` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP55Msg`, `object`\> |
| `@bearmint/bep-056` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP56Msg`, `object`\> |
| `@bearmint/bep-057` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP57Msg`, `object`\> |
| `@bearmint/bep-058` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP58Msg`, `object`\> |
| `@bearmint/bep-059` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP59Msg`, `object`\> |
| `@bearmint/bep-064` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP64Msg`, `object`\> |
| `@bearmint/bep-065` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP65Msg`, `object`\> |
| `@bearmint/bep-066` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP66Msg`, `object`\> |
| `@bearmint/bep-067` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP67Msg`, `object`\> |
| `@bearmint/bep-068` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP68Msg`, `object`\> |
| `@bearmint/bep-104` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP104Msg`, `object`\> |
| `@bearmint/bep-110` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP110Msg`, `object`\> |
| `@bearmint/bep-122` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP122Msg`, `object`\> |
| `@bearmint/bep-126` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP126Msg`, `object`\> |
| `@bearmint/bep-127` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP127Msg`, `object`\> |
| `@bearmint/bep-128` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP128Msg`, `object`\> |
| `@bearmint/bep-129` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP129Msg`, `object`\> |
| `@bearmint/bep-130` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP130Msg`, `object`\> |
| `@bearmint/bep-131` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP131Msg`, `object`\> |
| `@bearmint/bep-132` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP132Msg`, `object`\> |
| `@bearmint/bep-133` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP133Msg`, `object`\> |
| `@bearmint/bep-134` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP134Msg`, `object`\> |
| `@bearmint/bep-135` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP135Msg`, `object`\> |
| `@bearmint/bep-136` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP136Msg`, `object`\> |
| `@bearmint/bep-137` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP137Msg`, `object`\> |

#### Defined in

[faker/factory.ts:59](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/factory.ts#L59)

## Functions

### BEP104

▸ **BEP104**(): `TxMsgFaker`<`BEP104Msg`\>

#### Returns

`TxMsgFaker`<`BEP104Msg`\>

#### Defined in

[faker/bep-104.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-104.ts#L23)

___

### BEP104Faker

▸ **BEP104Faker**(): `TxBuilder`<`BEP104Msg`\>

#### Returns

`TxBuilder`<`BEP104Msg`\>

#### Defined in

[builder/bep-104.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-104.ts#L23)

___

### BEP110

▸ **BEP110**(): `TxMsgFaker`<`BEP110Msg`\>

#### Returns

`TxMsgFaker`<`BEP110Msg`\>

#### Defined in

[faker/bep-110.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-110.ts#L23)

___

### BEP110Faker

▸ **BEP110Faker**(): `TxBuilder`<`BEP110Msg`\>

#### Returns

`TxBuilder`<`BEP110Msg`\>

#### Defined in

[builder/bep-110.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-110.ts#L23)

___

### BEP122

▸ **BEP122**(`__namedParameters`): `TxMsgFaker`<`BEP122Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Options`](interfaces/Options.md) |

#### Returns

`TxMsgFaker`<`BEP122Msg`\>

#### Defined in

[faker/bep-122.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-122.ts#L26)

___

### BEP122Faker

▸ **BEP122Faker**(): `TxBuilder`<`BEP122Msg`\>

#### Returns

`TxBuilder`<`BEP122Msg`\>

#### Defined in

[builder/bep-122.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-122.ts#L23)

___

### BEP126

▸ **BEP126**(): `TxMsgFaker`<`BEP126Msg`\>

#### Returns

`TxMsgFaker`<`BEP126Msg`\>

#### Defined in

[faker/bep-126.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-126.ts#L24)

___

### BEP126Faker

▸ **BEP126Faker**(): `TxBuilder`<`BEP126Msg`\>

#### Returns

`TxBuilder`<`BEP126Msg`\>

#### Defined in

[builder/bep-126.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-126.ts#L23)

___

### BEP127

▸ **BEP127**(): `TxMsgFaker`<`BEP127Msg`\>

#### Returns

`TxMsgFaker`<`BEP127Msg`\>

#### Defined in

[faker/bep-127.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-127.ts#L23)

___

### BEP127Faker

▸ **BEP127Faker**(): `TxBuilder`<`BEP127Msg`\>

#### Returns

`TxBuilder`<`BEP127Msg`\>

#### Defined in

[builder/bep-127.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-127.ts#L23)

___

### BEP128

▸ **BEP128**(): `TxMsgFaker`<`BEP128Msg`\>

#### Returns

`TxMsgFaker`<`BEP128Msg`\>

#### Defined in

[faker/bep-128.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-128.ts#L23)

___

### BEP128Faker

▸ **BEP128Faker**(): `TxBuilder`<`BEP128Msg`\>

#### Returns

`TxBuilder`<`BEP128Msg`\>

#### Defined in

[builder/bep-128.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-128.ts#L23)

___

### BEP129

▸ **BEP129**(): `TxMsgFaker`<`BEP129Msg`\>

#### Returns

`TxMsgFaker`<`BEP129Msg`\>

#### Defined in

[faker/bep-129.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-129.ts#L24)

___

### BEP129Faker

▸ **BEP129Faker**(): `TxBuilder`<`BEP129Msg`\>

#### Returns

`TxBuilder`<`BEP129Msg`\>

#### Defined in

[builder/bep-129.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-129.ts#L23)

___

### BEP130

▸ **BEP130**(): `TxMsgFaker`<`BEP130Msg`\>

#### Returns

`TxMsgFaker`<`BEP130Msg`\>

#### Defined in

[faker/bep-130.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-130.ts#L24)

___

### BEP130Faker

▸ **BEP130Faker**(): `TxBuilder`<`BEP130Msg`\>

#### Returns

`TxBuilder`<`BEP130Msg`\>

#### Defined in

[builder/bep-130.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-130.ts#L23)

___

### BEP131

▸ **BEP131**(): `TxMsgFaker`<`BEP131Msg`\>

#### Returns

`TxMsgFaker`<`BEP131Msg`\>

#### Defined in

[faker/bep-131.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-131.ts#L23)

___

### BEP131Faker

▸ **BEP131Faker**(): `TxBuilder`<`BEP131Msg`\>

#### Returns

`TxBuilder`<`BEP131Msg`\>

#### Defined in

[builder/bep-131.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-131.ts#L23)

___

### BEP132

▸ **BEP132**(): `TxMsgFaker`<`BEP132Msg`\>

#### Returns

`TxMsgFaker`<`BEP132Msg`\>

#### Defined in

[faker/bep-132.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-132.ts#L23)

___

### BEP132Faker

▸ **BEP132Faker**(): `TxBuilder`<`BEP132Msg`\>

#### Returns

`TxBuilder`<`BEP132Msg`\>

#### Defined in

[builder/bep-132.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-132.ts#L23)

___

### BEP133

▸ **BEP133**(): `TxMsgFaker`<`BEP133Msg`\>

#### Returns

`TxMsgFaker`<`BEP133Msg`\>

#### Defined in

[faker/bep-133.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-133.ts#L23)

___

### BEP133Faker

▸ **BEP133Faker**(): `TxBuilder`<`BEP133Msg`\>

#### Returns

`TxBuilder`<`BEP133Msg`\>

#### Defined in

[builder/bep-133.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-133.ts#L23)

___

### BEP134

▸ **BEP134**(): `TxMsgFaker`<`BEP134Msg`\>

#### Returns

`TxMsgFaker`<`BEP134Msg`\>

#### Defined in

[faker/bep-134.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-134.ts#L23)

___

### BEP134Faker

▸ **BEP134Faker**(): `TxBuilder`<`BEP134Msg`\>

#### Returns

`TxBuilder`<`BEP134Msg`\>

#### Defined in

[builder/bep-134.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-134.ts#L23)

___

### BEP135

▸ **BEP135**(): `TxMsgFaker`<`BEP135Msg`\>

#### Returns

`TxMsgFaker`<`BEP135Msg`\>

#### Defined in

[faker/bep-135.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-135.ts#L23)

___

### BEP135Faker

▸ **BEP135Faker**(): `TxBuilder`<`BEP135Msg`\>

#### Returns

`TxBuilder`<`BEP135Msg`\>

#### Defined in

[builder/bep-135.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-135.ts#L23)

___

### BEP136

▸ **BEP136**(): `TxMsgFaker`<`BEP136Msg`\>

#### Returns

`TxMsgFaker`<`BEP136Msg`\>

#### Defined in

[faker/bep-136.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-136.ts#L23)

___

### BEP136Faker

▸ **BEP136Faker**(): `TxBuilder`<`BEP136Msg`\>

#### Returns

`TxBuilder`<`BEP136Msg`\>

#### Defined in

[builder/bep-136.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-136.ts#L23)

___

### BEP137

▸ **BEP137**(): `TxMsgFaker`<`BEP137Msg`\>

#### Returns

`TxMsgFaker`<`BEP137Msg`\>

#### Defined in

[faker/bep-137.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-137.ts#L23)

___

### BEP137Faker

▸ **BEP137Faker**(): `TxBuilder`<`BEP137Msg`\>

#### Returns

`TxBuilder`<`BEP137Msg`\>

#### Defined in

[builder/bep-137.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-137.ts#L23)

___

### BEP55

▸ **BEP55**(): `TxMsgFaker`<`BEP55Msg`\>

#### Returns

`TxMsgFaker`<`BEP55Msg`\>

#### Defined in

[faker/bep-055.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-055.ts#L24)

___

### BEP55Faker

▸ **BEP55Faker**(): `TxBuilder`<`BEP55Msg`\>

#### Returns

`TxBuilder`<`BEP55Msg`\>

#### Defined in

[builder/bep-055.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-055.ts#L23)

___

### BEP56

▸ **BEP56**(): `TxMsgFaker`<`BEP56Msg`\>

#### Returns

`TxMsgFaker`<`BEP56Msg`\>

#### Defined in

[faker/bep-056.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-056.ts#L23)

___

### BEP56Faker

▸ **BEP56Faker**(): `TxBuilder`<`BEP56Msg`\>

#### Returns

`TxBuilder`<`BEP56Msg`\>

#### Defined in

[builder/bep-056.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-056.ts#L23)

___

### BEP57

▸ **BEP57**(`__namedParameters`): `TxMsgFaker`<`BEP57Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Options`](interfaces/Options.md) |

#### Returns

`TxMsgFaker`<`BEP57Msg`\>

#### Defined in

[faker/bep-057.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-057.ts#L26)

___

### BEP57Faker

▸ **BEP57Faker**(): `TxBuilder`<`BEP57Msg`\>

#### Returns

`TxBuilder`<`BEP57Msg`\>

#### Defined in

[builder/bep-057.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-057.ts#L23)

___

### BEP58

▸ **BEP58**(`__namedParameters`): `TxMsgFaker`<`BEP58Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Options`](interfaces/Options.md) |

#### Returns

`TxMsgFaker`<`BEP58Msg`\>

#### Defined in

[faker/bep-058.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-058.ts#L26)

___

### BEP58Faker

▸ **BEP58Faker**(): `TxBuilder`<`BEP58Msg`\>

#### Returns

`TxBuilder`<`BEP58Msg`\>

#### Defined in

[builder/bep-058.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-058.ts#L23)

___

### BEP59

▸ **BEP59**(`__namedParameters`): `TxMsgFaker`<`BEP59Msg`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`Options`](interfaces/Options.md) |

#### Returns

`TxMsgFaker`<`BEP59Msg`\>

#### Defined in

[faker/bep-059.ts:26](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-059.ts#L26)

___

### BEP59Faker

▸ **BEP59Faker**(): `TxBuilder`<`BEP59Msg`\>

#### Returns

`TxBuilder`<`BEP59Msg`\>

#### Defined in

[builder/bep-059.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-059.ts#L23)

___

### BEP64

▸ **BEP64**(): `TxMsgFaker`<`BEP64Msg`\>

#### Returns

`TxMsgFaker`<`BEP64Msg`\>

#### Defined in

[faker/bep-064.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-064.ts#L24)

___

### BEP64Faker

▸ **BEP64Faker**(): `TxBuilder`<`BEP64Msg`\>

#### Returns

`TxBuilder`<`BEP64Msg`\>

#### Defined in

[builder/bep-064.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-064.ts#L23)

___

### BEP65

▸ **BEP65**(): `TxMsgFaker`<`BEP65Msg`\>

#### Returns

`TxMsgFaker`<`BEP65Msg`\>

#### Defined in

[faker/bep-065.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-065.ts#L24)

___

### BEP65Faker

▸ **BEP65Faker**(): `TxBuilder`<`BEP65Msg`\>

#### Returns

`TxBuilder`<`BEP65Msg`\>

#### Defined in

[builder/bep-065.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-065.ts#L23)

___

### BEP66

▸ **BEP66**(): `TxMsgFaker`<`BEP66Msg`\>

#### Returns

`TxMsgFaker`<`BEP66Msg`\>

#### Defined in

[faker/bep-066.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-066.ts#L24)

___

### BEP66Faker

▸ **BEP66Faker**(): `TxBuilder`<`BEP66Msg`\>

#### Returns

`TxBuilder`<`BEP66Msg`\>

#### Defined in

[builder/bep-066.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-066.ts#L23)

___

### BEP67

▸ **BEP67**(): `TxMsgFaker`<`BEP67Msg`\>

#### Returns

`TxMsgFaker`<`BEP67Msg`\>

#### Defined in

[faker/bep-067.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-067.ts#L23)

___

### BEP67Faker

▸ **BEP67Faker**(): `TxBuilder`<`BEP67Msg`\>

#### Returns

`TxBuilder`<`BEP67Msg`\>

#### Defined in

[builder/bep-067.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-067.ts#L23)

___

### BEP68

▸ **BEP68**(): `TxMsgFaker`<`BEP68Msg`\>

#### Returns

`TxMsgFaker`<`BEP68Msg`\>

#### Defined in

[faker/bep-068.ts:24](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/bep-068.ts#L24)

___

### BEP68Faker

▸ **BEP68Faker**(): `TxBuilder`<`BEP68Msg`\>

#### Returns

`TxBuilder`<`BEP68Msg`\>

#### Defined in

[builder/bep-068.ts:23](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/bep-068.ts#L23)

___

### makeAccount

▸ **makeAccount**(`__namedParameters`): `Promise`<{ `account`: `Account`<`Record`<`string`, `any`\>\> ; `keypair`: `KeyPair`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.accountSerializer` | `AccountSerializer` |
| `__namedParameters.addressFactory` | `AddressFactory` |
| `__namedParameters.keyPairFactory` | `KeyPairFactory` |
| `__namedParameters.mnemonic` | `string` |

#### Returns

`Promise`<{ `account`: `Account`<`Record`<`string`, `any`\>\> ; `keypair`: `KeyPair`  }\>

#### Defined in

[account.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/account.ts#L21)

___

### makeInstance

▸ **makeInstance**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Options`](interfaces/Options.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `buildTx` | (`type`: ``"@bearmint/bep-055"``) => `TxBuilder`<`BEP55Msg`\>(`type`: ``"@bearmint/bep-056"``) => `TxBuilder`<`BEP56Msg`\>(`type`: ``"@bearmint/bep-057"``) => `TxBuilder`<`BEP57Msg`\>(`type`: ``"@bearmint/bep-058"``) => `TxBuilder`<`BEP58Msg`\>(`type`: ``"@bearmint/bep-059"``) => `TxBuilder`<`BEP59Msg`\>(`type`: ``"@bearmint/bep-064"``) => `TxBuilder`<`BEP64Msg`\>(`type`: ``"@bearmint/bep-065"``) => `TxBuilder`<`BEP65Msg`\>(`type`: ``"@bearmint/bep-066"``) => `TxBuilder`<`BEP66Msg`\>(`type`: ``"@bearmint/bep-067"``) => `TxBuilder`<`BEP67Msg`\>(`type`: ``"@bearmint/bep-068"``) => `TxBuilder`<`BEP68Msg`\>(`type`: ``"@bearmint/bep-104"``) => `TxBuilder`<`BEP104Msg`\>(`type`: ``"@bearmint/bep-110"``) => `TxBuilder`<`BEP110Msg`\>(`type`: ``"@bearmint/bep-122"``) => `TxBuilder`<`BEP122Msg`\>(`type`: ``"@bearmint/bep-126"``) => `TxBuilder`<`BEP126Msg`\>(`type`: ``"@bearmint/bep-127"``) => `TxBuilder`<`BEP127Msg`\>(`type`: ``"@bearmint/bep-128"``) => `TxBuilder`<`BEP128Msg`\>(`type`: ``"@bearmint/bep-129"``) => `TxBuilder`<`BEP129Msg`\>(`type`: ``"@bearmint/bep-130"``) => `TxBuilder`<`BEP130Msg`\>(`type`: ``"@bearmint/bep-131"``) => `TxBuilder`<`BEP131Msg`\>(`type`: ``"@bearmint/bep-132"``) => `TxBuilder`<`BEP132Msg`\>(`type`: ``"@bearmint/bep-133"``) => `TxBuilder`<`BEP133Msg`\>(`type`: ``"@bearmint/bep-134"``) => `TxBuilder`<`BEP134Msg`\>(`type`: ``"@bearmint/bep-135"``) => `TxBuilder`<`BEP135Msg`\>(`type`: ``"@bearmint/bep-136"``) => `TxBuilder`<`BEP136Msg`\>(`type`: ``"@bearmint/bep-137"``) => `TxBuilder`<`BEP137Msg`\> |
| `fakeTxMsg` | (`type`: ``"@bearmint/bep-055"``) => `TxMsgFaker`<`BEP55Msg`\>(`type`: ``"@bearmint/bep-056"``) => `TxMsgFaker`<`BEP56Msg`\>(`type`: ``"@bearmint/bep-057"``) => `TxMsgFaker`<`BEP57Msg`\>(`type`: ``"@bearmint/bep-058"``) => `TxMsgFaker`<`BEP58Msg`\>(`type`: ``"@bearmint/bep-059"``) => `TxMsgFaker`<`BEP59Msg`\>(`type`: ``"@bearmint/bep-064"``) => `TxMsgFaker`<`BEP64Msg`\>(`type`: ``"@bearmint/bep-065"``) => `TxMsgFaker`<`BEP65Msg`\>(`type`: ``"@bearmint/bep-066"``) => `TxMsgFaker`<`BEP66Msg`\>(`type`: ``"@bearmint/bep-067"``) => `TxMsgFaker`<`BEP67Msg`\>(`type`: ``"@bearmint/bep-068"``) => `TxMsgFaker`<`BEP68Msg`\>(`type`: ``"@bearmint/bep-104"``) => `TxMsgFaker`<`BEP104Msg`\>(`type`: ``"@bearmint/bep-110"``) => `TxMsgFaker`<`BEP110Msg`\>(`type`: ``"@bearmint/bep-122"``) => `TxMsgFaker`<`BEP122Msg`\>(`type`: ``"@bearmint/bep-126"``) => `TxMsgFaker`<`BEP126Msg`\>(`type`: ``"@bearmint/bep-127"``) => `TxMsgFaker`<`BEP127Msg`\>(`type`: ``"@bearmint/bep-128"``) => `TxMsgFaker`<`BEP128Msg`\>(`type`: ``"@bearmint/bep-129"``) => `TxMsgFaker`<`BEP129Msg`\>(`type`: ``"@bearmint/bep-130"``) => `TxMsgFaker`<`BEP130Msg`\>(`type`: ``"@bearmint/bep-131"``) => `TxMsgFaker`<`BEP131Msg`\>(`type`: ``"@bearmint/bep-132"``) => `TxMsgFaker`<`BEP132Msg`\>(`type`: ``"@bearmint/bep-133"``) => `TxMsgFaker`<`BEP133Msg`\>(`type`: ``"@bearmint/bep-134"``) => `TxMsgFaker`<`BEP134Msg`\>(`type`: ``"@bearmint/bep-135"``) => `TxMsgFaker`<`BEP135Msg`\>(`type`: ``"@bearmint/bep-136"``) => `TxMsgFaker`<`BEP136Msg`\>(`type`: ``"@bearmint/bep-137"``) => `TxMsgFaker`<`BEP137Msg`\> |
| `rails` | () => { `accounts`: (`parameters?`: `AccountRequestParameters`) => `Promise`<`any`\> ; `blocks`: (`parameters?`: `BlockRequestParameters`) => `Promise`<`any`\> ; `txs`: (`parameters?`: `TxRequestParameters`) => `Promise`<`any`\>  } |
| `signTx` | (`__namedParameters`: { `data`: { `gas`: `string` ; `message`: `PartialMessage`<`TxMsg`\> ; `nonce`: `string`  } ; `recipient`: `Address` ; `sender`: `KeyPair`  }) => `Promise`<`Tx`\> |
| `trpc` | (`host?`: `string`) => { `broadcastSignedTx`: (`signedTx`: `Tx`) => `Promise`<`BroadcastTxResponse`\> ; `getAccountByAddress`: (`address`: `string`) => `Promise`<`any`\> ; `getCommittedBlockNumber`: () => `Promise`<`bigint`\> ; `getNextNonce`: (`publicKey`: `string`) => `Promise`<`string`\>  } |

#### Defined in

[instance.ts:58](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/instance.ts#L58)

___

### makeStockBuilderFactory

▸ **makeStockBuilderFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `@bearmint/bep-055` | () => `TxBuilder`<`BEP55Msg`\> |
| `@bearmint/bep-056` | () => `TxBuilder`<`BEP56Msg`\> |
| `@bearmint/bep-057` | () => `TxBuilder`<`BEP57Msg`\> |
| `@bearmint/bep-058` | () => `TxBuilder`<`BEP58Msg`\> |
| `@bearmint/bep-059` | () => `TxBuilder`<`BEP59Msg`\> |
| `@bearmint/bep-064` | () => `TxBuilder`<`BEP64Msg`\> |
| `@bearmint/bep-065` | () => `TxBuilder`<`BEP65Msg`\> |
| `@bearmint/bep-066` | () => `TxBuilder`<`BEP66Msg`\> |
| `@bearmint/bep-067` | () => `TxBuilder`<`BEP67Msg`\> |
| `@bearmint/bep-068` | () => `TxBuilder`<`BEP68Msg`\> |
| `@bearmint/bep-104` | () => `TxBuilder`<`BEP104Msg`\> |
| `@bearmint/bep-110` | () => `TxBuilder`<`BEP110Msg`\> |
| `@bearmint/bep-122` | () => `TxBuilder`<`BEP122Msg`\> |
| `@bearmint/bep-126` | () => `TxBuilder`<`BEP126Msg`\> |
| `@bearmint/bep-127` | () => `TxBuilder`<`BEP127Msg`\> |
| `@bearmint/bep-128` | () => `TxBuilder`<`BEP128Msg`\> |
| `@bearmint/bep-129` | () => `TxBuilder`<`BEP129Msg`\> |
| `@bearmint/bep-130` | () => `TxBuilder`<`BEP130Msg`\> |
| `@bearmint/bep-131` | () => `TxBuilder`<`BEP131Msg`\> |
| `@bearmint/bep-132` | () => `TxBuilder`<`BEP132Msg`\> |
| `@bearmint/bep-133` | () => `TxBuilder`<`BEP133Msg`\> |
| `@bearmint/bep-134` | () => `TxBuilder`<`BEP134Msg`\> |
| `@bearmint/bep-135` | () => `TxBuilder`<`BEP135Msg`\> |
| `@bearmint/bep-136` | () => `TxBuilder`<`BEP136Msg`\> |
| `@bearmint/bep-137` | () => `TxBuilder`<`BEP137Msg`\> |

#### Defined in

[builder/factory.ts:28](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/factory.ts#L28)

___

### makeStockFakerFactory

▸ **makeStockFakerFactory**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `@bearmint/bep-055` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP55Msg`, `object`\> |
| `@bearmint/bep-056` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP56Msg`, `object`\> |
| `@bearmint/bep-057` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP57Msg`, `object`\> |
| `@bearmint/bep-058` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP58Msg`, `object`\> |
| `@bearmint/bep-059` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP59Msg`, `object`\> |
| `@bearmint/bep-064` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP64Msg`, `object`\> |
| `@bearmint/bep-065` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP65Msg`, `object`\> |
| `@bearmint/bep-066` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP66Msg`, `object`\> |
| `@bearmint/bep-067` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP67Msg`, `object`\> |
| `@bearmint/bep-068` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP68Msg`, `object`\> |
| `@bearmint/bep-104` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP104Msg`, `object`\> |
| `@bearmint/bep-110` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP110Msg`, `object`\> |
| `@bearmint/bep-122` | (`options`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP122Msg`, `object`\> |
| `@bearmint/bep-126` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP126Msg`, `object`\> |
| `@bearmint/bep-127` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP127Msg`, `object`\> |
| `@bearmint/bep-128` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP128Msg`, `object`\> |
| `@bearmint/bep-129` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP129Msg`, `object`\> |
| `@bearmint/bep-130` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP130Msg`, `object`\> |
| `@bearmint/bep-131` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP131Msg`, `object`\> |
| `@bearmint/bep-132` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP132Msg`, `object`\> |
| `@bearmint/bep-133` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP133Msg`, `object`\> |
| `@bearmint/bep-134` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP134Msg`, `object`\> |
| `@bearmint/bep-135` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP135Msg`, `object`\> |
| `@bearmint/bep-136` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP136Msg`, `object`\> |
| `@bearmint/bep-137` | (`_`: [`Options`](interfaces/Options.md)) => `TxMsgFaker`<`BEP137Msg`, `object`\> |

#### Defined in

[faker/factory.ts:29](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/factory.ts#L29)

___

### signTx

▸ **signTx**(`__namedParameters`): `Promise`<`Tx`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.addressFactory` | `AddressFactory` |
| `__namedParameters.data` | `Object` |
| `__namedParameters.data.gas` | `string` |
| `__namedParameters.data.message` | `PartialMessage`<`TxMsg`\> |
| `__namedParameters.data.nonce` | `string` |
| `__namedParameters.publicKeyFactory` | `PublicKeyFactory` |
| `__namedParameters.recipient` | `Address` |
| `__namedParameters.sender` | `KeyPair` |
| `__namedParameters.signatureFactory` | `SignatureFactory` |

#### Returns

`Promise`<`Tx`\>

#### Defined in

[tx.ts:30](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/tx.ts#L30)

___

### wrapTxBuilder

▸ **wrapTxBuilder**<`T`\>(`__namedParameters`): `TxBuilder`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`AnyMessage`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.content` | (`data`: `Plain`<`T`\>) => `Promise`<`T`\> |
| `__namedParameters.handler` | `string` |

#### Returns

`TxBuilder`<`T`\>

#### Defined in

[builder/base.ts:22](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/builder/base.ts#L22)

___

### wrapTxMsgFaker

▸ **wrapTxMsgFaker**<`T`, `O`\>(`callback`): `TxMsgFaker`<`T`, `O`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`AnyMessage`, `T`\> |
| `O` | `O` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`data`: `Plain`<`T`\>, `options?`: `O`) => `Promise`<`T`\> |

#### Returns

`TxMsgFaker`<`T`, `O`\>

#### Defined in

[faker/base.ts:21](https://github.com/bearmint/bearmint/blob/main/packages/bep-099/source/faker/base.ts#L21)
