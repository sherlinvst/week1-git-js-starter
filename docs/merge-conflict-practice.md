# Git Merge Conflict Practice

Learn how to handle merge conflicts like a pro! This guide will help you intentionally create merge conflicts and practice resolving them safely.

## 🎯 What You'll Learn

- Understanding what causes merge conflicts
- How to recognize conflict markers
- Strategies for resolving conflicts
- Best practices for collaborative Git workflows

## 📚 Prerequisites

Before starting these exercises, make sure you understand:

- Basic Git commands (add, commit, push, pull)
- How to create and switch branches
- The concept of merging branches

## 🔥 Exercise 1: Simple Merge Conflict

### Goal

Create and resolve a basic merge conflict by editing the same line in two different branches.

### Steps

1. **Check your current status and branch**

   ```bash
   git status
   git branch
   ```

2. **Create a new branch called `feature-math`**

   ```bash
   git checkout -b feature-math
   ```

3. **Edit `src/utils/math.js`**
   - Implement the `add` function with your own implementation
   - Commit your changes:
     ```bash
     git add src/utils/math.js
     git commit -m "Implement add function in feature-math"
     ```

4. **Switch back to main branch**

   ```bash
   git checkout main
   ```

5. **Edit the SAME file (`src/utils/math.js`) differently**
   - Implement the `add` function with a DIFFERENT implementation
   - Commit your changes:
     ```bash
     git add src/utils/math.js
     git commit -m "Implement add function in main"
     ```

6. **Try to merge feature-math into main**

   ```bash
   git merge feature-math
   ```

   **💥 CONFLICT!** You should see a message like:

   ```
   Auto-merging src/utils/math.js
   CONFLICT (content): Merge conflict in src/utils/math.js
   Automatic merge failed; fix conflicts and then commit the result.
   ```

7. **Open the conflicted file**

   You'll see conflict markers like this:

   ```javascript
   <<<<<<< HEAD
   function add(a, b) {
     return a + b;  // Your main branch version
   }
   =======
   function add(a, b) {
     let sum = a + b;
     return sum;  // Your feature-math branch version
   }
   >>>>>>> feature-math
   ```

8. **Resolve the conflict**
   - Decide which version to keep (or combine both)
   - Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Save the file

9. **Complete the merge**

   ```bash
   git add src/utils/math.js
   git commit -m "Resolve merge conflict in math.js"
   ```

10. **Verify the merge**
    ```bash
    git log --oneline --graph
    ```

## 🔥 Exercise 2: Multiple File Conflicts

### Goal

Handle conflicts across multiple files simultaneously.

### Steps

1. **Create a new branch `feature-strings`**

   ```bash
   git checkout -b feature-strings
   ```

2. **Make changes to TWO files**
   - Edit `src/utils/strings.js` - implement `capitalize` function
   - Edit `src/index.js` - uncomment and modify string demo section
   - Commit:
     ```bash
     git add .
     git commit -m "Implement string utilities"
     ```

3. **Switch to main and make different changes**
   ```bash
   git checkout main
   ```
4. **Edit the SAME two files differently**
   - Edit `src/utils/strings.js` with different implementation
   - Edit `src/index.js` with different demo code
   - Commit:
     ```bash
     git add .
     git commit -m "Alternative string implementation"
     ```

5. **Merge and resolve conflicts in both files**
   ```bash
   git merge feature-strings
   ```
6. **Check which files have conflicts**

   ```bash
   git status
   ```

7. **Resolve each conflict systematically**
   - Open each conflicted file
   - Review both versions carefully
   - Choose or combine the best parts
   - Remove conflict markers
   - Test that your code still works

8. **Complete the merge**
   ```bash
   git add .
   git commit -m "Resolve conflicts in strings.js and index.js"
   ```

## 🔥 Exercise 3: Conflict During Rebase

### Goal

Learn to handle conflicts during an interactive rebase.

### Steps

