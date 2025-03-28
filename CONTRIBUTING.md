# Contributing to Ubunchuu Trường Ú

We're excited that you're interested in contributing to our project! This guide will help you understand our contribution process and ensure a smooth experience for everyone.

## Before You Start

To ensure all changes are properly discussed and reviewed, we encourage creating a GitHub Issue before starting your work:

1. **Create a GitHub Issue** in the [ubunchuu-truong-us/ubunchuu-truong-us.github.io](https://github.com/ubunchuu-truong-us/ubunchuu-truong-us.github.io) repository to discuss your proposed changes. Select the **New Content Request** template.

   > Wait for our feedback via code review, which typically happens within 2 days.

2. **Create a new branch** from `main` linked to your issue. Name your branch following this format: `content/<issue-number>-<issue-name>`.

   > Tip: Click **Create a branch** in the issue and add the `content/` prefix to the suggested name.

   A draft pull request will be automatically created by our bot after you create a new branch.

   > Remember to edit the PR description to match your content by clicking the pencil icon.

After creating the issue and draft pull request, you've completed 20% of the process! The remaining 80% focuses on creating your content.

## Development Options

You have two options for writing content while previewing how it will appear on the website:

### Option 1: GitHub Codespaces

We provide a Codespaces environment for easy contribution without setting up a local development environment.

1. **Create a GitHub Codespace** by clicking the button below:

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/ubunchuu-truong-us/ubunchuu-truong-us.github.io)

   > Alternatively, go to our [repository](https://github.com/ubunchuu-truong-us/ubunchuu-truong-us.github.io), click the "Code" button, and select the "Codespaces" tab.

   Select your branch from the **Branch** dropdown menu.

  > This may take a moment to load.

2. **Start writing** in the Codespaces editor.

   Codespaces will automatically open the editor with a local server and preview. If the preview doesn't open, run:

   ```bash
   yarn start
   ```

3. **Commit and push** your changes when you're finished.

   > Your pull request will automatically update when you push to your branch.

### Option 2: Local Development

To develop locally, ensure you have the following dependencies installed:
- `node >= 22`: [Download Node.js](https://nodejs.org/en/download/)
- `yarn >= 1.22`: `sudo npm install -g yarn`
- Issue and branch created as described in [Before You Start](#before-you-start)

1. **Clone the repository**:

   ```bash
   git clone git@github.com:ubunchuu-truong-us/ubunchuu-truong-us.github.io.git
   ```

2. **Checkout your branch**:

   ```bash
   git checkout content/<your-branch-name>
   ```

3. **Install dependencies**:

   ```bash
   yarn install
   ```

4. **Start the development server**:

   ```bash
   yarn start
   ```

5. **Push your changes** to update your PR automatically.

## Review Process

When you're ready for your work to be reviewed, mark your PR as **Ready for Review**.

## Project Structure

Our project follows this structure:
```
.
├── babel.config.js
├── blog
│   ├── 2022-11-10-intro-ubunchuu-truong-us
│   ├── 2023-03-22-what-is-sudo
│   ├── 2023-10-16-startup-ti-do-sap-tro-lai
│   ├── 2024-01-16-intro-manga-ubunchuu
│   ├── 2024-02-16-warp-first-impressions
│   └── authors.yml
├── Dockerfile
├── docs
│   ├── 15DFWT
│   ├── installation-guide
│   ├── linux-distribution
│   └── linux-overview
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
├── src
│   ├── components
│   ├── css
│   └── pages
├── static
│   └── img
└── yarn.lock
```

## Pull Request Guidelines

When submitting a PR, please ensure you:
- Fill out the PR template completely
- Link your PR to the related issue
- Include screenshots for visual changes when applicable
- Create small, focused PRs whenever possible
- Use descriptive commit messages
- Update documentation as needed

## Need Help?

If you have any questions or need assistance, feel free to ask in your GitHub Issue or reach out to the team.

Thank you for contributing to Ubunchuu Trường Ú!
