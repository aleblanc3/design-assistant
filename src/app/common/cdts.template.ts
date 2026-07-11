export const CDTS_TEMPLATE_ENG = `<!DOCTYPE html>
<html class="no-js" dir="ltr" lang="en" xmlns="https://www.w3.org/1999/xhtml">
    <head prefix="og: https://ogp.me/ns#">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <!-- Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html -->
        <title>{{TITLE}}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <link rel="schema.dcterms" href="https://purl.org/dc/terms/">
        <!-- Meta data -->
        <meta name="description" content="{{DESCRIPTION}}">
        <meta name="keywords" content="{{KEYWORDS}}">
        <meta name="author" content="Canada Revenue Agency">
        <meta name="dcterms.creator" content="Canada Revenue Agency">
        <meta name="robots" content="{{ROBOTS}}">
        <meta name="dcterms.language" title="ISO639-2/T" content="eng">
        <meta name="dcterms.audience" content="general public">
        <meta name="dcterms.spatial" content="Canada">
        <meta name="dcterms.type" content="service description">
        <meta name="dcterms.identifier" content="Canada_Revenue_Agency">
        <!-- Meta data -->
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/méli-mélo/2025-12-mille-iles.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
        <!-- START of GitHub only testing banner CSS -->
        <link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
        <!-- END of GitHub only testing banner CSS -->
        {{STYLES}}
        <link href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico" rel="shortcut icon">
    </head>
    <body vocab="https://schema.org/" typeof="WebPage" resource="#wb-webpage">
        <noscript>
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/refTop.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/refTop.html" -->
        </noscript>
        <!-- Load closure template scripts -->
        <!--<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/compiled/soyutils.js"></script>-->
        <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/cdts/compiled/wet-en.js"></script>
        <!-- START of GitHub only template section -->
        <data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="true"></data>
        <data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-e.html"></data>
        <data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
        <div id="site-banner-inc" class="wb-disable-allow" data-ajax-replace="https://cra-test-arc.canada.ca/core-prototype/source/includes/site-banner-e.inc"></div>
        <!-- END of GitHub only template section -->
        <div id="def-top">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/top-en.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/top-en.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defTop = document.getElementById("def-top");
            defTop.outerHTML = wet.builder.top({
                lngLinks: [{
                    lang: "fr", 
                    href: "{{FRENCH}}", 
                    text: "Français"
                }], 
                customSearch: [{
                    action: "https://www.canada.ca/en/revenue-agency/search.html", 
                    placeholder: "CRA", 
                    method: "get", 
                }], 
                auth: [{
                    type: "contextual", 
                    label: "sign in", 
                    labelExtended: "CRA sign in", 
                    link: "https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html"
                }], 
                breadcrumbs: [{{BREADCRUMBS}}]
            });
        </script>
        <!-- Write closure template -->
        <div class="container">
            <div class="row">
                <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">
                    {{HEADER}}

                    {{CONTENT}}

                    <section class="pagedetails">
                        <h2 class="wb-inv">Page details</h2>
                        <div class="row">
                            <div class="col-sm-8 col-md-9 col-lg-9">
                                <div data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html" class="wb-disable-allow" data-feedback-section="{{TITLE}}" data-feedback-theme="Taxes" data-feedback-institution="."></div>
                            </div>
                        </div>
                        <dl id="wb-dtmd">
                            <dt>Date modified:</dt>
                            <dd><time property="dateModified">{{MODIFIED}}</time></dd>
                        </dl>
                    </section>
                    <div id="def-preFooter">
                        <!-- Write closure fall-back static file -->
                        <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/preFooter-en.html -->
                        <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/preFooter-en.html" -->
                    </div>
                </main>
            </div>
        </div>
        <!-- Write closure template -->
        <script>
            var defPreFooter = document.getElementById("def-preFooter");
            defPreFooter.outerHTML = wet.builder.preFooter({
                showShare: false, 
                pagedetails: false
            });
        </script>
        <div id="def-footer">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-en.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-en.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defFooter = document.getElementById("def-footer");
            defFooter.outerHTML = wet.builder.footer({
                privacyLink: {
                    href: "https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html"
                }, 
                contextualFooter: {
                    title: "Canada Revenue Agency (CRA)", 
                    links: [{
                        text: "Contact the CRA", 
                        href: "https://www.canada.ca/en/revenue-agency/corporate/contact-information.html"
                    }, {
                        text: "Update your information", 
                        href: "https://www.canada.ca/en/revenue-agency/services/update-information-cra.html"
                    }, {
                        text: "About the CRA", 
                        href: "https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra.html"
                    }]
                }
            });
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"></script>
        <span id="wb-rsz" class="wb-init">&nbsp;</span>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"></script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/méli-mélo/2025-12-mille-iles.min.js"></script>
        <script src="{{DEPTH}}source/scripts/external-link-detour.js"></script>
        {{SCRIPTS}}
    </body>
</html>`

