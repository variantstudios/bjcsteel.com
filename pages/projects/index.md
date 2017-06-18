---
layout: page
title: Projects
permalink: /projects/
header_image_path: /assets/images/headers/projects.jpg
_comments:
  header_image_path: "The image should be a jpg scaled and cropped to 1200px wide by 350px tall."
pagination: 
  enabled: true
  collection: projects
---
<div class="editable"></div>
<div class="project-selection">
  {% assign items = paginator.posts  %}
  {% for item in items %}
    <article class="project">
      <a href="{{ item.url }}"><img src="{{ item.main_image_path }}" alt="{{ item.title }}" /></a>
      <div class="project-right">
        <header>
          <h4><a href="{{ item.url }}">{{ item.title }}</a></h4>
          <div class="proj-location">{{ item.location }}</div>
        </header>
        <p><b>Owner: </b>{{ item.owner }}</p>
        <p><b>Size: </b>{{ item.project_square_footage }} sq ft</p>
        <p><b>General Contractor: </b>{{ item.general_contractor }}</p>
        <p><b>Building Manufacturer: </b>{{ item.building_manufacturer }}</p>
        <div class="proj-link"><a href="{{ item.url }}">More Info.</a></div>
      </div>
    </article>
  {% endfor %}
</div>

<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}