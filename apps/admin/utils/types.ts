export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    role: string;
    tokens: number;
    isVerified: boolean;
    completedTasks: any[];
    invites: any[];
    invitedBy: string | null;
    referralCode: string;
    __v: number;
};

export enum ActionTypeEnum {
    SetActiveUser = "SetActiveUser",
    ResetStore = "ResetStore",
}

export type loginResponseType = {
    message: string;
    user: IUser;
    token: string;
};
