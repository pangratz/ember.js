---
layout: post
title: Blogging Like a Hacker
---

# Welcome to ember.js Documentation

## Basics

### Bindings

{% highlight javascript linenos %}
App = Ember.Application.create({});

App.listController = Ember.ArrayProxy.create({
	content: ['a', 'b']
});
{% endhighlight %}