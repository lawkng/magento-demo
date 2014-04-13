
I (Lawrence) currently work with a senior Magento developer, who takes care of many backend modules/extensions/customisations while I work on styling the site.
But I was once asked the question - "what can you do by yourself?" Below is my answer.

PURPOSE of this Magento demo store:
The intention is to show my ability to change Magento via xml and phtml files, NOT to demonstrate design or styling via CSS, 
therefore the lack of styling is intentional.

The theme I am using is app/design/frontend/law/demo


Change/Progress Log

== Global ==
* /layout/local.xml: added jquery and jquery no conflict files
* /layout/local.xml: added extra CSS and jquery files
* /template/page/html/header.phtml: changed logo html
* /template/page/html/footer.phtml: changed html
* /layout/page.xml: removed  default "footer_links" (site map, contact us links etc)
* /template/newsletter/subscribe.phtml: changed html to Email Sign Up and added to footer via static block
* /template/page/html/notices.phtml: changed default demo store message

== Top Menu ==
* /template/page/html/topmenu.phtml: added custom mega menu static blocks
* /template/page/html/header.phtml: added html to load promotion (free shipping, 20% off etc) static blocks
* /layout/checkout.xml: removed default checkout link 
* /layout/local.xml: removed default wishlist link

== Home Page ==
* modified html so slider is full screen
* CMS-Home: load slider and featured product/images static blocks

== Category view ==
* Admin Panel > Manage Categories: changed page layout to 2 column left sidebar
* /layout/local.xml: removed name="left.newsletter" and name="tags_popular" blocks from left column
* /template/catalog/product/list.phtml: changed catalog image size to 200px
* /template/catalog/product/list.phtml: removed Compare and Add to wishlist
* Admin Panel > Advanced: turned off Mage_Review module (hide the review stars and rating on category view)
* /layout/catalog.xml: replaced "left.permanent.callout" with a static block

== Product View ==
* /layout/catalog.xml: changed product page to 1 column
* /layout/local.xml: removed Product Tag block
* /template/catalog/product/view/media.phtml: set output image quality to 100% (disabled image compression)
* /template/catalog/product/view.phtml: rearranged product details and layout
* /template/catalog/product/view/addtocart.phtml: changed "add to cart" button to "Add to Bag"
* /template/catalog/product/view/addto.phtml: disabled "Add to compare"
* /template/catalog/product/view/description.phtml: added extra html wrapper for .product-collateral styling
* /template/catalog/product/view/attributes.phtml: added extra html wrapper for .product-collateral styling
