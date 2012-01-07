---
layout: post
---

# Welcome to ember.js Documentation

## Basics

### Bindings

{{ site.time | date_to_xmlschema }}

{% highlight javascript linenos %}
App = Ember.Application.create({});

App.myController = Ember.Object.create({});
{% endhighlight %}