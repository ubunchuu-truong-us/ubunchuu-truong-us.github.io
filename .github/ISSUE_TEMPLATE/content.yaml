name: 📝 New Content Request
description: Request new content (documentation/blog/translation)
title: "[Content]: "
labels: ["content", "triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to suggest new content for Ubunchuu Trường Ú!

  - type: dropdown
    id: content-type
    attributes:
      label: Content Type
      options:
        - Documentation
        - Blog Post
        - Manga Translation
        - Tutorial
        - Other
    validations:
      required: true

  - type: textarea
    id: content-description
    attributes:
      label: Content Description
      description: Describe the content you'd like to see added
      placeholder: "Example: A tutorial about setting up dual boot Ubuntu with Windows 11"
    validations:
      required: true

  - type: textarea
    id: proposed-outline
    attributes:
      label: Proposed Outline/Structure
      description: If you have a specific structure in mind, share it here
      placeholder: |
        1. Introduction
        2. Prerequisites
        3. Main steps
        4. Common issues and solutions

  - type: checkboxes
    id: terms
    attributes:
      label: Content Guidelines
      description: By submitting this request, you agree to our content guidelines
      options:
        - label: This content will be beneficial for Vietnamese Linux users
          required: true
        - label: I've checked that similar content doesn't already exist
          required: true
