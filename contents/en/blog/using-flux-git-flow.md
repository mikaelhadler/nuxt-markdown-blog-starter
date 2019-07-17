---
name: 'using-flux-git-flow'
title: How Git Flow works and how I used it
year: 26 Setember 2019
color: '#edece7'
isTextColorDark: true
trans: 'usando-flow-git-flow'
id: 'vuex-what-when'
description: |
  Git Flow basics, how I make this in my world.
---

Git flow as version control system
Mikael Hadler
Mikael Hadler
Sep 26, 2018 · 4 min read
This article intends to expose a flow utilisation approach.
If you have already worked with git as the main versioning control tool, you may have already seen several approaches for using and controlling branches in a production or personal scenario.
If you are new to git, this stream will help you to have greater familiarity with how businesses and open-source projects usually use their workflows.
It is very common to see people using only a branch to do commits on personal projects. This is not wrong, it is very quite common to control everything in a branch when developing for yourself, but the scenario changes a lot when we have to interact with more developers or contributors, whether in an opensource or private project.
In such cases, it is extremely important that you have complete control over what is being produced by your team, where at the same time, failures are corrected, new features are implemented, and your production code is fully functional delivered to the customer.
At this point, git flow helps us, look at the image below to understand better:

Git Flow Model Nvie
The master will contain all already tested and versioned code that will be delivered to the client and develop is where every workflow will occur before the versioned release will be merged in the master.
The development branch should always contain the most current code, where the branches of resources will be forked based on it.
For example, suppose you need to create a feature that will change the entire flow and interface of a component, how would we create our branch?
Listing branches
Make sure that the branch develop exists in your remote repository by listing its local and remote branches:
$ git branch -a
If it is not, synchronize your remote repository, check it out by creating your branch develop and send it to your remote repository:
$ git fetch origin && git checkout -b develop && git push origin develop
Naming Pattern suggestion
After creating the develop branch, where all the development will happen, create the respective branch for its implementation, remember to keep a naming pattern to facilitate the understanding as it is suggested in git flow:
feature: for new implementations.
release: to end the release and tags.
hotfix: to resolve a critical issue in production that can not expect a new release.
Feature branch
In this case, as we are already in develop:
$ git checkout -b feature/new-component
Once created, you work on your modification locally, if it is needed by another person to work on this same implementation you should share it to your remote repository:
$ git push origin feature/new-component
Great, implementation done, now it’s time to merge this feature with develop, to do this, checkout for the branch develop, merge the feature and update the remote:
$ git checkout develop && git merge feature/new-component && git push origin develop
Release branch
If there is no conflict, beauty, we are ready to release this implementation and submit it to the remote repository by creating the release branch and pushing:
$ git checkout -b release/v1.0.1 && git push origin release/v1.0.1
Tags
After the last tests, you can already make the version tag:
$ git tag -a v1.0.1 “Release of new component"
Remember, if a bug was identified during the process, you should treat this bug in the release branch, send it to the master and develop as well, causing the develop to always contain the fixes.
When inserting the tag, I like to use tag annotated, because it keeps information of who made the tag, date and hash. If you do not want this information, simplify:
$ git tag v1.0.1
Now, let’s check if the tag was created and send it to the remote repository:
$ git show v1.0.1 && git push v1.0.1
If everything went well, your tag will be created and we are able to merge this small release in the master:
$ git checkout master && git merge release/v1.0.1

Finally, in this way, we get information from all stages of the development, aside from standardizing the nomenclature of the branches making it easier to pull a log.
Tip: There is a plugin to make it easier to create and organize your repository using the git-flow stream if you plug in that mass plugin!
Conclusion
In short, we learned how to control our branch separated by its responsibilities, not impacting on the master that is where our stable code stays faithful, we use tags to version our releases and have a much more flexible control.
If you have forgotten some important concept, leave your comment as soon as possible make the correction, alright?
See you later.
Original post in portuguese:
https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04