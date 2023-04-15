import { TransmuteVerifiablelW3 } from "./verifiable.js";
import { key, credential, presentation } from "./utils.js";

export async function runExample() {
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
  console.log("verify credential result: ", verifyCredentialResult);

  const verifyPresentationResult =
    await verifiable.verifyVerifiablePresentation(createPresentationResult);
  console.log("verify presentation result: ", verifyPresentationResult);
}
runExample()