export const CDTS_TEMPLATE_FRA = `<!DOCTYPE html>
<html class="no-js" dir="ltr" lang="fr" xmlns="https://www.w3.org/1999/xhtml">
    <head prefix="og: https://ogp.me/ns#">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <!-- Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html -->
        <title>{{TITLE}}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <link rel="schema.dcterms" href="https://purl.org/dc/terms/">
        <!-- Meta data -->
        <meta name="description" content="{{DESCRIPTION}}">
        <meta name="keywords" content="{{KEYWORDS}}">
        <meta name="author" content="Agence du revenu du Canada">
        <meta name="dcterms.creator" content="Agence du revenu du Canada">
        <meta name="robots" content="{{ROBOTS}}">
        <meta name="dcterms.language" title="ISO639-2/T" content="fra">
        <meta name="dcterms.audience" content="general public">
        <meta name="dcterms.spatial" content="Canada">
        <meta name="dcterms.type" content="service description">
        <meta name="dcterms.identifier" content="Agence_du_revenu_du_Canada">
        <!-- Meta data -->
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
        <link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/méli-mélo/2025-12-mille-iles.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
        <!-- START of GitHub only testing banner CSS -->
        <link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
        <!-- END of GitHub only testing banner CSS -->
        {{STYLES}}
        <link href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico" rel="shortcut icon">
    </head>
    <body vocab="https://schema.org/" typeof="WebPage" resource="#wb-webpage">
        <noscript>
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/refTop.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/refTop.html" -->
        </noscript>
        <!-- Load closure template scripts -->
        <!--<script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/compiled/soyutils.js"></script>-->
        <script src="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/cdts/compiled/wet-fr.js"></script>
        <!-- START of GitHub only template section -->
        <data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="true"></data>
        <data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-f.html"></data>
        <data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
        <div id="site-banner-inc" class="wb-disable-allow" data-ajax-replace="https://cra-test-arc.canada.ca/core-prototype/source/includes/site-banner-f.inc"></div>
        <!-- END of GitHub only template section -->
        <div id="def-top">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/top-fr.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/top-fr.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defTop = document.getElementById("def-top");
            defTop.outerHTML = wet.builder.top({
                lngLinks: [{
                    lang: "en", 
                    href: "{{ENGLISH}}", 
                    text: "English"
                }], 
                customSearch: [{
                    action: "https://www.canada.ca/fr/agence-revenu/recherche.html", 
                    placeholder: "ARC", 
                    method: "get", 
                }], 
                auth: [{
                    type: "contextual", 
                    label: "Se connecter", 
                    labelExtended: "Se connecter à l'ARC", 
                    link: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-ouverture-session-arc.html"
                }], 
                breadcrumbs: [{{BREADCRUMBS}}]
            });
        </script>
        <!-- Write closure template -->
        <div class="container">
            <div class="row">
                <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">
                    {{HEADER}}

                    {{CONTENT}}

                    <section class="pagedetails">
                        <h2 class="wb-inv">Détails de la page</h2>
                        <div class="row">
                            <div class="col-sm-8 col-md-9 col-lg-9">
                                <div data-ajax-replace="https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-fr.html" class="wb-disable-allow" data-feedback-section="{{TITLE}}" data-feedback-theme="Taxes" data-feedback-institution="."></div>
                            </div>
                        </div>
                        <dl id="wb-dtmd">
                            <dt>Date de modification :</dt>
                            <dd><time property="dateModified">{{MODIFIED}}</time></dd>
                        </dl>
                    </section>
                    <div id="def-preFooter">
                        <!-- Write closure fall-back static file -->
                        <!-- /ROOT/etc/designs/canada/cdts/gcweb/v4_0_43/cdts/static/preFooter-fr.html -->
                        <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/preFooter-fr.html" -->
                    </div>
                </main>
            </div>
        </div>
        <!-- Write closure template -->
        <script>
            var defPreFooter = document.getElementById("def-preFooter");
            defPreFooter.outerHTML = wet.builder.preFooter({
                showShare: false, 
                pagedetails: false
            });
        </script>
        <div id="def-footer">
            <!-- Write closure fall-back static file -->
            <!-- /ROOT/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-fr.html -->
            <!--#include virtual="/app/cls/WET/gcweb/v4_0_43/cdts/static/footer-fr.html" -->
        </div>
        <!-- Write closure template -->
        <script>
            var defFooter = document.getElementById("def-footer");
            defFooter.outerHTML = wet.builder.footer({
                privacyLink: {
                    href: "https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html"
                }, 
                contextualFooter: {
                    title: "Agence du revenu du Canada (ARC)", 
                    links: [{
                        text: "Contacter l'ARC", 
                        href: "https://www.canada.ca/fr/agence-revenu/organisation/coordonnees.html"
                    }, {
                        text: "Mettre à jour vos renseignements", 
                        href: "https://www.canada.ca/fr/agence-revenu/services/mettre-a-jour-renseignements-arc.html"
                    }, {
                        text: "À propos de l'ARC", 
                        href: "https://www.canada.ca/fr/agence-revenu/organisation/a-propos-agence-revenu-canada-arc.html"
                    }]
                }
            });
        </script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"></script>
        <span id="wb-rsz" class="wb-init">&nbsp;</span>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"></script>
        <script src="https://www.canada.ca/etc/designs/canada/wet-boew/méli-mélo/2025-12-mille-iles.min.js"></script>
        <script src="{{DEPTH}}source/scripts/external-link-detour.js"></script>
        {{SCRIPTS}}
    </body>
</html>`