1. **Create a feature branch with multiple commits**

   ```bash
   git checkout -b feature-notes-improvements
   ```

2. **Make 3 separate commits**
   - Commit 1: Implement `addNote` in notesApp.js
   - Commit 2: Implement `getAllNotes` in notesApp.js
   - Commit 3: Implement `deleteNote` in notesApp.js

3. **Switch to main and make a conflicting change**

   ```bash
   git checkout main
   ```

   - Edit the same file with different structure
   - Commit the change

4. **Rebase your feature branch onto main**

   ```bash
   git checkout feature-notes-improvements
   git rebase main
   ```

   **💥 CONFLICT!** You'll need to resolve conflicts for each commit.

5. **Resolve conflicts for each commit**
   - When conflict occurs, resolve it
   - Stage the resolved files: `git add <file>`
   - Continue rebase: `git rebase --continue`
   - Repeat until rebase completes

6. **If you want to abort the rebase**
   ```bash
   git rebase --abort
   ```

## 🛡️ Best Practices for Avoiding Conflicts

### 1. **Pull Before You Push**

```bash
git pull origin main
# Resolve any conflicts
git push origin main
```

### 2. **Keep Branches Short-Lived**

- Merge feature branches frequently
- Don't let branches diverge too much from main

### 3. **Communicate with Your Team**

- Coordinate who's working on which files
- Use feature toggles for incomplete features
- Establish coding standards

### 4. **Commit Often**

- Small, focused commits are easier to merge
- Write clear commit messages

### 5. **Use Git Tools**

- Configure a merge tool:
  ```bash
  git config --global merge.tool vscode
  ```
- Use GitHub/GitLab merge request features

## 🎨 Understanding Conflict Markers

```javascript
// This is what's in your current branch
let x = 1;
// This is what's incoming from the other branch
let x = 2;
```

**What each marker means:**

- `<<<<<<< HEAD` - Start of your current changes
- `=======` - Separator between versions
- `>>>>>>> branch-name` - End of incoming changes

## 🎓 Advanced: Three-Way Merge

Git uses three-way merge combining:

1. **Base** - Common ancestor commit
2. **Ours** - Your current branch (HEAD)
3. **Theirs** - The branch being merged in

To see the base version during a conflict:

```bash
git show :1:path/to/file  # Common ancestor
git show :2:path/to/file  # Your version (HEAD)
git show :3:path/to/file  # Their version (branch)
```

## 🚨 Conflict Resolution Strategies

### Strategy 1: Keep Ours

```bash
git checkout --ours path/to/file
git add path/to/file
```

### Strategy 2: Keep Theirs

```bash
git checkout --theirs path/to/file
git add path/to/file
```

### Strategy 3: Manual Resolution (Recommended)

- Review both versions carefully
- Combine the best parts
- Test thoroughly
- Commit with descriptive message

## ✅ Verification Checklist

After resolving conflicts, always:

- [ ] Remove ALL conflict markers
- [ ] Test that your code runs without errors
- [ ] Review the changes with `git diff`
- [ ] Run any tests if available
- [ ] Commit with a clear message describing the resolution

## 🆘 Emergency Commands

**Abort a merge:**

```bash
git merge --abort
```

**Abort a rebase:**

```bash
git rebase --abort
```

**Undo last commit (keeps changes):**

```bash
git reset --soft HEAD~1
```

**See what changed:**

```bash
git diff
git diff --staged
```

## 🎯 Practice Challenge

Try this challenge to test your skills:

1. Create 3 branches simultaneously
2. Have each branch modify the same files
3. Merge them all into main one by one
4. Resolve all conflicts correctly
5. Ensure the final code works perfectly

**Bonus:** Create a "conflict resolution log" where you document each conflict and how you resolved it!

---

**Remember:** Merge conflicts are normal and happen to everyone! The key is staying calm, understanding both changes, and making thoughtful decisions about how to combine them. Happy merging! 🚀
