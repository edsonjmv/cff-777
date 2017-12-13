export interface User {
  uid: String;
  displayName: String;
  photoURL: String;
  email: String;
  emailVerified: String;
  phoneNumber: String;
  isAnonymous: Boolean;
  providerData: Array<DataProvider>;
  apiKey: String;
  appName: String;
  authDomain: String;
  stsTokenManager: TokenManager;
  redirectEventId: String;
  lastLoginAt: String;
  createdAd: String;
}

export interface DataProvider {
  uid: String;
  displayName: String;
  photoURL: String;
  email: String;
  phoneNumber: String;
  providerId: String;
}

export interface TokenManager {
  apiKey: String;
  refreshToken: String;
  accessToken: String;
  expirationTime: Number;
}
