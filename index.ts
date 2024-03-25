class LanguageFileParseError extends Error {
	constructor(message: string) {
		super()

		this.message = message
	}
}

type Language = {
	[key: string]: string
}

class LanguageParser {
	private static REGEX: RegExp = /^\s*([^=]+)\s*=\s*(.*)\s*$/

	static parse_json(lang_str: string) {
		const lines = lang_str.trim().split("\n")

		const result = {}

		lines.forEach((line: string) => {
			const match = line.match(LanguageParser.REGEX)

			if (match) {
				const key = match[1].trim()
				const value = match[2].trim()

				const keys = key.split(".")
				let nested_object = result

				for (let i = 0; i < keys.length; i++) {
					const current_key = keys[i]

					if (i === keys.length - 1) {
						nested_object[current_key] = value
					} else {
						nested_object[current_key] = nested_object[current_key] || {}
						nested_object = nested_object[current_key]
					}
				}
			}
		})

		if (Object.keys(result).length === 0) {
			throw new LanguageFileParseError("Language file is corrupted or empty")
		}

		return result
	}

	static parse_raw(content: string): Language {
		const translations = {}

		const lines = content.split("\n")

		for (const line of lines) {
			const trimmedLine = line.trim()

			if (!trimmedLine || trimmedLine.startsWith("#")) {
				continue // Ignore comments
			}

			const [key, value] = trimmedLine.split("=")
			const trimmedKey = key.trim()
			const trimmedValue = value.trim()

			translations[trimmedKey] = trimmedValue
		}

		return translations
	}

	static get_key(key: string, json_object: object, placeholders: Array<string> = []) {
		// Use "as" for autocompletion
		const value = json_object[key] as string

		if (!placeholders) return

		// No need for replace placeholders, already integrated here || Instead of a for loop, we use RegEx to skip looping.
		return value.replace(/%([0-9]+)/g, (_, index) => placeholders[parseInt(index)])
	}
}

export { LanguageParser, LanguageFileParseError }
