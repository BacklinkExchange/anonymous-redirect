<script>
		function isValidUrl(url) {
			// Regular expression to validate URL
			var pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
			return pattern.test(url);
		}
        
		function getParameterStringFromURL() {
			const urlObj = new URL(window.location.href);
			const params = urlObj.searchParams;
			if (params &amp;&amp; params !== &quot;&quot;) {
                //const parameterString = decodeURIComponent(Array.from(params).map(([key, value]) =&gt; `${key}=${value}`).join(&#39;&amp;&#39;));
				var parameterString = window.location.search;
				var parameterStringWithoutQuestionMark = parameterString.substring(1);

                return decodeURIComponent(parameterStringWithoutQuestionMark);
            }
		}
  
        function redirectToUrl() {
            var redirectUrl = document.getElementById(&quot;urlInput&quot;).value;
            if (redirectUrl &amp;&amp; redirectUrl !== &quot;&quot;) {
				if (isValidUrl(redirectUrl)) {
					var newUrl = window.location.protocol + &quot;//&quot; + window.location.host + &quot;/?&quot; + redirectUrl;
					//var newUrl = window.location.href.split(&quot;?&quot;)[0] + &quot;?&quot; + redirectUrl;
					document.getElementById(&quot;newUrl&quot;).value = newUrl;
				}else {
					document.getElementById(&quot;newUrl&quot;).value = &quot;Invalid URL&quot;;
				}
            }
        }

            var redirectUrl = getParameterStringFromURL();
            if (redirectUrl &amp;&amp; redirectUrl !== &quot;&quot;) {
				if (isValidUrl(redirectUrl)) {
					window.location.href = redirectUrl;
				}else {
					document.getElementById(&quot;newUrl&quot;).value = &quot;Invalid URL&quot;;
				}
            }
			
			
			
		function copyText() {
            var copyText = document.getElementById(&quot;newUrl&quot;);
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
            document.execCommand(&quot;copy&quot;);
        }
</script>
