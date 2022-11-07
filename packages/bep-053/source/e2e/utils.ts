import { generateMnemonic } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english.js'

export function randomMnemonic() {
	return generateMnemonic(wordlist, 256)
}
