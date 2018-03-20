/*
 * Convenience functions to search from different locations 
 */

/*
 * Invoke this function in the advanced search form's submit.
 * Determines the selected documentation set and invokes search 
 * function to search that documentation set. 
 */
function submitDocSearch() {
  var scope = "";
  var selElem = document.getElementById("docsets");
  for(i = 0; i < selElem.options.length; i++) {
    if(selElem.options[i].selected == true) {
        scope = selElem.options[i].value;
        break;
    }
  }
  search(scope);
}

/* Search function for landing page. 
 * search main or archive zip file depending on user selection
 */
 
function submitSearch() {
   search("");
}

/* Search function for Java DB 10.6.2.1 landing page. 
 * search docs relevant to JDK 6 version
 */

function submitSearchFor6() {
   search("/10.6.2.1");
}

/* Search function for Java DB 10.8.3.0 landing page. 
 * search docs relevant to JDK 7 version
 */

function submitSearchFor7() {
   search("/10.8.3.0");
}

/* Search function for Java DB 10.10.1.2 landing page. 
 * search docs relevant to JDK 8 version
 */

function submitSearchFor8() {
   search("/10.10.1.2");
}

/*
 * Core search function 
 */

function search(scope) {
	var sform = document.getElementById("searchForm");
	var srchelem = document.getElementById("searchField");
	var srchelemreal = document.getElementById("keywordreal");
	var srchval = srchelem.value;
	if (srchval.length == 0) {
	  return false;
	}
	var searchUrl = "url:/javadb" + scope;
	srchelemreal.value = srchval + " " + searchUrl;
	sform.action = "http://search.oracle.com/search/search";
	sform.method = "get";
	sform.target = "_top";
	sform.submit();
}
