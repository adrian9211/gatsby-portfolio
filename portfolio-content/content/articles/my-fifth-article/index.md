---
title: "GIT revert - all about simple command"
description: "Knowledge about GIT revert command"
date: "2023-03-01"
banner:
  src: "../../images/git.png"
  alt: "First Markdown Post"
categories:
- "GIT"
- "Tutorial"
keywords:
- "Example"
- "GIT"
- "Command"
- "Blog"
---
## Get it started

In Git, the "revert" command is used to undo a previous commit by creating a new commit that applies the opposite changes to the code.

![This is the alt tag.](../../images/commit.png)

## The syntax for the "revert" command is:

```code

git revert <commit>

```


Where <commit> is the ID of the commit that you want to revert.

When you run the "revert" command, Git will create a new commit that contains the opposite changes of the commit you specified. This allows you to undo the changes without actually deleting the original commit from the repository's history.

It's important to note that reverting a commit does not remove the changes from the code. Instead, it creates a new commit that undoes the changes made by the original commit. This means that you can still access the original changes if you need to in the future.


### Conclusion
In conclusion, the "git revert" command is a useful tool for undoing changes made in previous commits without completely deleting the commit from the repository's history. It creates a new commit that undoes the changes made by the original commit, allowing developers to easily undo changes and maintain a clear record of the repository's history. However, it's important to remember that reverting a commit does not remove the changes from the code, but rather creates a new commit that applies the opposite changes. Therefore, developers should use the "git revert" command carefully and consider the potential impact on the codebase before using it.



