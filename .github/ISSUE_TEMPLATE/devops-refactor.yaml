name: 🔧 DevOps/Code Refactoring
description: Suggest improvements to our codebase or infrastructure
title: "[DevOps]: "
labels: ["devops", "triage"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for helping improve our project's code quality!

  - type: dropdown
    id: improvement-type
    attributes:
      label: Type of Improvement
      options:
        - Code Refactoring
        - Build Process
        - Deployment
        - Dependencies
        - Performance
        - Testing
        - Documentation
        - Other
    validations:
      required: true

  - type: textarea
    id: current-state
    attributes:
      label: Current State
      description: Describe the current implementation/situation
      placeholder: "Current implementation uses..."
    validations:
      required: true

  - type: textarea
    id: proposed-changes
    attributes:
      label: Proposed Changes
      description: Describe your suggested improvements
      placeholder: "We should change to..."
    validations:
      required: true

  - type: textarea
    id: benefits
    attributes:
      label: Benefits
      description: What are the benefits of these changes?
      placeholder: |
        - Improved performance
        - Better maintainability
        - Reduced complexity

  - type: textarea
    id: implementation-notes
    attributes:
      label: Implementation Notes
      description: Any specific technical details or considerations?

  - type: checkboxes
    id: terms
    attributes:
      label: Review
      options:
        - label: I have tested/reviewed the impact of these changes
          required: true
        - label: This change maintains backward compatibility
          required: true
