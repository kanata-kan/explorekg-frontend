# 📝 Git Feature Branch Workflow Checklist

This document provides a **step-by-step workflow** for working with Git feature branches.  
It ensures code consistency, clean collaboration, and safe merging into `main`.

---

## 🔹 1. Create a New Feature Branch

1. Make sure you are on `main` and up-to-date:

```bash
   git checkout main
   git pull origin main
   Create a new feature branch:
```

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/navbar-setup
```

🔹 2. Work on the Branch
Edit your code and add new files.

Stage your changes:

```bash
git add .
```

Commit your changes:

```bash
git commit -m "Short description of changes"
```

Push the new branch to GitHub:

```bash
git push origin feature/navbar-setup
```

🔹 3. Open a Pull Request (PR)
Go to GitHub → you’ll see Compare & Pull Request.

Write a clear description of what you changed and why.

Click Create Pull Request.

🔹 4. Merge into main
Review the PR changes in GitHub.

If everything is correct → click Merge Pull Request.

Optionally, delete the branch from GitHub (recommended for cleanliness).

🔹 5. Sync Local main
Switch back to main locally:

```bash
git checkout main
```

Pull the latest changes:

```bash
git pull origin main
```

📌 Best Practices
Never work directly on main.

Always use feature branches.

Use clear names for branches and commits:

Branches: feature/login-form, fix/api-error

Commits: "feat: add login form" / "fix: handle API error"

Every finished feature → PR → Merge → Pull.

---

# 🌟 Branching Strategies for New Features and Components

When starting work on a new feature or component, it's essential to follow a consistent branching strategy. This ensures clarity in the development process and makes collaboration more manageable.

## 🔸 Feature Branches

Feature branches are used to develop new features for the upcoming or a distant future release. They are typically branched off from the `develop` branch and merged back into `develop` when the feature is complete.

**Naming Convention:**

Use the prefix `feature/` followed by a short description of the feature.

Example:

```bash
git checkout -b feature/user-authentication
```

## 🔸 Bugfix Branches

Bugfix branches are meant for fixing bugs in the code. Like feature branches, they are also branched off from `develop` and merged back once the fix is complete.

**Naming Convention:**

Use the prefix `bugfix/` followed by a short description of the bug.

Example:

```bash
git checkout -b bugfix/login-error
```

## 🔸 Hotfix Branches

Hotfix branches are used to quickly patch production releases. They are branched directly from `main` and, once the fix is complete, merged back into both `main` and `develop`.

**Naming Convention:**

Use the prefix `hotfix/` followed by a short description of the fix.

Example:

```bash
git checkout -b hotfix/crash-on-login
```

## 🔸 Release Branches

Release branches are used to prepare for a new production release. They allow for last-minute fixes and preparing release notes. Once ready, they are merged into `main` and tagged with a release number.

**Naming Convention:**

Use the prefix `release/` followed by the release version.

Example:

```bash
git checkout -b release/1.0.0
```

---

By following these branching strategies, we can ensure a smooth and efficient workflow, making it easier to manage features, fixes, and releases.
