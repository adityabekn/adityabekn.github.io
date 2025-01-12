---
title: Gyoza User's Guide
date: 2024-04-01
lastMod: 2024-05-08T13:41:24.948Z
summary: Welcome to Gyoza, Gyoza is an Astro blog theme that keeps it simple and cute. This post will introduce how to use and deploy Gyoza.
category: tutorials
tags: [Astro, Gyoza]
sticky: 1
---

## Pre-requisite

- node version >= 18.18.0
- pnpm version > 8.1.0

## Installation

### Clone the repository

Log into your GitHub account, open [lxchapu/astro-gyoza](https://github.com/lxchapu/astro-gyoza), and click the Fork button in the upper right corner to clone the repository to your own account.

Copy the address of this repository, open a terminal, and use the `git clone` command to clone the repository locally.

> This project recommends using pnpm as your package manager, so install pnpm if you haven't already.

### Install dependencies

```sh
cd astro-gyoza
pnpm install
```

### Introduction to Commands

Running locally

```sh
pnpm dev
```

Packaging static files

```sh
pnpm build
```

Local Preview

```sh
pnpm preview
```

### Configuration items

Most of the configuration in this project is defined in the `src/config.json` file.

You should first change `site.url` to your own domain name to avoid navigation errors.

Below is a description of the configuration items:

```json
{
  "site": {
    "url": "",
    // Website address
    "title": "",
    // Website title
    "description": "",
    // Generic site description SEO
    "keywords": "",
    // Generic site keywords SEO
    "lang": "zh-CN",
    // Language of the site
    "favicon": "",
    // Browser icon, stored in the public directory
    "appleTouchIcon": ""
    // Apple device icon, stored in the public directory
  },
  "author": {
    "name": "",
    // Author's name
    "twitterId": "",
    // Twitter account ID, starts with @, used in Open Graph
    "avatar": ""
    // Author's avatar address
  },
  // Home Hero Component
  "hero": {
    "name": "",
    // Name of the display
    "bio": "",
    // One sentence introduction
    "description": "",
    // Additional Description
    // Social Accounts
    "socials": [
      {
        "name": "",
        // Type of social platform
        "icon": "",
        // Social Platform Icons
        "url": "",
        // Links
        "color": ""
        // Icon color
      }
    ],
    "quotes": ""
    // Show a word
  },
  "color": {
    // Emphasis colors, one at a time, randomly selected from a group
    "accent": [
      {
        "light": "",
        "dark": ""
      }
    ]
  },
  // Top navigation bar
  "menus": [
    {
      "name": "Home",
      "link": "/",
      "icon": "icon-pantone"
    }
  ],
  "posts": {
    "perPage": 10
    // Number of articles displayed per page
  },
  "footer": {
    "startTime": ""
    // Blog site start time Please use ISO format
  },
  // doc search search function, please go to https://docsearch.algolia.com/apply/ to request it.
  "docSearch": {
    "appId": "",
    "apiKey": "",
    "indexName": ""
  },
  // waline comment system, go to https://waline.js.org/ to see the
  "waline": {
    "serverURL": ""
  },
  // Sponsorship
  "sponsor": {
    "wechat": ""
    // wechat appreciation code image address
  }
}
```

## Deployment

> Only Vercel is described here, you can of course choose other platforms such as Cloudflare Pages or your own server.  
> Before deploying, make sure you have modified `site.url`.

### Deploy to Vercel

Log in to your Vercel account and click Add new... in the upper right corner. Then select the repository you just forked in the Import Git Repository and click the Import
button.

Go to the project configuration page, click the Deploy button, and wait for the deployment to complete 👌.

Vercel will assign you a domain name, you can set a custom domain name in the project settings, please refer to the Vercel documentation for more information.
