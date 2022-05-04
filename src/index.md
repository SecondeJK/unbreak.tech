---
layout: base.html
title: unbreak.tech
metaDescription: Unbreak.tech is a platform for MEN to educate other MEN about the need for change and equality in tech.
templateEngineOverride: njk
---

<ul class="articles">
  {% for key, article in articles %}
    <li class="articles__item">
      <div class="articles__itemMeta">
        {% if article.githubUsername %}
          <img src="https://github.com/{{ article.githubUsername }}.png" alt="{{ article.githubUsername }} GitHub avatar" class="articles__itemAvatar" />
        {% endif %}
        <p class="articles__itemAuthor">{{ article.author }}</p>
      </div>
      <h2 class="articles__itemTitle">{{ article.title }}</h2>
      <p class="articles__itemExcerpt">{{ article.excerpt }}</p>
      <a href="{{ article.url }}" target="_blank" rel="noreferrer" class="articles__itemLink" aria-label="Read {{ article.title }}">
        Read article
      </a>
    </li>
  {% endfor %}
</ul>
