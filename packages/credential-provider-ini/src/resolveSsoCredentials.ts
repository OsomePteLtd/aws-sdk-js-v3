import { fromSSO, validateSsoProfile } from "@aws-sdk/credential-provider-sso";
import { SsoProfile } from "@aws-sdk/credential-provider-sso";

/**
 * @internal
 */
export { isSsoProfile } from "@aws-sdk/credential-provider-sso";

/**
 * @internal
 */
export const resolveSsoCredentials = (data: Partial<SsoProfile>) => {
  const { sso_start_url, sso_account_id, sso_session, sso_region, sso_role_name } = validateSsoProfile(data);
  return fromSSO({
    ssoStartUrl: sso_start_url,
    ssoAccountId: sso_account_id,
    ssoSession: sso_session,
    ssoRegion: sso_region,
    ssoRoleName: sso_role_name,
  })();
};
