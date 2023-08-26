import { JsonWebKey, JsonWebSignature } from "@transmute/json-web-signature";
import { documentLoader } from "./data/documentLoader.js";
import { verifiable } from "@transmute/vc.js";

export default class VCManager {
  async createCredential(key, credential) {
    return await verifiable.credential.create({
      credential,
      format: ["vc", "vc-jwt"],
      documentLoader: documentLoader,
      suite: new JsonWebSignature({
        key: await JsonWebKey.from(key),
      }),
    });
  }
  async createPresentation(key, presentation) {
    return await verifiable.presentation.create({
      presentation,
      format: ["vp", "vp-jwt"],
      documentLoader: documentLoader,
      challenge: "123", // this is supplied by the verifier / presentation recipient
      suite: new JsonWebSignature({
        key: await JsonWebKey.from(key),
      }),
    });
  }
  async verifyVerifiableCredential(credential) {
    return await verifiable.credential.verify({
      credential: credential.items[0],
      format: ["vc", "vc-jwt"],
      documentLoader: documentLoader,
      suite: [new JsonWebSignature()],
    });
  }
  async verifyVerifiablePresentation(presentation) {
    return await verifiable.presentation.verify({
      presentation: presentation.items[0],
      format: ["vp", "vp-jwt"],
      documentLoader: documentLoader,
      challenge: "123", // this is supplied by the verifier / presentation recipient
      suite: new JsonWebSignature(),
    });
  }
}
