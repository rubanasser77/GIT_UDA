Last login: Sun Dec 25 10:20:12 on ttys000
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % $ git config --global user.name "rubanasser77"
zsh: command not found: $
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % git config --global user.name "rubanasser77"

rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % git config --global user.email "aldayelruba@gmail.com"
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % git config --global color.ui auto
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % git config --global core.editor "atom --wait"
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % git config --global merge.conflictstyle diff3
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % git config --list
core.excludesfile=~/.gitignore
core.legacyheaders=false
core.quotepath=false
mergetool.keepbackup=true
push.default=simple
color.ui=auto
color.interactive=auto
repack.usedeltabaseoffset=true
alias.s=status
alias.a=!git add . && git status
alias.au=!git add -u . && git status
alias.aa=!git add . && git add -u . && git status
alias.c=commit
alias.cm=commit -m
alias.ca=commit --amend
alias.ac=!git add . && git commit
alias.acm=!git add . && git commit -m
alias.l=log --graph --all --pretty=format:'%C(yellow)%h%C(cyan)%d%Creset %s %C(white)- %an, %ar%Creset'
alias.ll=log --stat --abbrev-commit
alias.lg=log --color --graph --pretty=format:'%C(bold white)%h%Creset -%C(bold green)%d%Creset %s %C(bold green)(%cr)%Creset %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
alias.llg=log --color --graph --pretty=format:'%C(bold white)%H %d%Creset%n%s%n%+b%C(bold blue)%an <%ae>%Creset %C(bold green)%cr (%ci)' --abbrev-commit
alias.d=diff
alias.master=checkout master
alias.spull=svn rebase
alias.spush=svn dcommit
alias.alias=!git config --list | grep 'alias\.' | sed 's/alias\.\([^=]*\)=\(.*\)/\1\	 => \2/' | sort
include.path=~/.gitcinclude
include.path=.githubconfig
include.path=.gitcredential
diff.exif.textconv=exif
credential.helper=osxkeychain
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
user.name=rubanasser77
user.email=aldayelruba@gmail.com
color.ui=auto
merge.conflictstyle=diff3
core.editor=atom --wait
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % --list
zsh: command not found: --list
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % cd desktop
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 desktop % mkdir udacity-git-course

rubaaldayel@MacBook-Pro-alkhas-b-rby-2 desktop % cd udacity-git-course
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 udacity-git-course % mkdir new-git-project
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 udacity-git-course % cd new-git-project
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git init
Initialized empty Git repository in /Users/rubaaldayel/Desktop/udacity-git-course/new-git-project/.git/
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git rev-parse --abbrev-ref HEAD
HEAD
fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git rev-parse --abbrev-ref HEAD
master
HEAD
fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
zsh: command not found: master
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git branch --list
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git config --list command
error: wrong number of arguments
usage: git config [<options>]

Config file location
    --global              use global config file
    --system              use system config file
    --local               use repository config file
    -f, --file <file>     use given config file
    --blob <blob-id>      read config from given blob object

Action
    --get                 get value: name [value-regex]
    --get-all             get all values: key [value-regex]
    --get-regexp          get values for regexp: name-regex [value-regex]
    --get-urlmatch        get value specific for the URL: section[.var] URL
    --replace-all         replace all matching variables: name value [value_regex]
    --add                 add a new variable: name value
    --unset               remove a variable: name [value-regex]
    --unset-all           remove all matches: name [value-regex]
    --rename-section      rename section: old-name new-name
    --remove-section      remove a section: name
    -l, --list            list all
    -e, --edit            open an editor
    --get-color           find the color configured: slot [default]
    --get-colorbool       find the color setting: slot [stdout-is-tty]

Type
    --bool                value is "true" or "false"
    --int                 value is decimal number
    --bool-or-int         value is --bool or --int
    --path                value is a path (file or directory name)

Other
    -z, --null            terminate values with NUL byte
    --name-only           show variable names only
    --includes            respect include directives on lookup
    --show-origin         show origin of config (file, standard input, blob, command line)

rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git config --list
core.excludesfile=~/.gitignore
core.legacyheaders=false
core.quotepath=false
mergetool.keepbackup=true
push.default=simple
color.ui=auto
color.interactive=auto
repack.usedeltabaseoffset=true
alias.s=status
alias.a=!git add . && git status
alias.au=!git add -u . && git status
alias.aa=!git add . && git add -u . && git status
alias.c=commit
alias.cm=commit -m
alias.ca=commit --amend
alias.ac=!git add . && git commit
alias.acm=!git add . && git commit -m
alias.l=log --graph --all --pretty=format:'%C(yellow)%h%C(cyan)%d%Creset %s %C(white)- %an, %ar%Creset'
alias.ll=log --stat --abbrev-commit
alias.lg=log --color --graph --pretty=format:'%C(bold white)%h%Creset -%C(bold green)%d%Creset %s %C(bold green)(%cr)%Creset %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
alias.llg=log --color --graph --pretty=format:'%C(bold white)%H %d%Creset%n%s%n%+b%C(bold blue)%an <%ae>%Creset %C(bold green)%cr (%ci)' --abbrev-commit
alias.d=diff
alias.master=checkout master
alias.spull=svn rebase
alias.spush=svn dcommit
alias.alias=!git config --list | grep 'alias\.' | sed 's/alias\.\([^=]*\)=\(.*\)/\1\	 => \2/' | sort
include.path=~/.gitcinclude
include.path=.githubconfig
include.path=.gitcredential
diff.exif.textconv=exif
credential.helper=osxkeychain
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
user.name=rubanasser77
user.email=aldayelruba@gmail.com
color.ui=auto
merge.conflictstyle=diff3
core.editor=atom --wait
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
core.precomposeunicode=true
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % $ git config user.name
zsh: command not found: $
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git config user.name 
rubanasser77
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git config --global init.defaultBranch master
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git init
Reinitialized existing Git repository in /Users/rubaaldayel/Desktop/udacity-git-course/new-git-project/.git/
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % pwd
/Users/rubaaldayel/desktop/udacity-git-course/new-git-project
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % cd udacity-git-course
cd: no such file or directory: udacity-git-course
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % cd
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % cd desktop
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 desktop % cd udacity-git-course
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 udacity-git-course % git clone https://github.com/udacity/course-git-blog-project.git
Cloning into 'course-git-blog-project'...
remote: Enumerating objects: 166, done.
remote: Counting objects: 100% (33/33), done.
remote: Compressing objects: 100% (17/17), done.
remote: Total 166 (delta 10), reused 27 (delta 5), pack-reused 133
Receiving objects: 100% (166/166), 2.05 MiB | 46.00 KiB/s, done.
Resolving deltas: 100% (69/69), done.
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 udacity-git-course % cd course-git-blog-project
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 course-git-blog-project % git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 course-git-blog-project % cd new-git-project
cd: no such file or directory: new-git-project
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 course-git-blog-project % cd
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % cd desktop
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 desktop % cdudacity-git-course 
zsh: command not found: cdudacity-git-course
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 desktop % cd udacity-git-course
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 udacity-git-course % cd new-git-project
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % nano index.html
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % mkdir css
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % cd css
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 css % nano app.css
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 css % ls
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 css % nano app.css
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 css % cd desktop
cd: no such file or directory: desktop
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 css % cd
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 ~ % cd desktop
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 desktop % cd udacity-git-course
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 udacity-git-course % cd new-git-project
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % mkdir js
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 new-git-project % cd js
rubaaldayel@MacBook-Pro-alkhas-b-rby-2 js % nano app.js

  UW PICO 5.09                                            File: app.js                                               
















^G Get Help        ^O WriteOut        ^R Read File       ^Y Prev Pg         ^K Cut Text        ^C Cur Pos         
^X Exit            ^J Justify         ^W Where is        ^V Next Pg         ^U UnCut Text      ^T To Spell        
