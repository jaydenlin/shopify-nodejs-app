# Shopify nodejs app example

## Create a development store & an app

## Download ngrok and run
```
./ngrok http 3000
```
And you will see a forwarding url, like
```
https://{XXXXXXX}.ngrok.io
```

## Update app information
Go to shopify Patrer Dashboard & login.  
Press `Apps` to edit the app information
```
https://partners.shopify.com/
```
* App Url
https://{XXXXXXX}.ngrok.io/shopify
* Whitelist Url
https://{XXXXXXX}.ngrok.io/shopify 
https://{XXXXXXX}.ngrok.io/shopify/callback

## Add API_KEY & API_SECRET at `.env` file
Go to shopify Patrer Dashboard & login.
Press `Apps` to see API key & API secret
```
SHOPIFY_API_KEY="{YOUR_API_KEY}"
SHOPIFY_API_SECRET="{YOUR_API_SECRET_KEY}"
FORWARDING_ADDRESS={ngrok forwarding url}
```

## How to use

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```
