/* Contao Open Source CMS :: Copyright (C) 2005-2012 Leo Feyer :: LGPL license */
var Theme={hoverRow:function(a,b){var c=$(a).getChildren();for(var d=0;d<c.length;d++)c[d].nodeName.toLowerCase()=="td"&&c[d].setStyle("background-color",b?"#ebfdd7":"")},hoverDiv:function(a,b){$(a).setStyle("background-color",b?"#ebfdd7":"")}};