export const EXIT_PAGE_TEMPLATE_ENG = `<!DOCTYPE html>
<html class="no-js" lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<title>The page you have requested is outside this CRA testing environment - Canada.ca</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="dcterms.language" content="eng">
<meta name="robots" content="noindex, nofollow">
<link rel="shortcut icon" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico" >
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
<link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
</head>
<body vocab="http://schema.org/" typeof="WebPage">
<nav><ul id="wb-tphp">
    <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Skip to main content</a></li>
</ul></nav>
<data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="false"></data>
<data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-e.html"></data>
<data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
<header>
    <div id="wb-bnr" class="container"><div class="row">
        <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="https://www.canada.ca/en.html" property="url">
                <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="Government of Canada" property="logo">
            </a>
        </div>
    </div></div>
</header>
<main class="container" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
    <h1 property="name" id="wb-cont">The page you have requested is outside this CRA testing environment</h1>
    <p>Please press the back button to return to the previous page.</p>
    <ul class="list-inline">
        <li><button id="back" class="btn btn-call-to-action btn-lg" type="button">Go Back!</button></li>
        <li id="exitLink" class="hidden"><button id="leavesitelnk" class="btn btn-link btn-lg" type="button">Leave the test site</button></li>
        <li id="exitWETLink" class="hidden"><span class="wb-exitscript wb-exitscript-urlparam"></span></li>
    </ul>
    <section class="pagedetails">
        <h2 class="wb-inv">Page details</h2>
        <dl id="wb-dtmd"><dt>Date modified:&#160;</dt><dd><time property="dateModified">{{MODIFIED}}</time></dd></dl>
    </section>
</main>
<footer id="wb-info">
    <div class="gc-sub-footer"><div class="container d-flex align-items-center">
        <nav><ul>
            <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
            <li><a href="https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html">Privacy</a></li>
        </ul></nav>
        <div class="wtrmrk align-self-end">
            <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" alt="Symbol of the Government of Canada">
        </div>
    </div></div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha384-rY/jv8mMhqDabXSo+UCggqKtdmBfd3qC2/KvyTDNQ6PcUJXaxK1tMepoQda4g5vB" crossorigin="anonymous"></script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"></script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"></script>
<script src="{{DEPTH}}source/scripts/external-link-detour.js"></script>
<script src="https://cra-test-arc.canada.ca/core-prototype/source/scripts/exit-page.js"></script>
</body>
</html>`;

