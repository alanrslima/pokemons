import { SessionActionsProps, SessionStateProps } from "./types";

const INITIAL_STATE: SessionStateProps = {
  session: undefined,
};

export default function SessionReducer(
  state = INITIAL_STATE,
  action: SessionActionsProps
): SessionStateProps {
  switch (action.type) {
    case "@session/ON_SIGN_IN":
      return { ...state, session: action.payload };
    case "@session/ON_SIGN_OUT":
      return { ...state, session: undefined };
    default:
      return state;
  }
}
