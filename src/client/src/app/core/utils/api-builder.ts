import * as crypto from 'crypto-js';
import {
  environment
} from '@env';

export class ApiBuilder {
  static yahooHeader(location: string): string {
    const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    const method = 'GET';
    const consumerKey = environment.yahoo.consumerKey;
    const consumerSecret = environment.yahoo.consumerSecret;
    const concat = '&';
    const query = {
      location,
      format: 'json',
      u: 'C'
    };
    const oauth = {
      oauth_consumer_key: consumerKey,
      oauth_nonce: Math.random().toString(36).substring(2),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: parseInt(String(new Date().getTime() / 1000), 10),
      oauth_version: '1.0'
    };

    const merged = {
      ...query,
      ...oauth
    };

    const mergedArr = Object.keys(merged).sort().map((k) => {
      return [k + '=' + encodeURIComponent(merged[k])];
    });

    const signatureBaseStr = method +
      concat + encodeURIComponent(url) +
      concat + encodeURIComponent(mergedArr.join(concat));

    const compositeKey = encodeURIComponent(consumerSecret) + concat;
    const hash = crypto.HmacSHA1(signatureBaseStr, compositeKey);
    const signature = hash.toString(crypto.enc.Base64);

    const newOauth = {
      ...oauth,
      oauth_signature: signature
    };
    const authHeader = 'OAuth ' + Object.keys(newOauth).map((k) => {
      return [k + '="' + newOauth[k] + '"'];
    }).join(',');
    return `${authHeader}`;
  }
}
