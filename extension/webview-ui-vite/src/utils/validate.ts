import { ApiConfiguration } from "../../../src/shared/api"

export function validateApiConfiguration(apiConfiguration?: ApiConfiguration): string | undefined {
	if (apiConfiguration) {
		switch (apiConfiguration.apiProvider) {
			case "anthropic":
				if (!apiConfiguration.apiKey) {
					return "You must provide a valid API key or choose a different provider."
				}

				break
		}
	}
	return undefined
}

export function validateMaxRequestsPerTask(maxRequestsPerTask?: string): string | undefined {
	if (maxRequestsPerTask && maxRequestsPerTask.trim()) {
		const num = Number(maxRequestsPerTask)
		if (isNaN(num) || num < 3 || num > 100) {
			return "Maximum requests must be between 3 and 100"
		}
	}
	return undefined
}
