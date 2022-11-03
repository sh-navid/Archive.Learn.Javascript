# GIT
- _**Disclaimer**: This section is not an official resource and is for educational purposes only. The codes may be wrong or not suitable for a non-educational environment._
### Connect an offline folder 2 git repo
~~~git
git init
git add .
git remote add origin <Remote repository URL>
git pull origin master
~~~
### Merge 2 git repos
[link](https://medium.com/altcampus/how-to-merge-two-or-multiple-git-repositories-into-one-9f8a5209913f)
- [ ] TODO: check this link - Update content and use approporate format for sitation
~~~markdown
git remote add -f repo2merge git@github.com:https://github.com/<USER>/<REPO>
git merge repo2merge/master --allow-unrelated-histories
~~~
### Merge a subdirectory of another repository with git
--
### Add username and email to git
~~~markdown
git config --global user.name "<USERNAME>"
git config --global user.email "<EMAIL>"
~~~