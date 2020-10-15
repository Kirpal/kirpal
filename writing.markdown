---
title: Writing
description: I write about anything and everything that I am currently interested in, please let me know if you have any feedback or would like to discuss any of these posts. Enjoy!
---
# My Writing
I write about anything and everything that I am currently interested in, please let me know if you have any feedback or would like to discuss any of these posts. Enjoy!

{% for post in site.posts %}
  {% assign currentyear = post.date | date: "%Y" %}
  {% if currentyear != year %}
## {{ currentyear }}
  {% assign year = currentyear %} 
  {% endif %}

  - [{{ post.title }}]({{ post.url }})
{% endfor %}