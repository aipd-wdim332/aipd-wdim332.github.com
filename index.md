---
layout: default
title: PDX Interactive | An Open Discussion
tagline: optional tagline
---
{% include JB/setup %}

<section id="main">
  <div class="content">
    <h1>PDX Interactive</h1>
    <h2>AN OPEN DISCUSSION ON<br />
      MANAGING INTERACTIVE TEAMS</h2>
    <section class="rsvp-form">
      <div class="social">
        <a href="#facebook"><img border="0" src="{{ ASSET_PATH }}dev/images/facebook.png" height="32" width="32" alt="Find us on Facebook" /></a>
        <a href="Twitter"><img border="0" src="{{ ASSET_PATH }}dev/images/twitter.png" height="32" width="32" alt="Follow us on Twitter" /></a>
      </div>
      <form method="POST" action="/">
        <input type="text" name="email" id="email" placeholder="RSVP" />
        <input type="submit" name="submit" id="submit" />
      </form>
      <div class="tip">
        <span class="darkRed">Enter your email to</span> get involved
      </div>
    </section>
    <section id="www">
      <div class="outside">
        <h3 id="where">WHERE</h3>
        <article>Art Institute of Portland<br />
          Room: Open Space</article>
      </div>
      <div id="middle">
        <h3 id="when">WHEN</h3>
        <article>November 15th, 7pm</article>
      </div>
      <div class="outside">
        <h3 id="who">WHO</h3>
        <article>Industry professionals from a variety of backgrounds</article>
      </div>
      <div class="clear"></div>
    </section>
    <section id="about">
      <a href="http://goo.gl/maps/fYLNA" target="_blank"><img border="0" src="{{ ASSET_PATH }}dev/images/map_test.png" height="311" width="311" id="map" alt="" /></a>
      <h4>About</h4>
      <p>The Art Institute of Portland is hosting a panel discussion about best practices in interactive team management. Industry professionals from a variety of backgrounds will speak on topics including intra-team communications, project workflow strategies, managing client relationships, how to assemble and retain the ideal interactive team, and balancing budget vs. quality.</p>
          <br class="clear"/>
    </section>

  </div>
</section>

<section id="panelists">
  <div class="shadow">&nbsp;</div>
  <div class="content">
<!--     <img src="{{ ASSET_PATH }}dev/images/shadow.png" height="21" width="1020" alt="" /> -->
    <h4>PANELISTS</h4>
    {% for post in site.categories.profile %}
      {{ post.content }}
    {% endfor %}
    <br class="clear">
  </div>
</section>
