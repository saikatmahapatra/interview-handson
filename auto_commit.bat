set timestamp=%stamp%
git add .
git commit -m "modified on `%timestamp%`"
git push origin master 