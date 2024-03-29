# verifiable-credential-transmute-js

- [Installation](#installation)
- [Usage](#usage)
- [createCredential](#createcredential)
- [verifyVerifiableCredential](#verifyverifiablecredential)
- [createPresentation](#createpresentation)
- [verifyVerifiablePresentation](#verifyverifiablepresentation)

## Installation

For install this repo run a following command:

```shell
git clone git@github.com:parviz-mv/verifiable-credential-transmute-js.git

cd verifiable-credential-transmute-js
npm install
```

## Usage

For run example file, run script:

```shell
npm run example
```

Initialize a instance of `VCManager`:

```js
import VCManager from "verifiable-credential-transmute-js";

// initial verifiable for usage verifiable functions
const vcManager = new VCManager();
```

## Create Credential

### - `createCredential()`

For create verifiable credential we need to key and credential.

**example:**

```javascript
// example of key
const key = {
  id: "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk#z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
  type: "Ed25519VerificationKey2018",
  controller: "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
  publicKeyBase58: "F4ULYqQvVesPYsddw4v9QYuVecxAajSdMH19mDChx4uN",
  privateKeyBase58:
    "3SCL1scPSwPGb5QkoPCwyxrP1JJzsh3Ch47weF3LQDfJqQtTCQoPt8TnTRyCoEtKspLdhd74oDc4atJvRMNpmQTr",
};
// example of credential
const credential = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
  ],
  id: "http://example.edu/credentials/3732",
  type: ["VerifiableCredential"],
  issuer: {
    id: "did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk",
  },
  issuanceDate: "2023-04-10T19:23:24Z",
  credentialSubject: {
    id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
  },
};

const createCredentialResult = await vcManager.createCredential(
  key,
  credential
);
console.log("create vc result: ", createCredentialResult);
// create vc result:  {
//   items: [
//     {
//       '@context': [Array],
//       id: 'http://example.edu/credentials/3732',
//       type: [Array],
//       issuer: [Object],
//       issuanceDate: '2023-04-10T19:23:24Z',
//       credentialSubject: [Object],
//       proof: [Object]
//     },
// ...
// ...
//   ]
// }
```

## Verify Credential

### - `verifyVerifiableCredential()`

**example:**

```javascript
const verifyCredentialResult = await vcManager.verifyVerifiableCredential(
  createCredentialResult
);
console.log("verify vc result: ", verifyCredentialResult);

// verify vc result:  {
//   verified: true,
//   verifications: [
//     {
//       status: 'good',
//       title: 'Proof',
//       description: 'did:key:z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk#z6MktWjP95fMqCMrfNULcdszFeTVUCE1zcgz3Hv5bVAisHgk'
//     },
//     {
//       status: 'good',
//       title: 'Activation',
//       description: 'This credential activated 5 months ago'
//     }
//   ]
// }
```

## Create Presentation

### - `createPresentation()`

**example:**

```javascript
//example of presentation
const presentation = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
  ],
  type: ["VerifiablePresentation"],
  holder: {
    id: key.controller,
  },
};
const createPresentationResult = await vcManager.createPresentation(
  key,
  presentation
);
console.log("create vp result: ", createPresentationResult);

// create vp result:  {
//   items: [
//     {
//       '@context': [Array],
//       type: [Array],
//       holder: [Object],
//       proof: [Object]
//     },
// ...
// ...
//   ]
// }
```

## Verify Presentation

### - `verifyVerifiablePresentation()`

**example:**

```javascript
const verifyPresentationResult = await vcManager.verifyVerifiablePresentation(
  createPresentationResult
);
console.log("verify vp result: ", verifyPresentationResult);
// verify presentaion result:  {
//   verified: true,
//   presentation: { verified: true, results: [ [Object] ] }
// }
```
