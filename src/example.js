import VCManager from "./vc-manager.js";
import { key, credential, presentation } from "./utils.js";

export async function runExample() {
  const vcManager = new VCManager();
  const createCredentialResult = await vcManager.createCredential(
    key,
    credential
  );
  console.log("createCredentialResult: ", createCredentialResult);

  const createPresentationResult = await vcManager.createPresentation(
    key,
    presentation
  );
  console.log("createPresentationResult: ", createPresentationResult);

  const verifyCredentialResult = await vcManager.verifyVerifiableCredential(
    createCredentialResult
  );
  console.log("verify credential result: ", verifyCredentialResult);

  const verifyPresentationResult = await vcManager.verifyVerifiablePresentation(
    createPresentationResult
  );
  console.log("verify presentation result: ", verifyPresentationResult);
}
runExample();