export const EXIT_PAGE_TEMPLATE_FRA = `<!DOCTYPE html>
<html class="no-js" lang="fr" dir="ltr">
<head>
<meta charset="utf-8">
<title>La page que vous avez demandée est à l'extérieur de cet environnement de test de l'ARC - Canada.ca</title>
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="dcterms.language" content="fra">
<meta name="robots" content="noindex, nofollow">
<link rel="shortcut icon" href="https://www.canada.ca/etc/designs/canada/cdts/gcweb/v5_0_4/wet-boew/assets/favicon.ico">
<link rel="stylesheet" href="https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css">
<link rel="stylesheet" href="https://cra-test-arc.canada.ca/core-prototype/source/css/testing-banner.css">
</head>
<body vocab="http://schema.org/" typeof="WebPage">
<nav><ul id="wb-tphp">
    <li class="wb-slc"><a class="wb-sl" href="#wb-cont">Passer au contenu principal</a></li>
</ul></nav>
<data id="devoptions" data-loc-storage="gitCRATemplateDevOptions" value="false"></data>
<data id="exitpage" data-exit-by-url="false" data-mod-link-file="{{DEPTH}}source/data/exclude-redirect-links.json" value="{{DEPTH}}source/exit-intent-f.html"></data>
<data id="relextlnk" data-origin="https://www.canada.ca" value="false"></data>
<header>
    <div id="wb-bnr" class="container"><div class="row">
        <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="https://www.canada.ca/fr.html" property="url">
                <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-fr.svg" alt="Gouvernement du Canada" property="logo">
            </a>
        </div>
    </div></div>
</header>
<main class="container" property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement">
    <h1 property="name" id="wb-cont">La page que vous avez demandée est à l'extérieur de cet environnement de test de l'ARC</h1>
    <p>Veuillez appuyer sur le bouton de retour pour revenir à la page précédente.</p>
    <ul class="list-inline">
        <li><button id="back" class="btn btn-call-to-action btn-lg" type="button">Retour!</button></li>
        <li id="exitLink" class="hidden"><button id="leavesitelnk" class="btn btn-link btn-lg" type="button">Quitter le site de test</button></li>
        <li id="exitWETLink" class="hidden"><span class="wb-exitscript wb-exitscript-urlparam"></span></li>
    </ul>
    <section class="pagedetails">
        <h2 class="wb-inv">Détails de la page</h2>
        <dl id="wb-dtmd"><dt>Date de modification&#160;:&#160;</dt><dd><time property="dateModified">{{MODIFIED}}</time></dd></dl>
    </section>
</main>
<footer id="wb-info">
    <div class="gc-sub-footer"><div class="container d-flex align-items-center">
        <nav><ul>
            <li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>
            <li><a href="https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html">Confidentialité</a></li>
        </ul></nav>
        <div class="wtrmrk align-self-end">
            <img src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" alt="Symbole du gouvernement du Canada">
        </div>
    </div></div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha384-rY/jv8mMhqDabXSo+UCggqKtdmBfd3qC2/KvyTDNQ6PcUJXaxK1tMepoQda4g5vB" crossorigin="anonymous"></script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/wet-boew.min.js"></script>
<script src="https://www.canada.ca/etc/designs/canada/wet-boew/js/theme.min.js"></script>
<script src="{{DEPTH}}source/scripts/external-link-detour.js"></script>
<script src="https://cra-test-arc.canada.ca/core-prototype/source/scripts/exit-page.js"></script>
</body>
</html>`;

