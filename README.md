
<p>I (Lawrence Ng) currently work with a senior Magento developer, who takes care of many backend modules/extensions/customisations while I work on styling the site.
But I was once asked the question - "what can you do by yourself?" Below is my answer.</p>

<p><strong>PURPOSE of this Magento demo store:</strong>
The intention is to show my ability to change Magento via xml and phtml files, NOT to demonstrate design or styling via CSS, 
therefore the lack of styling is intentional.</p>

<p>I will progressively modify/add to this demo when I have time (I do this after hours and yes I do try to have a life outside web development :)</p>

<p>The URL is: <a href="http://www.lawmagento.com.au" target="_blank">www.lawmagento.com.au</a>

<p>The theme I am using is app/design/frontend/law/demo</p>

<p><strong>Change/Progress Log</strong></p>

<strong>Global</strong>
<ul>
<li>/layout/local.xml: added jquery and jquery no conflict files</li>
<li>/layout/local.xml: added extra CSS and jquery files</li>
<li>/template/page/html/header.phtml: changed logo html</li>
<li>/template/page/html/footer.phtml: changed html</li>
<li>/layout/page.xml: removed  default "footer_links" (site map, contact us links etc)</li>
<li>/template/newsletter/subscribe.phtml: changed html to Email Sign Up and added to footer via static block</li>
<li>/template/page/html/notices.phtml: changed default demo store message</li>
<li>/skin/frontend/law/demo/css/demo-style.scss: basic global colors in main CSS file is now pre-processed with SASS</li> 
</ul>

<strong>Top Menu</strong>
<ul>
<li>/template/page/html/topmenu.phtml: added custom mega menu static blocks</li>
<li>/template/page/html/header.phtml: added html to load promotion (free shipping, 20% off etc) static blocks</li>
<li>/layout/checkout.xml: removed default checkout link</li>
<li>/layout/local.xml: removed default wishlist link</li>
</ul>

<strong>Home Page</strong>
<ul>
<li>modified html so slider is full screen</li>
<li>CMS-Home: load slider and featured product/images static blocks</li>
</ul>

<strong>Category view</strong>
<ul>
<li>Admin Panel > Manage Categories: changed page layout to 2 column left sidebar</li>
<li>/layout/local.xml: removed name="left.newsletter" and name="tags_popular" blocks from left column</li>
<li>/template/catalog/product/list.phtml: changed catalog image size to 200px</li>
<li>/template/catalog/product/list.phtml: removed Compare and Add to wishlist</li>
<li>Admin Panel > Advanced: turned off Mage_Review module (hide the review stars and rating on category view)</li>
<li>/layout/catalog.xml: replaced "left.permanent.callout" with a static block</li>
<li>/template/catalog/product/list.phtml: showed NEW sticker for product that is new</li>
</ul>

<strong>Product View</strong>
<ul>
<li>/layout/catalog.xml: changed product page to 1 column</li>
<li>/layout/local.xml: removed Product Tag block</li>
<li>/template/catalog/product/view/media.phtml: set output image quality to 100% (disabled image compression)</li>
<li>/template/catalog/product/view.phtml: rearranged product details and layout</li>
<li>/template/catalog/product/view/addtocart.phtml: changed "add to cart" button to "Add to Bag"</li>
<li>/template/catalog/product/view/addto.phtml: disabled "Add to compare"</li>
<li>/template/catalog/product/view/description.phtml: added extra html wrapper for .product-collateral styling</li>
<li>/template/catalog/product/view/attributes.phtml: added extra html wrapper for .product-collateral styling</li>
<li>/layout/local.xml: added cloud zoom and fancybox files for product view only</li>
<li>/template/catalog/product/view/media.phtml: modified to work with cloud zoom and fancybox</li>
</ul>