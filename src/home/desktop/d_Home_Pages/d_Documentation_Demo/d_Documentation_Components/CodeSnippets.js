const codeSnippets = [

      //! - - API REFERENCE - - !//
    { //* Install the WorkOS SDK 
      id: 0,
        title: "Install the WorkOS SDK",
        doubleHeaders: {
          javascript: [
            {lang1: "npm", lang2: "Yarn"},
          ],
          yarn: [
            {lang1: "npm", lang2: "Yarn"},
          ],
          ruby : [
            {lang1: "Terminal", lang2: "Bundler"}
          ],
          bundler: [
            {lang1: "Terminal", lang2: "Bundler"}
          ],
          java : [
            {lang1: "Maven", lang2: "Gradle"}
          ],
          gradle: [
            {lang1: "Maven", lang2: "Gradle"}
          ]
        },
        code: {
          javascript: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/node'
          ],
          npm: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/node'
          ],
          yarn: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">yarn add</span> @workos-inc/node'
          ],
          ruby: [
            '<span style="color: #8b8d98;">$</span> gem <span style="color: #5854c6;">install</span> workos'
          ],
          terminal: [
            '<span style="color: #8b8d98;">$</span> gem <span style="color: #5854c6;">install</span> workos'
          ],
          bundler: [
            '1 gem "workos"'
          ],
          python: [
            '<span style="color: #8b8d98;">$</span> pip <span style="color: #5854c6;">install</span> workos'
          ],
          go: [
            '<span style="color: #8b8d98;">$</span> go get -u github.com/workos/workos-go/...'
          ],
          php: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">composer</span> require workos/workos-php'
          ],
          laravel: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">composer</span> require workos/workos-php-laravel'
          ],
          java: [
            '<span style="color: #8b8d98;">1</span> <<span style="color: #0072dd;">dependency</span>>',
            '<span style="color: #8b8d98;">2</span>     &lt<span style="color: #0072dd;">groupId</span>&gtcom.workos&lt/<span style="color: #0072dd;">groupId</span>>',
            '<span style="color: #8b8d98;">3</span>     &lt<span style="color: #0072dd;">artifactId</span>&gtworkos&lt/<span style="color: #0072dd;">artifactId</span>>',
            '<span style="color: #8b8d98;">4</span>     &lt<span style="color: #0072dd;">version</span>&gt{version}&lt/<span style="color: #0072dd;">version</span>>',
            '<span style="color: #8b8d98;">5</span> &lt/<span style="color: #0072dd;">dependency</span>>'
          ],
          maven: [
            '<span style="color: #8b8d98;">1</span> <<span style="color: #0072dd;">dependency</span>>',
            '<span style="color: #8b8d98;">2</span>     &lt<span style="color: #0072dd;">groupId</span>&gtcom.workos&lt/<span style="color: #0072dd;">groupId</span>>',
            '<span style="color: #8b8d98;">3</span>     &lt<span style="color: #0072dd;">artifactId</span>&gtworkos&lt/<span style="color: #0072dd;">artifactId</span>>',
            '<span style="color: #8b8d98;">4</span>     &lt<span style="color: #0072dd;">version</span>&gt{version}&lt/<span style="color: #0072dd;">version</span>>',
            '<span style="color: #8b8d98;">5</span> &lt/<span style="color: #0072dd;">dependency</span>>'
          ],
          gradle: [
            '<span style="color: #8b8d98;">1</span> dependencies {',
            '<span style="color: #8b8d98;">2</span>     implementation <span style="color: #143465;">\'com.workos:workos:VERSION\'</span>',
            '<span style="color: #8b8d98;">3</span> }'
          ],
          dotnet: [
            '<span style="color: #8b8d98;">$</span> nuget <span style="color: #5854c6;">install</span> WorkOS.net'
          ],
        }
    },
    
    { //* Set API Key
        id: 1,
        title: "Set API Key",
        code: {
          curl: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">curl</span> https://api.workos.com/directories \\',
            '<span style="color: #8b8d98;">&gt</span>     --header <span style="color: #143465;">"Authorization: Bearer</span> <span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>',
          ],
          javascript: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
          ],
          npm: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
          ],
          yarn: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
          ],
          ruby: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure do <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span> \tconfig.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
          ],
          terminal: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure do <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span> \tconfig.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
          ],
          bundler: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure do <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span> \tconfig.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
          ],
          python: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> workos',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> workos.api_key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"'
          ],
          go : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">package</span> main',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> (',
            '<span style="color: #8b8d98;">4</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/audittrail"</span>',
            '<span style="color: #8b8d98;">5</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/directorysync"</span>',
            '<span style="color: #8b8d98;">6</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/organizations"</span>',
            '<span style="color: #8b8d98;">7</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/passwordless"</span>',
            '<span style="color: #8b8d98;">8</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/portal"</span>',
            '<span style="color: #8b8d98;">9</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/sso"</span>',
            '<span style="color: #8b8d98;">10</span> )',
            '<span style="color: #8b8d98;">11</span> ',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">func</span> <span style="color: #5854c6;">main</span>() {',
            '<span style="color: #8b8d98;">13</span> \t  sso.<span style="color: #5854c6;">Configure</span>(',
            '<span style="color: #8b8d98;">14</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>",',
            '<span style="color: #8b8d98;">15</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>",',
            '<span style="color: #8b8d98;">16</span> \t\t  <span style="color: #143465;">"https://foo-corp.com/redirect-uri"</span>,',
            '<span style="color: #8b8d98;">17</span> \t  )',
            '<span style="color: #8b8d98;">18</span> ',
            '<span style="color: #8b8d98;">19</span> \t  organizations.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">20</span> ',
            '<span style="color: #8b8d98;">21</span> \t  passwordless.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">22</span> ',
            '<span style="color: #8b8d98;">23</span> \t  directorysync.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">24</span> ',
            '<span style="color: #8b8d98;">25</span> \t  audittrail.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">26</span> ',
            '<span style="color: #8b8d98;">27</span> \t  portal.<span style="color: #5854c6;">SetAPIKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>")',
            '<span style="color: #8b8d98;">28</span> }',
          ],
          php : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          laravel : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          java : [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #5854c6;">WorkOS</span> work_os <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          maven: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #5854c6;">WorkOS</span> work_os <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          gradle: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #5854c6;">WorkOS</span> work_os <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          dotnet : [
            '<span style="color: #8b8d98;">1</span> WorkOS.<span style="color: #5854c6;">SetApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ],
          // Add more languages and their respective lines of code
        },
    },

    { //* Pagination
        id: 2,
        title: "Pagination",
        doubleHeaders: {
          javascript: [
            {lang1: "Request", lang2: "Response"},
          ],
          curl: [
            {lang1: "Request", lang2: "Response"},
          ],
          ruby: [
            {lang1: "Request", lang2: "Response"},
          ],
          python: [
            {lang1: "Request", lang2: "Response"},
          ],
          go: [
            {lang1: "Request", lang2: "Response"},
          ],
          php: [
            {lang1: "Request", lang2: "Response"},
          ],
          laravel: [
            {lang1: "Request", lang2: "Response"},
          ],
          java: [
            {lang1: "Request", lang2: "Response"},
          ],
          dotnet: [
            {lang1: "Request", lang2: "Response"},
          ],
          json: [
            {lang1: "Request", lang2: "Response"},
          ]
        },
        code: {
          curl: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">curl</span> https://api.workos.com/connections?limit<span style="color: #ce3559;">=</span><span style="color: #0072dd;">100</span> \\',
            '<span style="color: #8b8d98;">&gt</span>     --header <span style="color: #143465;">"Authorization: Bearer</span> <span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>'
          ],
          javascript: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">let</span> list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({ limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span> });',
            '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">let</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">let</span> after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">8</span> ',
            '<span style="color: #8b8d98;">9</span> <span style="color: #148a68;">while</span> (after) {',
            '<span style="color: #8b8d98;">10</span>     list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({',
            '<span style="color: #8b8d98;">11</span>         limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">12</span>         after<span style="color: #ce3559;">:</span> after,',
            '<span style="color: #8b8d98;">13</span>         order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span>,',
            '<span style="color: #8b8d98;">14</span>      )};',
            '<span style="color: #8b8d98;">15</span>      connections <span style="color: #ce3559;">=</span> connections.<span style="color: #5854c6;">concat</span>(list.data);',
            '<span style="color: #8b8d98;">16</span>      after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">17</span> };',
          ],
          npm: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">let</span> list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({ limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span> });',
            '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">let</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">let</span> after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">8</span> ',
            '<span style="color: #8b8d98;">9</span> <span style="color: #148a68;">while</span> (after) {',
            '<span style="color: #8b8d98;">10</span>     list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({',
            '<span style="color: #8b8d98;">11</span>         limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">12</span>         after<span style="color: #ce3559;">:</span> after,',
            '<span style="color: #8b8d98;">13</span>         order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span>,',
            '<span style="color: #8b8d98;">14</span>      )};',
            '<span style="color: #8b8d98;">15</span>      connections <span style="color: #ce3559;">=</span> connections.<span style="color: #5854c6;">concat</span>(list.data);',
            '<span style="color: #8b8d98;">16</span>      after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">17</span> };',
          ],
          yarn: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #148a68;">from</span>  <span style="color: #143465;">\'@workos-inc/node\'</span>;',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789"</span>\');',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">let</span> list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({ limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span> });',
            '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">let</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">let</span> after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">8</span> ',
            '<span style="color: #8b8d98;">9</span> <span style="color: #148a68;">while</span> (after) {',
            '<span style="color: #8b8d98;">10</span>     list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>({',
            '<span style="color: #8b8d98;">11</span>         limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">12</span>         after<span style="color: #ce3559;">:</span> after,',
            '<span style="color: #8b8d98;">13</span>         order<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'desc\'</span>,',
            '<span style="color: #8b8d98;">14</span>      )};',
            '<span style="color: #8b8d98;">15</span>      connections <span style="color: #ce3559;">=</span> connections.<span style="color: #5854c6;">concat</span>(list.data);',
            '<span style="color: #8b8d98;">16</span>      after <span style="color: #ce3559;">=</span> list.listMetadata.after;',
            '<span style="color: #8b8d98;">17</span> };',
          ],
          ruby: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure <span style="color: #148a68;">do</span> <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span>     config.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span> <span style="color: #ce3559;">=</span> WorkOS::<span style="color: #0072dd;">SSO</span>.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">8</span> connections <span style="color: #ce3559;">=</span> connections.data',
            '<span style="color: #8b8d98;">9</span> after <span style="color: #ce3559;">=</span> connections.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">10</span> ',
            '<span style="color: #8b8d98;">11</span> <span style="color: #148a68;">until</span> after.<span style="color: #148a68;">nil</span><span style="color: #ce3559;">?</span>',
            '<span style="color: #8b8d98;">12</span>     <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">current_page</span> <span style="color: #ce3559;">=</span> WorkOS::SSO.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(after<span style="color: #ce3559;">:</span> after, limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">13</span>     connections <span style="color: #ce3559;">=</span> connections.concat(current_page.data)',
            '<span style="color: #8b8d98;">14</span>     after <span style="color: #ce3559;">=</span> current_page.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">15</span> <span style="color: #148a68;">end</span>',
          ],
          terminal: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure <span style="color: #148a68;">do</span> <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span>     config.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span> <span style="color: #ce3559;">=</span> WorkOS::<span style="color: #0072dd;">SSO</span>.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">8</span> connections <span style="color: #ce3559;">=</span> connections.data',
            '<span style="color: #8b8d98;">9</span> after <span style="color: #ce3559;">=</span> connections.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">10</span> ',
            '<span style="color: #8b8d98;">11</span> <span style="color: #148a68;">until</span> after.<span style="color: #148a68;">nil</span><span style="color: #ce3559;">?</span>',
            '<span style="color: #8b8d98;">12</span>     <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">current_page</span> <span style="color: #ce3559;">=</span> WorkOS::SSO.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(after<span style="color: #ce3559;">:</span> after, limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">13</span>     connections <span style="color: #ce3559;">=</span> connections.concat(current_page.data)',
            '<span style="color: #8b8d98;">14</span>     after <span style="color: #ce3559;">=</span> current_page.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">15</span> <span style="color: #148a68;">end</span>',
          ],
          bundler: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">require</span> "workos"',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS.configure <span style="color: #148a68;">do</span> <span style="color: #ce3559;">|</span>config<span style="color: #ce3559;">|</span>',
            '<span style="color: #8b8d98;">4</span>     config.key <span style="color: #ce3559;">=</span> "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>"',
            '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">end</span>',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span> <span style="color: #ce3559;">=</span> WorkOS::<span style="color: #0072dd;">SSO</span>.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">8</span> connections <span style="color: #ce3559;">=</span> connections.data',
            '<span style="color: #8b8d98;">9</span> after <span style="color: #ce3559;">=</span> connections.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">10</span> ',
            '<span style="color: #8b8d98;">11</span> <span style="color: #148a68;">until</span> after.<span style="color: #148a68;">nil</span><span style="color: #ce3559;">?</span>',
            '<span style="color: #8b8d98;">12</span>     <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">current_page</span> <span style="color: #ce3559;">=</span> WorkOS::SSO.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(after<span style="color: #ce3559;">:</span> after, limit<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">13</span>     connections <span style="color: #ce3559;">=</span> connections.concat(current_page.data)',
            '<span style="color: #8b8d98;">14</span>     after <span style="color: #ce3559;">=</span> current_page.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_metadata</span>[<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">15</span> <span style="color: #148a68;">end</span>',
          ],
          python: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> workos',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">response</span> <span style="color: #ce3559;">=</span> workos.client.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">=</span><span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">=</span><span style="color: #143465;">"desc"</span>)',
            '<span style="color: #8b8d98;">4</span> connections <span style="color: #ce3559;">=</span> response[<span style="color: #143465;">"data"</span>]',
            '<span style="color: #8b8d98;">5</span> after <span style="color: #ce3559;">=</span> response[<span style="color: #143465;">"listMetadata"</span>][<span style="color: #143465;">"after"</span>]',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">while</span> after <span style="color: #148a68;">is not</span> <span style="color: #0072dd;">None</span>:',
            '<span style="color: #8b8d98;">8</span>    <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">response</span> <span style="color: #ce3559;">=</span> workos.client.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list_connections</span>(limit<span style="color: #ce3559;">=</span><span style="color: #0072dd;">100</span>, order<span style="color: #ce3559;">=</span><span style="color: #143465;">"desc"</span>, after<span style="color: #ce3559;">=</span>after)',
            '<span style="color: #8b8d98;">9</span>    <span style="color: #148a68;">for</span> i <span style="color: #148a68;">in</span> response[<span style="color: #143465;">"data"</span>]:',
            '<span style="color: #8b8d98;">10</span>       connections.append(i)',
            '<span style="color: #8b8d98;">11</span>   after <span style="color: #ce3559;">=</span> response[<span style="color: #143465;">"listMetadata"</span>][<span style="color: #143465;">"after"</span>]'
          ],
          go: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">package</span> main',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> (',
            '<span style="color: #8b8d98;">4</span> \t  <span style="color: #143465;">"context"</span>',
            '<span style="color: #8b8d98;">5</span> ',
            '<span style="color: #8b8d98;">6</span> \t  <span style="color: #143465;">"github.com/workos/workos-go/v3/pkg/sso"</span>',
            '<span style="color: #8b8d98;">7</span> )',
            '<span style="color: #8b8d98;">8</span> ',
            '<span style="color: #8b8d98;">9</span> <span style="color: #148a68;">func</span> <span style="color: #5854c6;">main</span>() {',
            '<span style="color: #8b8d98;">10</span> \t  sso.<span style="color: #5854c6;">Configure</span>(',
            '<span style="color: #8b8d98;">11</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>",',
            '<span style="color: #8b8d98;">12</span> \t\t  "<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789"</span>",',
            '<span style="color: #8b8d98;">13</span> \t  )',
            '<span style="color: #8b8d98;">14</span> ',
            '<span style="color: #8b8d98;">15</span> \t  <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span>, err <span style="color: #ce3559;">:=</span> sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(',
            '<span style="color: #8b8d98;">16</span> \t\t  context.<span style="color: #5854c6;">Background</span>(),',
            '<span style="color: #8b8d98;">17</span> \t\t  sso.ListConnectionsOpts{Limit: <span style="color: #0072dd;">100</span>, Order: <span style="color: #143465;">"desc"</span>},',
            '<span style="color: #8b8d98;">18</span> \t  )',
            '<span style="color: #8b8d98;">19</span> ',
            '<span style="color: #8b8d98;">20</span> \t  connections <span style="color: #ce3559;">:=</span> list.Data',
            '<span style="color: #8b8d98;">21</span> \t  after <span style="color: #ce3559;">:=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After',
            '<span style="color: #8b8d98;">22</span> ',
            '<span style="color: #8b8d98;">23</span> \t  <span style="color: #148a68;">for</span> len(before) > <span style="color: #0072dd;">0</span> {',
            '<span style="color: #8b8d98;">24</span> \t\t  <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">currentPage</span>, err <span style="color: #ce3559;">:=</span> sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(',
            '<span style="color: #8b8d98;">25</span> \t\t\t  context.<span style="color: #5854c6;">Background</span>(),',
            '<span style="color: #8b8d98;">26</span> \t\t\t  sso.ListConnectionsOpts{Limit: <span style="color: #0072dd;">100</span>, Order: <span style="color: #143465;">"desc"</span>, After: after},',
            '<span style="color: #8b8d98;">27</span> \t\t  )',
            '<span style="color: #8b8d98;">28</span> ',
            '<span style="color: #8b8d98;">29</span> \t\t  <span style="color: #148a68;">if</span> err <span style="color: #ce3559;">!=</span> <span style="color: #0072dd;">nil</span> {',
            '<span style="color: #8b8d98;">30</span> \t\t\t  <span style="color: #8b8d98;">// Handle the error...</span>',
            '<span style="color: #8b8d98;">31</span> \t\t\t  <span style="color: #148a68;">return</span>',
            '<span style="color: #8b8d98;">32</span> \t\t  }',
            '<span style="color: #8b8d98;">33</span> ',
            '<span style="color: #8b8d98;">34</span> \t\t  connections <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">append</span>(connections, currentPage.Data...)',
            '<span style="color: #8b8d98;">35</span> \t\t  after <span style="color: #ce3559;">=</span> currentPage.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After',
            '<span style="color: #8b8d98;">36</span> \t  }',
            '<span style="color: #8b8d98;">37</span> }',
          ],
          php: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> $sso <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>\\<span style="color: #5854c6;">SSO</span>();',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">8</span>     limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">9</span>     order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">10</span> )',
            '<span style="color: #8b8d98;">11</span> ',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">while</span> ($after) {',
            '<span style="color: #8b8d98;">3</span>     [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">14</span>         limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">15</span>         after: $after,',
            '<span style="color: #8b8d98;">16</span>         order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">17</span>    );',
            '<span style="color: #8b8d98;">18</span> ',
            '<span style="color: #8b8d98;">19</span>    $connections <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">array_merge</span>($connections, $currentPage);',
            '<span style="color: #8b8d98;">20</span> }'
          ],
          laravel: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">&lt?php</span>',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> WorkOS\\WorkOS::<span style="color: #5854c6;">setApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> $sso <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>\\<span style="color: #5854c6;">SSO</span>();',
            '<span style="color: #8b8d98;">6</span> ',
            '<span style="color: #8b8d98;">7</span> [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">8</span>     limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">9</span>     order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">10</span> )',
            '<span style="color: #8b8d98;">11</span> ',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">while</span> ($after) {',
            '<span style="color: #8b8d98;">3</span>     [$before, $after, $connections] <span style="color: #ce3559;">=</span> $sso<span style="color: #ce3559;">-></span><span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(',
            '<span style="color: #8b8d98;">14</span>         limit: <span style="color: #0072dd;">100</span>,',
            '<span style="color: #8b8d98;">15</span>         after: $after,',
            '<span style="color: #8b8d98;">16</span>         order: <span style="color: #143465;">"desc"</span>',
            '<span style="color: #8b8d98;">17</span>    );',
            '<span style="color: #8b8d98;">18</span> ',
            '<span style="color: #8b8d98;">19</span>    $connections <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">array_merge</span>($connections, $currentPage);',
            '<span style="color: #8b8d98;">20</span> }'
          ],
          java: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">SsoApi</span>.<span style="color: #5854c6;">ListConnectionsOptions</span>;',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">models</span>.<span style="color: #5854c6;">ConnectionList</span>;',
            '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">java</span>.<span style="color: #5854c6;">util</span>.<span style="color: #5854c6;">list</span>;',
            '<span style="color: #8b8d98;">5</span> ',
            '<span style="color: #8b8d98;">6</span> <span style="color: #5854c6;">ListConnectionsOptions</span> options <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">ListConnectionsOptions</span>();',
            '<span style="color: #8b8d98;">7</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"limit"</span>, <span style="color: #143465;">"100"</span>);',
            '<span style="color: #8b8d98;">8</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"order"</span>, <span style="color: #143465;">"desc"</span>);',
            '<span style="color: #8b8d98;">9</span> ',
            '<span style="color: #8b8d98;">10</span> <span style="color: #5854c6;">ConnectionList</span> list <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">11</span> <span style="color: #5854c6;">String</span> after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">12</span> <span style="color: #5854c6;">List</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">13</span> ',
            '<span style="color: #8b8d98;">14</span> <span style="color: #148a68;">while</span> (after <span style="color: #ce3559;">!=</span> <span style="color: #148a68;">null</span>) {',
            '<span style="color: #8b8d98;">15</span>     options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"after"</span>, <span style="color: #143465;">"after"</span>);',
            '<span style="color: #8b8d98;">16</span>     <span style="color: #5854c6;">ConnectionList</span> currentPage <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">17</span>     after <span style="color: #ce3559;">=</span> currentPage.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">18</span>     connections.add(currentPage.data);',
            '<span style="color: #8b8d98;">19</span> }'
          ],
          maven: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">SsoApi</span>.<span style="color: #5854c6;">ListConnectionsOptions</span>;',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">models</span>.<span style="color: #5854c6;">ConnectionList</span>;',
            '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">java</span>.<span style="color: #5854c6;">util</span>.<span style="color: #5854c6;">list</span>;',
            '<span style="color: #8b8d98;">5</span> ',
            '<span style="color: #8b8d98;">6</span> <span style="color: #5854c6;">ListConnectionsOptions</span> options <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">ListConnectionsOptions</span>();',
            '<span style="color: #8b8d98;">7</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"limit"</span>, <span style="color: #143465;">"100"</span>);',
            '<span style="color: #8b8d98;">8</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"order"</span>, <span style="color: #143465;">"desc"</span>);',
            '<span style="color: #8b8d98;">9</span> ',
            '<span style="color: #8b8d98;">10</span> <span style="color: #5854c6;">ConnectionList</span> list <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">11</span> <span style="color: #5854c6;">String</span> after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">12</span> <span style="color: #5854c6;">List</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">13</span> ',
            '<span style="color: #8b8d98;">14</span> <span style="color: #148a68;">while</span> (after <span style="color: #ce3559;">!=</span> <span style="color: #148a68;">null</span>) {',
            '<span style="color: #8b8d98;">15</span>     options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"after"</span>, <span style="color: #143465;">"after"</span>);',
            '<span style="color: #8b8d98;">16</span>     <span style="color: #5854c6;">ConnectionList</span> currentPage <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">17</span>     after <span style="color: #ce3559;">=</span> currentPage.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">18</span>     connections.add(currentPage.data);',
            '<span style="color: #8b8d98;">19</span> }'
          ],
          gradle: [
            '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">WorkOS</span>;',
            '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">SsoApi</span>.<span style="color: #5854c6;">ListConnectionsOptions</span>;',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">com</span>.<span style="color: #5854c6;">workos</span>.<span style="color: #5854c6;">sso</span>.<span style="color: #5854c6;">models</span>.<span style="color: #5854c6;">ConnectionList</span>;',
            '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">java</span>.<span style="color: #5854c6;">util</span>.<span style="color: #5854c6;">list</span>;',
            '<span style="color: #8b8d98;">5</span> ',
            '<span style="color: #8b8d98;">6</span> <span style="color: #5854c6;">ListConnectionsOptions</span> options <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">ListConnectionsOptions</span>();',
            '<span style="color: #8b8d98;">7</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"limit"</span>, <span style="color: #143465;">"100"</span>);',
            '<span style="color: #8b8d98;">8</span> options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"order"</span>, <span style="color: #143465;">"desc"</span>);',
            '<span style="color: #8b8d98;">9</span> ',
            '<span style="color: #8b8d98;">10</span> <span style="color: #5854c6;">ConnectionList</span> list <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">11</span> <span style="color: #5854c6;">String</span> after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">12</span> <span style="color: #5854c6;">List</span> connections <span style="color: #ce3559;">=</span> list.data;',
            '<span style="color: #8b8d98;">13</span> ',
            '<span style="color: #8b8d98;">14</span> <span style="color: #148a68;">while</span> (after <span style="color: #ce3559;">!=</span> <span style="color: #148a68;">null</span>) {',
            '<span style="color: #8b8d98;">15</span>     options.<span style="color: #5854c6;">put</span>(<span style="color: #143465;">"after"</span>, <span style="color: #143465;">"after"</span>);',
            '<span style="color: #8b8d98;">16</span>     <span style="color: #5854c6;">ConnectionList</span> currentPage <span style="color: #ce3559;">=</span> workos.sso.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listConnections</span>(options);',
            '<span style="color: #8b8d98;">17</span>     after <span style="color: #ce3559;">=</span> currentPage.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">listMetadata</span>.after;',
            '<span style="color: #8b8d98;">18</span>     connections.add(currentPage.data);',
            '<span style="color: #8b8d98;">19</span> }'
          ],
          dotnet: [
            '<span style="color: #8b8d98;">1</span> WorkOS.<span style="color: #5854c6;">SetApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");',
            '<span style="color: #8b8d98;">2</span> ',
            '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">var</span> ssoService <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">SSOService</span>();',
            '<span style="color: #8b8d98;">4</span> ',
            '<span style="color: #8b8d98;">5</span> <span style="color: #5854c6;">List</span><<span style="color: #148a68;">object</span>> connections <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">List</span><<span style="color: #148a68;">object</span>>();',
            '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">var</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">list</span> <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> ssoService.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(Limit <span style="color: #ce3559;">=</span> <span style="color: #0072dd;">100</span>, Order <span style="color: #ce3559;">=</span> \'desc\');',
            '<span style="color: #8b8d98;">7</span> ',
            '<span style="color: #8b8d98;">8</span> <span style="color: #148a68;">foreach</span> (<span style="color: #148a68;">object</span> i <span style="color: #148a68;">in</span> list.Data)',
            '<span style="color: #8b8d98;">9</span> {',
            '<span style="color: #8b8d98;">10</span>     connections.<span style="color: #5854c6;">Add</span>(i);',
            '<span style="color: #8b8d98;">11</span> };',
            '<span style="color: #8b8d98;">12</span> <span style="color: #148a68;">var</span> after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After;',
            '<span style="color: #8b8d98;">13</span> ',
            '<span style="color: #8b8d98;">14</span> <span style="color: #5854c6;">While</span>(after);',
            '<span style="color: #8b8d98;">15</span> {',
            '<span style="color: #8b8d98;">16</span>     list <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> ssoService.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListConnections</span>(After <span style="color: #ce3559;">=</span> after, Limit <span style="color: #ce3559;">=</span> <span style="color: #0072dd;">100</span>, Order <span style="color: #ce3559;">=</span> \'desc\');',
            '<span style="color: #8b8d98;">17</span>     <span style="color: #148a68;">foreach</span> (<span style="color: #148a68;">object</span> i <span style="color: #148a68;">in</span> list.Data)',
            '<span style="color: #8b8d98;">18</span>     {',
            '<span style="color: #8b8d98;">19</span>         connections.<span style="color: #5854c6;">Add</span>(i);',
            '<span style="color: #8b8d98;">20</span>     };',
            '<span style="color: #8b8d98;">21</span>     after <span style="color: #ce3559;">=</span> list.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">ListMetadata</span>.After;',
            '<span style="color: #8b8d98;">22</span> };'
          ],
          json: [
            '<span style="color: #8b8d98;">1</span> {',
            '<span style="color: #8b8d98;">2</span>   <span style="color: #0072dd;">"data"</span><span style="color: #ce3559;">:</span> [',
            '<span style="color: #8b8d98;">3</span>     {',
            '<span style="color: #8b8d98;">4</span>       <span style="color: #0072dd;">"object"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"connection"</span>,',
            '<span style="color: #8b8d98;">5</span>       <span style="color: #0072dd;">"id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"conn_01E4ZCR3C56J083X43JQXF3JK5"</span>,',
            '<span style="color: #8b8d98;">6</span>       <span style="color: #0072dd;">"organization_id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"org_01EHWNCE74X7JSDV0X3SZ3KJNY"</span>,',
            '<span style="color: #8b8d98;">7</span>       <span style="color: #0072dd;">"connection_type"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"GoogleOAuth"</span>,',
            '<span style="color: #8b8d98;">8</span>       <span style="color: #0072dd;">"name"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"Foo Corp"</span>,',
            '<span style="color: #8b8d98;">9</span>       <span style="color: #0072dd;">"state"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"active"</span>,',
            '<span style="color: #8b8d98;">10</span>      <span style="color: #0072dd;">"created_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:07:33.155Z"</span>,',
            '<span style="color: #8b8d98;">11</span>      <span style="color: #0072dd;">"updated_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:08:33.155Z"</span>',
            '<span style="color: #8b8d98;">12</span>    },',
            '<span style="color: #8b8d98;">13</span>    {',
            '<span style="color: #8b8d98;">14</span>      <span style="color: #0072dd;">"object"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"connection"</span>,',
            '<span style="color: #8b8d98;">15</span>      <span style="color: #0072dd;">"id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"conn_01E2NPPCT7XQ2MVVYDHWGK1WN4"</span>,',
            '<span style="color: #8b8d98;">16</span>      <span style="color: #0072dd;">"organization_id"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"org_01EHWNCE74X7JSDV0X3SZ3KJNY"</span>,',
            '<span style="color: #8b8d98;">17</span>      <span style="color: #0072dd;">"connection_type"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"OktaSAML"</span>,',
            '<span style="color: #8b8d98;">18</span>      <span style="color: #0072dd;">"name"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"Example Co"</span>,',
            '<span style="color: #8b8d98;">19</span>      <span style="color: #0072dd;">"state"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"active"</span>,',
            '<span style="color: #8b8d98;">20</span>      <span style="color: #0072dd;">"created_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:09:33.155Z"</span>,',
            '<span style="color: #8b8d98;">21</span>      <span style="color: #0072dd;">"updated_at"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"2021-06-25T19:10:33.155Z"</span>',
            '<span style="color: #8b8d98;">22</span>    },',
            '<span style="color: #8b8d98;">23</span>  ],',
            '<span style="color: #8b8d98;">24</span>  <span style="color: #0072dd;">"list_metadata"</span><span style="color: #ce3559;">:</span> {',
            '<span style="color: #8b8d98;">25</span>    <span style="color: #0072dd;">"before"</span><span style="color: #ce3559;">:</span> <span style="color: #143465;">"conn_01E2NPPCT7XQ2MVVYDHWGK1WN4"</span>,',
            '<span style="color: #8b8d98;">26</span>    <span style="color: #0072dd;">"after"</span><span style="color: #ce3559;">:</span> <span style="color: #148a68;">null</span>',
            '<span style="color: #8b8d98;">27</span>   }',
            '<span style="color: #8b8d98;">28</span> }',
          ]
        },
        apiEpxlainers: {
          listConnections_javascript: [
            'sso.<span style="color: #5854c6;">listConnections</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
            '    connectionType<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    domain<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    after<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    before<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
            '    limit<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">number</span>;',
            '    order<span style="color: #ce3559;">?:</span> <span style="color: #143465;">"asc"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"desc"</span>;',
            '}) <span style="color: #ce3559;">=&gt</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">[]</span>;',
            '    listMetadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">object</span>;',
            '}',
          ],
          list_ruby: [
            'list<span style="color: #ce3559;">:</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Array</span><span style="color: #ce3559;">[</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">]</span>,',
            '    list_metadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Hash</span>',
            '}'
          ],
          list_connections_ruby: [
            'SSO.<span style="color: #5854c6;">list_connections</span>(',
            '    <span style="color: #ce3559;">?</span>connection_type<span style="color: #ce3559;">:</span> String,',
            '    <span style="color: #ce3559;">?</span>domain<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>organization_id<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>after<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>before<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>limit<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Integer</span>,',
            '    <span style="color: #ce3559;">?</span>order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"asc"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"desc"</span>',
            ') <span style="color: #ce3559;">-&gt</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Array</span><span style="color: #ce3559;">[</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">]</span>,',
            '    list_metadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Hash</span>',
            '}'
          ],
          list_metadata_ruby: [
            '(',
            '    <span style="color: #ce3559;">?</span>before<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>after<span style="color: #ce3559;">:</span> <span style="color: #148a68;">String</span>,',
            '    <span style="color: #ce3559;">?</span>limit<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Integer</span>,',
            '    <span style="color: #ce3559;">?</span>order<span style="color: #ce3559;">:</span> <span style="color: #143465;">"asc"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"desc"</span>',
            ') <span style="color: #ce3559;">-&gt</span> void'
          ],
          current_page_ruby: [
            'current_page<span style="color: #ce3559;">:</span> {',
            '    data<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Array</span><span style="color: #ce3559;">[</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">]</span>,',
            '    list_metadata<span style="color: #ce3559;">:</span> <span style="color: #148a68;">Hash</span>',
            '}'
          ],
          response_python: [
            'response<span style="color: #ce3559;">:</span> {',
            '    "data"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">list</span><span style="color: #ce3559;">[</span><span style="color: #148a68;">dict</span><span style="color: #ce3559;">]</span>,',
            '    "list_metadata"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">dict</span>',
            '}'
          ],
          list_connections_python: [
            'sso.<span style="color: #5854c6;">list_connections</span><span style="color: #ce3559;">:</span> (',
            '    connection_type<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>',
            '    domain<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    organization_id<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    after<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    before<span style="color: #ce3559;">:</span> <span style="color: #148a68;">str</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    limit<span style="color: #ce3559;">:</span> <span style="color: #148a68;">int</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>,',
            '    order<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">Order.Asc</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">Order.Desc</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">None</span>',
            ') <span style="color: #ce3559;">-></span> {',
            '    "data"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">list</span><span style="color: #ce3559;">[</span><span style="color: #148a68;">dict</span><span style="color: #ce3559;">]</span>,',
            '    "list_metadata"<span style="color: #ce3559;">:</span> <span style="color: #148a68;">dict</span>',
            '}'
          ],
          list_go: [
            'list  <span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsResponse</span>{',
            '\t  Data <span style="color: #ce3559;">[]</span><span style="color: #148a68;">sso</span>.<span style="color: #148a68;">Connection</span>',
            '\t  ListMetadata <span style="color: #148a68;">common</span>.<span style="color: #148a68;">ListMetadata</span>',
            '}'
          ],
          ListConnections_go: [
            'sso.<span style="color: #5854c6;">ListConnections</span>(',
            '\t  ctx <span style="color: #148a68;">context</span>.<span style="color: #148a68;">Context</span>,',
            '\t  opts <span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsOpts</span>{',
            '\t\t  ConnectionType<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  Domain<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  OrganizationID<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  Limit<span style="color: #ce3559;">?</span> <span style="color: #148a68;">int</span>',
            '\t\t  Before<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  After<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t\t  Order<span style="color: #ce3559;">?</span> <span style="color: #148a68;">common</span<.<span style="color: #148a68;">Order</span>',
            '\t  }',
            ') (<span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsResponse</span>, <span style="color: #148a68;">error</span>)',
          ],
          ListMetadata_go: [
            '(',
            '\t  Before<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t  After<span style="color: #ce3559;">?</span> <span style="color: #148a68;">string</span>',
            '\t  Limit<span style="color: #ce3559;">?</span> <span style="color: #148a68;">int</span>',
            '\t  Order<span style="color: #ce3559;">?</span> <span style="color: #148a68;">common</span<.<span style="color: #148a68;">Order</span>',
            ')'
          ],
          currentPage_go: [
            'currentPage <span style="color: #148a68;">sso</span>.<span style="color: #148a68;">ListConnectionsResponse</span>{',
            '\t  Data <span style="color: #ce3559;">[]</span><span style="color: #148a68;">sso</span>.<span style="color: #148a68;">Connection</span>',
            '\t  ListMetadata <span style="color: #148a68;">common</span>.<span style="color: #148a68;">ListMetadata</span>',
            '}'
          ],
          listConnections_php: [
            '$sso<span style="color: #ce3559;">-></span><span style="color: #5854c6;">listConnections</span>(',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $connectionType,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $domain,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $organizationId,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">int</span> $limit,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $order "asc"<span style="color: #ce3559;">|</span>"desc"',
            ')<span style="color: #ce3559;">:</span> array <span style="color: #ce3559;">[</span>',
            '    <span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">[]</span> $data,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after',
            '<span style="color: #ce3559;">]</span>'
          ],
          listConnections_laravel: [
            '$sso<span style="color: #ce3559;">-></span><span style="color: #5854c6;">listConnections</span>(',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $connectionType,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $domain,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $organizationId,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">int</span> $limit,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $order "asc"<span style="color: #ce3559;">|</span>"desc"',
            ')<span style="color: #ce3559;">:</span> array <span style="color: #ce3559;">[</span>',
            '    <span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">[]</span> $data,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $before,',
            '    <span style="color: #ce3559;">?</span><span style="color: #148a68;">string</span> $after',
            '<span style="color: #ce3559;">]</span>'
          ],
          listConnections_java: [
            '<span style="color: #5854c6;">ConnectionList</span> sso.<span style="color: #5854c6;">listConnections</span>(<span style="color: #5854c6;">ListConnectionsOptions</span> options {',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> connectionType',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> domain',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> organizationId',
            '    <span style="color: #148a68;">Int</span><span style="color: #ce3559;">?</span> limit',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> before',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> after',
            '    <span style="color: #5854c6;">Order</span><span style="color: #ce3559;">?</span> order',
            '    <span style="color: #5854c6;">ListConnectionsOptionsBuilder</span> builder()',
            '})'
          ],
          listMetadata_java: [
            '<span style="color: #ce3559;">void</span> (',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> before,',
            '    <span style="color: #148a68;">String</span><span style="color: #ce3559;">?</span> after,',
            '    <span style="color: #148a68;">Int</span><span style="color: #ce3559;">?</span> limit,',
            '    <span style="color: #148a68;">Order</span><span style="color: #ce3559;">?</span> order',
            ')'
          ],
          ListConnections_dotnet: [
            '<span style="color: #5854c6;">Task</span><span style="color: #ce3559;"><</span><span style="color: #5854c6;">WorkOSList</span><span style="color: #ce3559;"><</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">>></span> ssoService.<span style="color: #5854c6;">ListConnections</span>(',
            '    <span style="color: #5854c6;">ListConnectionsOptions</span> options {',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Type;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Domain;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> OrganizationId;',
            '        <span style="color: #148a68;">int</span><span style="color: #ce3559;">?</span> Limit;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Before;',
            '        <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> After;',
            '        <span style="color: #5854c6;">PaginationOrder</span><span style="color: #ce3559;">?</span> Order;',
            '    },',
            '    <span style="color: #5854c6;">CancellationToken</span><span style="color: #ce3559;">?</span> cancellationToken',
            ')'
          ],
          ListMetadata_dotnet: [
            '<span style="color: #ce3559;">void</span> (',
            '    <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> Before,',
            '    <span style="color: #148a68;">string</span><span style="color: #ce3559;">?</span> After,',
            '    <span style="color: #148a68;">int</span><span style="color: #ce3559;">?</span> Limit,',
            '    <span style="color: #5854c6;">PaginationOrder</span><span style="color: #ce3559;">?</span> Order',
            ')'
          ],
          list_dotnet: [
            '<span style="color: #5854c6;">WorkOSList</span><span style="color: #ce3559;"><</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">></span> {',
            '    <span style="color: #5854c6;">List</span><span style="color: #ce3559;"><</span><span style="color: #5854c6;">Connection</span><span style="color: #ce3559;">></span> Data;',
            '   <span style="color: #5854c6;">ListMetadata</span> ListMetadata;',
            '}',
          ]
        }
    },

           //! - - USER MANAGEMENT - - !//
    { //* Install dependencies
      id: 3,
      title: "Install dependencies",
      doubleHeaders: {
        javascript: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ],
        nextjs: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ]
      },
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/node'
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/node'
        ],
        nextjs: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/authkit-nextjs'
        ],
        openssl: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">npm install</span> @workos-inc/authkit-nextjs'
        ]
      }
    },

    { //* Environment Variables (Node)
      id: 4,
      title: "Environment variables",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\''
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\''
        ],
        nextjs: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\''
        ],
        openssl: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\''
        ]
      }
    },

    { //* Environment Variables (Next.js)
      id: 5,
      title: "Environment variables",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"http://localhost:3000/callback"</span> <span style="color: #8b8d98;"># configured in the WorkOS dashboard</span>',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"&ltyour password&gt"</span> <span style="color: #8b8d98;"># generate a secure password here</span>'
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"http://localhost:3000/callback"</span> <span style="color: #8b8d98;"># configured in the WorkOS dashboard</span>',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"&ltyour password&gt"</span> <span style="color: #8b8d98;"># generate a secure password here</span>'
        ],
        openssl: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"http://localhost:3000/callback"</span> <span style="color: #8b8d98;"># configured in the WorkOS dashboard</span>',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"&ltyour password&gt"</span> <span style="color: #8b8d98;"># generate a secure password here</span>'
        ],
        nextjs: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"http://localhost:3000/callback"</span> <span style="color: #8b8d98;"># configured in the WorkOS dashboard</span>',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span><span style="color: #143465;">"&ltyour password&gt"</span> <span style="color: #8b8d98;"># generate a secure password here</span>'
        ]
      }
    },

    { //* Generate a strong password
      id: 6,
      title: "Generate a strong password",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> openssl rand -base64 <span style="color: #0072dd;">24</span>',
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">$</span> openssl rand -base64 <span style="color: #0072dd;">24</span>',
        ],
        openssl: [
          '<span style="color: #8b8d98;">$</span> openssl rand -base64 <span style="color: #0072dd;">24</span>',
        ],
        nextjs: [
          '<span style="color: #8b8d98;">$</span> openssl rand -base64 <span style="color: #0072dd;">24</span>',
        ]
      }
    },

    { //* Redirect users to AuthKit
      id: 7,
      title: "Redirect users to AuthKit",
      doubleHeaders: {
        javascript: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ],
        nextjs: [
          {lang1: "Node SDK", lang2: "Next.js"}
        ]
      },
      code: {
        javascript: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">const</span> express <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'express\'</span>);',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">const</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'@workos-inc/node\'</span>);',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">const</span> app <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">express</span>();',
          '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(process.env.<span style="color: #0072dd;">WORKOS_API_KEY</span>);',
          '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">const</span> clientId <span style="color: #ce3559;">=</span> process.env.<span style="color: #0072dd;">WORKOS_CLIENT_ID</span>;',
          '<span style="color: #8b8d98;">7</span> ',
          '<span style="color: #8b8d98;">8</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">9</span>   <span style="color: #148a68;">const</span> authorizationUrl <span style="color: #ce3559;">=</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">getAuthorizationUrl</span>({',
          '<span style="color: #8b8d98;">10</span>    <span style="color: #8b8d98;">// Specify that we\'d like AuthKit to handle the authentication flow</span>',
          '<span style="color: #8b8d98;">11</span>    provider<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'authkit\'</span>,',
          '<span style="color: #8b8d98;">12</span> ',
          '<span style="color: #8b8d98;">13</span>    <span style="color: #8b8d98;">// The callback endpoint that WorkOS will redirect to after a user authenticates</span>',
          '<span style="color: #8b8d98;">14</span>    redirectUri<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'http://localhost:3000/callback\'</span>,',
          '<span style="color: #8b8d98;">15</span>    clientId,',
          '<span style="color: #8b8d98;">16</span>   });',
          '<span style="color: #8b8d98;">17</span> ',
          '<span style="color: #8b8d98;">18</span>   <span style="color: #8b8d98;">// Redirect the user to the AuthKit sign-in page</span>',
          '<span style="color: #8b8d98;">19</span>   res.<span style="color: #5854c6;">redirect</span>(authorizationUrl);',
          '<span style="color: #8b8d98;">20</span> });',
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">const</span> express <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'express\'</span>);',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">const</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'@workos-inc/node\'</span>);',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">const</span> app <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">express</span>();',
          '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(process.env.<span style="color: #0072dd;">WORKOS_API_KEY</span>);',
          '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">const</span> clientId <span style="color: #ce3559;">=</span> process.env.<span style="color: #0072dd;">WORKOS_CLIENT_ID</span>;',
          '<span style="color: #8b8d98;">7</span> ',
          '<span style="color: #8b8d98;">8</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">9</span>   <span style="color: #148a68;">const</span> authorizationUrl <span style="color: #ce3559;">=</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">getAuthorizationUrl</span>({',
          '<span style="color: #8b8d98;">10</span>    <span style="color: #8b8d98;">// Specify that we\'d like AuthKit to handle the authentication flow</span>',
          '<span style="color: #8b8d98;">11</span>    provider<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'authkit\'</span>,',
          '<span style="color: #8b8d98;">12</span> ',
          '<span style="color: #8b8d98;">13</span>    <span style="color: #8b8d98;">// The callback endpoint that WorkOS will redirect to after a user authenticates</span>',
          '<span style="color: #8b8d98;">14</span>    redirectUri<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'http://localhost:3000/callback\'</span>,',
          '<span style="color: #8b8d98;">15</span>    clientId,',
          '<span style="color: #8b8d98;">16</span>   });',
          '<span style="color: #8b8d98;">17</span> ',
          '<span style="color: #8b8d98;">18</span>   <span style="color: #8b8d98;">// Redirect the user to the AuthKit sign-in page</span>',
          '<span style="color: #8b8d98;">19</span>   res.<span style="color: #5854c6;">redirect</span>(authorizationUrl);',
          '<span style="color: #8b8d98;">20</span> });',
        ],
        nextjs: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> <span style="color: #5854c6;">Link</span> <span style="color: #148a68;">from</span> <span style="color: #143465;">\'next/link\'</span>;',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> {',
          '<span style="color: #8b8d98;">3</span>   getSignInUrl,',
          '<span style="color: #8b8d98;">4</span>   getSignUpUrl,',
          '<span style="color: #8b8d98;">5</span>   getUser,',
          '<span style="color: #8b8d98;">6</span>   signOut,',
          '<span style="color: #8b8d98;">7</span> } <span style="color: #148a68;">from</span> <span style="color: #143465;">\'@workos-inc/authkit-nextjs\'</span>;',
          '<span style="color: #8b8d98;">8</span> ',
          '<span style="color: #8b8d98;">9</span> <span style="color: #148a68;">export default async function</span> <span style="color: #5854c6;">HomePage</span>() {',
          '<span style="color: #8b8d98;">10</span>   <span style="color: #8b8d98;">// Retrieves the user from the session or returns `null` if no user is signed in</span>',
          '<span style="color: #8b8d98;">11</span>   <span style="color: #148a68;">const</span> { user } <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">getUser</span>();',
          '<span style="color: #8b8d98;">12</span> ',
          '<span style="color: #8b8d98;">13</span>   <span style="color: #8b8d98;">// Get the URL to redirect the user to AuthKit to sign in</span>',
          '<span style="color: #8b8d98;">14</span>   <span style="color: #148a68;">const</span> signInUrl <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">getSignInUrl</span>();',
          '<span style="color: #8b8d98;">15</span> ',
          '<span style="color: #8b8d98;">16</span>   <span style="color: #8b8d98;">// Get the URL to redirect the user to AuthKit to sign up</span>',
          '<span style="color: #8b8d98;">17</span>   <span style="color: #148a68;">const</span> signUpUrl <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="color: #5854c6;">getSignUpUrl</span>();',
          '<span style="color: #8b8d98;">18</span>    ',
          '<span style="color: #8b8d98;">19</span>   <span style="color: #8b8d98;">/**</span>',
          '<span style="color: #8b8d98;">20</span>    <span style="color: #8b8d98;">* If a signed-in user is mandatory, you can use the `ensureSignedIn</span>',
          '<span style="color: #8b8d98;">21</span>    <span style="color: #8b8d98;">* configuration option. If logged out, the below will immediately redirect</span>',
          '<span style="color: #8b8d98;">22</span>    <span style="color: #8b8d98;">* the user to AuthKit. After signing in, the user will automatically</span>',
          '<span style="color: #8b8d98;">23</span>    <span style="color: #8b8d98;">* be redirected back to this page.</span>',
          '<span style="color: #8b8d98;">24</span>    <span style="color: #8b8d98;">* */</span>',
          '<span style="color: #8b8d98;">25</span>   <span style="color: #8b8d98;">// const { user } = await getUser({ ensureSignedIn: true });</span>',
          '<span style="color: #8b8d98;">26</span> ',
          '<span style="color: #8b8d98;">27</span>   <span style="color: #148a68;">if</span> (<span style="color: #ce3559;">!</span>user) {',
          '<span style="color: #8b8d98;">28</span>     <span style="color: #148a68;">return</span> (',
          '<span style="color: #8b8d98;">29</span>       <>',
          '<span style="color: #8b8d98;">30</span>         &lt<span style="color: #5854c6;">Link</span> href={signInUrl}&gtSign in&lt/<span style="color: #5854c6;">Link</span>&gt;',
          '<span style="color: #8b8d98;">31</span>         &lt<span style="color: #5854c6;">Link</span> href={signUpUrl}&gtSign up&lt/<span style="color: #5854c6;">Link</span>&gt;',
          '<span style="color: #8b8d98;">32</span>       &lt/&gt',
          '<span style="color: #8b8d98;">33</span>     );',
          '<span style="color: #8b8d98;">34</span>   }',
          '<span style="color: #8b8d98;">35</span> ',
          '<span style="color: #8b8d98;">36</span>   <span style="color: #148a68;">return</span> (',
          '<span style="color: #8b8d98;">37</span>     &lt<span style="color: #0072dd;">form</span>',
          '<span style="color: #8b8d98;">38</span>       action={<span style="color: #148a68;">async</span> () <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">39</span>         \'use server\';',
          '<span style="color: #8b8d98;">40</span>         <span style="color: #148a68;">await</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">signOut</span>();',
          '<span style="color: #8b8d98;">41</span>       }}',
          '<span style="color: #8b8d98;">42</span>     &gt',
          '<span style="color: #8b8d98;">43</span>       &lt<span style="color: #0072dd;">p</span>&gtWelcome back{user.firstName <span style="color: #ce3559;">&&</span> `, ${user.firstName}`}&lt/<span style="color: #0072dd;">p</span>&gt',
          '<span style="color: #8b8d98;">44</span>       &lt<span style="color: #0072dd;">button</span> type="<span style="color: #148a68;">submit</span>"&gtSign out&lt/<span style="color: #0072dd;">button</span>&gt',
          '<span style="color: #8b8d98;">45</span>     &lt/<span style="color: #0072dd;">form</span>&gt',
          '<span style="color: #8b8d98;">46</span>   );',
          '<span style="color: #8b8d98;">47</span> }',
        ]
      },
      apiEpxlainers: {
        getAuthorizationUrl_javascript: [
          'userManagement.<span style="color: #5854c6;">getAuthorizationUrl</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  redirectUri<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  connectionId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  provider<span style="color: #ce3559;">?:</span> <span style="color: #143465;">"authkit"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span>;',
          '  state<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  loginHint<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  domainHint<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  screenHint<span style="color: #ce3559;">?:</span> <span style="color: #143465;">"sign-up"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"sign-in"</span>;',
          '}) <span style="color: #ce3559;">=></span> <span style="color: #148a68;">string</span>',
        ],
        getUser_nextjs: [
          '<span style="color: #5854c6;">getUser</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  ensureSignedIn<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">boolean</span>;',
          '}) <span style="color: #ce3559;">=></span> <span style="color: #5854c6;">Promise</span><span style="color: #ce3559;"><</span><span style="color: #5854c6;">UserInfo</span> <span style="color: #ce3559;">|</span> <span style="color: #5854c6;">NoUserInfo</span><span style="color: #ce3559;">></span>'
        ],
        getSignInUrl_nextjs: [
          '<span style="color: #5854c6;">getSignInUrl</span><span style="color: #ce3559;">:</span> () <span style="color: #ce3559;">=></span> <span style="color: #5854c6;">Promise</span><span style="color: #ce3559;">&lt</span><span style="color: #148a68;">string</span><span style="color: #ce3559;">&gt</span>'
        ],
        signOut_nextjs: [
          '<span style="color: #5854c6;">signOut</span><span style="color: #ce3559;">:</span> () <span style="color: #ce3559;">=></span> <span style="color: #5854c6;">Promise</span><span style="color: #ce3559;">&ltvoid&gt</span>'
        ]
      }
    },

    { //* Callback endpoint
      id: 8,
      title: "Callback endpoint",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">const</span> express <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'express\'</span>);',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">const</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'@workos-inc/node\'</span>);',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">const</span> app <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">express</span>();',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(process.env.<span style="color: #0072dd;">WORKOS_API_KEY</span>);',
          '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">const</span> clientId <span style="color: #ce3559;">=</span> process.env.<span style="color: #0072dd;">WORKOS_CLIENT_ID</span>;',
          '<span style="color: #8b8d98;">8</span> ',
          '<span style="color: #8b8d98;">9</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">10</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">11</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">12</span> ',
          '<span style="color: #8b8d98;">13</span>   <span style="color: #148a68;">const</span> { <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">user</span> } <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authenticateWithCode</span>({',
          '<span style="color: #8b8d98;">14</span>     code,',
          '<span style="color: #8b8d98;">15</span>     clientId,',
          '<span style="color: #8b8d98;">16</span>   });',
          '<span style="color: #8b8d98;">17</span> ',
          '<span style="color: #8b8d98;">18</span>   <span style="color: #8b8d98;">// Use the information in `user` for further business logic.</span>',
          '<span style="color: #8b8d98;">19</span> ',
          '<span style="color: #8b8d98;">20</span>   <span style="color: #8b8d98;">// Redirect the user to the homepage</span>',
          '<span style="color: #8b8d98;">21</span>   res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/\'</span>);',
          '<span style="color: #8b8d98;">22</span> });',
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">const</span> express <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'express\'</span>);',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">const</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'@workos-inc/node\'</span>);',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">const</span> app <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">express</span>();',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(process.env.<span style="color: #0072dd;">WORKOS_API_KEY</span>);',
          '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">const</span> clientId <span style="color: #ce3559;">=</span> process.env.<span style="color: #0072dd;">WORKOS_CLIENT_ID</span>;',
          '<span style="color: #8b8d98;">8</span> ',
          '<span style="color: #8b8d98;">9</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">10</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">11</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">12</span> ',
          '<span style="color: #8b8d98;">13</span>   <span style="color: #148a68;">const</span> { <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">user</span> } <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authenticateWithCode</span>({',
          '<span style="color: #8b8d98;">14</span>     code,',
          '<span style="color: #8b8d98;">15</span>     clientId,',
          '<span style="color: #8b8d98;">16</span>   });',
          '<span style="color: #8b8d98;">17</span> ',
          '<span style="color: #8b8d98;">18</span>   <span style="color: #8b8d98;">// Use the information in `user` for further business logic.</span>',
          '<span style="color: #8b8d98;">19</span> ',
          '<span style="color: #8b8d98;">20</span>   <span style="color: #8b8d98;">// Redirect the user to the homepage</span>',
          '<span style="color: #8b8d98;">21</span>   res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/\'</span>);',
          '<span style="color: #8b8d98;">22</span> });',
        ],
        nextjs: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">const</span> express <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'express\'</span>);',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">const</span> { <span style="color: #5854c6;">WorkOS</span> } <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">require</span>(<span style="color: #143465;">\'@workos-inc/node\'</span>);',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> <span style="color: #148a68;">const</span> app <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">express</span>();',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> <span style="color: #148a68;">const</span> workos <span style="color: #ce3559;">=</span> <span style="color: #148a68;">new</span> <span style="color: #5854c6;">WorkOS</span>(process.env.<span style="color: #0072dd;">WORKOS_API_KEY</span>);',
          '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">const</span> clientId <span style="color: #ce3559;">=</span> process.env.<span style="color: #0072dd;">WORKOS_CLIENT_ID</span>;',
          '<span style="color: #8b8d98;">8</span> ',
          '<span style="color: #8b8d98;">9</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">10</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">11</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">12</span> ',
          '<span style="color: #8b8d98;">13</span>   <span style="color: #148a68;">const</span> { <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">user</span> } <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authenticateWithCode</span>({',
          '<span style="color: #8b8d98;">14</span>     code,',
          '<span style="color: #8b8d98;">15</span>     clientId,',
          '<span style="color: #8b8d98;">16</span>   });',
          '<span style="color: #8b8d98;">17</span> ',
          '<span style="color: #8b8d98;">18</span>   <span style="color: #8b8d98;">// Use the information in `user` for further business logic.</span>',
          '<span style="color: #8b8d98;">19</span> ',
          '<span style="color: #8b8d98;">20</span>   <span style="color: #8b8d98;">// Redirect the user to the homepage</span>',
          '<span style="color: #8b8d98;">21</span>   res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/\'</span>);',
          '<span style="color: #8b8d98;">22</span> });',
        ]
      },
      apiEpxlainers: {
        user_javascript: [
          '<span style="color: #148a68;">interface</span> <span style="color: #5854c6;">User</span> {',
          '  object<span style="color: #ce3559;">:</span> <span style="color: #143465;">"user"</span>;',
          '  id<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  email<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  firstName<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  lastName<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  emailVerified<span style="color: #ce3559;">:</span> <span style="color: #148a68;">boolean</span>;',
          '  profilePictureUrl<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  createdAt<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  updatedAt<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '}'
        ],
        user_nodesdk : [
          '<span style="color: #148a68;">interface</span> <span style="color: #5854c6;">User</span> {',
          '  object<span style="color: #ce3559;">:</span> <span style="color: #143465;">"user"</span>;',
          '  id<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  email<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  firstName<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  lastName<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  emailVerified<span style="color: #ce3559;">:</span> <span style="color: #148a68;">boolean</span>;',
          '  profilePictureUrl<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  createdAt<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  updatedAt<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '}'
        ],
        user_nextjs: [
          '<span style="color: #148a68;">interface</span> <span style="color: #5854c6;">User</span> {',
          '  object<span style="color: #ce3559;">:</span> <span style="color: #143465;">"user"</span>;',
          '  id<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  email<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  firstName<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  lastName<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  emailVerified<span style="color: #ce3559;">:</span> <span style="color: #148a68;">boolean</span>;',
          '  profilePictureUrl<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  createdAt<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  updatedAt<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '}'
        ],
        authenticateWithCode_javascript: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ],
        authenticateWithCode_nodesdk: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ],
        authenticateWithCode_nextjs: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ],
        authenticateWithCode_openssl: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ]
      }
    },

    { //* middleware.ts
      id: 9,
      title: "middleware.ts",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { authkitMiddleware } <span style="color: #148a68;">from</span> <span style="color: #143465;">\'@workos-inc/authkit-nextjs\'</span>;',
          '<span style="color: #8b8d98;">2</span> ',
          '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">export default</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authKitMiddleware</span>();',
          '<span style="color: #8b8d98;">4</span> ',
          '<span style="color: #8b8d98;">5</span> <span style="color: #8b8d98;">// Match against pages that require authentication</span>',
          '<span style="color: #8b8d98;">6</span> <span style="color: #8b8d98;">// Leave this out if you want authentication on every page in your application</span>',
          '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">export const</span> config <span style="color: #ce3559;">=</span> { matcher: [<span style="color: #143465;">\'/\'</span>] };'
        ],
        nextjs: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { authkitMiddleware } <span style="color: #148a68;">from</span> <span style="color: #143465;">\'@workos-inc/authkit-nextjs\'</span>;',
          '<span style="color: #8b8d98;">2</span> ',
          '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">export default</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authKitMiddleware</span>();',
          '<span style="color: #8b8d98;">4</span> ',
          '<span style="color: #8b8d98;">5</span> <span style="color: #8b8d98;">// Match against pages that require authentication</span>',
          '<span style="color: #8b8d98;">6</span> <span style="color: #8b8d98;">// Leave this out if you want authentication on every page in your application</span>',
          '<span style="color: #8b8d98;">7</span> <span style="color: #148a68;">export const</span> config <span style="color: #ce3559;">=</span> { matcher: [<span style="color: #143465;">\'/\'</span>] };'
        ]
      },
      apiEpxlainers: {
        authKitMiddleware_javascript: [
          '<span style="color: #5854c6;">authkitMiddleware</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  debug<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">boolean</span>;',
          '}) <span style="color: #ce3559;">=></span> <span style="color: #5854c6;">NextMiddleware</span>'
        ],
        authKitMiddleware_nextjs: [
          '<span style="color: #5854c6;">authkitMiddleware</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  debug<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">boolean</span>;',
          '}) <span style="color: #ce3559;">=></span> <span style="color: #5854c6;">NextMiddleware</span>'
        ]
      }
    },

    { //* /app/callback/route.ts
      id: 10,
      title: "/app/callback/route.ts",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { handleAuth } <span style="color: #148a68;">from</span> \'@workos-inc/authkit-nextjs\';',
          '<span style="color: #8b8d98;">2</span> ',
          '<span style="color: #8b8d98;">3</span> <span style="color: #8b8d98;">// Redirect the user to `/` after successful sign in</span>',
          '<span style="color: #8b8d98;">4</span> <span style="color: #8b8d98;">// The redirect can be customized: `handleAuth({ returnPathname: \'/foo\' })`</span>',
          '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">export const</span> <span style="color: #0072dd;">GET</span> <span style="color: #ce3559;">=</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">handleAuth</span>();',
        ],
        nextjs: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> { handleAuth } <span style="color: #148a68;">from</span> \'@workos-inc/authkit-nextjs\';',
          '<span style="color: #8b8d98;">2</span> ',
          '<span style="color: #8b8d98;">3</span> <span style="color: #8b8d98;">// Redirect the user to `/` after successful sign in</span>',
          '<span style="color: #8b8d98;">4</span> <span style="color: #8b8d98;">// The redirect can be customized: `handleAuth({ returnPathname: \'/foo\' })`</span>',
          '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">export const</span> <span style="color: #0072dd;">GET</span> <span style="color: #ce3559;">=</span> <span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">handleAuth</span>();',
        ]
      },
      apiEpxlainers: {
        handleAuth_javascript: [
          '<span style="color: #5854c6;">handleAuth</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  returnPathname<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> <span style="color: #5854c6;">Function</span>'
        ],
        handleAuth_nextjs: [
          '<span style="color: #5854c6;">handleAuth</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  returnPathname<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> <span style="color: #5854c6;">Function</span>'
        ]
      }
    },
    
    { //* Create a session password
      id: 11,
      title: "Create a session password",
      doubleHeaders: {
        javascript: [
          {lang1: "OpenSSL", lang2: "Node SDK"}
        ],
        openssl: [
          {lang1: "OpenSSL", lang2: "Node SDK"}
        ],
        nodesdk: [
          {lang1: "OpenSSL", lang2: "Node SDK"}
        ],
        nextjs: [
          {lang1: "OpenSSL", lang2: "Node SDK"}
        ]
      },
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> openssl rand -base64 <span style="color: #0072dd;">64</span>'
        ],
        openssl: [
          '<span style="color: #8b8d98;">$</span> openssl rand -base64 <span style="color: #0072dd;">64</span>'
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">node</span> -e <span style="color: #143465;">"console.log(require(\'crypto\').randomBytes(64).toString(\'base64\'));"</span>'
        ]
      }
    },

    { //* Environment Variables (Handling sessions manually)
      id: 12,
      title: "Environment variables",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<div style="background-color: #e6f7ed; border: 1px solid #c3e8d7;"><span style="color: #8b8d98;">></span> WORKOS_COOKIE_PASSWORD<span style="color: #ce3559;">=</span><span style="color: #143465;">\'&ltyour password&gt\'</span></div>'
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<div style="background-color: #e6f7ed; border: 1px solid #c3e8d7;"><span style="color: #8b8d98;">></span> WORKOS_COOKIE_PASSWORD<span style="color: #ce3559;">=</span><span style="color: #143465;">\'&ltyour password&gt\'</span></div>'
        ],
        nextjs: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<div style="background-color: #e6f7ed; border: 1px solid #c3e8d7;"><span style="color: #8b8d98;">></span> WORKOS_COOKIE_PASSWORD<span style="color: #ce3559;">=</span><span style="color: #143465;">\'&ltyour password&gt\'</span></div>'
        ],
        openssl: [
          '<span style="color: #8b8d98;">$</span> WORKOS_API_KEY<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> WORKOS_CLIENT_ID<span style="color: #ce3559;">=</span>\'<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">client_123456789</span>\'',
          '<span style="color: #8b8d98;">></span> ',
          '<div style="background-color: #e6f7ed; border: 1px solid #c3e8d7;"><span style="color: #8b8d98;">></span> WORKOS_COOKIE_PASSWORD<span style="color: #ce3559;">=</span><span style="color: #143465;">\'&ltyour password&gt\'</span></div>'
        ]
      }
    },

    { //* Encrypt session
      id: 13,
      title: "Encrypt session",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> cookieParser <span style="color: #148a68;">from</span> <span style="color: #143465;">\'cookie-parser\'</span>;',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> { sealData, unsealData } <span style="color: #148a68;">from</span> <span style="color: #143465;">\'iron-session\'</span>;',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> app.<span style="color: #5854c6;">use</span>(<span style="color: #5854c6;">cookieParser</span>());',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">7</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">8</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">9</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> { user, accessToken, refreshToken, impersonator } = </div>',
          '<span style="color: #8b8d98;">11</span>     <span style="color: #148a68;">await</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authenticateWithCode</span>({',
          '<span style="color: #8b8d98;">12</span>       code,',
          '<span style="color: #8b8d98;">13</span>       clientId,',
          '<span style="color: #8b8d98;">14</span>     });',
          '<span style="color: #8b8d98;">15</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// The refreshToken should never be accesible publicly,</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// hence why we encrypt it in the cookie session.</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Alternatively you could persist the refresh token in a backend database</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> encryptedSession <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="color: #5854c6;">sealData</span>(</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { accessToken, refreshToken, user, impersonator },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { password<span style="color: #ce3559;">:</span> process.env.<span style="color: #0072dd;">WORKOS_COOKIE_PASSWORD</span> },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   );</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span> </div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Store the session in a cookie</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   res.<span style="color: #5854c6;">cookie</span>(\'wos-session\', encryptedSession, {</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     path<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'/\'</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     httpOnly<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     secure<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     sameSite<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'lax\'</span>,</div>',
          '<div style="background-color: #e6f7ed; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   });</div>',
          '<span style="color: #8b8d98;">31</span> ',
          '<span style="color: #8b8d98;">32</span>   <span style="color: #8b8d98;">// Use the information in `user` for further business logic.</span>',
          '<span style="color: #8b8d98;">33</span> ',
          '<span style="color: #8b8d98;">34</span>   <span style="color: #8b8d98;">// Redirect the user to the homepage</span>',
          '<span style="color: #8b8d98;">35</span>   res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/\'</span>);',
          '<span style="color: #8b8d98;">36</span> });',
        ],
        nextjs: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> cookieParser <span style="color: #148a68;">from</span> <span style="color: #143465;">\'cookie-parser\'</span>;',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> { sealData, unsealData } <span style="color: #148a68;">from</span> <span style="color: #143465;">\'iron-session\'</span>;',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> app.<span style="color: #5854c6;">use</span>(<span style="color: #5854c6;">cookieParser</span>());',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">7</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">8</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">9</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> { user, accessToken, refreshToken, impersonator } = </div>',
          '<span style="color: #8b8d98;">11</span>     <span style="color: #148a68;">await</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authenticateWithCode</span>({',
          '<span style="color: #8b8d98;">12</span>       code,',
          '<span style="color: #8b8d98;">13</span>       clientId,',
          '<span style="color: #8b8d98;">14</span>     });',
          '<span style="color: #8b8d98;">15</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// The refreshToken should never be accesible publicly,</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// hence why we encrypt it in the cookie session.</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Alternatively you could persist the refresh token in a backend database</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> encryptedSession <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="color: #5854c6;">sealData</span>(</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { accessToken, refreshToken, user, impersonator },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { password<span style="color: #ce3559;">:</span> process.env.<span style="color: #0072dd;">WORKOS_COOKIE_PASSWORD</span> },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   );</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span> </div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Store the session in a cookie</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   res.<span style="color: #5854c6;">cookie</span>(\'wos-session\', encryptedSession, {</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     path<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'/\'</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     httpOnly<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     secure<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     sameSite<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'lax\'</span>,</div>',
          '<div style="background-color: #e6f7ed; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   });</div>',
          '<span style="color: #8b8d98;">31</span> ',
          '<span style="color: #8b8d98;">32</span>   <span style="color: #8b8d98;">// Use the information in `user` for further business logic.</span>',
          '<span style="color: #8b8d98;">33</span> ',
          '<span style="color: #8b8d98;">34</span>   <span style="color: #8b8d98;">// Redirect the user to the homepage</span>',
          '<span style="color: #8b8d98;">35</span>   res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/\'</span>);',
          '<span style="color: #8b8d98;">36</span> });',
        ],
        nodesdk: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> cookieParser <span style="color: #148a68;">from</span> <span style="color: #143465;">\'cookie-parser\'</span>;',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> { sealData, unsealData } <span style="color: #148a68;">from</span> <span style="color: #143465;">\'iron-session\'</span>;',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> app.<span style="color: #5854c6;">use</span>(<span style="color: #5854c6;">cookieParser</span>());',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">7</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">8</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">9</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> { user, accessToken, refreshToken, impersonator } = </div>',
          '<span style="color: #8b8d98;">11</span>     <span style="color: #148a68;">await</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authenticateWithCode</span>({',
          '<span style="color: #8b8d98;">12</span>       code,',
          '<span style="color: #8b8d98;">13</span>       clientId,',
          '<span style="color: #8b8d98;">14</span>     });',
          '<span style="color: #8b8d98;">15</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// The refreshToken should never be accesible publicly,</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// hence why we encrypt it in the cookie session.</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Alternatively you could persist the refresh token in a backend database</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> encryptedSession <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="color: #5854c6;">sealData</span>(</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { accessToken, refreshToken, user, impersonator },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { password<span style="color: #ce3559;">:</span> process.env.<span style="color: #0072dd;">WORKOS_COOKIE_PASSWORD</span> },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   );</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span> </div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Store the session in a cookie</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   res.<span style="color: #5854c6;">cookie</span>(\'wos-session\', encryptedSession, {</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     path<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'/\'</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     httpOnly<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     secure<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     sameSite<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'lax\'</span>,</div>',
          '<div style="background-color: #e6f7ed; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   });</div>',
          '<span style="color: #8b8d98;">31</span> ',
          '<span style="color: #8b8d98;">32</span>   <span style="color: #8b8d98;">// Use the information in `user` for further business logic.</span>',
          '<span style="color: #8b8d98;">33</span> ',
          '<span style="color: #8b8d98;">34</span>   <span style="color: #8b8d98;">// Redirect the user to the homepage</span>',
          '<span style="color: #8b8d98;">35</span>   res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/\'</span>);',
          '<span style="color: #8b8d98;">36</span> });',
        ],
        openssl: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #148a68;">import</span> cookieParser <span style="color: #148a68;">from</span> <span style="color: #143465;">\'cookie-parser\'</span>;',
          '<span style="color: #8b8d98;">2</span> <span style="color: #148a68;">import</span> { sealData, unsealData } <span style="color: #148a68;">from</span> <span style="color: #143465;">\'iron-session\'</span>;',
          '<span style="color: #8b8d98;">3</span> ',
          '<span style="color: #8b8d98;">4</span> app.<span style="color: #5854c6;">use</span>(<span style="color: #5854c6;">cookieParser</span>());',
          '<span style="color: #8b8d98;">5</span> ',
          '<span style="color: #8b8d98;">6</span> app.<span style="color: #5854c6;">get</span>(<span style="color: #143465;">\'/callback\'</span>, <span style="color: #148a68;">async</span> (req, res) <span style="color: #ce3559;">=></span> {',
          '<span style="color: #8b8d98;">7</span>   <span style="color: #8b8d98;">// The authorization code returned by AuthKit</span>',
          '<span style="color: #8b8d98;">8</span>   <span style="color: #148a68;">const</span> code <span style="color: #ce3559;">=</span> req.query.code;',
          '<span style="color: #8b8d98;">9</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> { user, accessToken, refreshToken, impersonator } = </div>',
          '<span style="color: #8b8d98;">11</span>     <span style="color: #148a68;">await</span> workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">authenticateWithCode</span>({',
          '<span style="color: #8b8d98;">12</span>       code,',
          '<span style="color: #8b8d98;">13</span>       clientId,',
          '<span style="color: #8b8d98;">14</span>     });',
          '<span style="color: #8b8d98;">15</span> ',
          '<div style="background-color: #e6f7ed; border-top: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// The refreshToken should never be accesible publicly,</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// hence why we encrypt it in the cookie session.</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Alternatively you could persist the refresh token in a backend database</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #148a68;">const</span> encryptedSession <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="color: #5854c6;">sealData</span>(</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { accessToken, refreshToken, user, impersonator },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     { password<span style="color: #ce3559;">:</span> process.env.<span style="color: #0072dd;">WORKOS_COOKIE_PASSWORD</span> },</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   );</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span> </div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   <span style="color: #8b8d98;">// Store the session in a cookie</span></div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>   res.<span style="color: #5854c6;">cookie</span>(\'wos-session\', encryptedSession, {</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     path<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'/\'</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     httpOnly<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     secure<span style="color: #ce3559;">:</span> <span style="color: #0072dd;">true</span>,</div>',
          '<div style="background-color: #e6f7ed;"><span style="color: #8b8d98;">+</span>     sameSite<span style="color: #ce3559;">:</span> <span style="color: #143465;">\'lax\'</span>,</div>',
          '<div style="background-color: #e6f7ed; border-bottom: 1px solid #c3e8d7;"><span style="color: #8b8d98;">+</span>   });</div>',
          '<span style="color: #8b8d98;">31</span> ',
          '<span style="color: #8b8d98;">32</span>   <span style="color: #8b8d98;">// Use the information in `user` for further business logic.</span>',
          '<span style="color: #8b8d98;">33</span> ',
          '<span style="color: #8b8d98;">34</span>   <span style="color: #8b8d98;">// Redirect the user to the homepage</span>',
          '<span style="color: #8b8d98;">35</span>   res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/\'</span>);',
          '<span style="color: #8b8d98;">36</span> });',
        ]
      },
      apiEpxlainers: {
        authenticateWithCode_javascript: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ],
        authenticateWithCode_nodesdk: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ],
        authenticateWithCode_nextjs: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ],
        authenticateWithCode_openssl: [
          'userManagement.<span style="color: #5854c6;">authenticateWithCode</span><span style="color: #ce3559;">:</span> (options<span style="color: #ce3559;">:</span> {',
          '  clientId<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  code<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  invitationCode<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  ipAddress<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  userAgent<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '}) <span style="color: #ce3559;">=></span> {',
          '  user<span style="color: #ce3559;">:</span> <span style="color: #5854c6;">User</span>;',
          '  organizationId<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">string</span>;',
          '  accessToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  refreshToken<span style="color: #ce3559;">:</span> <span style="color: #148a68;">string</span>;',
          '  authenticationMethod<span style="color: #ce3559;">:</span> <span style="color: #143465;">"SSO"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Password"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GitHubOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"GoogleOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MicrosoftOAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"MagicAuth"</span> <span style="color: #ce3559;">|</span> <span style="color: #143465;">"Impersonation"</span>;',
          '  impersonator<span style="color: #ce3559;">?:</span> <span style="color: #148a68;">object</span>;',
          '}'
        ]
      }
    },

    { //* Secure route with middleware
      id: 14,
      title: "Secure route with middleware",
      code: {
        javascript: [
          '<span style="color: #8b8d98;">1</span> <span style="color: #8b8d98;">// Javascript Object Signing and Encryption (JOSE)</span>',
          '<span style="color: #8b8d98;">2</span> <span style="color: #8b8d98;">// https://www.npmjs.com/package/jose</span>',
          '<span style="color: #8b8d98;">3</span> <span style="color: #148a68;">import</span> { createRemoteJWKSet, jwtVerify } from <span style="color: #143465;">\'jose\'</span>;',
          '<span style="color: #8b8d98;">4</span> ',
          '<span style="color: #8b8d98;">5</span> <span style="color: #148a68;">const</span< clientId <span style="color: #ce3559;">=</span> process.env.<span style="color: #0072dd;">WORKOS_CLIENT_ID</span>;',
          '<span style="color: #8b8d98;">6</span> ',
          '<span style="color: #8b8d98;">7</span> <span style="color: #8b8d98;">// Set the JWKS URL. This is used to verify if the JWT is still valid</span>',
          '<span style="color: #8b8d98;">8</span> <span style="color: #148a68;">const</span> <span style="color: #0072dd;">JWKS</span> <span style="color: #ce3559;">=</span> <span style="color: #5854c6;">createRemoteJWKSet</span>(',
          '<span style="color: #8b8d98;">9</span>   <span style="color: #148a68;">new</span> <span style="color: #5854c6;">URL</span>(workos.userManagement.<span style="background-color: #f5f5ff; color: #6e6bce; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">getJwksUrl</span>(clientId)),',
          '<span style="color: #8b8d98;">10</span> );',
          '<span style="color: #8b8d98;">11</span> ',
          '<span style="color: #8b8d98;">12</span> <span style="color: #8b8d98;">// Auth middleware function</span>',
          '<span style="color: #8b8d98;">13</span> <span style="color: #148a68;">async function</span> <span style="color: #5854c6;">withAuth</span>(req, res, next) {',
          '<span style="color: #8b8d98;">14</span>   <span style="color: #8b8d98;">// First, attempt to get the session from the cookie</span>',
          '<span style="color: #8b8d98;">15</span>   <span style="color: #148a68;">const</span> session <span style="color: #ce3559;">=</span> <span style="color: #148a68;">await</span> <span style="color: #5854c6;">getSessionFromCookie</span>>req.cookies);',
          '<span style="color: #8b8d98;">16</span> ',
          '<span style="color: #8b8d98;">17</span>   <span style="color: #8b8d98;">// If no session, redirect the user to the login page</span>',
          '<span style="color: #8b8d98;">18</span>   <span style="color: #148a68;">if</span> (<span style="color: #ce3559;">!</span>session) {',
          '<span style="color: #8b8d98;">19</span>     <span style="color: #148a68;">return</span> res.<span style="color: #5854c6;">redirect</span>(<span style="color: #143465;">\'/login\'</span>);',
          '<span style="color: #8b8d98;">20</span>   }',
          '<span style="color: #8b8d98;">21</span> ',
          '<span style="color: #8b8d98;">22</span> ',
          '<span style="color: #8b8d98;">23</span> ',
          '<span style="color: #8b8d98;">24</span> ',
          '<span style="color: #8b8d98;">25</span> ',
          '<span style="color: #8b8d98;">26</span> ',
          '<span style="color: #8b8d98;">27</span> ',
          '<span style="color: #8b8d98;">28</span> ',
          '<span style="color: #8b8d98;">29</span> ',
          '<span style="color: #8b8d98;">30</span> ',
          '<span style="color: #8b8d98;">31</span> ',
          '<span style="color: #8b8d98;">32</span> ',
          '<span style="color: #8b8d98;">33</span> ',
          '<span style="color: #8b8d98;">34</span> ',
          '<span style="color: #8b8d98;">35</span> ',
          '<span style="color: #8b8d98;">36</span> ',
          '<span style="color: #8b8d98;">37</span> ',
          '<span style="color: #8b8d98;">38</span> ',
          '<span style="color: #8b8d98;">39</span> ',
          '<span style="color: #8b8d98;">40</span> ',
          '<span style="color: #8b8d98;">41</span> ',
          '<span style="color: #8b8d98;">42</span> ',
          '<span style="color: #8b8d98;">43</span> ',
          '<span style="color: #8b8d98;">44</span> ',
          '<span style="color: #8b8d98;">45</span> ',
          '<span style="color: #8b8d98;">46</span> ',
          '<span style="color: #8b8d98;">47</span> ',
          '<span style="color: #8b8d98;">48</span> ',
          '<span style="color: #8b8d98;">49</span> ',
          '<span style="color: #8b8d98;">50</span> ',
          '<span style="color: #8b8d98;">50</span> ',
          '<span style="color: #8b8d98;">51</span> ',
          '<span style="color: #8b8d98;">52</span> ',
          '<span style="color: #8b8d98;">53</span> ',
          '<span style="color: #8b8d98;">54</span> ',
          '<span style="color: #8b8d98;">55</span> ',
          '<span style="color: #8b8d98;">56</span> ',
          '<span style="color: #8b8d98;">57</span> ',
          '<span style="color: #8b8d98;">58</span> ',
          '<span style="color: #8b8d98;">59</span> ',
          '<span style="color: #8b8d98;">60</span> ',
          '<span style="color: #8b8d98;">61</span> ',
          '<span style="color: #8b8d98;">62</span> ',
          '<span style="color: #8b8d98;">63</span> ',
          '<span style="color: #8b8d98;">64</span> ',
          '<span style="color: #8b8d98;">65</span> ',
          '<span style="color: #8b8d98;">66</span> ',
          '<span style="color: #8b8d98;">67</span> ',
          '<span style="color: #8b8d98;">68</span> ',
          '<span style="color: #8b8d98;">69</span> ',
          '<span style="color: #8b8d98;">70</span> ',
          '<span style="color: #8b8d98;">71</span> ',
          '<span style="color: #8b8d98;">72</span> ',
          '<span style="color: #8b8d98;">73</span> ',
          '<span style="color: #8b8d98;">74</span> ',
          '<span style="color: #8b8d98;">75</span> ',
          '<span style="color: #8b8d98;">76</span> ',
          '<span style="color: #8b8d98;">77</span> ',
          '<span style="color: #8b8d98;">78</span> ',
          '<span style="color: #8b8d98;">79</span> ',
          '<span style="color: #8b8d98;">80</span> ',
          '<span style="color: #8b8d98;">81</span> ',
          '<span style="color: #8b8d98;">82</span> ',
          '<span style="color: #8b8d98;">83</span> ',
          '<span style="color: #8b8d98;">84</span> ',
          '<span style="color: #8b8d98;">85</span> ',
        ]
      }
    }
]

export default codeSnippets;

