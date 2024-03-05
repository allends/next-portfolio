title: AssetStack
descriptiveTitle: AssetStack
description: Manage your assets safely in the cloud
tags: next.js, trpc, mysql

---

# AssetStack

Manage your static assets like a professional.

## Overview

Managing assets in Javascript web land can be a bit of a hassle. One of my favorite tools is Typescript and that can complicate things even further. This project aims to simplify the process of using static assets like SVGs and regular image inside of your web projects.

## The Design

There are two components to this project, one being the web interface that allows users to manage the assets in a user friendly GUI (aimed towards a design team). The other part is a CLI tool that is connected to that web platform that allows a developer to pull types for those assets and then use completions in their Typescript projects.

Overall, this is a pretty simple design and there are some additional features that enhance this basic experience overall.

## Tooling

The main consideration for this project was to move fast. Therefor I opted for the T3 stack (created by the amazing Theo on youtube). This stack consists of Next.js, drizzle, mySQL, and tailwind (with shadcn/ui). I am familiar with all of these tools - so the build process was really effortless. While I usually enjoy learning new tools with projects, this project taught me the valuable lesson of leveraging using what is 'boring' to me to move faster and get a project done.

## Features

### Repos

Assets are organized by repos, which are similar to Github repos. Here users can collaborate and see all of the assets in the repo. Multiple users can edit the same repo as long as they are given access. Repos can be associated with Github repos and all of the Github collaborators will automatically be given access to the repo - making this tool great for teams.

### Uploading to AssetStack

In order to host these assets in the best way possible, I opted to use S3 buckets. They are durable and offer 99.99% uptime without me needing any of my own infrastructure. When the user uploads an asset, I chunk the request and upload it to the backend where I perform some compression to optimize the images for the web and then store them in a bucket for the user to retrieve.

### Pulling from AssetStack

The CLI will either associate itself to a repo through the active github repo or a AssetStack repo key that is put the ```.assetstack``` environment file. This will generate type definitions that then can be used with the ```<Image />``` component that the assetstack npm package provides.

### Using Images

Once you import the ```Image``` component you can all available images. Here is a code example of using those

```
<Image src="collaborators" />
```

In this markdown file it is hard to see the magic, so here are some resources.

- [Landing Page](https://assetstack.io)
- [Live Site](https://app.assetstack.io)
- [Documentation](https://docs.assetstack.io)

Source code is not available for this project (industry secrets) I hope you understand