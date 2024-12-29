"use client";
import { ActionTypeEnum, IUser } from "@/utils/types";
import { createContext, Dispatch, useContext, useEffect, useReducer } from "react";

interface StateType {
  activeUser?: IUser | null;
}

type ActionType =
  | {
      type: ActionTypeEnum.SetActiveUser;
      payload: IUser | null;
    }
  | {
      type: ActionTypeEnum.ResetStore;
    };

const StoreContext = createContext<
  { state: StateType; dispatch: Dispatch<ActionType> } | undefined
>(undefined);

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ActionTypeEnum.SetActiveUser:
      return { ...state, activeUser: action.payload };

    case ActionTypeEnum.ResetStore:
      return {
        ...initialState,
        activeUser: state.activeUser
      };
    default:
      return state;
  }
};

const initialState: StateType = {
  activeUser: null
};

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: ActionTypeEnum.SetActiveUser, payload: JSON.parse(storedUser) });
    }
  }, []);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): {
  state: StateType;
  dispatch: Dispatch<ActionType>;
  resetStore: () => void;
} => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be within a storeprovider");
  }

  return {
    state: context.state,
    dispatch: context.dispatch,
    resetStore: () => context.dispatch({ type: ActionTypeEnum.ResetStore })
  };
};

export default StoreProvider;
