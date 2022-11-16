export interface Address {
	email: string,
	name?: string,
}

export interface Content {
	/** The mime type of the content you are including in your email */
	type: string,
	/** The actual content of the specified mime type that you are including in the message */
	value: string
}

/**
 * A JSON object containing key/value pairs of header names and the value to substitute for them. The Key/value pairs must be strings. You must ensure these are properly encoded if they contain unicode characters. Must not be one of the reserved headers (received, dkim-signature, Content-Type, Content-Transfer-Encoding, To, From, Subject, Reply-To, CC, BCC).
 */
export type Headers = Record<string, string>;

export interface Personalization {
	to: Address[],
	cc?: Address[],
	bcc?: Address[],
	from?: Address,
	subject?: string,
	headers?: Headers,
	reply_to?: Address,
	dkim_domain?: string,
	dkim_selector?: string,
	/** The base64 encoded portion of the PEM/PKCS#8 file */
	dkim_private_key?: string,
}

export interface MailSendBody {
	from: Address,
	subject: string,
	content: Content[],
	personalizations: Personalization[],
	headers?: Headers,
	reply_to?: Address,
}

export interface Options {
	dryRun: boolean,
}