import { action } from "typesafe-actions";
import { ISession } from "../../../types/session";

export function onSignIn(session: ISession) {
  return action("@session/ON_SIGN_IN", session);
}

export function onSignOut() {
  return action("@session/ON_SIGN_OUT");
}
