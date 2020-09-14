# Build Your First Deno App with Authentication

This is the companion code for [this blog post](https://developer.okta.com/blog/2020/09/14/deno-with-auth). It builds basic OAuth 2.0/OIDC authentication into a Deno application.

**Prerequisites:** 

* [Deno](https://deno.land/#installation)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

* [Getting Started](#getting-started)
* [Help](#get-help)
* [License](#license)

## Getting Started

Clone this repo:

```sh
git clone https://github.com/oktadeveloper/okta-deno-auth-example.git
```

This will get a copy of the project locally. 

### Create a Free Okta Developer Account

If you don't have one, [create an Okta Developer account](https://developer.okta.com/signup/). After you've completed the setup process, log in to your account.

Create a new OIDC app by navigating to **Applications** > **Add Application** > select **Web**, and click **Next**. Fill in the following values:

* Name: `Deno Example`
* Base URI: `http://localhost:3000`
* Login redirect URI: `http://localhost:3000/auth/callback`
* Logout redirect URI: `http://localhost:3000`

Click **Done** to create your app. 

Create a `.env` file in your root directory and copy the client ID and secret into it. You can find the value for `<YOUR_ISSUER>` by navigating to **API** > **Authorization Servers**.

```
issuer=https://{yourOktaOrgUrl}/oauth2/default
clientId={yourClientID}
clientSecret={yourClientSecret}
redirectUrl=http://localhost:3000/auth/callback
state=SuPeR-lOnG-sEcReT
```
   
**NOTE**: Make sure to remove the `{...}` placeholders. Your issuer should look something like: `https://dev-123456.okta.com/oauth2/default`.

You should now be able to run your app and authentication with Okta:

```
deno run -A index.ts
```

## Get Help

If you have question about the code here, you can post it to the comments of the [blog post](https://developer.okta.com/blog/2020/09/14/deno-with-auth) or to the [developer forum](https://devforum.okta.com).

## License

Apache 2.0, see [LICENSE](LICENSE).
