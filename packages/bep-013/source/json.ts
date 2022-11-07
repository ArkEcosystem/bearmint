export type JsonValue = number | string | boolean | null | JsonObject | JsonValue[]

export interface JsonObject {
	[k: string]: JsonValue
}
