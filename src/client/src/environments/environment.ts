// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDVH52XhO9oPSkiZFLeD4k9KUIJ_48Xr1U',
    authDomain: 'finansjer.firebaseapp.com',
    databaseURL: 'https://finansjer.firebaseio.com',
    projectId: 'finansjer',
    storageBucket: 'finansjer.appspot.com',
    messagingSenderId: '774679705638',
    appId: '1:774679705638:web:556680093cc53f46'
  },
  yahoo: {
    appId: 'SwUYiS32',
    consumerKey: 'dj0yJmk9QlpmVEhKOTJhb005JmQ9WVdrOVUzZFZXV2xUTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTBh',
    consumerSecret: 'e3971839642e62983a501fed61279233558cb9a1'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
