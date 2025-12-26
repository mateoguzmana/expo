/**
 * Represents the release type of the application.
 * @platform ios
 */
export enum ApplicationReleaseType {
  /**
   * The release type is not determined or specified.
   */
  UNKNOWN = 0,
  /**
   * The application is running on the iOS Simulator, used for testing apps on a Mac without physical devices.
   */
  SIMULATOR = 1,
  /**
   * The application is distributed internally within an organization using Apple's Enterprise Developer Program.
   */
  ENTERPRISE = 2,
  /**
   * The application is installed on devices for development purposes, signed with development credentials.
   * This distribution method allows testing without access to team distribution identities.
   */
  DEVELOPMENT = 3,
  /**
   * The application is distributed to a limited audience for testing purposes using an Ad Hoc provisioning profile.
   */
  AD_HOC = 4,
  /**
   * The application is officially released and available to the general public through the App Store.
   */
  APP_STORE = 5,
}

/**
 * Maps to the [`aps-environment`](https://developer.apple.com/documentation/bundleresources/entitlements/aps-environment) key in the native target's registered entitlements.
 * @platform ios
 */
export type PushNotificationServiceEnvironment = 'development' | 'production' | null;