// Based on: https://cra-test-arc.canada.ca/core-prototype/source/scripts/external-link-detour.js
// Adapted for local prototype use - async fix ensures exclude list loads before adjusting links
export const LINK_DETOUR_JS = `/*
* GitHub only script
*
* Replaces all external links with a link to exit intent page or replaces links with designated replace link found in JSON file
*
*/

"use strict";

//  exitPage.value = "exit-intent-e.html", 
//  exitPage.dataset.exitByUrl = "false", 
//  exitPage.dataset.modLinkFile = "data/exclude-redirect-links.json", 
//  relExternalLnk.value = "false", 
//  relExternalLnk.dataset.origin = "https://www.canada.ca", 

let exitPage = document.getElementById("exitpage");
let relExternalLnk = document.getElementById("relextlnk");
let inlineStyleText1, inlineStyleText2, 
    visitedLinkStyle = document.createElement("style"), 
    linkExcludes = [], 
    adjustLinks = function adjustLinks(elm, hrefSelector, actionSelector, formActionSelector, destStartPath) {
        let linkExcludeIndex = function linkExcludeIndex(testURI) {
                return linkExcludes.findIndex(function findlink(linkArr) {
                    if ("origin" in linkArr) {
                        return linkArr.origin.toLowerCase() === testURI.toLowerCase();
                    }
                }, testURI);
            }, 
            adjustHref = function adjustHref(el, destStartPath) {
                let adjustedURI = el, 
                    replaceChar = ["?", "#", "&"];

                if (destStartPath !== "") {
                    adjustedURI = new URL(adjustedURI, destStartPath).href;
                }
                replaceChar.forEach(function entityReplace(arrEl) {
                    adjustedURI = adjustedURI.replace(arrEl, encodeURIComponent(arrEl));
                }, adjustedURI);
                return adjustedURI;
            }, 
            updateFormSubmit = function updateFormSubmit(formEl, formAttr, exitPageURI) {
                let hiddenInEl;

                hiddenInEl = document.createElement("input");
                hiddenInEl.value = adjustHref(formEl[formAttr], destStartPath);
                hiddenInEl.name = "uri";
                hiddenInEl.type = "hidden";
                formEl.append(hiddenInEl);
                formEl[formAttr] = exitPageURI;
            };

        if (exitPage !== null) {
            if (hrefSelector !== "") {
                elm.querySelectorAll(hrefSelector).forEach(function updateExitHref(hrefElm) {
                    const maxURILength = 2048;
                    let urlObj, queryHash, 
                        pagetitle = encodeURIComponent(hrefElm.innerText), 
                        exitPageURI = exitPage.value, 
                        destURI = adjustHref(hrefElm.href, destStartPath), 
                        currentURI = hrefElm.protocol + "//" + hrefElm.hostname + hrefElm.pathname, 
                        lnkExclIdx = linkExcludeIndex(currentURI);

                    if (lnkExclIdx === -1) {
                        if ("exitByUrl" in exitPage.dataset && exitPage.dataset.exitByUrl.toLowerCase() === "true") {
                            urlObj = { "url": exitPageURI };
                            hrefElm.dataset.wbExitscript = JSON.stringify(urlObj);
                            hrefElm.classList.add("wb-exitscript");
                        } else {
                            if (pagetitle === "") {
                                pagetitle = encodeURIComponent(hrefElm.textContent);
                            }
                            switch (true) {
                                case (destURI.length > 0 && exitPageURI.length + destURI.length + 5 <= maxURILength):
                                    if (destURI.length > 0) {
                                        exitPageURI = exitPageURI + "?uri=" + destURI;
                                    }
                                // falls through
                                case (pagetitle.length > 0 && exitPageURI + pagetitle.length + 11 <= maxURILength):
                                    if (pagetitle.length > 0) {
                                        exitPageURI = exitPageURI + "&pagetitle=" + pagetitle;
                                    }
                            }
                            hrefElm.href = exitPageURI;
                        }
                    } else if ("destination" in linkExcludes[lnkExclIdx] === true) {
                        queryHash = hrefElm.href.substring(linkExcludes[lnkExclIdx].origin.length);
                        if ("exitByUrl" in exitPage.dataset && exitPage.dataset.exitByUrl.toLowerCase() === "true") {
                            urlObj = { "url": linkExcludes[lnkExclIdx].destination + queryHash };
                            hrefElm.dataset.wbExitscript = JSON.stringify(urlObj);
                            hrefElm.classList.add("wb-exitscript");
                        } else {
                            hrefElm.href = linkExcludes[lnkExclIdx].destination + queryHash;
                        }
                    }
                });
                if ("exitByUrl" in exitPage.dataset && exitPage.dataset.exitByUrl.toLowerCase() === "true") {
                    $(".wb-exitscript").trigger("wb-init.wb-exitscript");
                }
            }

            if (actionSelector !== "") {
                elm.querySelectorAll(actionSelector).forEach(function updateExitAction(actionElm) {
                    let queryHash, 
                        exitPageURI = exitPage.value, 
                        currentURI = actionElm.protocol + "//" + actionElm.hostname + actionElm.pathname, 
                        lnkExclIdx = linkExcludeIndex(currentURI);

                    actionElm.method = "GET";
                    if (lnkExclIdx === -1) {
                        updateFormSubmit(actionElm, "action", exitPageURI);
                    } else if ("destination" in linkExcludes[lnkExclIdx] === true) {
                        queryHash = actionElm.href.substring(linkExcludes[lnkExclIdx].origin.length);
                        updateFormSubmit(actionElm, "action", linkExcludes[lnkExclIdx].destination + queryHash);
                    }
                });
            }

            if (formActionSelector !== "") {
                elm.querySelectorAll(formActionSelector).forEach(function updateExitForm(formActionElm) {
                    let queryHash, 
                        exitPageURI = exitPage.value, 
                        currentURI = formActionElm.protocol + "//" + formActionElm.hostname + formActionElm.pathname, 
                        lnkExclIdx = linkExcludeIndex(currentURI);

                    if (lnkExclIdx === -1) {
                        updateFormSubmit(formActionElm, "formaction", exitPageURI);
                    } else if ("destination" in linkExcludes[lnkExclIdx] === true) {
                        queryHash = formActionElm.href.substring(linkExcludes[lnkExclIdx].origin.length);
                        updateFormSubmit(formActionElm, "formaction", linkExcludes[lnkExclIdx].destination + queryHash);
                    }
                });
            }
        }
    }, 
    getDomain = function (url) {
        let pattern = new RegExp("^(https?:\/\/[^\/]+\/[^\/]*\/?)"), 
            domains = pattern.exec(url);

        if (domains !== null) {
            return domains[0];
        }
        return "";
    }, 
    rootDomain = getDomain(window.location.origin + window.location.pathname), 
    defaultadjustLinks = function defaultadjustLinks(elm, isAjaxed, relExternalLnk) {
        adjustLinks(elm, "a[href^='http']:not([href^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript), area[href^='http']:not([href^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript)", "form[action^='http']:not([action^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript)", "input[formaction^='http']:not([formaction^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript), button[formaction^='http']:not([formaction^='" + rootDomain + "'], [formaction^='/'], [data-exit='false'], .wb-exitscript)", "");
        if ((relExternalLnk && relExternalLnk.dataset.origin !== "") && (relExternalLnk.value.toLowerCase() === "true" || isAjaxed === true)) {
            adjustLinks(elm, "a[href^='/']:not([data-exit='false'], .wb-exitscript), area[href^='/']:not([data-exit='false'], .wb-exitscript)", "form[action^='/']:not([data-exit='false'], .wb-exitscript)", "input[formaction^='/']:not([data-exit='false'], .wb-exitscript), button[formaction^='/']:not([data-exit='false'], .wb-exitscript)", relExternalLnk.dataset.origin);
        }
    };

//document.addEventListener("readystatechange", function(event) {
//    if (event.target.readyState === "complete") {

        //load link exclude JSON file
        if ("modLinkFile" in exitPage.dataset && exitPage.dataset.modLinkFile !== "") {
            $.getJSON(exitPage.dataset.modLinkFile, function (data) {
                linkExcludes = data;
            }).always(function() {
                document.addEventListener("wet-boew-ready", function() {
                    defaultadjustLinks(this, false, relExternalLnk);
                });
            });
        } else {
            document.addEventListener("wet-boew-ready", function() {
                defaultadjustLinks(this, false, relExternalLnk);
        });
    }

        //Remove visited link highlighting from links to exit page
        if (exitPage !== null) {
            inlineStyleText1 = "Not to be copied to Canada.ca";
            inlineStyleText2 = "CSS for GitHub specific elements";
            if (document.documentElement.lang === "fr") {
                inlineStyleText1 = "Ne pas copier sur Canada.ca";
                inlineStyleText2 = "CSS pour les éléments spécifiques à GitHub";
            }
            visitedLinkStyle.innerHTML = "/*\n*** " + inlineStyleText1 + " ***\n\n" + inlineStyleText2 + "\n*//\n\n a[href*='" + exitPage.value + "']:visited { color:inherit; }\n.btn-primary[href*='" + exitPage.value + "']:visited, .btn-success[href*='" + exitPage.value + "']:visited, .btn-info[href*='" + exitPage.value + "']:visited, .btn-danger[href*='" + exitPage.value + "']:visited { color: #ffffff; }\n.btn-default[href*='" + exitPage.value + "']:visited { color: #335075; }\n.btn-warning[href*='" + exitPage.value + "']:visited { color: #000000; }\n";
            document.head.insertAdjacentHTML("beforeend", visitedLinkStyle);
        }

//    }
//});

// changes all external site links and forms to go to destination link
document.addEventListener("wet-boew-ready", function() {
    defaultadjustLinks(this, false, relExternalLnk);
});

// changes all GCM Menu external site links and forms to go to destination link
//document.addEventListener("readystatechange", function(event) {
//    if (event.target.readyState === "complete") {
        $(".gcweb-menu").on("wb-ready.gcweb-menu", function () {
            adjustLinks(this, ".gcweb-menu a[href^='http']:not([href^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript), .gcweb-menu area[href^='http']:not([href^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript)", ".gcweb-menu form[action^='http']:not([action^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript)", ".gcweb-menu input[formaction^='http']:not([formaction^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript), .gcweb-menu button[formaction^='http']:not([formaction^='" + rootDomain + "'], [data-exit='false'], .wb-exitscript)", "");
            if (relExternalLnk && relExternalLnk.value.toLowerCase() === "true" && relExternalLnk.dataset.origin !== "") {
                adjustLinks(this, ".gcweb-menu a[href^='/']:not([data-exit='false'], .wb-exitscript), .gcweb-menu area[href^='/']:not([data-exit='false'], .wb-exitscript)", ".gcweb-menu form[action^='/']:not([data-exit='false'], .wb-exitscript)", ".gcweb-menu input[formaction^='/']:not([data-exit='false'], .wb-exitscript), .gcweb-menu button[formaction^='/']:not([data-exit='false'], .wb-exitscript)", relExternalLnk.dataset.origin);
            }
        });
//    }
//});

// changes all AJAXed external site links and forms to go to destination link
//document.addEventListener("readystatechange", function(event) {
//    if (event.target.readyState === "complete") {
        $("[data-ajax-after], [data-ajax-append], [data-ajax-before], [data-ajax-prepend], [data-ajax-replace]").on("wb-contentupdated", function () {
            if (relExternalLnk && relExternalLnk.dataset.origin !== "") {
                this.querySelectorAll("[icon^='/'], [poster^='/'], [src^='/'], [srcset^='/'], [data^='/']").forEach(function updateAjaxLinks(ajaxElm) {
                    let elm = ajaxElm, 
                        attrType = ["data", "icon", "poster", "src", "srcset"];

                    attrType.forEach(function checkAttr(attrItem) {
                        let attrValue;

                        if (elm.hasAttribute(attrItem) === true) {
                            attrValue = elm.getAttribute(attrItem);
                            if (attrValue.startsWith("/") === true) {
                                elm.setAttribute(attrItem, relExternalLnk.dataset.origin + attrValue);
                                return;
                            }
                        }
                    }, elm)
                });
            }
            defaultadjustLinks(this, true, relExternalLnk);
        });
//    }
//});`