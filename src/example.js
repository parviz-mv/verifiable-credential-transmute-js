import { TransmuteVerifiablelW3 } from "./verifiable.js";
import { key, credential, presentation } from "./data/utils.js";

async function runExample() {
  const verifiable = new TransmuteVerifiablelW3();
  const createCredentialResult = await verifiable.createCredential(
    key,
    credential
  );
  console.log("createCredentialResult: ", createCredentialResult);

  const createPresentationResult = await verifiable.createPresentation(
    key,
    presentation
  );
  console.log("createPresentationResult: ", createPresentationResult);

  const verifyCredentialResult = await verifiable.verifyVerifiableCredential(
    createCredentialResult
  );
  console.log("verifyCredentialResult: ", verifyCredentialResult);

  const verifyPresentationResult =
    await verifiable.verifyVerifiablePresentation(createPresentationResult);
  console.log("verifyPresentationResult: ", verifyPresentationResult);
}
runExample();
