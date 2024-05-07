const codeSnippets = [
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
          yarn: [
            '<span style="color: #8b8d98;">$</span> <span style="color: #5854c6;">yarn add</span> @workos-inc/node'
          ],
          ruby: [
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
          gradle: [
            '1 dependencies {',
            '2     implementation \'com.workos:workos:VERSION\'',
            '3 }'
          ],
          dotnet: [
            '<span style="color: #8b8d98;">$</span> nuget <span style="color: #5854c6;">install</span> WorkOS.net'
          ]
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
          ruby: [
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
          dotnet : [
            '<span style="color: #8b8d98;">1</span> WorkOS.<span style="color: #5854c6;">SetApiKey</span>("<span style="background-color: #ededf1; color: #2c333b; padding: 0.2%; border-radius: 5px;" onmouseover="this.style.textDecoration=\'underline\'; this.style.cursor=\'pointer\';" onmouseout="this.style.textDecoration=\'none\';">sk_example_123456789</span>");'
          ]
          // Add more languages and their respective lines of code
        },
    },
    { //* Request Response
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
          json: [
            '// testing'
          ]
        },
        apiEpxlainers: {
          listConnection: [
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
            'response: {',
            '    "data": list[dict],',
            '    "list_metadata": dict',
            '}'
          ],
          list_connections_python: [
            'sso.list_connections: (',
            '    connection_type: str | None',
            '    domain: str | None,',
            '    organization_id: str | None,',
            '    after: str | None,',
            '    before: str | None,',
            '    limit: int | None,',
            '    order: Order.Asc | Order.Desc | None',
            ') -> {',
            '    "data": list[dict],',
            '    "list_metadata": dict',
            '}'
          ],
          
        }
    }
      // Add more code snippets as needed
]

export default codeSnippets;