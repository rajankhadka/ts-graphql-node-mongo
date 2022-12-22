interface IPayload {
  sub: string;
  username: string;
  iat: Date;
  exp: Date;
}

interface ICtx {
  isAuthenticate: boolean,
  error: string,
  message: string
  payload: IPayload
}

export default ICtx;