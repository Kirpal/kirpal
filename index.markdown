---
title: Web and Mobile Developer
description: I'm Kirpal Demian, a web and mobile developer studying CS at Northeastern University.
inline_styles:
  - home-critical.scss
linked_styles:
  - home-deferred.css
---
<section id="about">
  <picture>
    <source type="image/webp" srcset="/assets/images/portrait.webp">
    <source type="image/jpeg" srcset="/assets/images/portrait.jpg">
    <img src="/assets/images/portrait.jpg" alt="Me">
  </picture>
  <div>
    <h1>Hi! My name is {{site.firstname}} 👋</h1>
    <p>{{site.description}}</p>
  </div>
</section>

<a name="now"></a>
<section id="now">
  <h2>What I'm Doing Now <span id="now-date">({{site.data.now.date}})</span></h2>
  <ul class="no-dots">
    {% for item in site.data.now.items %}
      <li class="emoji-list-item" style="--list-emoji: '{{ item.emoji }} ';">{{item.content}}</li>
    {% endfor %}
  </ul>
</section>

<!-- <a name="writing"></a>
<section id="writing">
  <h2>My Writing</h2>
  <ul class="no-dots">
    {% for post in site.posts limit: 5 %}
      <li class="emoji-list-item" style="--list-emoji: '{{ post.tag }}'"><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    {% if site.posts.size > 5 %}
      <li><a href="/writing">More...</a></li>
    {% endif %}
  </ul>
</section> -->

<a name="projects"></a>
<section id="projects">
  <h2>My Projects</h2>
  {% for project in site.data.projects %}
    <div class="project full-bleed" style="background: {{project.color}}dd">
      <div class="{{project.type}}">
        <img class="screenshot " src="/assets/images/projects/{{project.image}}" alt="{{project.name}} Screenshot" loading="lazy">
        {% if project.type == "window" or project.type == "website" %}
          <div class="buttons close"></div>
          <div class="buttons minimize"></div>
          <div class="buttons maximize"></div>
        {% endif %}
        {% if project.type == "website" %}
          <div class="tab">
            <div class="tab-favicon" style="background: {{project.color}}"></div>
          </div>
        {% endif %}
      </div>

      <div class="information">
        <h1 class="information-name">{{project.name}}</h1>
        <p class="information-description">{{project.description}}</p>
        {% if project.url %}
          <a class="information-link" href="{{project.url}}" target="_BLANK" rel="noopener">Website</a>
        {% endif %}
        {% if project.github %}
          <a class="information-link" href="https://github.com/{{project.github}}" target="_BLANK" rel="noopener">Github</a>
        {% endif %}
        {% if project.comingSoon %}
          <a class="information-link disabled">Coming Soon...</a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</section>

<a name="tech"></a>
<section id="tech" class="full-bleed">
  <h2>My Tools</h2>
  {% for item in site.data.tech %}
    <div class="tech-item {{item.icon}}-tech-icon" title="{{item.name}}">
      <img class="tech-icon" src="/assets/images/icons/{{item.icon}}.svg" alt="{{ item.name }} icon">
      <span class="tech-name">{{item.name}}</span>
    </div>
  {% endfor %}
</section>

<a name="contact"></a>
<section id="contact" class="full-bleed">
  <h2 id="contact-title">Contact Me</h2>
  <div class="contact-section">
    <ul id="contact-info">
      {% for service in site.data.contact %}
        <li>
          <img class="contact-icon" src="/assets/images/icons/{{service.icon}}.svg" alt="Icon">
          <a class="contact-method" href="{{service.url}}" target="_BLANK" rel="noopener">{{service.name}}</a>
        </li>
      {% endfor %}
    </ul>
  </div>
</section>

<script src="/assets/js/spotify.js" type="text/javascript" defer></script>
