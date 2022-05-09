---
layout: base.html
title: unbreak.tech
metaDescription: Unbreak.tech is a platform for MEN to educate other MEN about the need for change and equality in tech.
templateEngineOverride: njk
---

<ul class="links">
 {% for key, feat in featured %}
    <li class="links__item">
      <div class="links__itemMeta">
        {% if feat.githubUsername %}
          <img src="https://github.com/{{ feat.githubUsername }}.png" alt="{{ feat.githubUsername }} GitHub avatar" class="links__itemAvatar" />
        {% endif %}
        <p class="links__itemAuthor">{{ feat.author }}</p>
      </div>
      <h2 class="links__itemTitle">{{ feat.title }}</h2>
      <p class="links__itemExcerpt">{{ feat.excerpt }}</p>
      {% if feat.youtubeEmbedUrl %}
        <p>{{ feat.youtubeEmbedUrl }}</p>
      {% endif %}
      {% if feat.url %}
        <a href="{{ feat.url }}" target="_blank" rel="noreferrer" class="links__itemLink" aria-label="Read {{ feat.title }}">
          Read article
        </a>
      {% endif %}
    </li>
  {% endfor %}
  {% for key, link in links %}
    <li class="links__item">
      <div class="links__itemMeta">
        {% if link.githubUsername %}
          <img src="https://github.com/{{ link.githubUsername }}.png" alt="{{ link.githubUsername }} GitHub avatar" class="links__itemAvatar" />
        {% endif %}
        <p class="links__itemAuthor">{{ link.author }}</p>
      </div>
      <h2 class="links__itemTitle">{{ link.title }}</h2>
      <p class="links__itemExcerpt">{{ link.excerpt }}</p>
      {% if link.youtubeEmbedUrl %}
        <p>{{ link.youtubeEmbedUrl }}</p>
      {% endif %}
      {% if link.url %}
        <a href="{{ link.url }}" target="_blank" rel="noreferrer" class="links__itemLink" aria-label="Read {{ link.title }}">
          Read article
        </a>
      {% endif %}
    </li>
  {% endfor %}
</ul>
