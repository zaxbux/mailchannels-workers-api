/**
 * Transactional API
 * @file MailChannels Send API allows you to send emails from your Cloudflare Workers apps.
 */

import { MailSendBody, Options } from './types';

export const tx = {
	sendPost(mailSendBody: MailSendBody, opts?: Options): Promise<Response> {
		let url = new URL('https://api.mailchannels.net/tx/v1/send');

		if (opts?.dryRun) {
			url.searchParams.set('dry-run', 'true');
		}

		return fetch(new Request(url, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(mailSendBody),
		}))
	},
}