# Identity verification

This sample shows you how to integrate with Stripe [Identity](https://stripe.com/docs/identity).

### Integrations included:

- [**Modal**] The modal integration allows you to collect identity documents as part of your existing flows. It also limits the amount of private information you handle on your site, allows you to support users in a variety of platforms and languages, and allows you to customize the style to match your branding.

## How to run locally

This sample includes several server implementations.

Follow the steps below to run locally.

**1. Clone and configure the sample**

The Stripe CLI is the fastest way to clone and configure a sample to run locally.

**Using the Stripe CLI**

If you haven't already installed the CLI, follow the [installation steps](https://github.com/stripe/stripe-cli#installation) in the project README. The CLI is useful for cloning samples and locally testing webhooks and Stripe integrations.

In your terminal shell, run the Stripe CLI command to clone the sample:

```
stripe samples create identity
```

The CLI will walk you through picking your integration type, server and client
languages, and configuring your `.env` config file with your Stripe API keys.

**Installing and cloning manually**

If you do not want to use the Stripe CLI, you can manually clone and configure the sample yourself:

```
git clone https://github.com/stripe-samples/identity
```

Copy the `.env` file into a file named `.env` in the 'server' folder. For example:

```
cp .env server/.env
```


You will need a Stripe account in order to run the demo. Once you set up your
account, go to the Stripe [developer
dashboard](https://stripe.com/docs/development#api-keys) to find your API keys.
```

STRIPE_PUBLISHABLE_KEY=<replace-with-your-publishable-key>
STRIPE_SECRET_KEY=<replace-with-your-secret-key>
```

`STATIC_DIR` tells the server where to the client files are located and does not need to be modified unless you move the server files.

**2. Follow the server instructions on how to run:**

follow the instructions in the 'server' folder README on how to run.

For example, if you are running the Node server:

```
cd server/ # there's a README in this folder with instructions
npm install
npm start
```

**3. [Optional] Run a webhook locally:**

If you want to test webhook piece of the integration with a local webhook on
your machine, you can use the Stripe CLI to easily spin one up.

Make sure to [install the CLI](https://stripe.com/docs/stripe-cli) and [link your Stripe account](https://stripe.com/docs/stripe-cli#link-account).

```
stripe listen --forward-to localhost:4242/webhook
```

The CLI will print a webhook secret key to the console. Set
`STRIPE_WEBHOOK_SECRET` to this value in your `.env` file.

You should see events logged in the console where the CLI is running.

When you are ready to create a live webhook endpoint, follow our guide in the
docs on [configuring a webhook endpoint in the
dashboard](https://stripe.com/docs/webhooks/setup#configure-webhook-settings).

## FAQ

Q: Why did you pick these frameworks?

A: We chose the most minimal framework to convey the key Stripe calls and concepts you need to understand. These demos are meant as an educational tool that helps you roadmap how to integrate Stripe within your own system independent of the framework.

## Get support
If you found a bug or want to suggest a new [feature/use case/sample], please [file an issue](../../issues).

If you have questions, comments, or need help with code, we're here to help:
- on [Discord](https://stripe.com/go/developer-chat)
- on Twitter at [@StripeDev](https://twitter.com/StripeDev)
- on Stack Overflow at the [stripe-payments](https://stackoverflow.com/tags/stripe-payments/info) tag

Sign up to [stay updated with developer news](https://go.stripe.global/dev-digest).

## Authors

- [@bz-stripe](https://twitter.com/atav32)
- [@cjavilla-stripe](https://twitter.com/cjav_dev)