import { ActionType } from "typesafe-actions";
import { ISession } from "../../../types/session";
import * as actions from "./actions";

export type SessionActionsProps = ActionType<typeof actions>;

export interface SessionStateProps {
  readonly session?: ISession;
}
