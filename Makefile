deploy:
	tagName="v0.1.8"
	git add .
	git commit -m "tag $tagName"
	git tag $tagName -m "update tag deploy $tagName"
	git push origin $tagName

push:
	git add .
	# $(arg)="general commit message.."
	# if [ $(arg) -eq 1 ]; then msg="$(arg)"; fi
	git commit -m "$(arg)"
	git pull --rebase
	# git push origin main

test:
	echo "test $(arg)"