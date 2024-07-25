// aws-exports.ts
// this gets called by components/configureamplify.tsx to hook the a cognito hosted ui (no amplify hosting needed)
// secret keys are stored safely in an env.local file and not committed to repo
const awsconfig = {
  Auth: {
    Cognito: {
      region: process.env.NEXT_PUBLIC_COGNITO_REGION!,
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID!,
      domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN!,
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
        preferred_username: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
}
  
  export default awsconfig;
  